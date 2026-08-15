import type { IncomingMessage, ServerResponse } from 'http';
import { processEmailDispatch } from '../server/emailHandler.ts';

/**
 * Vercel Serverless Function Handler for /api/send-email
 */
export default async function handler(
  req: IncomingMessage & { body?: any; query?: any },
  res: ServerResponse & { status?: (code: number) => any; json?: (data: any) => any }
) {
  // Setup helper methods if not present
  const sendJson = (statusCode: number, data: any) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  };

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    return sendJson(405, { success: false, error: 'Method Not Allowed' });
  }

  try {
    let payload = req.body;

    // Handle stream parsing if body is not parsed by runtime
    if (!payload || typeof payload === 'string') {
      if (typeof payload === 'string' && payload.trim().length > 0) {
        try {
          payload = JSON.parse(payload);
        } catch {
          // Keep raw if parse fails
        }
      } else {
        payload = await new Promise((resolve, reject) => {
          let rawData = '';
          req.on('data', (chunk: Buffer) => {
            rawData += chunk.toString();
          });
          req.on('end', () => {
            try {
              resolve(rawData ? JSON.parse(rawData) : {});
            } catch (err) {
              reject(new Error('Invalid JSON payload'));
            }
          });
          req.on('error', reject);
        });
      }
    }

    const result = await processEmailDispatch(payload);
    return sendJson(200, result);
  } catch (error: any) {
    console.error('[API send-email error]:', error);
    return sendJson(500, {
      success: false,
      error: error.message || 'Internal Server Error',
    });
  }
}
