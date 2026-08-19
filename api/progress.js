import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { user_id } = req.query;
      if (!user_id) {
        return res.status(200).json({
          streak: 3,
          level: 'Beginner',
          lang_preference: 'both',
          romaji_mode: 'intro-only',
          progress: {
            hiragana: 15,
            katakana: 5,
            kanji: 2,
            vocabulary: 45,
            grammar: 10,
            reading: 8,
            listening: 12,
            speaking: 5,
            writing: 10
          }
        });
      }

      const { data: profile } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user_id)
        .single();

      const { data: progressItems } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user_id);

      return res.status(200).json({
        profile: profile || { streak: 1, level: 'Beginner', lang_preference: 'both' },
        progressItems: progressItems || []
      });
    }

    if (req.method === 'POST') {
      const { user_id, lang_preference, romaji_mode, domain, item_id, mastery_level } = req.body;

      if (lang_preference || romaji_mode) {
        const updateData = {};
        if (lang_preference) updateData.lang_preference = lang_preference;
        if (romaji_mode) updateData.romaji_mode = romaji_mode;

        await supabase
          .from('user_profiles')
          .upsert({ id: user_id || 'demo_user', ...updateData });
      }

      if (domain && item_id) {
        await supabase
          .from('user_progress')
          .upsert({
            user_id: user_id || 'demo_user',
            domain,
            item_id,
            mastery_level: mastery_level || 1,
            last_reviewed: new Date().toISOString()
          }, { onConflict: 'user_id,domain,item_id' });
      }

      return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Progress API error:', err);
    res.status(500).json({ error: err.message });
  }
}
