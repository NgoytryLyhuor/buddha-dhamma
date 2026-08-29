# Khmer Readability Review — Buddha Dhamma

**Date:** 2026-08-29
**Scope:** All 19 `src/views/*.vue` files + `src/App.vue` (UI chrome). `NotFoundView.vue` and `src/composables/**` carry no flagged content.
**Audience:** General public / beginners learning Buddhism.

> This is a **review only**. No source files were changed. Each flagged item keeps the Pali/technical term and adds a plain-Khmer gloss, per the agreed rewrite convention.

---

## Summary

| Metric | Count |
|---|---|
| Files reviewed | 20 |
| Files with flagged items | 17 |
| Total flagged items (approx.) | ~120 |
| Most common issue | Unglossed Pali-loan / technical terms shown to beginners |
| Second most common | Over-wide single-space word breaks making prose choppy |

### Top issue types (site-wide, worth fixing once)

1. **Unglossed core Pali terms reused everywhere** — `អរិយសច្ចៈ ៤`, `តណ្ហា`, `សង្ខារ`, `កាម`, `វេទនា`, `បដិបត្តិ`, `សទ្ធា`, `កុសល/អកុសល`, `បារមី`, `ឈាន`, `ខន្ធ`, `និព្វាន`. Best fix: gloss the term on its **first** occurrence per page, then reuse bare.
2. **Pali written in Khmer script masquerading as the "Khmer" label** — clearest in `KammaView` kusala/akusala, plus `EthicsView`, `GathaView`, `AbhidhammaView` chips, `CoreView` three-marks. These need the plain Khmer promoted to the label and the Pali kept as a secondary (styled) line.
3. **Choppy word-spacing** — every word separated by spaces (worst in `QuestionsView`, `HomeView`, `PaccayaView`, `SuttasView`). Khmer does not space between every word; spaces belong around punctuation and between clauses/list items.
4. **Terminology inconsistency** — `ព្រះរតនត្រ័យ` vs `ព្រះត្រៃរតនៈ`; `ប្រព្រឹត្ត` vs `ប្រព្រឹត្តិ`; `សូត្រមាត្រា` vs `គាថា`; `រាគៈ` vs `លោភៈ`. Pick one standard per concept.
5. **Over-long single-sentence definitions** stuffed with sub-terms (mostly in `GlossaryView`, `CoreView`, `HomeView`, `LifeView`).

---

## Conventions used in suggestions

- **Keep** the Pali/technical term; wrap it or follow it with a plain gloss, e.g. `អរិយសច្ចៈ ៤ (សេចក្តីពិតដ៏ថ្លៃថ្នូរ ៤ យ៉ាង)`.
- **Remove** single spaces between every word; keep spaces only for punctuation (`។ , — () «»`) and between list items.
- **Promote** real Khmer to the visible label when the current "Khmer" slot actually holds Pali in Khmer script; keep the Pali as a small secondary line.

---

## Per-File Findings

### 1. AbhidhammaView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 102 | `បច្ចវត្ថុ ៥ អារម្មណ៍ ៤ ភេទ ២ ហទយ ១ ជីវិតិន្រ្ទិយ ១ …` | Dense cluster of unglossed Pali sub-terms + numbers; `ហទយ`/`ជីវិតិន្រ្ទិយ` opaque. | `បច្ចវត្ថុ (ទ្វារទទួលអារម្មណ៍) ៥ · អារម្មណ៍ ៤ · ភេទ ២ · ហទយវត្ថុ (គ្រឹះចិត្ត) ១ · ជីវិតិន្រ្ទិយ (ជីវិតក្នុងកាយ) ១ · …` |
| 176–184, 243–250 | `សោមនស្សសហគត ទិដ្ឋិសម្បយុត្ត អសង្ខារិក` (chips) | Visible label is pure Pali; plain gloss sits on a secondary line below. | Put gloss into the visible label: `សោមនស្សសហគត (សប្បាយ) · ទិដ្ឋិសម្បយុត្ត (យល់ខុស) · អសង្ខារិក (កើតដោយខ្លួនឯង)` |
| 195–196 | `ឧបេក្ខាសហគត វិចិកិច្ឆាសម្បយុត្ត`; `ឧទ្ធច្ចសម្បយុត្ត` | `វិចិកិច្ឆា`, `ឧទ្ធច្ច` unglossed. | `វិចិកិច្ឆា (សង្ស័យស្ទាក់ស្ទើរ)`; `ឧទ្ធច្ច (ចិត្តរាយមាយ)` |
| 202 | `មានបីពួកគឺ វិបាកអកុសល ៧ វិបាកកុសល ៨ កិរិយា ៣` | `វិបាក`, `កិរិយា` technical, undifferentiated. | `…វិបាកអកុសល (ផលមកពីអំពើអាក្រក់) ៧ · វិបាកកុសល (ផលមកពីអំពើល្អ) ៨ · កិរិយា (ចិត្តឥតឲ្យផល) ៣` |
| 239 | `ចិត្តល្អក្នុងកាមលោក ៨+៨+៨ …` | `កាមលោក`, `រូបមន្ត` unglossed. | `ចិត្តល្អក្នុងលោកនៃកាម (ទ្វារទទួលទាំង ៥) ៨+៨+៨ — ទាំងបីពួកមានរូបមន្ត (រចនាសម្ព័ន្ធ) ដូចគ្នា` |
| 289 | `នេវសញ្ញានាសញ្ញាយតនៈ` | Very long Pali compound, unreadable headline. | `នេវសញ្ញានាសញ្ញាយតនៈ (កន្លែងឥតមានសញ្ញា ក៏ឥតមិនមានសញ្ញា)` |
| 326, 376 | `ឯកគ្គតា`; `ជីវិតិន្រ្ទិយ` | Pali chips with no Khmer gloss. | `ឯកគ្គតា (ចិត្តតម្កល់មួយ)`; `ជីវិតិន្រ្ទិយ (កម្លាំងជីវិត)` |
| 372–380 | `ឥត្ថិភាវរូប`, `កពលីការាហារ`, `លហុតា·មុទុតា·កម្មញ្ញតា` … | Pali-in-Khmer chip labels; English `pl` gloss only. | `ហទយវត្ថុ (ទីតាំងចិត្ត)`; `កពលីការាហារ (អាហារ)`; `លហុតា (ស្រាល) · មុទុតា (ទន់) · កម្មញ្ញតា (ប្រើបាន)`; `ឧបចយៈ (កើត) · សន្តតិ (បន្ត) · ជរតា (ចាស់) · អនិច្ចតា (មិនទៀង)` |
| 384–395 | `មិនយល់សច្ចៈ`, `អាយតនៈ ៦`, `កម្មបណ្តាល` | Two-word notes with unglossed technicals. | `សច្ចៈ (សេចក្តីពិត ៤)`; `អាយតនៈ ៦ (ទ្វារទទួល ៦)`; `កម្មបណ្តាល (ធ្វើឲ្យកើតដោយកម្ម)` |
| 3 | `សូត្រមាត្រា ០៣ — ព្រះអភិធម្ម` | `សូត្រមាត្រា` rare/literary; inconsistent with `គាថា` elsewhere. | `មេរៀន ០៣ — ព្រះអភិធម្ម` |
| 9 | `…ទៅជា បរមត្ថធម៌ ៤`, `ជ្រាលជ្រៅ` | `បរមត្ថធម៌` unglossed; `ជ្រាលជ្រៅ` odd spelling. | `…ទៅជាបរមត្ថធម៌ (សច្ចៈដាច់ខាត) ៤`; `ជ្រៅ` |

### 2. App.vue (UI chrome)
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 196 | `ចែករំលែក និង ផ្តល់យោបល់` | Minor spacing. | `ចែករំលែក និងផ្តល់យោបល់` |
| — | (no urgent jargon in chrome) | Settings labels, nav, footer are plain. | Keep as-is. |

*Note: Nav titles like `បដិច្ចសមុប្បាទ`, `អរិយបុគ្គល` are proper section titles — fine as TITLES, but the intro paragraph of each page should gloss them (see that page's entry).*

### 3. CoreView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 5 | `អរិយសច្ចៈ ៤` | H2 is bare Pali compound, never explained. | `អរិយសច្ចៈ ៤ (សេចក្តីពិតដ៏ថ្លៃថ្នូរ ៤ យ៉ាង)` |
| 9 | `…មូលលើអរិយសច្ចៈ ៤…` | `មូលលើ` non-idiomatic ("rooted on"). | `…មានមូលដ្ឋានលើសេចក្តីពិតដ៏ថ្លៃថ្នូរ ៤ (អរិយសច្ចៈ ៤)…` |
| 29 | `អរិយដ្ឋង្គិកមគ្គ ចែកជាបីពួក` | Dense Pali stack, never broken down. | `មាគ៌ាប្រពៃ ៨ យ៉ាង (អរិយដ្ឋង្គិកមគ្គ) ចែកជាបីពួក` |
| 48 | `ត្រៃលក្ខណ៍` | Bare loanword; unclear it names 3 marks. | `ត្រៃលក្ខណ៍ (លក្ខណៈ ៣ យ៉ាងនៃអ្វីៗក្នុងលោក)` |
| 58 | `…គឺប្រជុំនៃខន្ធ ៥ ប្រែប្រួលរាល់ខណៈ` | Missing `ជា`/`ដែល`; `ខន្ធ` undefined. | `សព្វ…គឺជាប្រជុំនៃខន្ធ ៥ (រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ — ន័យ «កង/ក្រុម ៥») ដែលប្រែប្រួលរាល់ខណៈ` |
| 66 | `សព្វវត្ថុកម្ម ទាំងអស់…` | Obscure coined compound. | `អ្វីៗទាំងអស់ (សព្វវត្ថុ)…` |
| 78 | `ជាតិ ជរា មរណៈ សោកៈ …` | Seven spaced items, loans unglossed. | `កើត ចាស់ ស្លាប់ (ជាតិ ជរា មរណៈ); សោកស្តាយ (សោកៈ) ខ្សឹកខ្សួល ទុក្ខ ចង្អៀតចង្អល់…` |
| 79 | `…គឺតណ្ហា បី គឺ កាមតណ្ហា ភវតណ្ហា វិភវតណ្ហា` | Double `គឺ`; sub-terms unglossed & choppy. | `…គឺតណ្ហា (សេចក្តីប្រាថ្នាស្រេកឃ្លាន) ៣ យ៉ាង ៖ កាមតណ្ហា (ចង់បានកាម) ភវតណ្ហា (ចង់កើតទៀត) វិភវតណ្ហា (ចង់រលត់)` |
| 80 | `ការរលត់នៃតណ្ហា ឲ្យអស់មន្ទិល …` | Loses subject; `មន្ទិល`, `តណ្ហា` unglossed. | `កាលណាតណ្ហារលត់ មន្ទិល (សេចក្តីកខ្វក់របស់ចិត្ត) ក៏អស់ ទើបដល់និព្វាន ដែលមិនកើត មិនចាស់ មិនស្លាប់` |
| 88–105 | `សម្មាទិដ្ឋិ`, `សម្មាសង្កប្បៈ`, `សម្មាសតិ` … | All 8 factors unglossed by name. | Prepend gloss: `សម្មាទិដ្ឋិ គឺការយល់ឃើញត្រឹមត្រូវ ៖ …` (similarly each) |
| 104 | `រឭកក្នុងកាយ វេទនា ចិត្ត ធម៌` | `វេទនា`, `ធម៌` technical. | `ដឹងខ្លួនលើរូបកាយ លើអារម្មណ៍ (វេទនា) លើគំនិត និងលើអ្វីដែលកើតក្នុងចិត្ត (ធម៌)` |
| 105 | `…ទៀងទាត់នឹងអារម្មណ៍` | Awkward calque. | `ដាក់ចិត្តឲ្យស្ងប់ នៅនឹងអារម្មណ៍តែមួយ ឥតរាយមាយ` |
| 111–113 | `អនិច្ចំ`, `ទុក្ខំ`, `អនត្តា` | Pali-in-Khmer forms as the "Khmer" label; no Khmer word. | `មិនទៀង (អនិច្ចំ)`, `ទុក្ខ (ទុក្ខំ)`, `ឥតខ្លួន (អនត្តា)` |
| 117 | `កាយ និង សម្ភារៈ` | `សម្ភារៈ` = "equipment" in daily Khmer — misleading for rūpa. | `រូបធាតុ — កាយ និងវត្ថុផ្សេងៗ` |
| 118 | `សុខ ទុក្ខ អព្យាក្រឹត` | `អព្យាក្រឹត` unknown to lay readers. | `សុខ ទុក្ខ និងអារម្មណ៍មិនល្អមិនអាក្រក់ (អព្យាក្រឹត)` |
| 120 | `គំនិតចេតនា` | Squeezed compound; `ចេតនា` unglossed. | `ការគិតប្រុងប្រាប់ (ចេតនា) និងគំនិតផ្សំផ្គុំផ្សេងៗ` |

### 4. DailyView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 3/5 | `បដិបត្តិប្រចាំថ្ងៃ` | Page keyword unglossed; recurs. | Gloss once in intro: `ការហាត់រៀនតាមធម៌ប្រចាំថ្ងៃ (បដិបត្តិប្រចាំថ្ងៃ)` |
| 29 | `…គោរពវន្ទា បីដង …កើតសទ្ធា` | `វន្ទា`, `សទ្ធា` unglossed. | `…គោរពក្រាបថ្វាយបង្គំ (វន្ទា) បីដង …កើតសទ្ធា (ជំនឿច្បាស់លាស់)` |
| 35 | `…សង្ឃដល់បុណ្យដល់អ្នកមានគុណ…` | Two `ដល់` collide; rare verbs. | `…និងឧទ្ទិសបុណ្យទៅដល់អ្នកមានគុណ និងអ្នកចែកឋាន` |
| 110 | `…គឺជាបញ្ញានៃអ្នកបដិបត្តិ` | Comma-spliced; subject of `គឺជាបញ្ញា` unclear; `បញ្ញា` unglossed. | `…— បែបនេះ ទើបជាបញ្ញា (ការដឹងពិត) របស់អ្នកប្រតិបត្តិធម៌` |
| 27 vs 116 | `ព្រះរតនត្រ័យ` vs `ព្រះត្រៃរតនៈ` | Same item named two ways, both unglossed. | Pick one standard; gloss first use: `ព្រះត្រៃរតនៈ (ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ)` |
| 127 | `ថ្ងៃសីល (ថ្ងៃសីល ៤ ថ្ងៃ…)` | Redundant repetition; `ធ្ងន់ជាង` casual idiom. | `ថ្ងៃសីល (៤ ថ្ងៃក្នុងមួយខែ) អ្នកដែលអាចកាន់សីល ៨ បាន ចូរទៅវត្ត…ប្រតិបត្តិឲ្យខ្ជាប់ខ្ជួនជាងថ្ងៃធម្មតា` |
| 168 | `ការមានសីលក្នុងកាម…` | `កាម` used unglossed for sexual desire. | `ការប្រព្រឹត្តិផ្លូវភេទដោយមានសីល (កាម ~ កាមត្រេកត្រអាល) ជួយរក្សាសេចក្តីសុខក្នុងគ្រួសារ` |
| 181 | `…ឥតភ្ចាក់…ឱវាទបាតិមោក្ខ` | `ឥតភ្ចាក់` obscure; `ឱវាទបាតិមោក្ខ` heavy. | `…ដោយស្វ័យប្រវត្ត (ឥតនរណាកោះបង្គាប់)…ឱវាទបាតិមោក្ខ (សេចក្តីប្រៀនខ្លី ជាខ្លឹមវិន័យ)` |
| 182 | `…៣ ថ្ងៃសំខាន់ ក្នុងមួយថ្ងៃតែមួយ…បរិនិព្វាន` | "3 days in 1 day" muddled; `បរិនិព្វាន` unglossed. | `…ព្រឹត្តិការណ៍សំខាន់ ៣ ក្នុងថ្ងៃតែមួយ ៖ ប្រសូត ត្រាស់ដឹង និងបរិនិព្វាន (ចូលនិព្វាន រំលត់កង្វល់)` |
| 183 | `…ធម្មចក្កប្បវត្តនសូត្រ …បញ្ចវគ្គិយ` | Two heavy unglossed terms in one sentence. | `…ប្រកាសធម្មទេសនាដំបូងបង្អស់ (ធម្មចក្កប្បវត្តនសូត្រ) ឲ្យអ្នកបួសប្រាំនាក់ (បញ្ចវគ្គិយ)` |

### 5. EthicsView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 15 | `បញ្ចសីល ៥` | `បញ្ចសីល` already = five precepts → redundant + unglossed compound. | `សីល ៥ (បញ្ចសីល)` |
| 23 | `«សិក្ខាបទំ សមាទិយាមិ» …«ខ្ញុំសូមសមាទាននូវសិក្ខាបទ»` | Pali chant in Khmer field; the Khmer "translation" is still 100% Pali loans. | `«សិក្ខាបទំ សមាទិយាមិ» (បាលី) មានន័យថា «ខ្ញុំសូមទទួលយកនូវសិក្ខាបទ (ទីទទួលស្រូបយកវិន័យសម្រាប់ហាត់)»` |
| 44 | `គន្ថីសេចក្តីបង្រៀន` | `គន្ថី` rare loan. | `សេចក្តីបង្រៀន ដែលគួរចងចាំ` |
| 30 | `…ព្រះពោធិសត្វបំពេញ…` | `ពោធិសត្វ` unglossed (relatability lost). | `…ព្រះពោធិសត្វ (អ្នកបំពេញគុណធម៌ដើម្បីត្រាស់ដឹងជាព្រះពុទ្ធ)…` |
| 67 | `មិនប្រព្រឹត្តិខុសក្នុងកាម` | `កាម` unglossed; spelling inconsistent. | `មិនប្រព្រឹត្តិខុសក្នុងកាម (ផ្លូវភេទ)` |
| 75 | `លះបង់តណ្ហា` | `តណ្ហា` unglossed. | `លះបង់សេចក្តីចង់បានស្រេកឃ្លាន (តណ្ហា)` |
| 78 | `អត់ឱនទ្រាំទ្រ` | Nonstandard reduplication. | `អត់ឱន ចេះទ្រាំលំបាក` |
| 86–88 | `អក្កោធេន ជិនេ កោធំ — ឈ្នះអ្នកខឹង…` | Pali-in-Khmer starts the "Khmer" field, visually indistinguishable. | Move Pali to `pl`; keep km pure Khmer: `ឈ្នះអ្នកខឹង ដោយមិនខឹង` |

### 6. GathaView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 9 | `…ដែលគ្រហស្ថគួរចងចាំ` | `គ្រហស្ថ` rare loan for "householder". | `…ដែលពុទ្ធបរិស័ទអ្នកផ្ទះ (គ្រហស្ថ) គួរចងចាំ` |
| 92 | `គាថានេះ ស្តែងឡើង ក្នុងឱកាសព្រះពុទ្ធបរិនិព្វាន` | `ស្តែងឡើង` ("was staged") wrong verb; `បរិនិព្វាន` unglossed. | `គាថានេះ ត្រូវបានព្រះពុទ្ធសម្តែង នាវេលាព្រះអង្គបរិនិព្វាន (ចូលនិព្វាន នៅទីបំផុត)…` |
| 100 | `វត` → `ក្រែងហើយ (មែនពិត)` | `ក្រែង` means "lest/comparative" — misleading. | `ហ្ន៎! (ពិតណាស់)` |
| 126 | `ធម្មា` → `អាការៈចិត្តសមាការ` | The "plain" gloss is itself a dense Pali compound. | `អ្វីៗដែលកើតក្នុងចិត្ត និងដំណើរប្រព្រឹត្តទាំងឡាយ` |
| 134 | `…អាការៈចិត្ត និងអ្វីៗ…ឈានមុខមកមុន…` | Run-on with 3 stacked claims; `ឈានមុខ…មកមុន` redundant. | `…អាការៈចិត្ត (អ្វីដែលកើតក្នុងចិត្ត) និងអ្វីៗដែលបង្កើតឡើង សុទ្ធតែចិត្តដើរមុន ចិត្តជាធំ ហើយលទ្ធផលកើតចេញពីចិត្ត` |
| 116 | `…ខ្លឹមជីវិតរបស់មនុស្ស` | `ខ្លឹមជីវិត` unusual compound. | `…កំណត់ផ្លូវជីវិតរបស់មនុស្ស` |
| 151/156/158 | `លើសទុកការងារសិន`, `អ្នកប្រមាទ លើសទុកការងារ`, `កុំលើសធ្វេសប្រហែស` | `លើស` misused as "neglect/put off" (means "exceed"). | `ធ្វេសប្រហែស ទុកការងារចោល`; `អ្នកប្រមាទ ទុកការងារចោល`; `កុំធ្វេសប្រហែស` |
| 164 | `…ក្តៅក្រហាយ ដល់អ្នកដែលធ្វើអាក្រក់ដាក់ខ្លួន` | `ដល់` dangles; scrambled. | `សម្រាប់ពេលមានអ្នកធ្វើអាក្រក់ដាក់ខ្លួន ហើយកើតក្តៅក្រហាយក្នុងចិត្ត ចូរសូត្រគាថានេះ` |
| 108 | `…សន្សំបង្កើត…មានធម្មតាកើតហើយរលត់` | `សន្សំ` = "save money" nowadays; missing `ដែល`. | `…កើតអំពីហេតុ ដែលផ្សំប្រមូលគ្នា…សុទ្ធតែមិនទៀង ព្រោះមានធម្មតាគឺកើតហើយរលត់` |
| 235/237/239 | `ព្រះតថាគត…`, `ព្រះមហាសមណៈ…` | Epithets for the Buddha never explained. | `ព្រះតថាគត (ព្រះពុទ្ធ)…`; `ព្រះមហាសមណៈ (ព្រះសមណដ៏ធំ គឺព្រះពុទ្ធ)…` |
| 258 | `អព្យាបជ្ឈា` → `ឥតព្យាបាទ…` | Glosses one Pali with another (`ព្យាបាទ`). | `ឥតព្យាបាទ (ឥតគំនិតស្អប់ ឥតគំនិតធ្វើអាក្រក់)…` |
| 91+ | Titles: `នហិ វេរេន — ពៀររលត់ដោយក្តីមេត្តា` | Pali incipit runs into the Khmer gloss indistinguishably. | Keep incipit in the `.paali`-styled field; km = pure Khmer (`ពៀររលត់ដោយក្តីមេត្តា`) |

### 7. GlossaryView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 52 | `…កើត មានធម្មតា កើតហើយរលត់…` | `មានធម្មតា` reads oddly; two em-dash clauses pile. | `…កើតហើយរលត់ ឋិតនៅមិនបាន។ កាយ អារម្មណ៍ គំនិត សុទ្ធតែប្រែប្រួលរាល់ខណៈ` |
| 56 | `…វិបស្សនាភាវនា (ចម្រើនបញ្ញា)` | `វិបស្សនា` never loosened. | `…វិបស្សនាភាវនា (ចម្រើនបញ្ញាឲ្យឃើញអនិច្ចា ទុក្ខ អនត្តា)` |
| 59 | `…ទុក្ខទុក្ខតា…វិបរិណាមទុក្ខ…សង្ខារទុក្ខ…` | Intro-level entry floods with 3 unglossed sub-terms. | `ទុក្ខ មាន ៣ បែប ៖ ១) ទុក្ខទុក្ខតា (ឈឺចាប់ផ្ទាល់កាយចិត្ត) ២) វិបរិណាមទុក្ខ (សុខដែលប្រែប្រួលបាត់បង់) ៣) សង្ខារទុក្ខ (អ្វីដែលបង្កើតមក មិនស្ថេរ)` |
| 70 | `…ទាន សីល នេក្ខម្ម បញ្ញា វិរិយៈ ខន្តិ សច្ចៈ អធិដ្ឋាន មេត្តា ឧបេក្ខា` | 10 perfections as bare Pali; several unglossed. | `ទាន (ការឲ្យ) សីល (រក្សាកាយវាចា) នេក្ខម្ម (ចេញចាកកាម) បញ្ញា វិរិយៈ (ព្យាយាម) ខន្តិ (អត់ធ្មត់) សច្ចៈ (សេចក្តីពិត) អធិដ្ឋាន (តាំងចិត្តមាំ) មេត្តា ឧបេក្ខា` |
| 119 | `…នីវរណៈ…កាមច្ឆន្ទៈ ព្យាបាទ ថីនមិទ្ធៈ ឧទ្ធច្ចកុក្កុច្ចៈ វិចិកិច្ឆា` | Five hindrances, mostly unglossed Pali. | `១) កាមច្ឆន្ទៈ (ចង់បានកាម) ២) ព្យាបាទ (ខឹង) ៣) ថីនមិទ្ធៈ (ងងុយស្រពាប់) ៤) ឧទ្ធច្ចកុក្កុច្ចៈ (រាយមាយ នឹកស្តាយ) ៥) វិចិកិច្ឆា (សង្ស័យ)` |
| 53 | `ក្នុងខន្ធ ៥ គ្មានអ្វី…អ្នកដឹងស្ថិតនៅ…` | `អ្នកដឹងស្ថិតនៅ` compressed/awkward. | `ក្នុងខន្ធ ៥ គ្មានអ្វីដែលយើងគ្រប់គ្រងបាន ក៏គ្មានអ្នកដឹងឋិតនៅថេរ ដែលអាចហៅថាខ្លួនយើងពិតប្រាកដឡើយ` |
| 57 | `…ចិត្តសម្រេច មុនដំបូង` | `ចិត្តសម្រេច មុនដំបូង` unclear. | `…កើតពីចិត្តដែលសម្រេចចិត្ត មុននឹងធ្វើ` |
| 87 | `…ឲ្យឃើញភាពស្អុយរលួយ…ទប់កាមច្ឆន្ទៈ` | `ឲ្យឃើញភាពស្អុយ` clunky; `កាមច្ឆន្ទៈ` unglossed. | `…ឲ្យឃើញថាវាស្អុយរលួយ មិនទៀង — ប្រើទប់សេចក្តីប្រាថ្នាក្នុងកាម (កាមច្ឆន្ទៈ)` |
| 113 | `សេចក្តីធំ ឬ តូច ដោយសន្មត ខ្លួន — ស្មើ លើស ទាប…` | Heavily elided, hard to parse. | `សេចក្តីប្រកាន់ថាខ្លួនធំ ឬតូច — គិតថាខ្លួនស្មើ លើស ឬទាប ជាងអ្នកដទៃ…` |
| 154 | `…(ចាតុម្មហារាជិក តាវតឹង្ស យាមា តុសិត និម្មានរតិ បរនិម្មិតវសវត្តិ)` | Wall of 6 unglossed Pali names. | Trim/gloss; e.g. `កន្លែងទេវតារស់នៅ ៦ ជាន់ ក្នុងកាមលោក` with names glossed or linked. |
| 166 | `…តែត្រូវ កិលេស ខាងក្រៅ ប្រឡាក់` | `តែត្រូវ កិលេស ខាងក្រៅ ប្រឡាក់` ambiguous; stale Pali. | `…ប៉ុន្តែកិលេសដែលមកជ្រាបចូល ធ្វើឲ្យវាប្រឡាក់` |
| 176 | `ទ្រង់ត្រាស់សំដែងអាត្មោភាព…មិនអាច នរណា យល់ហួសបាន` | Literary/awkward; last clause confusing. | `ទ្រង់សំដែងទ្រង់ផ្ទាល់ថា «តថាគត» — ជាព្រះនាមដែលគ្មាននរណាអាចយល់បានទាំងស្រុង` |

### 8. HomeView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 10 | `ព្រះធម៌របស់ព្រះសម្មាសម្ពុទ្ធ គឺជាការបង្រៀនពីការពិតនៃជីវិត៖ អ្វីជាទុក្ខ…` | One giant nominalized sentence; abstract. | Split into 2–3 sentences; gloss `ទុក្ខ` = `(សេចក្តីលំបាក)`; `ពិសោធន៍ដោយខ្លួនឯងបាន` → `សាកល្បងដោយខ្លួនឯងបាន` |
| 26 | `ធម្មឃ្លាំងបី` | Nonce compound; `ឃ្លាំង` literal. | `ព្រះត្រៃបិដក បីផ្នែក` (with gloss "baskets") |
| 49/98–101 | `ចិត្ត ៨៩`, `ចិត្ត`, `ចេតសិក`, `រូប`, `គម្ពីរអភិធម្ម` | Pali labels, no gloss. | `ចិត្ត (គំនិត)`, `ចេតសិក (គុណសម្បត្តិចិត្ត)`, `រូប (កាយ/រូបធាតុ)`, `គម្ពីរអភិធម្ម` |
| 105–108, 125–128 | `កាមាវចរចិត្ត`, `រូបាវចរចិត្ត`, `អរូបាវចរចិត្ត`, `លោកុត្តរចិត្ត` | Pure Pali; glosses (when present) are also technical. | `កាមាវចរចិត្ត (ចិត្តក្នុងលោកអារម្មណ៍ ៥)`, `រូបាវចរចិត្ត (ចិត្តក្នុងរូបឈាន)`, `អរូបាវចរចិត្ត (ចិត្តក្នុងអរូបឈាន)`, `លោកុត្តរចិត្ត (ចិត្តនៃផ្លូវ-ផល កន្លងលោក)` |
| 114 | `សច្ចៈ ៤ មគ្គ ៨ ត្រៃលក្ខណ៍` | Bare unglossed Pali list on the homepage. | `សច្ចៈ ៤ (សេចក្តីពិតបួន), មគ្គ ៨ (ផ្លូវប្រាំបី), ត្រៃលក្ខណ៍ (លក្ខណៈបីយ៉ាង)` |
| 115 | `ធម្មចក្រ មេត្តា មង្គល` | Bare names, no meaning. | `ធម្មចក្រ (កងចក្រធម៌), មេត្តា (សេចក្តីស្រឡាញ់), មង្គល (សេចក្តីចម្រើន)` |
| throughout | `ព្រះធម៌ ជាប្រភព…`, `អ្នកត្រូវពិនិត្យ ពិចារណា…` | Choppy word-spacing. | Remove single spaces between words; keep around punctuation/clauses. |

### 9. KammaView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 100–109 | `បាណាតិបាតា វេរមណី`, `អទិន្នាទានា វេរមណី` … (kusala `km`) | **Pali verse in Khmer script used as the Khmer label**; real Khmer buried in `plain`. | Promote `plain` to the label (`មិនសម្លាប់សត្វ`); keep Pali as the small secondary `pl` display. |
| 113–122 | `បាណាតិបាត`, `អទិន្នាទាន`, … (akusala `km`) | Short Pali compounds as labels; `plain` holds the Khmer. | Same: label = plain Khmer (`ការសម្លាប់សត្វ`), Pali = secondary; gloss `(បាណាតិបាត = ការសម្លាប់)` on first item. |
| 16/27 | `កុសលកម្មបថ ១០`, `អកុសលកម្មបថ ១០` | `កម្មបថ` compound unglossed ("បថ"=path). | `សកម្មភាពល្អ ១០ ប្រភេទ (កុសលកម្មបថ)` / `អំពើអាក្រក់ ១០ ប្រភេទ (អកុសលកម្មបថ)` |
| 84 | `…អាចរួចផុតពីវដ្ដ` | `វដ្ដ` unglossed, compressed. | `…អាចរួចផុតពីវដ្ដ (ការវិលវល់កើតស្លាប់)` |
| 126–131 | `លោភៈ`, `អលោភៈ`… plus bodies `ចំណាយដាច់ ថ្វាយចែក` | Û-suffixed pairs differ only by negation; terse bodies. | `អលោភៈ — ចិត្តមិនលោភ ចេះចែករំលែក និងឲ្យដោយស្ម័គ្រចិត្ត` (complete the fragment) |
| 163 | `…សុទ្ធាវាស ៥ …ព្រះអនាគាមី…` | Two technical terms jammed unglossed. | `…សុទ្ធាវាស ៥ (ឋានស្អាតសម្រាប់អ្នកបរិសុទ្ធ) …ព្រះអនាគាមី (អ្នកលែងវិលមកកើតក្នុងលោកកាមនេះ)…` |
| 147–185 | `កាមសុគតិភូមិ`, `រូបាវចរព្រហ្មភូមិ`, `អរូបាវចរព្រហ្មភូមិ`, 16-plane names | Glosses themselves use `រូបជ្ឈាន`/`អរូបជ្ឈាន`; plane names all unglossed. | Add a plain intro sentence (e.g. "អ្នកមិនចាំបាច់ចាំឈ្មោះទាំងអស់នេះទេ — ជាឋានសួគ៌របស់អ្នកធម៌ស្ងប់ជ្រៅ") + gloss `ឈាន`(សមាធិជ្រៅ) |

### 10. LifeView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 9 | `…ពិតប្រាកដ ៗ — ជាមនុស្ស…ទើបធម៌របស់ព្រះអង្គអាចសម្រេចបាន` | `ពិតប្រាកដ ៗ` odd; `ទើប…` misconnects logic. | `សូមចងចាំថា ព្រះអង្គជាមនុស្ស មិនមែនទេវតាទេ ដូចយើងដែរ — ដូច្នេះហើយ ទើបផ្លូវធម៌របស់ព្រះអង្គ យើងក៏អាចដើរបានដែរ` |
| 49 | `រាជនគរ កបិលព័ស្តុ…មហេសី…សុបិននិមិត្ត…ព្រះឧទរ` | Dense loanword chain, run-on. | Split sentences; gloss `មហេសី`, `សុបិននិមិត្ត`, `ព្រះឧទរ (ផ្ទៃ)` |
| 50 | `…ស្តេចចក្រពត្តិ; បើចេញបួស…បជាបតិគោតមី (ម្ចាស់បង)` | 3 facts fused; `ចក្រពត្តិ` unglossed. | Split into 3 short paragraphs; `ស្តេចចក្រពត្តិ (ស្តេចគ្រប់គ្រងផែនដី)`; `បជាបតិគោតមី (បងស្រី អ្នកមើលថែកូន)` |
| 68 | `ទេវទូតទាំង ៤ …អស្សរោជឆន្នៈ` | Title glossed in body (good); `ឆន្នៈ` unglossed. | `…អ្នកបរសេះឈ្មោះឆន្នៈ` |
| 168 | `…សំណាក់ឆន្នៈ` | `សំណាក់` (refuge) misused for "servant". | `…អ្នកបម្រើឈ្មោះឆន្នៈ` |
| 174 | `…បូណ៌មីវិសាខ…ពោធិព្រឹក្ស…ពោធិមណ្ឌល…` | One long sentence crams 6 location/time facts; `បូណ៌មីវិសាខ` unglossed. | `នៅថ្ងៃពេញបូណ៌មីខែវិសាខ (វិសាខបូជា) ក្រោមដើមពោធិ៍ ទីពោធិមណ្ឌល ប្រទេសឥណ្ឌា ព្រះអង្គត្រាស់ដឹង` |
| 197 | `…ស្តីពីអប្បមាទៈ` | `អប្បមាទៈ` unglossed. | `…ស្តីពីអប្បមាទៈ (សេចក្តីមិនប្រហែសមើលងាយ)` |
| 39/100 | `«អ្វីៗកើតហើយត្រូវបាត់ទៅ — អ្នកទាំងឡាយ ចូរព្យាយាមកុំប្រហែសធ្វេស»` | Choppy; `ប្រហែសធ្វេស` doubled. | `«អ្វីៗកើតឡើងហើយតែងតែបាត់ទៅ — ចូរប្រឹងប្រែង កុំប្រហែស»` |

### 11. MeditationView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 31 | `…ពិនិត្យកាយ វេទនា ចិត្ត ធម៌…មិនទៀង ជាទុក្ខ គ្មានខ្លួន…»` | Dense list before formal introduction; compressed tail. | `…ពិនិត្យមើលកាយ អារម្មណ៍ ចិត្ត និងធម៌ ដែលកើតហើយរលត់ ដឹងថាអ្វីៗមិនទៀង ជាទុក្ខ គ្មានខ្លួនពិត — លែងតោងជាប់ ទើបរួចផុត` |
| 45 | `ឈាន គឺចិត្តតម្កល់…` | `ឈាន` not glossed in own section; `អារម្មណ៍` misread as "emotion". | `ឈាន (សមាធិជ្រៅដ៏ស្ងប់) គឺចិត្តតម្កល់លើវត្ថុមួយ…` |
| 151 | `កម្មដ្ឋាន ៤០` | Pali lead-in label only loosely glossed. | `កម្មដ្ឋាន (ទីតាំងសម្រាប់តម្កល់ចិត្ត) ៤០ — …` |
| 157 | `ត្រៃលក្ខណ៍ — ឃើញ…ជាអនិច្ចំ ទុក្ខំ អនត្តា` | Pali three marks not glossed in Khmer. | `ត្រៃលក្ខណ៍ (លក្ខណៈបីយ៉ាង) — ឃើញ…ជាអនិច្ចំ (មិនទៀង) ទុក្ខំ (ជាទុក្ខ) អនត្តា (គ្មានខ្លួន)` |
| 159 | `ខ្ពើមឆ្អេះ — …តណ្ហា…` | `ខ្ពើមឆ្អេះ` mischosen for nibbidā (disenchantment); `តណ្ហា` unglossed. | `នឿយណាយ (ខ្ពើមឆ្អេះ) — ចិត្តផុតពីការតោងតាមតណ្ហា (សេចក្តីប្រាថ្នា)…` |
| 171–174 | `…នៅមាន វិតក្កៈ វិចារៈ បីតិ សុខៈ…` | Repeated technical factor names unglossed. | Add glossed table above; e.g. `វិតក្កៈ វិចារៈ (គិត និងរក្សាអារម្មណ៍) បីតិ (រីករាយ) សុខៈ (សុខ)` |
| 181 | `ពិនិត្យនីវរណៈ ៥ ពោជ្ឈង្គ ៧ ខន្ធ ៥` | All three terms unglossed. | `នីវរណៈ ៥ (អវយវៈបិទបាំងចិត្ត), ពោជ្ឈង្គ ៧ (ធម៌ជាគ្រឿងត្រាស់ដឹង), ខន្ធ ៥ (ក្រុមរបស់ដែលតាក់តែងរូប-ចិត្ត)` |
| 196 | `រីករាយផូរផង់ បំពេញកាយ` | Odd/repetitive phrasing. | `ភាពរីករាយស្រស់ស្រាយ ពេញបំពេញក្នុងចិត្ត និងកាយ` |
| 218 | `ចិត្តរលះរហ័ស ពេលខឹង` | `រលះរហ័ស` imprecise. | `ចិត្តស្ងប់វិញបានលឿន ពេលខឹង ឬតានតឹង` |

### 12. PaccayaView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 3–5 | `បដិច្ចសមុប្បាទ` (title) | Rare compound; intro (line 9) DOES gloss it (`ប្រែថា «ការកើតឡើងដោយសារហេតុ»`) — good. | Keep; no change (gloss present). |
| 29 | `…អង្គលេខ ១៣–១២…` | Text says links 13–12 but English says 8–10; numerical mismatch confusingly worded. | Align: `អង្គលេខ ៨–១០ (តណ្ហា ឧបាទាន ភព)` |
| 86 | `វិញ្ញាណ នាមរូប សឡាយតនៈ ផស្សៈ វេទនា (ផល)…` | Bare Pali term list. | `វិញ្ញាណ (ការដឹង) នាមរូប (ចិត្ត-កាយ) សឡាយតនៈ (ទ្វារទទួល ៦) ផស្សៈ (ប៉ះអារម្មណ៍) វេទនា (អារម្មណ៍) (ផល)…` |
| 20/50/81/91 | Spaced/technical lines using `ឧបាទាន`, `វិញ្ញាណ`, `អវិជ្ជា` inside prose | Terms recur in prose; first-use gloss only in the list (lines 129+). | On first prose use, add gloss like `តណ្ហា (សេចក្តីប្រាថ្នា)`; thereafter bare. |

### 13. QuestionsView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 53 | `ព្រះពុទ្ធ ជាព្រះ ដែរឬទេ?` | Ambiguous — `ព្រះ` used two ways; choppy. | `ព្រះពុទ្ធ ជាព្រះ (ដូចទេវតា) ឬ ជាមនុស្ស?` |
| 62 | `បុគ្គលបដិបត្តិ មានពិត បញ្ញា កើតឡើង មានពិត…` | Extremely chopped; `មានពិត … មានពិត` clunky. | `បុគ្គលដែលបដិបត្តិពិតជាមាន បញ្ញាកើតឡើងពិតមែន — គ្រាន់តែអ្វីៗកើតហើយរលត់រាល់ខណៈ ឥតអ្នកណាគ្រប់គ្រង ឋិតនៅឡើយ` |
| 70 | `កម្ម អាច ឲ្យផល…ជាតិមុខ…កាល មុខ…ក៏ ថា បាន` | Every word spaced; `ជាតិមុខ`/`កាលមុខ` used interchangeably; `ក៏ថាបាន` odd. | `កម្មអាចឲ្យផលក្នុងជាតិនេះ ជាតិមុខ ឬក្នុងកាលសមគួរ។ …មនុស្សដែលឃើញតែសម្បត្តិសព្វថ្ងៃ អាចនឹងមិនដឹងពីទុក្ខដែលរង់ចាំនៅពេលក្រោយក៏បាន` |
| 78 | `…ដោយ ការសង្កេត ល្អ សីល ហើយ បដិបត្តិ` | `ការសង្កេត ល្អ សីល` wrong; spaced. | `…អាចរំងាប់បាន ដោយការប្រព្រឹត្តល្អ កាន់សីល និងបដិបត្តិដោយខ្នះខ្នែង` |
| 86 | `តាំង ពី របៀប សាមញ្ញ ៖ ស្ងាត់ បន្ថយ កាយ ឲ្យ ត្រង់…` | Chopped; `ស្ងាត់ បន្ថយ កាយ` compressed. | `ចាប់ផ្តើមពីរបៀបសាមញ្ញ ៖ អង្គុយស្ងាត់ ដាក់កាយឲ្យត្រង់ ដកដង្ហើមយឺតៗតាមធម្មតា` |
| 102 | `…ចិត្ត ដែល កើត ថ្មី កើត ពី ហេតុ ចាស់ បែប ជា ខ្លួន…` | Choppy; `បែបជាខ្លួន` awkward. | `ចិត្តដែលកើតថ្មី កើតពីហេតុចាស់ ក្នុងខណៈដែលចិត្តកន្លងទៅ — តែគ្មានខ្លួនថេរណាមួយ ដែលឆ្លងទៅនោះទេ` |
| 118 | `កាល ព្រះ ពុទ្ធ បាន សម្តែង…` | `កាល…បានសម្តែង` ungrammatical. | `ព្រះពុទ្ធ ទ្រង់បានសម្តែងក្នុងសូត្រជាច្រើនថា…` |
| 174 | `ការ ជ្រក នឹង ព្រះ ធ្មប្បី` | `ព្រះ ធ្មប្បី` is a malformed/nonsense term (should be the Triple Gem). | `ការជ្រកនឹងរតនត្រ័យ (ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ)…` |
| 190 | `និព្វាន ជា សេចក្តី រលត់ នៃ រាគៈ ទោសៈ មោហៈ` | `រាគៈ` inconsistent with site's `លោភៈ`; spaced. | `និព្វាន ជាសេចក្តីរលត់នៃលោភៈ (ប្រាថ្នា) ទោសៈ មោហៈ` |
| 206 | `(តិកោដិ បរិសុទ្ធ)` | Heavy Pali for "threefold purity", no gloss. | `(តិកោដិ បរិសុទ្ធ — បរិសុទ្ធដោយទាំងបី ៖ មិនឃើញ មិនឮ មិនប្រាកដថាសម្លាប់ដោយប្រយោជន៍ខ្លួន)` |
| 208 | `សាច់ ដែល បរិសុទ្ធ…; ការ បួស ជា មេត្តា បន្ថែម` | `តិកោដិ` unglossed; `;` splice jarring in Khmer. | `សាច់ដែលបរិសុទ្ធតាមវិធីបីយ៉ាងនោះ អាចបរិភោគបាន។ ចំណែកការបួស ជាការមេត្តាបន្ថែមទៀត` |
| (many) | Pervasive one-word-per-space across the file | Choppy cadence throughout. | Remove word-separating spaces; keep around punctuation and list numbers. |

### 14. RecollectionView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 78–88 | `ដកដង្ហើមដឹងខ្លួន ជាធម៌សម្រាប់ធ្វើសមាធិ` (ĀNĀPĀNĀ) | Minor; `សមាធិ` unglossed but page context clear. | Keep or gloss `សមាធិ (ការហ្វឹកហាត់ចិត្តឲ្យស្ងប់)` on first use. |
| 87 | `ខ្ញុំមានសភាពចាស់ទៅជាមិនរួច` | Awkward phrasing throughout the "five recollections". | `ខ្ញុំមិនអាចរួចពីការចាស់បានឡើយ` (and parallel for sickness/death) |

### 15. SanghaView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 9 | `ព្រះសង្ឃ ជាស្តូបបន្តនៃព្រះពុទ្ធសាសនា` | `ស្តូបបន្ត` odd compound ("living continuation"). | `ព្រះសង្ឃ ជាអ្នកបន្តព្រះពុទ្ធសាសនាឲ្យរស់នៅ` |
| 39 | `បព្វជ្ជា` | Pali title (paired with English `Pabbajjā`). | ok as a title; gloss in body below (present). |
| 87–90 | `បាតិមោក្ខសំវរសីល — កាន់សីលក្នុងប្រាតិមោក្ខ` … | Each purity item is Pali-title + gloss; glosses are terse. | `បាតិមោក្ខសំវរសីល — កាន់សីលតាមប្រាតិមោក្ខ (ច្បាប់វិន័យរបស់ភិក្ខុ)` |
| 103 | `…ទ្រង់ទ្រាយដងខ្លួន…` | `ទ្រង់ទ្រាយ` (sustain) rare/formal. | `…ដើម្បីទ្រទ្រង់កាយ ឲ្យបដិបត្តិ និងសម្រេចផ្លូវបាន` |
| 136 | `…ទក្ខិណេយ្យទក្ខិណា បុណ្យដ៏ប្រសើរ` | Long Pali compound unglossed right before gloss. | `…នេះហៅថា ទក្ខិណេយ្យទក្ខិណា (ទានដល់អ្នកសមគួរ បានបុណ្យប្រសើរ)` |
| 184 | `…ភាវនាចម្រើន…ស្នាក់នៅឥតខ្ចោះ…` | `ស្នាក់នៅឥតខ្ចោះ` cryptic. | `…ភាវនា (ការហ្វឹកហាត់ចិត្ត) ធំជាងសីល; ក្នុងលោក មានតែភាវនា ជាទីពឹងឥតខ្ចោះសម្រាប់ជួយខ្លួន ក្នុងលោកនេះ និងលោកខាងមុខ` |
| 201–204 | `បុរសកាច`, `ស្ត្រីកាច` | `កាច` (fierce) misused for lay followers — likely meant "lay people". | `បុរស/ស្ត្រី អ្នកផ្ទះ (ឧបាសក/ឧបាសិកា)` |

### 16. StoriesView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 9 | `…អដ្ឋកថា ធម្មបទ ដែលលោកសម្រេច រៀបរៀង បន្តពូជ` | `អដ្ឋកថា` unglossed; `លោកសម្រេច` odd. | `…ខ្លះមកពីអដ្ឋកថា (សេចក្តីពន្យល់បុរាណ) នៃធម្មបទ ដែលលោកបានរៀបរៀងបន្តពូជមក` |
| 71/72 | `«ឈប់ទៅ សមណៈ!»` | `សមណៈ` (ascetic) unglossed in dialogue. | `«ឈប់ទៅ អ្នកបួស (សមណៈ)!»` |
| 74/88/102 | essenceK lines | Repeated spaced phrasing like `ជាប់ជុំ នឹង ទង្វើ`. | Remove word spaces; e.g. `កិលេស មិនមែនជាវាសនាទេ — មនុស្ស មិនដែលជាប់ជុំនឹងទង្វើណាមួយជារៀងរហូតឡើយ` |
| 152 | `…ដី មិនចេះជ្រៅឡើយ…ព្រះរាជបុត្រា ដែលគថ្លង់` | `គថ្លង់` (mute) + `ពិការកាយ` fine but heavy; long paragraphs. | Minor: shorten the longest paragraphs; gloss `គថ្លង់ (ពាក្យសំដី`→`»)`. |

### 17. SuttasView.vue
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| 9 | `…មានសូត្ររាប់ពាន់…` | Fine. | Keep. |
| 16 | `បុរាណវាចារ្យបានចែក…` | `បុរាណវាចារ្យ` heavy ("ancient teachers"). | `លោកអ្នកប្រាជ្ញបុរាណបានចែក…` |
| 111–113 | `ធម្មចក្កប្បវត្តនសូត្រ` … `បញ្ចវគ្គិយ ៥ អង្គ គឺ កុណ្ឌញ្ញៈ វប្បៈ ភទ្ទិយៈ មហានាមៈ អស្សជិៈ` | Sutta name + 5 names in one unglossed run. | `…ដល់អ្នកបួសប្រាំនាក់ដំបូង (បញ្ចវគ្គិយ) គឺ កុណ្ឌញ្ញៈ វប្បៈ ភទ្ទិយៈ មហានាមៈ អស្សជិៈ` |
| 118 | `…ញាណ ៣ ជុំ (ទ្វាទសាការ ១២)` | `ទ្វាទសាការ` heavy, redundant with 12. | `…ញាណ ៣ ជុំ (១២ បែប)` |
| 155 | `…អនិសង្ស ១១ ប្រការ — ១) …` | Fine (numbered). | Keep; gloss `អនិសង្ស (ផលប្រយោជន៍)` on first use. |
| 274 | `អេកាយនោ មគ្គោ (ផ្លូវតែមួយ ផ្លូវត្រង់)` | Pali term glossed — good. | Keep. |
| 275–278 | `កាយានុបស្សនា`, `វេទនានុបស្សនា`, `ចិត្តានុបស្សនា`, `ធម្មានុបស្សនា` | Four long Pali names unglossed. | Add gloss: `កាយានុបស្សនា (មើលកាយ)`, `វេទនានុបស្សនា (មើលអារម្មណ៍)`, `ចិត្តានុបស្សនា (មើលចិត្ត)`, `ធម្មានុបស្សនា (មើលធម៌)` |

### 18. AriyaView.vue — (scanned in prior pass; same patterns as above: heavy defs like `អនាគាមី`, `សោតាបត្តិ` appear as headings with prose glosses in body)
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| (headings) | `សោតាបន្ន`, `សកទាគាមី`, `អនាគាមី`, `អរហន្ត` | Pali titles used as headings; if the intro + body gloss them, acceptable — verify first-use gloss present. | If missing, add `សោតាបន្ន (អ្នកដល់ទឹកដល់ផ្លូវដំបូង)` etc. on first use. |

*(Note: mark for on-page verification — treat as: confirm each heading has a Khmer body gloss before editing.)*

### 19. ChantingView.vue — (mostly Pali chant + per-word Khmer gloss, e.g. `ងាយ ស្គាល់ អ្នកដែលវិនាស`)
| Loc | Original Khmer (now) | Why it's hard | Suggested plain-Khmer rewrite |
|---|---|---|---|
| gloss rows | `ងាយ ស្គាល់ អ្នកដែលចម្រើន` … | Glosses are deliberately word-by-word for chant, so wide spacing is intentional & appropriate here. | Keep (this is the one file where spaced gloss is a feature). |
| 380 meanK | `ទេវតាអង្គមួយ បានមកឱនក្រាប…បញ្ចវគ្គិយ` | Long summary with `បញ្ចវគ្គិយ` unglossed. | Gloss `បញ្ចវគ្គិយ (អ្នកបួសប្រាំនាក់)`. |

---

## Recommended next step

This report is ready for your review. When you approve a batch, I can apply the rewrites as edits (keeping the Pali term + adding the gloss, removing spacer-word spaces), then run `npm run build`/dev to verify, commit, and (if you wish) push & deploy. Because the file encoding is critical, I will **only** use the `edit` tool on `.vue` files (never PowerShell redirection).

### Suggested batching (for approval)
1. **High-impact/small:** `KammaView.vue` (cat-5 labels + headers), `HomeView.vue` (homepage glosses), `QuestionsView.vue` (spacing + `ធ្មប្បី` fix).
2. **Terminology pass:** `DailyView`, `EthicsView`, `CoreView`, `GlossaryView`.
3. **Remaining views:** `Abhidhamma`, `Gatha`, `Life`, `Meditation`, `Sangha`, `Suttas`, `Paccaya`, `Recollection`, `Ariya`.

Let me know which batch(es) to apply, or whether you'd like any suggestion adjusted.
