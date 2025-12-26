import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  // Dev server middleware to emulate serverless /api routes locally
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      try {
        if (req.method === 'POST' && req.url && req.url.startsWith('/api/geminiProxy')) {
          // collect raw body
          let body = '';
          for await (const chunk of req) body += chunk;
          try { req.body = body ? JSON.parse(body) : {}; } catch (e) { req.body = {}; }

          const modPath = path.resolve(__dirname, 'api', 'geminiProxy.js');
          const mod = await import(modPath);
          const handler = mod.default || mod.handler;
          if (typeof handler === 'function') {
            await handler(req, res);
            return;
          }
        }
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: String(err) }));
        return;
      }
      next();
    });
  }

})