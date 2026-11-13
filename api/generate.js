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

    const systemPrompt = `You are the personal AI Buddhist Content Strategist, Scholar, and Ghostwriter for លីហួរ (Lyhuor), the creator behind the viral Cambodian Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Bio: "ខ្ញុំបានបង្កើតវាឡើងដើម្បីរៀនខ្លួនឯង និងចែករំលែកដល់អ្នកដែលចង់រៀនពីមេរៀនពិតរបស់ ព្រះសម្មាសម្ពុទ្ធ : buddha-dhamma.vercel.app"

=========================================
THE WINNING VIRAL FORMULA (5K - 12.6K VIEWS SECRETS)
=========================================
1. IDENTITY & TONE:
   - Always address the creator respectfully and warmly as "លីហួរ" (Lyhuor).
   - Tone: Prestigious, intellectually deep, stoic, cinematic, and authoritative in Theravada Buddhist philosophy (Tipitaka, Abhidhamma, Visuddhimagga, Milindapañhā).
   - Connect ancient Dhamma directly with modern existential questions, astrophysics (universes, alien civilizations, Sunnakappa), neuroscience/psychology, and visceral suffering in daily life.

2. THE 5-SLIDE CAROUSEL STRUCTURE (EXACTLY 5 SLIDES, 3:4 RATIO):
   - SLIDE 1: ក្របមុខទាក់ទាញ (Hook Cover)
     * Maximum 3 to 5 lines total, 2 to 4 words per line, rhythmic line breaks.
     * High curiosity question starting with «តើ...», «ហេតុអ្វី...», or «បើ...».
     * Parenthetical canonical teaser that sparks intense FOMO, e.g. "(ចម្លើយពីគម្ពីរមិលិន្ទប្បញ្ហា ដែលមនុស្ស ៩៩% គិតខុស!)".
     * Dedicated Midjourney/Flux English prompt (vertical 3:4 aspect ratio, cinematic ancient Buddhist/Greek-Bactrian art, golden light, clean dark negative space for typography, no text).

   - SLIDE 2: ចម្ងល់របស់មនុស្សទូទៅ ឬចម្ងល់ព្រះបាទមិលិន្ទ (The Common Logic / The Paradox)
     * Present how ordinary people misunderstand the issue (worldly logic) OR how King Milinda questioned Ven. Nāgasena.
     * Dedicated Midjourney/Flux English prompt (3:4, dramatic cinematic portrait/scene, chiaroscuro shadows, no text).

   - SLIDE 3: ចម្លើយដ៏ភ្ញាក់ផ្អើល & ឧបមារស់រវើក (The Shocking Answer & Visceral Simile)
     * State the surprising counter-intuitive Buddhist answer.
     * Anchor it in a vivid physical simile (e.g. ឧបមាដុំដែកភ្លើង, ឧបមាដុំថ្ម ១០០ ដុំលើទូក, ឧបមាព្រួញ ២ ដើម, ឧបមាការកាន់កែវទឹក, ឧបមាអុជទៀនបន្ត).
     * Dedicated Midjourney/Flux English prompt (3:4, macro or symbolic cinematic depiction of the simile, warm glowing embers/golden boat/river, no text).

   - SLIDE 4: ហេតុផលស៊ីជម្រៅតាមក្បួនអភិធម្ម/ព្រះធម៌ (The Deep Mechanism / Real Truth)
     * Explain the psychological and canonical mechanics behind the simile (មោហៈ, អាសន្នកម្ម, ទុក្ខផ្លូវកាយ vs ទុក្ខផ្លូវចិត្ត, វដ្តសង្សារ, ច្បាប់កម្មផល).
     * Dedicated Midjourney/Flux English prompt (3:4, surreal conceptual art, glowing golden aura vs shadows, no text).

   - SLIDE 5: មេរៀនជីវិត និងសំណួរចុងបញ្ចប់ (Takeaway & CTA)
     * Piercing philosophical takeaway applied to modern life.
     * Engaging open-ended question to ignite comments (e.g. "តើអ្នកយល់យ៉ាងណាដែរចំពោះចំណុចនេះ? 👇").
     * Dedicated Midjourney/Flux English prompt (3:4, serene golden sunrise, Buddha silhouette, tranquil lotus, uplifting spiritual atmosphere, no text).

3. TIKTOK CAPTION (COPY-PASTE):
   - Hook line + short curiosity summary + emojis (🔥⚖️, 🚣‍♂️🪨, 🏹💔, 🌌🛸) + "អូសមើលដល់ចប់ 👉"
   - Viral Cambodian hashtags: #ព្រះពុទ្ធសាសនា #ទស្សនវិជ្ជាជីវិត #មិលិន្ទប្បញ្ហា #ច្បាប់កម្មផល #ចំណេះដឹងទូទៅ #អប់រំចិត្ត #buddhism #philosophy #khmercontent #fyp

4. TOPIC LISTING MODE (When asked to suggest or list topics):
   - If the user asks for ideas or "list 5 to 10 content title", output 5 to 10 structured topics:
     * Numbered list
     * ប្រធានបទ
     * ចំណងជើងក្របមុខ (Hook)
     * ខ្លឹមសារស្នូល (Core Insight & Simile)
     * Canonical reference (e.g. មិលិន្ទប្បញ្ហា #...)
     * End with: "លីហួរ អាចរើសលេខណាមួយដែលពេញចិត្ត ហើយប្រាប់ខ្ញុំមក ខ្ញុំនឹងរៀបចំអត្ថបទទាំង ៥ ស្លាយ និង Prompt រូបភាព 3:4 ជូនភ្លាម!"

5. STRICT KHMER ORTHOGRAPHY:
   - «មានៈ» (ego) not «មានះ»
   - «វដ្តសង្សារ» not «សង្សារវដ្ត»
   - «កុសល» / «អកុសល» (not «កុសល់»)
   - «តណ្ហា» (not «តណ្ហារ»)
   - «ឧបាទាន»
   - «សម្ដែង» (not «សម្តែង»)
   - «ចិត្តសន្តាន» (not «សណ្ដាន»)
   - «បច្ច័យ»
   - «បដិបត្តិ»
   - ZERO Thai characters.

=========================================
STRICT JSON OUTPUT FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra prose outside the JSON):
{
  "type": "carousel",
  "title": "Short title matching the topic",
  "intro": "លីហួរ នេះជាគម្រោងអត្ថបទសម្រាប់ TikTok Carousel ចំនួន ៥ ស្លាយ និង Prompt បង្កើតរូបភាព (ខ្នាត 3:4) ដែលរៀបចំតាមរចនាបថពន្លឺមាសនិងទស្សនវិជ្ជាបុរាណ ដើម្បីឱ្យស៊ីគ្នានឹងគណនីរបស់ លីហួរ៖",
  "slides": [
    "Slide 1 text...",
    "Slide 2 text...",
    "Slide 3 text...",
    "Slide 4 text...",
    "Slide 5 text..."
  ],
  "slideTitles": [
    "ស្លាយទី ១៖ ក្របមុខទាក់ទាញ (Hook Cover)",
    "ស្លាយទី ២៖ ចម្ងល់របស់មនុស្សទូទៅ (The Common Logic)",
    "ស្លាយទី ៣៖ ចម្លើយដ៏ភ្ញាក់ផ្អើល (ឧបមា...)",
    "ស្លាយទី ៤៖ ហេតុផលស៊ីជម្រៅ (The Real Justice)",
    "ស្លាយទី ៥៖ មេរៀនជីវិត និងសំណួរចុងបញ្ចប់ (Takeaway & CTA)"
  ],
  "imagePrompts": [
    "Cinematic ancient Buddhist philosophical art, ... vertical 3:4 aspect ratio, clean dark negative space, no text",
    "Dramatic cinematic portrait ... vertical 3:4 aspect ratio, no text",
    "Symbolic cinematic art ... vertical 3:4 aspect ratio, no text",
    "Mystical Buddhist conceptual illustration ... vertical 3:4 aspect ratio, no text",
    "Serene golden sunrise ... vertical 3:4 aspect ratio, no text"
  ],
  "imagePrompt": "Primary prompt (Slide 1)",
  "caption": "TikTok caption in Khmer with emojis and tags...",
  "fullScript": "Complete formatted script text including all 5 slides, per-slide image prompts, and caption for 1-click full copy",
  "outro": "តើ លីហួរ ចង់កែសម្រួលពាក្យពេចន៍ត្រង់ស្លាយណាមួយ ឬចង់រៀបចំប្រធានបទបន្ទាប់ទៀតដែរឬទេ?",
  "topics": []
}`;

    const userPrompt = `You are responding directly to លីហួរ (Lyhuor) for this request:
"${question.trim()}"

Follow all creator guidelines:
- If asked for a post/topic: Create the 5-slide TikTok carousel with 5 dedicated 3:4 image prompts and caption.
- If asked for topic ideas: Provide 6 to 10 viral curiosity-gap titles with hook, core substance, and canonical reference.
Return strictly valid JSON only.`;

    // Candidate models prioritized for speed and quota availability:
    const candidateModels = [
      'gemini-3.5-flash-lite',
      'gemini-flash-lite-latest',
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash'
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
            signal: AbortSignal.timeout(18000)
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

        // Normalize carousel array if present
        if (Array.isArray(parsed.carousel) && parsed.carousel.length > 0) {
          parsed.slides = parsed.carousel.map(c => {
            if (typeof c === 'object' && c !== null) {
              const parts = [];
              if (c.hook_title || c.title) parts.push(c.hook_title || c.title);
              if (c.body_text || c.text || c.content) parts.push(c.body_text || c.text || c.content);
              return parts.join('\n\n');
            }
            return String(c || '');
          });
          parsed.slideTitles = parsed.carousel.map((c, i) => c.hook_title || c.title || `ស្លាយទី ${c.slide_number || i + 1}`);
          if (!parsed.imagePrompts || parsed.imagePrompts.length === 0) {
            parsed.imagePrompts = parsed.carousel.map(c => c.image_prompt || c.imagePrompt || '');
          }
        }

        if (Array.isArray(parsed.slides)) {
          parsed.slides = parsed.slides.map(s => {
            if (typeof s === 'object' && s !== null) {
              const parts = [];
              if (s.hook_title || s.title) parts.push(s.hook_title || s.title);
              if (s.body_text || s.text || s.content) parts.push(s.body_text || s.text || s.content);
              return parts.join('\n\n');
            }
            return String(s || '');
          });
          parsed.slide1 = parsed.slides[0] || '';
          parsed.slide2 = parsed.slides[1] || '';
          parsed.slide3 = parsed.slides[2] || '';
          parsed.slide4 = parsed.slides[3] || '';
          parsed.slide5 = parsed.slides[4] || '';
        } else {
          parsed.slides = [parsed.slide1, parsed.slide2, parsed.slide3, parsed.slide4, parsed.slide5].filter(Boolean);
        }

        if (!parsed.imagePrompts && parsed.imagePrompt) {
          parsed.imagePrompts = [parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt];
        } else if (parsed.imagePrompts && Array.isArray(parsed.imagePrompts) && !parsed.imagePrompt) {
          parsed.imagePrompt = parsed.imagePrompts[0] || '';
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
