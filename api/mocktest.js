import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { data, error } = await supabase.from('mock_tests').select('*');
      if (error) throw error;
      return res.status(200).json(data || []);
    }

    if (req.method === 'POST') {
      const { user_id, test_id, score_vocab, score_grammar_reading, score_listening, total_score, passed } = req.body;
      
      const { data, error } = await supabase
        .from('mock_test_results')
        .insert({
          user_id: user_id || 'demo_user',
          test_id,
          score_vocab,
          score_grammar_reading,
          score_listening,
          total_score,
          passed,
          completed_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;
      return res.status(201).json(data);
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Mocktest API error:', err);
    res.status(500).json({ error: err.message });
  }
}
