import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { processEmailDispatch } from './server/emailHandler.ts'

function emailApiPlugin(): Plugin {
  return {
    name: 'vite-plugin-email-api',
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString()
          })
          req.on('end', async () => {
            try {
              const payload = JSON.parse(body)
              const result = await processEmailDispatch(payload)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify(result))
            } catch (err: any) {
              console.error('[EmailApiPlugin Error]:', err)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 500
              res.end(JSON.stringify({ success: false, error: err.message || 'Internal error' }))
            }
          })
        } else {
          res.statusCode = 405
          res.end('Method Not Allowed')
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/send-email', async (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: Buffer) => {
            body += chunk.toString()
          })
          req.on('end', async () => {
            try {
              const payload = JSON.parse(body)
              const result = await processEmailDispatch(payload)
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify(result))
            } catch (err: any) {
              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 500
              res.end(JSON.stringify({ success: false, error: err.message || 'Internal error' }))
            }
          })
        } else {
          res.statusCode = 405
          res.end('Method Not Allowed')
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), emailApiPlugin()],
    define: {
      'process.env.SMTP_SERVER': JSON.stringify(env.SMTP_SERVER || 'smtp.gmail.com'),
      'process.env.SMTP_PORT': JSON.stringify(env.SMTP_PORT || '465'),
      'process.env.SMTP_SECURE': JSON.stringify(env.SMTP_SECURE || 'true'),
      'process.env.SMTP_USERNAME': JSON.stringify(env.SMTP_USERNAME || 'malinks016@gmail.com'),
      'process.env.SMTP_PASSWORD': JSON.stringify(env.SMTP_PASSWORD || 'adetarrvtgbocamk'),
      'process.env.SMTP_SENDER': JSON.stringify(env.SMTP_SENDER || 'malinks016@gmail.com'),
    },
    server: {
      allowedHosts: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@data": path.resolve(__dirname, "./data"),
      },
    },
  }
})


