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

2. Tone & Depth:
   - Noble, inspiring, deeply philosophical, and compassionate (ប្រកបដោយបញ្ញា និងមេត្តាធម៌).
   - NEVER use rude, derogatory, or aggressive words (e.g. NEVER say «កុំនៅល្ងង់», «មនុស្សល្ងីល្ងើ»). Instead, use dignified awakening language: «ដាស់តឿនសតិ», «ភ្ញាក់រឭកពីការវង្វេង», «ទម្លុះការបំភាន់នៃវដ្តសង្សារ».
   - Explain in SUBSTANTIAL DEPTH, clarity, and detail! Do NOT write brief, shallow 1-line bullet points. Each analytical slide must provide a full, lucid, and profound explanation with clear bullet points (១., ២., ៣. or •) that genuinely educates the reader.

=========================================
STRICT 5-SLIDE IN-DEPTH CAROUSEL FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra text):
{
  "title": "A short, punchy title in Khmer (e.g. ព្រះពុទ្ធ និងអាថ៌កំបាំង Black Hole)",
  "slides": [
    "Slide 1 text...",
    "Slide 2 text...",
    "Slide 3 text...",
    "Slide 4 text...",
    "Slide 5 text..."
  ],
  "caption": "TikTok caption text in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English prompt for Midjourney / AI art matching the dark, cosmic, golden glowing Buddhist aesthetic"
}

Slide Constraints:
- SLIDE 1 (The Provocative Hook / សំណួរចាក់ដោត & អាថ៌កំបាំង):
  * Maximum 3-4 lines total! Clean and punchy for the first frame to stop the scroll.
  * Line 1-2: A sharp question confronting human suffering, science, cosmology, or deep Dhamma with key Pali terms in «...».
  * Line 3: Analytical hook (e.g. «យើងមកវះកាត់មើលសច្ចធម៌ពិត... (យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម)»).

- SLIDE 2 (The Root Illusion & Misunderstanding / ឫសគល់នៃបញ្ហា & មាយាការទូទៅ):
  * Detailed breakdown of how ordinary people (មនុស្សទូទៅ) understand or fall into the trap of this problem.
  * Contrast conventional worldly thinking with reality.
  * Explain the psychological root: why the mind creates this confusion or suffering (e.g. through «អវិជ្ជា», «តណ្ហា», or worldly attachments).

- SLIDE 3 (Deep Canonical Dissection - Part 1 / ការវះកាត់ធម៌ពិត ភាគ ១):
  * Deep, analytical doctrinal breakdown citing authentic scriptures (e.g. «អភិធម្មបិដក», «វិសុទ្ធិមគ្គ», «ព្រះសូត្រ»).
  * Explain the fundamental components (e.g. «ខន្ធ ៥», «រូប-នាម», «ចិត្ត-ចេតសិក», «កម្ម និងផល», ឬ «បដិច្ចសមុប្បាទ»).
  * Detailed, rich explanation with numbered points (១., ២., ៣.).

- SLIDE 4 (Deep Canonical Dissection - Part 2 / ការវះកាត់ធម៌ពិត ភាគ ២):
  * Concrete dissection showing how the process works in practical psychological mechanics.
  * Detailed contrast: Delusion vs Wisdom (ការយល់ខុស vs ការយល់ត្រូវ/សម្មាទិដ្ឋិ).
  * Rich elaboration providing clear proof or philosophical clarity that dispels doubts.

- SLIDE 5 (Life Wisdom, Practical Application & CTA / គតិធម៌រំដោះទុក្ខ & ដំណោះស្រាយជីវិត):
  * Transform the deep doctrine into practical psychological freedom for daily life (how to cultivate peace, let go of ego, overcome anxiety, loneliness, or suffering).
  * 1 memorable poetic concluding aphorism.
  * MUST end with exact line:
    «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»`;

    const userPrompt = `Generate a detailed 5-slide viral TikTok photo-carousel post for this question/topic:
"${question.trim()}"

Write in 100% accurate, flawless Khmer following all orthography rules, rich philosophical depth, and authentic Pali terms. Return raw JSON only.`;

    // Primary: gemini-3.8-flash (user requested)
    // Fallbacks: gemini-3.5-flash, gemini-3.6-flash, gemini-3.5-flash-lite, gemini-3.1-flash-lite
    const candidateModels = [
      'gemini-3.8-flash',
      'gemini-3.5-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash-lite',
      'gemini-3.1-flash-lite'
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
            signal: AbortSignal.timeout(12000)
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

        if (parsed.slides && Array.isArray(parsed.slides)) {
          parsed.slide1 = parsed.slides[0] || '';
          parsed.slide2 = parsed.slides[1] || '';
          parsed.slide3 = parsed.slides[2] || '';
          parsed.slide4 = parsed.slides[3] || '';
          parsed.slide5 = parsed.slides[4] || '';
        } else {
          parsed.slides = [parsed.slide1, parsed.slide2, parsed.slide3, parsed.slide4, parsed.slide5].filter(Boolean);
        }

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
