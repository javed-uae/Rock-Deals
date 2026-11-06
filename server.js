import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// AI Studio reverse proxy routes external traffic to port 3000
const PORT = 3000;
const distPath = path.join(__dirname, 'dist');

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
  console.log(`Rock Deals production server listening on 0.0.0.0:${PORT}`);
});
