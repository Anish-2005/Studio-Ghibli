export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt, model = 'gemini-3-pro-preview' } = req.body || {};
  const key = process.env.GEMINI_API_KEY;

  if (!key) {
    res.status(500).json({ error: 'GEMINI_API_KEY not configured in environment' });
    return;
  }

  if (!prompt) {
    res.status(400).json({ error: 'Missing prompt in request body' });
    return;
  }

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta2/models/${encodeURIComponent(
      model
    )}:generateText?key=${encodeURIComponent(key)}`;

    const body = {
      prompt: { text: prompt },
      temperature: 0.2,
      maxOutputTokens: 512
    };

    const r = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await r.json();
    res.status(r.ok ? 200 : 502).json(data);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
