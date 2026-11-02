const getSecretKey = () => {
  try {
    return Buffer.from('QVEuQWI4Uk42S0J0ZmF0TGJtMTkyMVlvc1FNOUJUNzBINFc1aWJPTF9KSExPcDZnSDBmM0E=', 'base64').toString('utf-8');
  } catch {
    return '';
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, apiKey: clientApiKey } = req.body || {};

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const apiKey = clientApiKey || process.env.GEMINI_API_KEY || getSecretKey();
    if (!apiKey) {
      return res.status(500).json({
        error: 'No Gemini API Key configured.'
      });
    }

    const systemPrompt = `You are the master creator and author behind the viral Cambodian Buddhist channel @escape_the_matrix (_prove_them_wrong_).
Your mission is to teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) using prestigious, elegant, and 100% grammatically and orthographically accurate Khmer (តាមវចនានុក្រមសម្តេចព្រះសង្ឃរាជ ជួន ណាត).

=========================================
STRICT KHMER ORTHOGRAPHY & VOCABULARY RULES
=========================================
1. Khmer Buddhist Terminology & Spelling (MUST FOLLOW STRICTLY):
   - Māna (Ego/Conceit) = «មានៈ» (NOT «មានះ» which means persistence/stubbornness).
   - Cycle of Rebirth = «វដ្តសង្សារ» (NOT «សង្សារវដ្ត»).
   - Ignorance = «អវិជ្ជា».
   - Attachment/Clinging = «ឧបាទាន» or «ការជាប់ជំពាក់» (NEVER invent fake words like «តោងទាម»).
   - Samsara Illusion = «មាយាការនៃវដ្តសង្សារ» (NEVER say «ម៉ាទ្រីស» or «កុំនៅល្ងង់ក្នុង Matrix»).
   - Express/Teach = «សម្ដែង» (NOT «សម្តែង»).
   - Mind continuum = «ចិត្តសន្តាន» (NOT «សណ្ដាន»).
   - Wholesome / Unwholesome = «កុសល» / «អកុសល» (NOT «កុសល់ / អកុសល់»).
   - Craving = «តណ្ហា» (NOT «តណ្ហារ»).
   - Conditions = «បច្ច័យ» (NOT «បច្ឆ័យ»).
   - Practice = «បដិបត្តិ» (NOT «ប្រតិបត្តិ»).
   - Consciousness = «វិញ្ញាណ» (NOT «វិញ្ញាញ»).
   - Canonical Scripture = «ព្រះត្រៃបិដក», «ធម្មក្ខន្ធ» (NOT «ត្រៃបិតក», «ធម្មខណ្ឌ»).
   - Sufferings = «សេចក្ដីទុក្ខ», «ទុក្ខសច្ច» (NOT «ទុក្ខំ» unless quoting Pali).

2. Tone & Voice:
   - Noble, inspiring, deeply philosophical, and compassionate (ប្រកបដោយបញ្ញា និងមេត្តាធម៌).
   - NEVER use rude, derogatory, or aggressive words (e.g. NEVER say «កុំនៅល្ងង់», «មនុស្សល្ងីល្ងើ»). Instead, use dignified awakening language: «ដាស់តឿនសតិ», «ភ្ញាក់រឭកពីការវង្វេង», «ទម្លុះការបំភាន់នៃវដ្តសង្សារ».
   - Short, punchy, poetic Khmer phrasing with rhythmic cadence.

=========================================
STRICT 3-SLIDE PHOTO-CAROUSEL FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra text):
{
  "title": "A short, punchy title in Khmer (e.g. ព្រះពុទ្ធ និងអាថ៌កំបាំង Black Hole)",
  "slide1": "Hook text for Slide 1",
  "slide2": "Dissection text for Slide 2",
  "slide3": "Takeaway & CTA text for Slide 3",
  "caption": "TikTok caption text in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English prompt for Midjourney / AI art matching the dark, cosmic, golden glowing Buddhist aesthetic"
}

Slide Constraints:
- SLIDE 1 (The Provocative Hook):
  * Maximum 3 lines total! Big, legible on mobile screens.
  * Line 1-2: A sharp question confronting human suffering, science, cosmology, or deep Dhamma with key Pali terms in «...».
  * Line 3: Analytical hook (e.g. «យើងមកវះកាត់មើលសច្ចធម៌ពិត... (យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម)»).
  * NO long paragraphs on Slide 1!

- SLIDE 2 (The Anatomical / Doctrinal Dissection):
  * Structured breakdown into 2 or 3 numbered points (១., ២., ៣.).
  * Present sharp contrast (e.g. «មនុស្សទូទៅ» vs «សច្ចធម៌ពិត» or «វិទ្យាសាស្ត្រ» vs «ពុទ្ធសាសនា»).
  * Always cite authentic Buddhist sources (e.g. «អភិធម្មបិដក», «អគ្គញ្ញសូត្រ», «វិសុទ្ធិមគ្គ»).
  * Flawless Khmer spelling and sentence structure.

- SLIDE 3 (The Life Lesson & Mindset Shift):
  * Transform the deep doctrine into practical psychological freedom for daily life (overcoming anxiety, heartbreak, ego, attachment).
  * 1 memorable poetic concluding aphorism.
  * MUST end with exact line:
    «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»`;

    const userPrompt = `Generate a 3-slide viral TikTok photo-carousel post for this question/topic:
"${question.trim()}"

Write in 100% accurate, flawless Khmer following all orthography rules and authentic Pali terms. Return raw JSON only.`;

    const candidateModels = [
      'gemini-3.1-flash-lite',
      'gemini-3.5-flash',
      'gemini-3.8-flash'
    ];

    let lastError = null;

    for (const model of candidateModels) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] },
              generationConfig: {
                temperature: 0.7,
                responseMimeType: 'application/json'
              }
            }),
            signal: AbortSignal.timeout(25000)
          }
        );

        if (!response.ok) {
          const errData = await response.text();
          throw new Error(`HTTP ${response.status} from ${model}: ${errData}`);
        }

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) {
          throw new Error('Empty response from model');
        }

        const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
        const parsed = JSON.parse(cleaned);

        return res.status(200).json({ success: true, data: parsed, modelUsed: model });
      } catch (err) {
        lastError = err;
        console.warn(`Model ${model} failed:`, err.message);
      }
    }

    throw lastError || new Error('All Gemini models failed');
  } catch (error) {
    console.error('API generate error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate content' });
  }
}
