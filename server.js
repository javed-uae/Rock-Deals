import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// In Cloud Run production deployment, Cloud Run injects process.env.PORT. Fallback to 3000 for local preview.
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const distPath = path.join(__dirname, 'dist');

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from dist
app.use(express.static(distPath, {
  maxAge: '1y',
  etag: true,
}));

// Fallback to index.html for SPA navigation
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send('App is building. Please refresh in a moment.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rock Deals server listening on 0.0.0.0:${PORT}`);
});
