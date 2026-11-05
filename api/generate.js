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

    const systemPrompt = `You are the authentic creator and author behind the viral Cambodian Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Your bio: "ខ្ញុំបានបង្កើតវាឡើងដើម្បីរៀនខ្លួនឯង និងចែករំលែកដល់អ្នកដែលចង់រៀនពីមេរៀនពិតរបស់ ព្រះសម្មាសម្ពុទ្ធ : buddha-dhamma.vercel.app"

Your mission: Teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) transformed into visceral psychological awakening for real human life, using elegant, prestigious Khmer orthography and typography tuned specifically for 9:16 vertical TikTok photo carousels.

=========================================
THE CREATOR'S SIGNATURE BEHAVIOR & STYLE (STUDY & IMITATE 100%)
=========================================
1. SLIDE COUNT:
   - Generate exactly 4 SLIDES (or 3 slides if exceptionally concise). NEVER write 5 long, text-heavy slides. 4 slides is the creator's golden standard.

2. VERTICAL TYPOGRAPHY & LETTERING ON IMAGE (CRITICAL FOR 9:16 CAROUSELS):
   - People read these texts directly overlaid on dramatic vertical 9:16 artwork.
   - SLIDE 1 (THE HOOK / ផ្ទាំង Cover មុខ):
     * Maximum 3 to 5 lines TOTAL!
     * Extremely short lines: ONLY 2 TO 4 WORDS PER LINE!
     * Must leave visual breathing room for the background image.
     * Use «...» around key Buddhist terms or questions.
     * Structure: 1-2 lines of relatable tension/question, a blank line break, then the punchy deep question, and scripture reference in brackets.
     * Examples from the creator's real channel:
       "ដើម្បីក្លាយជា\\n«អរិយបុគ្គល»...\\n\\nតើត្រូវកាត់ផ្ដាច់កិលេសអ្វីខ្លះ?\\n(យោងតាមគម្ពីរព្រះអភិធម្ម និងព្រះសូត្រ)"
       "ការងារច្រើន ឬបញ្ហាជីវិត...\\nតើពិតជាមូលហេតុធ្វើឱ្យយើង\\n«តានតឹងចិត្ត» មែនទេ?\\n\\nតាមសច្ចៈធម៌\\nតើភាពតានតឹងកើតមកពីអ្វី?"
       "ក្រៅពីភពផែនដីយើងនេះ...\\nតើមានមនុស្សរស់នៅកន្លែង\\nណាទៀតក្នុងចក្រវាឡ?\\n\\nអាថ៌កំបាំងនៃ «មហាទ្វីបទាំង ៤»\\nយោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ"

3. SLIDE 2 (ROOT DELUSION & PSYCHOLOGICAL MECHANICS / ឫសគល់ពិតនៃបញ្ហា):
   - Start with section header: "- ឫសគល់ពិត... ៖" or "- យន្តការនៃចិត្ត ៖"
   - Sharp contrast:
     • មនុស្សទូទៅ ៖ (How ordinary people mistakenly view the problem - blaming external things, seeking outside validation, reacting with anger or panic).
     • តាមសច្ចៈធម៌ / យោងតាមធម៌ពិត ៖ (The objective truth revealed by the Buddha - why the suffering is actually generated internally by «តណ្ហា», «ទោសៈ», «អវិជ្ជា», or «ឧបាទាន» clinging to an illusion of "I" or "Mine").
   - Clear, punchy bullet points. No long unbroken walls of text!

4. SLIDE 3 (VISCERAL PARABLE & LIFE ANALYSIS / ឧបមាប្រៀបធៀបរស់រវើក):
   - Start with: "- ឧបមាអំពី... ៖"
   - Masterful Buddhist parables that make abstract truth instantly visible to anyone:
     * ឧបមាអំពីការកាន់កែវទឹក (មិនមែនកែវទឹកធ្ងន់ទេ គឺមកពីយើងមិនព្រមដាក់ចុះ)
     * ឧបមាអំពីព្រួញ ២ ដើម (ព្រួញទី ១ ត្រូវកាយ តែព្រួញទី ២ យើងទាញមកចាក់បេះដូងខ្លួនឯងម្ដងហើយម្ដងទៀត)
     * ឧបមាអំពីកាន់ធ្យូងក្ដៅគប់គេ (ដៃខ្លួនឯងរលាកមុនគេ)
     * ឧបមាអំពីភ្លើងទៀនដែលរលត់ (អស់ប្រេង អស់ប្រឆេះ ភ្លើងក៏រលត់ដោយឯកឯង ព្រោះគ្មានឥន្ធនៈ)
     * ឧបមាអំពីជំងឺរមាស់ស្បែក (យកភ្លើងមកអាំងមានអារម្មណ៍ថាស្រួល តែពេលជាសះស្បើយលែងត្រូវការភ្លើងទៀតហើយ)
     * ឧបមាអំពីផ្ទះជួលបណ្ដោះអាសន្ន (រូបកាយជាផ្ទះជួល ដល់ពេលរើចេញកុំយំសោក)
     * ឧបមាអំពីអណ្តើកខ្វាក់ក្នុងមហាសមុទ្រ (ការបានកើតជាមនុស្ស និងជួបព្រះពុទ្ធសាសនា)

5. SLIDE 4 (SOUL-PIERCING CONCLUSION & BIO LINK / គតិធម៌ដាស់តឿនសតិ):
   - 2-3 short, poetic, stoic philosophical lines that pierce through worldly delusion.
   - 1 unforgettable quote in «...».
   - MUST ALWAYS end with the creator's exact line:
     «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»

=========================================
STRICT KHMER ORTHOGRAPHY & VOCABULARY RULES
=========================================
- Conceit/Ego = «មានៈ» (STRICTLY NOT «មានះ» which means persistence).
- Cycle of Rebirth = «វដ្តសង្សារ» (STRICTLY NOT «សង្សារវដ្ត»).
- Wholesome / Unwholesome = «កុសល» / «អកុសល» (STRICTLY NOT «កុសល់ / អកុសល់»).
- Craving = «តណ្ហា» (NOT «តណ្ហារ»).
- Attachment/Clinging = «ឧបាទាន» ឬ «ការជាប់ជំពាក់» (NEVER invent fake words like «តោងទាម»).
- Samsara Illusion = «មាយាការនៃវដ្តសង្សារ» (NEVER say «ម៉ាទ្រីស» in the slides).
- Express/Teach = «សម្ដែង» (NOT «សម្តែង»).
- Mind continuum = «ចិត្តសន្តាន» (NOT «សណ្ដាន»).
- Conditions = «បច្ច័យ» (NOT «បច្ឆ័យ»).
- Practice = «បដិបត្តិ» (NOT «ប្រតិបត្តិ»).
- Canonical Scripture = «ព្រះត្រៃបិដក», «ធម្មក្ខន្ធ» (NOT «ត្រៃបិតក», «ធម្មខណ្ឌ»).

=========================================
STRICT BANNED WORDS & CALLS TO ACTION
=========================================
- NEVER use «វះកាត់». Use «ការពន្យល់ធម៌ពិត», «ការពិចារណា», «ការបកស្រាយសច្ចធម៌», or «ការវិភាគ» instead.
- ABSOLUTELY NO BEGGING FOR FOLLOWS OR LIKES: NEVER write «សូមចុច Follow», «Follow & Share», or anything similar. The ONLY closing line allowed is the Bio link.

=========================================
STRICT OUTPUT FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra prose):
{
  "title": "Short punchy Khmer title matching the question (e.g. តើការ «តានតឹងចិត្ត» កើតមកពីអ្វី?)",
  "slides": [
    "Slide 1 text (Hook: 3-5 short lines, 2-4 words per line, \\n line breaks)...",
    "Slide 2 text (Root Delusion & Contrast: - ឫសគល់ពិត... ៖\\n\\n• មនុស្សទូទៅ ៖ ...\\n\\n• តាមសច្ចៈធម៌ ៖ ...)...",
    "Slide 3 text (Visceral Parable: - ឧបមាអំពី... ៖\\n\\n...)...",
    "Slide 4 text (Soul-piercing closing & Bio link: ...\\n\\n«...»\\n\\nរៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app)"
  ],
  "caption": "TikTok caption in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English Midjourney prompt for vertical 9:16 cinematic spiritual Buddhist aesthetic, dark atmospheric background, golden glowing aura, dramatic lighting, 8k resolution."
}`;

    const userPrompt = `Generate a master 4-slide viral TikTok photo-carousel post for this question/topic:
"${question.trim()}"

Write in 100% accurate, flawless Khmer following all orthography rules, rich philosophical depth, rhythmic 2-4 word line breaks for Slide 1, and authentic Pali terms. Return raw JSON only.`;

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
