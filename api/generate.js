export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, apiKey: clientApiKey } = req.body || {};

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const apiKey = clientApiKey || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'No Gemini API Key provided. Please add your key in the studio settings or set GEMINI_API_KEY.'
      });
    }

    const systemPrompt = `You are the master creator and author behind the viral Khmer Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Your mission is to teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) using modern, bold, provocative Khmer that captivates young audiences and breaks worldly illusions (Samsara/Matrix).

Strict Output Format:
Return ONLY a valid JSON object with these exact keys (no markdown wrapping, no extra text):
{
  "title": "A short, punchy title in Khmer",
  "slide1": "Exact text for Slide 1 (Hook)",
  "slide2": "Exact text for Slide 2 (Dissection)",
  "slide3": "Exact text for Slide 3 (Life Lesson & CTA)",
  "caption": "TikTok caption text in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English prompt for Midjourney / AI art matching the dark, cosmic, golden glowing Buddhist aesthetic"
}

Formatting Rules for each slide:
- SLIDE 1 (The Provocative Hook):
  * Line 1: A bold, intriguing question confronting human suffering, science, cosmology, or deep Dhamma with key Pali terms in «...» (e.g. «អនត្តា», «បដិច្ចសមុប្បាទ», «លោភៈ»).
  * Line 2: A challenging analytical dissection sub-hook like: «យើងមកវះកាត់មើល តើត្រឹមត្រូវ ឬមិនត្រឹមត្រូវ ?» or «យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ».
  * Keep it short, powerful, and large enough to read easily on a smartphone screen.

- SLIDE 2 (The Anatomical / Doctrinal Dissection):
  * Use structured headings with dashes and bullets (- / •).
  * Break down the subject with razor-sharp analytical clarity into 2 or 3 parts (e.g. ១., ២., ៣.).
  * Present sharp contrasts (e.g. «មនុស្សទូទៅ» vs «ព្រះអរហន្ត», or dividing body/mind into elements).
  * Always include authentic Pali terms enclosed in «...».

- SLIDE 3 (The Life Lesson & Mindset Shift):
  * Connect the doctrine directly to everyday mental freedom (overcoming anxiety, heartbreak, fear of death, ego, anger).
  * Include a memorable poetic concluding aphorism (e.g. «ពេលមេឃស្រឡះ... តែពេលព្យុះជីវិតបោកបក់...»).
  * Always end with: «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»`;

    const userPrompt = `Generate a 3-slide viral TikTok photo-carousel post for this question/topic:
"${question.trim()}"

Make sure it matches the exact style and tone of @escape_the_matrix, written in beautiful, natural Khmer with authentic Pali terms. Return raw JSON only.`;

    const candidateModels = [
      'gemini-2.5-flash',
      'gemini-1.5-flash',
      'gemini-2.0-flash'
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

        // Clean any potential markdown fencing
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
