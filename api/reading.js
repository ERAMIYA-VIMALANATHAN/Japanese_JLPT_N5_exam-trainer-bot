import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    const { data, error } = await supabase.from('reading_passages').select('*');
    if (error) throw error;

    return res.status(200).json(data || []);
  } catch (err) {
    console.error('Reading API error:', err);
    res.status(500).json({ error: err.message });
  }
}
