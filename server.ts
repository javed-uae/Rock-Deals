import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  // Body parsers for large image uploads (base64)
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  /**
   * Gemini Interactions API Video Generation Endpoint
   * Model: gemini-omni-1.2-flash
   * Supports: aspect_ratio '16:9' or '9:16'
   */
  app.post('/api/animate-video', async (req, res) => {
    try {
      const { image, mimeType = 'image/jpeg', aspectRatio = '16:9', prompt } = req.body;

      if (!image) {
        return res.status(400).json({ success: false, error: 'MISSING_IMAGE', message: 'Image data is required.' });
      }

      // Strip data URL prefix if present
      const cleanBase64 = image.includes(';base64,') 
        ? image.split(';base64,')[1] 
        : image;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn('GEMINI_API_KEY not found in environment.');
        return res.status(400).json({ 
          success: false, 
          error: 'MISSING_API_KEY', 
          message: 'GEMINI_API_KEY is not configured on the server. Please configure your key in AI Studio Secrets.' 
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      console.log(`Starting video animation with gemini-omni-1.2-flash in ${aspectRatio}...`);

      const interaction = await ai.interactions.create({
        model: 'gemini-omni-1.2-flash',
        input: [
          {
            type: 'image',
            mime_type: mimeType,
            data: cleanBase64,
          },
          {
            type: 'text',
            text: prompt || 'Gentle cinematic motion, architectural camera glide, luxury lighting, subtle breeze and ambient reflections',
          }
        ],
        background: false,
        store: false,
        stream: false,
        response_format: {
          type: 'video',
          aspect_ratio: aspectRatio === '9:16' ? '9:16' : '16:9',
        }
      }, { timeout: 300000 });

      const videoPart = interaction.output_video;
      if (videoPart && videoPart.data) {
        const mime = videoPart.mime_type || 'video/mp4';
        return res.json({
          success: true,
          videoUrl: `data:${mime};base64,${videoPart.data}`,
          aspectRatio,
          duration: '10s'
        });
      }

      return res.status(500).json({
        success: false,
        error: 'NO_VIDEO_OUTPUT',
        message: 'Video was not generated in model output.'
      });
    } catch (err: any) {
      console.error('Error generating video with gemini-omni-1.2-flash:', err);
      return res.status(500).json({
        success: false,
        error: 'GENERATION_ERROR',
        message: err.message || 'Failed to generate video with gemini-omni-1.2-flash'
      });
    }
  });

  if (!isProduction) {
    // In development mode, mount Vite middlewares
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production mode, serve compiled dist
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath, { maxAge: '1y', etag: true }));
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(200).send('App is building. Please refresh in a moment.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Rock Deals server listening on 0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
