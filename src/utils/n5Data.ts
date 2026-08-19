// Comprehensive JLPT N5 Master Seed & Client-Side Data Store

export interface CharacterItem {
  id: string;
  char: string;
  type: 'hiragana' | 'katakana' | 'kanji';
  romaji: string;
  onyomi?: string;
  kunyomi?: string;
  meaning_en: string;
  meaning_ta: string;
  mnemonic_en: string;
  mnemonic_ta: string;
  stroke_count: number;
  stroke_steps?: string[];
  vocabulary?: { word: string; reading: string; meaning_en: string; meaning_ta: string }[];
}

export interface VocabItem {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning_en: string;
  meaning_ta: string;
  category: string; // Greetings, Numbers, Time, Actions, Family, Food, etc.
  example_ja: string;
  example_en: string;
  example_ta: string;
}

export interface GrammarItem {
  id: string;
  pattern: string;
  title_en: string;
  title_ta: string;
  explanation_en: string;
  explanation_ta: string;
  structure: string;
  examples: { ja: string; reading: string; en: string; ta: string }[];
}

export interface ReadingItem {
  id: string;
  title_ja: string;
  title_en: string;
  title_ta: string;
  content_ja: string;
  content_furigana: { word: string; ruby?: string }[];
  translation_en: string;
  translation_ta: string;
  questions: {
    question_ja: string;
    question_en: string;
    question_ta: string;
    options: string[];
    correct: number;
    explanation_en: string;
    explanation_ta: string;
  }[];
}

export interface ListeningItem {
  id: string;
  title: string;
  audioText: string;
  speaker: string;
  options: string[];
  correct: number;
  explanation_en: string;
  explanation_ta: string;
}

// Hiragana Vowels & Basic Rows
export const HIRAGANA_DATA: CharacterItem[] = [
  {
    id: 'h_a', char: 'あ', type: 'hiragana', romaji: 'a', stroke_count: 3,
    meaning_en: 'Vowel "a" as in "apple" or "father"',
    meaning_ta: 'உயிர் எழுத்து "அ" (அம்மா)',
    mnemonic_en: 'Looks like an Apple with a stem on top.',
    mnemonic_ta: 'ஒரு ஆப்பிள் பழத்தின் காம்பு போலக் காணப்படும்.',
    vocabulary: [
      { word: 'あい', reading: 'あい', meaning_en: 'Love', meaning_ta: 'அன்பு' },
      { word: 'あさ', reading: 'あさ', meaning_en: 'Morning', meaning_ta: 'காலை' },
      { word: 'あめ', reading: 'あめ', meaning_en: 'Rain / Candy', meaning_ta: 'மழை / மிட்டாய்' }
    ]
  },
  {
    id: 'h_i', char: 'い', type: 'hiragana', romaji: 'i', stroke_count: 2,
    meaning_en: 'Vowel "i" as in "easy" or "ee"',
    meaning_ta: 'உயிர் எழுத்து "இ" (இலை)',
    mnemonic_en: 'Two Eels swimming side by side.',
    mnemonic_ta: 'இரண்டு ஈல் மீன்கள் பக்கவாட்டில் நீந்துவது போல.',
    vocabulary: [
      { word: 'いぬ', reading: 'いぬ', meaning_en: 'Dog', meaning_ta: 'நாய்' },
      { word: 'いい', reading: 'いい', meaning_en: 'Good', meaning_ta: 'நல்ல' },
      { word: 'いえ', reading: 'いえ', meaning_en: 'House', meaning_ta: 'வீடு' }
    ]
  },
  {
    id: 'h_u', char: 'う', type: 'hiragana', romaji: 'u', stroke_count: 2,
    meaning_en: 'Vowel "u" as in "flute" (short u sound)',
    meaning_ta: 'உயிர் எழுத்து "உ" (உரல்)',
    mnemonic_en: 'A person bent over kicking a football sound: "Ugh!".',
    mnemonic_ta: 'ஒருவர் வளைந்து நிற்பது போன்ற வடிவம்.',
    vocabulary: [
      { word: 'うみ', reading: 'うみ', meaning_en: 'Sea / Ocean', meaning_ta: 'கடல்' },
      { word: 'うた', reading: 'うた', meaning_en: 'Song', meaning_ta: 'பாடல்' },
      { word: 'うえ', reading: 'うえ', meaning_en: 'Above / Up', meaning_ta: 'மேலே' }
    ]
  },
  {
    id: 'h_e', char: 'え', type: 'hiragana', romaji: 'e', stroke_count: 2,
    meaning_en: 'Vowel "e" as in "pet" or "echo"',
    meaning_ta: 'உயிர் எழுத்து "எ" (எலி)',
    mnemonic_en: 'An Energetic runner crossing a line.',
    mnemonic_ta: 'ஓட்டப்பந்தயத்தில் ஓடும் வீரர் போல.',
    vocabulary: [
      { word: 'えき', reading: 'えき', meaning_en: 'Train Station', meaning_ta: 'ரயில் நிலையம்' },
      { word: 'えんぴつ', reading: 'えんぴつ', meaning_en: 'Pencil', meaning_ta: 'பென்சில்' },
      { word: 'えいが', reading: 'えいが', meaning_en: 'Movie', meaning_ta: 'திரைப்படம்' }
    ]
  },
  {
    id: 'h_o', char: 'お', type: 'hiragana', romaji: 'o', stroke_count: 3,
    meaning_en: 'Vowel "o" as in "orbit" or "oh"',
    meaning_ta: 'உயிர் எழுத்து "ஒ" (ஒட்டகம்)',
    mnemonic_en: 'A golfer making a hole in One.',
    mnemonic_ta: 'கோல்ஃப் பந்தை அடிக்கும் வடிவம்.',
    vocabulary: [
      { word: 'おちゃ', reading: 'おちゃ', meaning_en: 'Green Tea', meaning_ta: 'பச்சை தேநீர்' },
      { word: 'おおかみ', reading: 'おおかみ', meaning_en: 'Wolf', meaning_ta: 'நாய் / ஓநாய்' },
      { word: 'おとうさん', reading: 'おとうさん', meaning_en: 'Father', meaning_ta: 'தந்தை' }
    ]
  },
  // KA Row
  { id: 'h_ka', char: 'か', type: 'hiragana', romaji: 'ka', stroke_count: 3, meaning_en: 'Sound "ka"', meaning_ta: 'க் + அ = க', mnemonic_en: 'A blade Cutting a piece of wood.', mnemonic_ta: 'மரத்தை வெட்டும் கத்தி.', vocabulary: [{ word: 'かさ', reading: 'かさ', meaning_en: 'Umbrella', meaning_ta: 'குடை' }] },
  { id: 'h_ki', char: 'き', type: 'hiragana', romaji: 'ki', stroke_count: 4, meaning_en: 'Sound "ki"', meaning_ta: 'க் + இ = கி', mnemonic_en: 'A Key inserted into a lock.', mnemonic_ta: 'பூட்டின் சாவி வடிவம்.', vocabulary: [{ word: 'き', reading: 'き', meaning_en: 'Tree', meaning_ta: 'மரம்' }] },
  { id: 'h_ku', char: 'く', type: 'hiragana', romaji: 'ku', stroke_count: 1, meaning_en: 'Sound "ku"', meaning_ta: 'க் + உ = கு', mnemonic_en: 'The beak of a Cuckoo bird saying "Koo!".', mnemonic_ta: 'குயில் பறவையின் அலகு.', vocabulary: [{ word: 'くるま', reading: 'くるま', meaning_en: 'Car', meaning_ta: 'கார்' }] },
  { id: 'h_ke', char: 'け', type: 'hiragana', romaji: 'ke', stroke_count: 3, meaning_en: 'Sound "ke"', meaning_ta: 'க் + எ = கெ', mnemonic_en: 'A Keg / barrel of water.', mnemonic_ta: 'தண்ணீர் பேரல் வடிவம்.', vocabulary: [{ word: 'けいさつ', reading: 'けいさつ', meaning_en: 'Police', meaning_ta: 'காவல்துறை' }] },
  { id: 'h_ko', char: 'こ', type: 'hiragana', romaji: 'ko', stroke_count: 2, meaning_en: 'Sound "ko"', meaning_ta: 'க் + ஒ = கொ', mnemonic_en: 'Two Koala bear arms hugging.', mnemonic_ta: 'கோலா கரடியின் கரங்கள்.', vocabulary: [{ word: 'こども', reading: 'こども', meaning_en: 'Child', meaning_ta: 'குழந்தை' }] },
  // SA Row
  { id: 'h_sa', char: 'さ', type: 'hiragana', romaji: 'sa', stroke_count: 3, meaning_en: 'Sound "sa"', meaning_ta: 'ஸ் + அ = ச', mnemonic_en: 'A Samurai sword slashing.', mnemonic_ta: 'சாமுராய் வாள்.', vocabulary: [{ word: 'さかな', reading: 'さかな', meaning_en: 'Fish', meaning_ta: 'மீன்' }] },
  { id: 'h_shi', char: 'し', type: 'hiragana', romaji: 'shi', stroke_count: 1, meaning_en: 'Sound "shi"', meaning_ta: 'ஸ் + இ = ஷி', mnemonic_en: 'A fishing Hook underwater.', mnemonic_ta: 'தூண்டில் முள் வடிவம்.', vocabulary: [{ word: 'しんぶん', reading: 'しんぶん', meaning_en: 'Newspaper', meaning_ta: 'செய்தித்தாள்' }] },
  { id: 'h_su', char: 'す', type: 'hiragana', romaji: 'su', stroke_count: 2, meaning_en: 'Sound "su"', meaning_ta: 'ஸ் + உ = சு', mnemonic_en: 'Soup dripping down a spoon.', mnemonic_ta: 'கரண்டியிலிருந்து சொட்டும் சூப்.', vocabulary: [{ word: 'すし', reading: 'すし', meaning_en: 'Sushi', meaning_ta: 'சுஷி' }] },
  { id: 'h_se', char: 'せ', type: 'hiragana', romaji: 'se', stroke_count: 3, meaning_en: 'Sound "se"', meaning_ta: 'ஸ் + எ = செ', mnemonic_en: 'Two people Sitting on a bench.', mnemonic_ta: 'பெஞ்சில் அமர்ந்திருக்கும் இருவர்.', vocabulary: [{ word: 'せんせい', reading: 'せんせい', meaning_en: 'Teacher / Sensei', meaning_ta: 'ஆசிரியர்' }] },
  { id: 'h_so', char: 'そ', type: 'hiragana', romaji: 'so', stroke_count: 1, meaning_en: 'Sound "so"', meaning_ta: 'ஸ் + ஒ = சொ', mnemonic_en: 'Sewing stitches in a zigzag.', mnemonic_ta: 'தையல் தையல் வடிவம்.', vocabulary: [{ word: 'そら', reading: 'そら', meaning_en: 'Sky', meaning_ta: 'வானம்' }] },
  // TA Row
  { id: 'h_ta', char: 'た', type: 'hiragana', romaji: 'ta', stroke_count: 4, meaning_en: 'Sound "ta"', meaning_ta: 'த் + அ = த', mnemonic_en: 'Looks like the letters T and a.', mnemonic_ta: 'T மற்றும் a போன்ற தோற்றம்.', vocabulary: [{ word: 'たべる', reading: 'たべる', meaning_en: 'To eat', meaning_ta: 'சாப்பிடு' }] },
  { id: 'h_chi', char: 'ち', type: 'hiragana', romaji: 'chi', stroke_count: 2, meaning_en: 'Sound "chi"', meaning_ta: 'ச் + இ = சி', mnemonic_en: 'A Cheerleader performing a dance.', mnemonic_ta: 'நடனமாடும் பெண்.', vocabulary: [{ word: 'ちいさい', reading: 'ちいさい', meaning_en: 'Small', meaning_ta: 'சிறிய' }] },
  { id: 'h_tsu', char: 'つ', type: 'hiragana', romaji: 'tsu', stroke_count: 1, meaning_en: 'Sound "tsu"', meaning_ta: 'த்ஸ் + உ = சு', mnemonic_en: 'A big Tsunami wave curling.', mnemonic_ta: 'சுனாமி அலை வடிவம்.', vocabulary: [{ word: 'つくえ', reading: 'つくえ', meaning_en: 'Desk', meaning_ta: 'மேஜை' }] },
  { id: 'h_te', char: 'て', type: 'hiragana', romaji: 'te', stroke_count: 1, meaning_en: 'Sound "te"', meaning_ta: 'த் + எ = தெ', mnemonic_en: 'A bendy Tennis racket.', mnemonic_ta: 'டென்னிஸ் ரேக்கெட்.', vocabulary: [{ word: 'て', reading: 'て', meaning_en: 'Hand', meaning_ta: 'கை' }] },
  { id: 'h_to', char: 'と', type: 'hiragana', romaji: 'to', stroke_count: 2, meaning_en: 'Sound "to"', meaning_ta: 'த் + ஒ = தொ', mnemonic_en: 'A Toe with a splinter.', mnemonic_ta: 'கால் விரல் வடிவம்.', vocabulary: [{ word: 'ともだち', reading: 'ともだち', meaning_en: 'Friend', meaning_ta: 'நண்பன்' }] },
  // NA Row
  { id: 'h_na', char: 'な', type: 'hiragana', romaji: 'na', stroke_count: 4, meaning_en: 'Sound "na"', meaning_ta: 'ந் + அ = ந', mnemonic_en: 'A Nun praying in front of a cross.', mnemonic_ta: 'ஜெபிக்கும் கன்னியாஸ்திரி.', vocabulary: [{ word: 'なつ', reading: 'なつ', meaning_en: 'Summer', meaning_ta: 'கோடைக்காலம்' }] },
  { id: 'h_ni', char: 'に', type: 'hiragana', romaji: 'ni', stroke_count: 3, meaning_en: 'Sound "ni"', meaning_ta: 'ந் + இ = நி', mnemonic_en: 'Needle and thread sewing.', mnemonic_ta: 'ஊசியும் நூலும்.', vocabulary: [{ word: 'にく', reading: 'にく', meaning_en: 'Meat', meaning_ta: 'இறைச்சி' }] },
  { id: 'h_nu', char: 'ぬ', type: 'hiragana', romaji: 'nu', stroke_count: 2, meaning_en: 'Sound "nu"', meaning_ta: 'ந் + உ = நு', mnemonic_en: 'Noodles wrapped on a chopstick.', mnemonic_ta: 'நூடுல்ஸ் வடிவம்.', vocabulary: [{ word: 'いぬ', reading: 'いぬ', meaning_en: 'Dog', meaning_ta: 'நாய்' }] },
  { id: 'h_ne', char: 'ね', type: 'hiragana', romaji: 'ne', stroke_count: 2, meaning_en: 'Sound "ne"', meaning_ta: 'ந் + எ = நெ', mnemonic_en: 'A Cat (Neko) with a curly tail.', mnemonic_ta: 'பூனையின் சுருள் வால்.', vocabulary: [{ word: 'ねこ', reading: 'ねこ', meaning_en: 'Cat', meaning_ta: 'பூனை' }] },
  { id: 'h_no', char: 'の', type: 'hiragana', romaji: 'no', stroke_count: 1, meaning_en: 'Sound "no"', meaning_ta: 'ந் + ஒ = நொ', mnemonic_en: 'A "NO" entry sign circle.', mnemonic_ta: 'தடைசெய்யப்பட்ட வட்டம்.', vocabulary: [{ word: 'のむ', reading: 'のむ', meaning_en: 'To drink', meaning_ta: 'குடி' }] },
  // HA Row
  { id: 'h_ha', char: 'は', type: 'hiragana', romaji: 'ha', stroke_count: 3, meaning_en: 'Sound "ha"', meaning_ta: 'ஹ் + அ = ஹ', mnemonic_en: 'A Hockey stick hitting a ball.', mnemonic_ta: 'ஹாக்கி மட்டை.', vocabulary: [{ word: 'はな', reading: 'はな', meaning_en: 'Flower / Nose', meaning_ta: 'மலர் / மூக்கு' }] },
  { id: 'h_hi', char: 'ひ', type: 'hiragana', romaji: 'hi', stroke_count: 1, meaning_en: 'Sound "hi"', meaning_ta: 'ஹ் + இ = ஹி', mnemonic_en: 'He has a big smiling mouth: "Hee-hee".', mnemonic_ta: 'சிரிக்கும் வாய்.', vocabulary: [{ word: 'ひと', reading: 'ひと', meaning_en: 'Person', meaning_ta: 'மனிதன்' }] },
  { id: 'h_fu', char: 'ふ', type: 'hiragana', romaji: 'fu', stroke_count: 4, meaning_en: 'Sound "fu"', meaning_ta: 'ஃப் + உ = ஃபு', mnemonic_en: 'Mount Fuji peaking.', mnemonic_ta: 'ஃபூஜி மலை சிகரம்.', vocabulary: [{ word: 'ふね', reading: 'ふね', meaning_en: 'Ship', meaning_ta: 'கப்பல்' }] },
  { id: 'h_he', char: 'へ', type: 'hiragana', romaji: 'he', stroke_count: 1, meaning_en: 'Sound "he"', meaning_ta: 'ஹ் + எ = ஹெ', mnemonic_en: 'A High mountain top slope.', mnemonic_ta: 'மலை உச்சி வடிவம்.', vocabulary: [{ word: 'へや', reading: 'へや', meaning_en: 'Room', meaning_ta: 'அறை' }] },
  { id: 'h_ho', char: 'ほ', type: 'hiragana', romaji: 'ho', stroke_count: 4, meaning_en: 'Sound "ho"', meaning_ta: 'ஹ் + ஒ = ஹொ', mnemonic_en: 'A Santa wearing a Hat saying "Ho ho ho".', mnemonic_ta: 'சாண்டா தொப்பி.', vocabulary: [{ word: 'ほん', reading: 'ほん', meaning_en: 'Book', meaning_ta: 'புத்தகம்' }] },
  // MA Row
  { id: 'h_ma', char: 'ま', type: 'hiragana', romaji: 'ma', stroke_count: 3, meaning_en: 'Sound "ma"', meaning_ta: 'ம் + அ = ம', mnemonic_en: 'Calling "Mama!" with two arms.', mnemonic_ta: 'அம்மா அழைக்க இரு கைகள்.', vocabulary: [{ word: 'まち', reading: 'まち', meaning_en: 'Town / City', meaning_ta: 'நகரம்' }] },
  { id: 'h_mi', char: 'み', type: 'hiragana', romaji: 'mi', stroke_count: 2, meaning_en: 'Sound "mi"', meaning_ta: 'ம் + இ = மி', mnemonic_en: 'Looks like number 21.', mnemonic_ta: 'எண் 21 போன்ற வடிவம்.', vocabulary: [{ word: 'みず', reading: 'みず', meaning_en: 'Water', meaning_ta: 'தண்ணீர்' }] },
  { id: 'h_mu', char: 'む', type: 'hiragana', romaji: 'mu', stroke_count: 3, meaning_en: 'Sound "mu"', meaning_ta: 'ம் + உ = மு', mnemonic_en: 'A Cow saying "Moo" with a tail.', mnemonic_ta: 'மாடு கத்தும் வடிவம்.', vocabulary: [{ word: 'むし', reading: 'むし', meaning_en: 'Insect', meaning_ta: 'பூச்சி' }] },
  { id: 'h_me', char: 'め', type: 'hiragana', romaji: 'me', stroke_count: 2, meaning_en: 'Sound "me"', meaning_ta: 'ம் + எ = மெ', mnemonic_en: 'An Eye (Me = め in Japanese!).', mnemonic_ta: 'கண் வடிவம் (மே = கண்).', vocabulary: [{ word: 'め', reading: 'め', meaning_en: 'Eye', meaning_ta: 'கண்' }] },
  { id: 'h_mo', char: 'も', type: 'hiragana', romaji: 'mo', stroke_count: 3, meaning_en: 'Sound "mo"', meaning_ta: 'ம் + ஒ = மொ', mnemonic_en: 'A fishhook catching More fish.', mnemonic_ta: 'தூண்டில் முள்.', vocabulary: [{ word: 'もり', reading: 'もり', meaning_en: 'Forest', meaning_ta: 'காடு' }] },
  // YA Row
  { id: 'h_ya', char: 'や', type: 'hiragana', romaji: 'ya', stroke_count: 3, meaning_en: 'Sound "ya"', meaning_ta: 'ய் + அ = ய', mnemonic_en: 'A Yak with big horns.', mnemonic_ta: 'யாக்கில் உள்ள கொம்புகள்.', vocabulary: [{ word: 'やま', reading: 'やま', meaning_en: 'Mountain', meaning_ta: 'மலை' }] },
  { id: 'h_yu', char: 'ゆ', type: 'hiragana', romaji: 'yu', stroke_count: 2, meaning_en: 'Sound "yu"', meaning_ta: 'ய் + உ = யு', mnemonic_en: 'A Fish swimming in a Hot Spring (Yu).', mnemonic_ta: 'சுடுநீரூற்று வடிவம்.', vocabulary: [{ word: 'ゆき', reading: 'ゆき', meaning_en: 'Snow', meaning_ta: 'பனி' }] },
  { id: 'h_yo', char: 'よ', type: 'hiragana', romaji: 'yo', stroke_count: 2, meaning_en: 'Sound "yo"', meaning_ta: 'ய் + ஒ = யொ', mnemonic_en: 'A Yo-Yo dangling from a finger.', mnemonic_ta: 'யோ-யோ விளையாட்டுப் பொருள்.', vocabulary: [{ word: 'よる', reading: 'よる', meaning_en: 'Night', meaning_ta: 'இரவு' }] },
  // RA Row
  { id: 'h_ra', char: 'ら', type: 'hiragana', romaji: 'ra', stroke_count: 2, meaning_en: 'Sound "ra"', meaning_ta: 'ர் + அ = ர', mnemonic_en: 'A Rabbit sitting on its feet.', mnemonic_ta: 'முயல் அமர்ந்திருப்பது போல.', vocabulary: [{ word: 'らいしゅう', reading: 'らいしゅう', meaning_en: 'Next week', meaning_ta: 'அடுத்த வாரம்' }] },
  { id: 'h_ri', char: 'り', type: 'hiragana', romaji: 'ri', stroke_count: 2, meaning_en: 'Sound "ri"', meaning_ta: 'ர் + இ = ரி', mnemonic_en: 'River streams running parallel.', mnemonic_ta: 'ஆற்றின் இரு கரைகள்.', vocabulary: [{ word: 'りんご', reading: 'りんご', meaning_en: 'Apple', meaning_ta: 'ஆப்பிள்' }] },
  { id: 'h_ru', char: 'る', type: 'hiragana', romaji: 'ru', stroke_count: 1, meaning_en: 'Sound "ru"', meaning_ta: 'ர் + உ = ரு', mnemonic_en: 'A Loop road winding around.', mnemonic_ta: 'சுருள் பாதை.', vocabulary: [{ word: 'くるま', reading: 'くるま', meaning_en: 'Car', meaning_ta: 'கார்' }] },
  { id: 'h_re', char: 'れ', type: 'hiragana', romaji: 're', stroke_count: 2, meaning_en: 'Sound "re"', meaning_ta: 'ர் + எ = ரெ', mnemonic_en: 'A person Resting against a tree.', mnemonic_ta: 'மரத்தின் கீழ் ஓய்வெடுப்பவர்.', vocabulary: [{ word: 'れいぞうこ', reading: 'れいぞうこ', meaning_en: 'Refrigerator', meaning_ta: 'குளிர்சாதனப் பெட்டி' }] },
  { id: 'h_ro', char: 'ろ', type: 'hiragana', romaji: 'ro', stroke_count: 1, meaning_en: 'Sound "ro"', meaning_ta: 'ர் + ஒ = ரொ', mnemonic_en: 'Road winding with no loop at bottom.', mnemonic_ta: 'வளைவுப் பாதை.', vocabulary: [{ word: 'ろく', reading: 'ろく', meaning_en: 'Six (6)', meaning_ta: 'ஆறு (6)' }] },
  // WA, WO, N
  { id: 'h_wa', char: 'わ', type: 'hiragana', romaji: 'wa', stroke_count: 2, meaning_en: 'Sound "wa"', meaning_ta: 'வ் + அ = வ', mnemonic_en: 'A Wasp with a round body.', mnemonic_ta: 'வண்டு வடிவம்.', vocabulary: [{ word: 'わたし', reading: 'わたし', meaning_en: 'I / Me', meaning_ta: 'நான்' }] },
  { id: 'h_wo', char: 'を', type: 'hiragana', romaji: 'wo', stroke_count: 3, meaning_en: 'Sound "o/wo" (Object Particle)', meaning_ta: 'செயப்படுபொருள் இடைச்சொல்', mnemonic_en: 'An Olympic skater doing a leap.', mnemonic_ta: 'செயப்படுபொருள் இடைச்சொல் (வ/ஒ).', vocabulary: [{ word: 'ほんをよむ', reading: 'ほんをよむ', meaning_en: 'Read a book', meaning_ta: 'புத்தகம் படித்தல்' }] },
  { id: 'h_n', char: 'ん', type: 'hiragana', romaji: 'n', stroke_count: 1, meaning_en: 'Sound "n" (Nasal consonant)', meaning_ta: 'இணைப்பு மெய்யெழுத்து "ன்"', mnemonic_en: 'Looks like cursive lowercase "n".', mnemonic_ta: 'ஆங்கில "n" எழுத்து வடிவம்.', vocabulary: [{ word: 'にほん', reading: 'にほん', meaning_en: 'Japan', meaning_ta: 'ஜப்பான்' }] }
];

// Katakana Core Basic Characters
export const KATAKANA_DATA: CharacterItem[] = [
  { id: 'k_a', char: 'ア', type: 'katakana', romaji: 'a', stroke_count: 2, meaning_en: 'Katakana "a"', meaning_ta: 'கதகனா "அ"', mnemonic_en: 'Looks like an Arrow pointing down.', mnemonic_ta: 'கீழ்நோக்கி சுட்டும் அம்பு.', vocabulary: [{ word: 'アメリカ', reading: 'アメリカ', meaning_en: 'America', meaning_ta: 'அமெரிக்கா' }] },
  { id: 'k_i', char: 'イ', type: 'katakana', romaji: 'i', stroke_count: 2, meaning_en: 'Katakana "i"', meaning_ta: 'கதகனா "இ"', mnemonic_en: 'An Easel standing.', mnemonic_ta: 'வரைபட பலகை தாங்கி.', vocabulary: [{ word: 'インド', reading: 'インド', meaning_en: 'India', meaning_ta: 'இந்தியா' }] },
  { id: 'k_u', char: 'ウ', type: 'katakana', romaji: 'u', stroke_count: 3, meaning_en: 'Katakana "u"', meaning_ta: 'கதகனா "உ"', mnemonic_en: 'An Umbrella top.', mnemonic_ta: 'குடையின் உச்சி.', vocabulary: [{ word: 'ウェブ', reading: 'ウェブ', meaning_en: 'Web', meaning_ta: 'இணையம்' }] },
  { id: 'k_e', char: 'エ', type: 'katakana', romaji: 'e', stroke_count: 3, meaning_en: 'Katakana "e"', meaning_ta: 'கதகனா "எ"', mnemonic_en: 'An Elevator frame.', mnemonic_ta: 'மின் தூக்கி வடிவம்.', vocabulary: [{ word: 'エアコン', reading: 'エアコン', meaning_en: 'Air Conditioner', meaning_ta: 'குளிர்சாதனம்' }] },
  { id: 'k_o', char: 'オ', type: 'katakana', romaji: 'o', stroke_count: 3, meaning_en: 'Katakana "o"', meaning_ta: 'கதகனா "ஒ"', mnemonic_en: 'An Opera singer with outstretched arm.', mnemonic_ta: 'பாடகரின் கை நீட்டிய தோற்றம்.', vocabulary: [{ word: 'オレンジ', reading: 'オレンジ', meaning_en: 'Orange', meaning_ta: 'ஆரஞ்சு' }] },
  { id: 'k_ka', char: 'カ', type: 'katakana', romaji: 'ka', stroke_count: 2, meaning_en: 'Katakana "ka"', meaning_ta: 'கதகனா "கா"', mnemonic_en: 'Sharp version of Hiragana か.', mnemonic_ta: 'ஹிரகனா か-வின் கூர்மையான வடிவம்.', vocabulary: [{ word: 'カメラ', reading: 'カメラ', meaning_en: 'Camera', meaning_ta: 'கேமரா' }] },
  { id: 'k_ki', char: 'キ', type: 'katakana', romaji: 'ki', stroke_count: 3, meaning_en: 'Katakana "ki"', meaning_ta: 'கதகனா "கி"', mnemonic_en: 'Key shape without bottom loop.', mnemonic_ta: 'சாவியின் மேல் பகுதி.', vocabulary: [{ word: 'キロ', reading: 'キロ', meaning_en: 'Kilo', meaning_ta: 'கிலோ' }] },
  { id: 'k_ku', char: 'ク', type: 'katakana', romaji: 'ku', stroke_count: 2, meaning_en: 'Katakana "ku"', meaning_ta: 'கதகனா "கு"', mnemonic_en: 'A Cook hat corner.', mnemonic_ta: 'சமையல் தொப்பியின் விளிம்பு.', vocabulary: [{ word: 'クラス', reading: 'クラス', meaning_en: 'Class', meaning_ta: 'வகுப்பு' }] },
  { id: 'k_ke', char: 'ケ', type: 'katakana', romaji: 'ke', stroke_count: 3, meaning_en: 'Katakana "ke"', meaning_ta: 'கதகனா "கெ"', mnemonic_en: 'A corner of a Kennel.', mnemonic_ta: 'நாய்க்கூட்டின் மூலை.', vocabulary: [{ word: 'ケーキ', reading: 'ケーキ', meaning_en: 'Cake', meaning_ta: 'கேக்' }] },
  { id: 'k_ko', char: 'コ', type: 'katakana', romaji: 'ko', stroke_count: 2, meaning_en: 'Katakana "ko"', meaning_ta: 'கதகனா "கொ"', mnemonic_en: 'Two sides of a Corner.', mnemonic_ta: 'மூலையின் இரு பக்கங்கள்.', vocabulary: [{ word: 'コーヒー', reading: 'コーヒー', meaning_en: 'Coffee', meaning_ta: 'காபி' }] },
  { id: 'k_sa', char: 'サ', type: 'katakana', romaji: 'sa', stroke_count: 3, meaning_en: 'Katakana "sa"', meaning_ta: 'கதகனா "ச"', mnemonic_en: 'Three Straws in a glass.', mnemonic_ta: 'மூன்று உறிஞ்சு குழாய்கள்.', vocabulary: [{ word: 'サッカー', reading: 'サッカー', meaning_en: 'Soccer / Football', meaning_ta: 'கால்பந்து' }] },
  { id: 'k_shi', char: 'シ', type: 'katakana', romaji: 'shi', stroke_count: 3, meaning_en: 'Katakana "shi"', meaning_ta: 'கதகனா "ஷி"', mnemonic_en: 'She looking up with two eyes.', mnemonic_ta: 'மேலே பார்க்கும் கண்கள்.', vocabulary: [{ word: 'シャツ', reading: 'シャツ', meaning_en: 'Shirt', meaning_ta: 'சட்டை' }] },
  { id: 'k_su', char: 'ス', type: 'katakana', romaji: 'su', stroke_count: 2, meaning_en: 'Katakana "su"', meaning_ta: 'கதகனா "சு"', mnemonic_en: 'A Hanger holding Super pants.', mnemonic_ta: 'ஆடை மாட்டி.', vocabulary: [{ word: 'スーパー', reading: 'スーパー', meaning_en: 'Supermarket', meaning_ta: 'சூப்பர் மார்க்கெட்' }] },
  { id: 'k_se', char: 'セ', type: 'katakana', romaji: 'se', stroke_count: 2, meaning_en: 'Katakana "se"', meaning_ta: 'கதகனா "செ"', mnemonic_en: 'Similar to Hiragana せ.', mnemonic_ta: 'ஹிரகனா せ போன்றது.', vocabulary: [{ word: 'セット', reading: 'セット', meaning_en: 'Set', meaning_ta: 'செட்' }] },
  { id: 'k_so', char: 'ソ', type: 'katakana', romaji: 'so', stroke_count: 2, meaning_en: 'Katakana "so"', meaning_ta: 'கதகனா "சொ"', mnemonic_en: 'Ice cream Scoop line.', mnemonic_ta: 'ஐஸ்கிரீம் வடிவம்.', vocabulary: [{ word: 'ソファー', reading: 'ソファー', meaning_en: 'Sofa', meaning_ta: 'சோபா' }] },
  { id: 'k_ta', char: 'タ', type: 'katakana', romaji: 'ta', stroke_count: 3, meaning_en: 'Katakana "ta"', meaning_ta: 'கதகனா "த"', mnemonic_en: 'Taco shell top.', mnemonic_ta: 'டாக்கோ வடிவம்.', vocabulary: [{ word: 'タクシー', reading: 'タクシー', meaning_en: 'Taxi', meaning_ta: 'டாக்ஸி' }] },
  { id: 'k_chi', char: 'チ', type: 'katakana', romaji: 'chi', stroke_count: 3, meaning_en: 'Katakana "chi"', meaning_ta: 'கதகனா "சி"', mnemonic_en: 'Cheerleader pom-pom stem.', mnemonic_ta: 'நடனக் குச்சி.', vocabulary: [{ word: 'チーム', reading: 'チーム', meaning_en: 'Team', meaning_ta: 'அணி' }] },
  { id: 'k_tsu', char: 'ツ', type: 'katakana', romaji: 'tsu', stroke_count: 3, meaning_en: 'Katakana "tsu"', meaning_ta: 'கதகனா "சு"', mnemonic_en: 'Tsunami droplets falling.', mnemonic_ta: 'நீர் துளிகள்.', vocabulary: [{ word: 'ツアー', reading: 'ツアー', meaning_en: 'Tour', meaning_ta: 'சுற்றுலா' }] },
  { id: 'k_te', char: 'テ', type: 'katakana', romaji: 'te', stroke_count: 3, meaning_en: 'Katakana "te"', meaning_ta: 'கதகனா "தெ"', mnemonic_en: 'Telephone pole crossbars.', mnemonic_ta: 'தொலைபேசி கம்பம்.', vocabulary: [{ word: 'テスト', reading: 'テスト', meaning_en: 'Test / Exam', meaning_ta: 'தேர்வு' }] },
  { id: 'k_to', char: 'ト', type: 'katakana', romaji: 'to', stroke_count: 2, meaning_en: 'Katakana "to"', meaning_ta: 'கதகனா "தொ"', mnemonic_en: 'Totem pole branch.', mnemonic_ta: 'மரக் கிளை.', vocabulary: [{ word: 'トイレ', reading: 'トイレ', meaning_en: 'Toilet / Restroom', meaning_ta: 'கழிப்பறை' }] },
  { id: 'k_na', char: 'ナ', type: 'katakana', romaji: 'na', stroke_count: 2, meaning_en: 'Katakana "na"', meaning_ta: 'கதகனா "ந"', mnemonic_en: 'Cross line.', mnemonic_ta: 'சிலுவை வடிவம்.', vocabulary: [{ word: 'ナイフ', reading: 'ナイフ', meaning_en: 'Knife', meaning_ta: 'கத்தி' }] },
  { id: 'k_ni', char: '二', type: 'katakana', romaji: 'ni', stroke_count: 2, meaning_en: 'Katakana "ni"', meaning_ta: 'கதகனா "நி"', mnemonic_en: 'Two horizontal bars (Number 2).', mnemonic_ta: 'இரண்டு கிடைமட்டக் கோடுகள்.', vocabulary: [{ word: 'ニュース', reading: 'ニュース', meaning_en: 'News', meaning_ta: 'செய்திகள்' }] },
  { id: 'k_nu', char: 'ヌ', type: 'katakana', romaji: 'nu', stroke_count: 2, meaning_en: 'Katakana "nu"', meaning_ta: 'கதகனா "நு"', mnemonic_en: 'Noodle fork.', mnemonic_ta: 'முட்கரண்டி.', vocabulary: [{ word: 'ヌードル', reading: 'ヌードル', meaning_en: 'Noodle', meaning_ta: 'நூடுல்ஸ்' }] },
  { id: 'k_ne', char: 'ネ', type: 'katakana', romaji: 'ne', stroke_count: 4, meaning_en: 'Katakana "ne"', meaning_ta: 'கதகனா "நெ"', mnemonic_en: 'Nexus star top.', mnemonic_ta: 'நட்சத்திர வடிவம்.', vocabulary: [{ word: 'ネクタイ', reading: 'ネクタイ', meaning_en: 'Necktie', meaning_ta: 'நெக்டை' }] },
  { id: 'k_no', char: 'ノ', type: 'katakana', romaji: 'no', stroke_count: 1, meaning_en: 'Katakana "no"', meaning_ta: 'கதகனா "நொ"', mnemonic_en: 'Slash line.', mnemonic_ta: 'ஒரு சாய்வுக்கோடு.', vocabulary: [{ word: 'ノート', reading: 'ノート', meaning_en: 'Notebook', meaning_ta: 'நோட்டுப்புத்தகம்' }] },
  { id: 'k_ha', char: 'ハ', type: 'katakana', romaji: 'ha', stroke_count: 2, meaning_en: 'Katakana "ha"', meaning_ta: 'கதகனா "ஹ"', mnemonic_en: 'Hawaiian skirts.', mnemonic_ta: 'இரு கோடுகள்.', vocabulary: [{ word: 'ハンバーガー', reading: 'ハンバーガー', meaning_en: 'Hamburger', meaning_ta: 'ஹம்பர்கர்' }] },
  { id: 'k_hi', char: 'ヒ', type: 'katakana', romaji: 'hi', stroke_count: 2, meaning_en: 'Katakana "hi"', meaning_ta: 'கதகனா "ஹி"', mnemonic_en: 'Heel of a boot.', mnemonic_ta: 'ஷூவின் குதிங்கால்.', vocabulary: [{ word: 'ヒーロー', reading: 'ヒーロー', meaning_en: 'Hero', meaning_ta: 'கதாநாயகன்' }] },
  { id: 'k_fu', char: 'フ', type: 'katakana', romaji: 'fu', stroke_count: 1, meaning_en: 'Katakana "fu"', meaning_ta: 'கதகனா "ஃபு"', mnemonic_en: 'Flag flapping in wind.', mnemonic_ta: 'கொடி வடிவம்.', vocabulary: [{ word: 'フィルム', reading: 'フィルム', meaning_en: 'Film', meaning_ta: 'படம்' }] },
  { id: 'k_he', char: 'ヘ', type: 'katakana', romaji: 'he', stroke_count: 1, meaning_en: 'Katakana "he"', meaning_ta: 'கதகனா "ஹெ"', mnemonic_en: 'Identical to Hiragana へ.', mnemonic_ta: 'ஹிரகனா へ போன்றதே.', vocabulary: [{ word: 'ペン', reading: 'ペン', meaning_en: 'Pen', meaning_ta: 'பேனா' }] },
  { id: 'k_ho', char: 'ホ', type: 'katakana', romaji: 'ho', stroke_count: 4, meaning_en: 'Katakana "ho"', meaning_ta: 'கதகனா "ஹொ"', mnemonic_en: 'Holy cross with arms.', mnemonic_ta: 'சிலுவை வடிவம்.', vocabulary: [{ word: 'ホテル', reading: 'ホテル', meaning_en: 'Hotel', meaning_ta: 'ஹோட்டல்' }] },
  { id: 'k_ma', char: 'マ', type: 'katakana', romaji: 'ma', stroke_count: 2, meaning_en: 'Katakana "ma"', meaning_ta: 'கதகனா "ம"', mnemonic_en: 'Math angle.', mnemonic_ta: 'கோண வடிவம்.', vocabulary: [{ word: 'マイク', reading: 'マイク', meaning_en: 'Microphone', meaning_ta: 'மைக்' }] },
  { id: 'k_mi', char: 'ミ', type: 'katakana', romaji: 'mi', stroke_count: 3, meaning_en: 'Katakana "mi"', meaning_ta: 'கதகனா "மி"', mnemonic_en: 'Three parallel slashes (Three = 3).', mnemonic_ta: 'மூன்று சாய்வுக்கோடுகள்.', vocabulary: [{ word: 'ミルク', reading: 'ミルク', meaning_en: 'Milk', meaning_ta: 'பால்' }] },
  { id: 'k_mu', char: 'ム', type: 'katakana', romaji: 'mu', stroke_count: 2, meaning_en: 'Katakana "mu"', meaning_ta: 'கதகனா "மு"', mnemonic_en: 'Triangle muscle.', mnemonic_ta: 'முக்கோண வடிவம்.', vocabulary: [{ word: 'ゲーム', reading: 'ゲーム', meaning_en: 'Game', meaning_ta: 'விளையாட்டு' }] },
  { id: 'k_me', char: 'メ', type: 'katakana', romaji: 'me', stroke_count: 2, meaning_en: 'Katakana "me"', meaning_ta: 'கதகனா "மெ"', mnemonic_en: 'X mark / Medical cross.', mnemonic_ta: 'எக்ஸ் வடிவம்.', vocabulary: [{ word: 'メートル', reading: 'メートル', meaning_en: 'Meter', meaning_ta: 'மீட்டர்' }] },
  { id: 'k_mo', char: 'モ', type: 'katakana', romaji: 'mo', stroke_count: 3, meaning_en: 'Katakana "mo"', meaning_ta: 'கதகனா "மொ"', mnemonic_en: 'Monitor corner.', mnemonic_ta: 'மானிட்டர் மூலை.', vocabulary: [{ word: 'モデル', reading: 'モデル', meaning_en: 'Model', meaning_ta: 'மாடல்' }] },
  { id: 'k_ya', char: 'ヤ', type: 'katakana', romaji: 'ya', stroke_count: 2, meaning_en: 'Katakana "ya"', meaning_ta: 'கதகனா "ய"', mnemonic_en: 'Yacht sail.', mnemonic_ta: 'பாய்மரப் படகு.', vocabulary: [{ word: 'ヤマ', reading: 'ヤマ', meaning_en: 'Yama', meaning_ta: 'யமா' }] },
  { id: 'k_yu', char: 'ユ', type: 'katakana', romaji: 'yu', stroke_count: 2, meaning_en: 'Katakana "yu"', meaning_ta: 'கதகனா "யு"', mnemonic_en: 'Number 1 turned.', mnemonic_ta: 'எண் 1 திருப்பப்பட்ட வடிவம்.', vocabulary: [{ word: 'ユニフォーム', reading: 'ユニフォーム', meaning_en: 'Uniform', meaning_ta: 'சீருடை' }] },
  { id: 'k_yo', char: 'ヨ', type: 'katakana', romaji: 'yo', stroke_count: 3, meaning_en: 'Katakana "yo"', meaning_ta: 'கதகனா "ரொ/யொ"', mnemonic_en: 'Backward E.', mnemonic_ta: 'தலைகீழ் E எழுத்து.', vocabulary: [{ word: 'ヨーグルト', reading: 'ヨーグルト', meaning_en: 'Yogurt', meaning_ta: 'தயிர்' }] },
  { id: 'k_ra', char: 'ラ', type: 'katakana', romaji: 'ra', stroke_count: 2, meaning_en: 'Katakana "ra"', meaning_ta: 'கதகனா "ர"', mnemonic_en: 'Radio antenna.', mnemonic_ta: 'ரேடியோ ஆண்டெனா.', vocabulary: [{ word: 'ラジオ', reading: 'ラジオ', meaning_en: 'Radio', meaning_ta: 'ரேடியோ' }] },
  { id: 'k_ri', char: 'リ', type: 'katakana', romaji: 'ri', stroke_count: 2, meaning_en: 'Katakana "ri"', meaning_ta: 'கதகனா "ரி"', mnemonic_en: 'Ribbon lines.', mnemonic_ta: 'ரிப்பன் கோடுகள்.', vocabulary: [{ word: 'りんご', reading: 'リンゴ', meaning_en: 'Apple', meaning_ta: 'ஆப்பிள்' }] },
  { id: 'k_ru', char: 'ル', type: 'katakana', romaji: 'ru', stroke_count: 2, meaning_en: 'Katakana "ru"', meaning_ta: 'கதகனா "ரு"', mnemonic_en: 'Running legs.', mnemonic_ta: 'ஓடும் கால்கள்.', vocabulary: [{ word: 'ルール', reading: 'ルール', meaning_en: 'Rule', meaning_ta: 'விதி' }] },
  { id: 'k_re', char: 'レ', type: 'katakana', romaji: 're', stroke_count: 1, meaning_en: 'Katakana "re"', meaning_ta: 'கதகனா "ரெ"', mnemonic_en: 'Checkmark curve.', mnemonic_ta: 'சரிபார்ப்புக் குறி.', vocabulary: [{ word: 'レストラン', reading: 'レストラン', meaning_en: 'Restaurant', meaning_ta: 'உணவகம்' }] },
  { id: 'k_ro', char: 'ロ', type: 'katakana', romaji: 'ro', stroke_count: 3, meaning_en: 'Katakana "ro"', meaning_ta: 'கதகனா "ரொ"', mnemonic_en: 'A square box.', mnemonic_ta: 'சதுரப் பெட்டி.', vocabulary: [{ word: 'ロボット', reading: 'ロボット', meaning_en: 'Robot', meaning_ta: 'ரோபோ' }] },
  { id: 'k_wa', char: 'ワ', type: 'katakana', romaji: 'wa', stroke_count: 2, meaning_en: 'Katakana "wa"', meaning_ta: 'கதகனா "வ"', mnemonic_en: 'Wine glass stem.', mnemonic_ta: 'ஒயின் கிளாஸ்.', vocabulary: [{ word: 'ワイン', reading: 'ワイン', meaning_en: 'Wine', meaning_ta: 'ஒயின்' }] },
  { id: 'k_n', char: 'ン', type: 'katakana', romaji: 'n', stroke_count: 2, meaning_en: 'Katakana "n"', meaning_ta: 'கதகனா "ன்"', mnemonic_en: 'One eye looking right and slash.', mnemonic_ta: 'வலப்புறம் பார்க்கும் ஒரு கண்.', vocabulary: [{ word: 'パン', reading: 'パン', meaning_en: 'Bread', meaning_ta: 'ரொட்டி' }] }
];

// Essential N5 Kanji Master List
export const KANJI_DATA: CharacterItem[] = [
  {
    id: 'kanji_1', char: '一', type: 'kanji', romaji: 'ichi / hito', onyomi: 'イチ, イツ', kunyomi: 'ひと, ひと-つ', stroke_count: 1,
    meaning_en: 'One', meaning_ta: 'ஒன்று (1)',
    mnemonic_en: 'One single horizontal line.', mnemonic_ta: 'ஒரே ஒரு கிடைமட்டக் கோடு.',
    vocabulary: [
      { word: '一つ', reading: 'ひとつ', meaning_en: 'One item', meaning_ta: 'ஒரு பொருள்' },
      { word: '一人', reading: 'ひとり', meaning_en: 'One person', meaning_ta: 'ஒரு நபர்' },
      { word: '一日', reading: 'ついたち', meaning_en: '1st day of month', meaning_ta: 'மாதத்தின் முதல் நாள்' }
    ]
  },
  {
    id: 'kanji_2', char: '二', type: 'kanji', romaji: 'ni / futa', onyomi: 'ニ', kunyomi: 'ふた, ふた-つ', stroke_count: 2,
    meaning_en: 'Two', meaning_ta: 'இரண்டு (2)',
    mnemonic_en: 'Two horizontal parallel lines.', mnemonic_ta: 'இரண்டு கிடைமட்டக் கோடுகள்.',
    vocabulary: [
      { word: '二つ', reading: 'ふたつ', meaning_en: 'Two items', meaning_ta: 'இரண்டு பொருட்கள்' },
      { word: '二人', reading: 'ふたり', meaning_en: 'Two people', meaning_ta: 'இரண்டு நபர்கள்' },
      { word: '二月', reading: 'にかげつ', meaning_en: 'February / 2 months', meaning_ta: 'பிப்ரவரி / 2 மாதங்கள்' }
    ]
  },
  {
    id: 'kanji_3', char: '三', type: 'kanji', romaji: 'san / mi', onyomi: 'サン', kunyomi: 'み, み-つ', stroke_count: 3,
    meaning_en: 'Three', meaning_ta: 'மூன்று (3)',
    mnemonic_en: 'Three horizontal parallel lines.', mnemonic_ta: 'மூன்று கிடைமட்டக் கோடுகள்.',
    vocabulary: [
      { word: '三つ', reading: 'みっつ', meaning_en: 'Three items', meaning_ta: 'மூன்று பொருட்கள்' },
      { word: '三年', reading: 'さんねん', meaning_en: 'Three years', meaning_ta: 'மூன்று ஆண்டுகள்' }
    ]
  },
  {
    id: 'kanji_4', char: '日', type: 'kanji', romaji: 'nichi / hi / bi', onyomi: 'ニチ, ジツ', kunyomi: 'ひ, -び, -か', stroke_count: 4,
    meaning_en: 'Sun / Day / Japan', meaning_ta: 'சூரியன் / நாள்',
    mnemonic_en: 'A window viewing the round Sun with a center bar.', mnemonic_ta: 'சூரியனின் நடுவில் உள்ள கோடு.',
    vocabulary: [
      { word: '日本', reading: 'にほん', meaning_en: 'Japan', meaning_ta: 'ஜப்பான்' },
      { word: '日曜日', reading: 'にちようび', meaning_en: 'Sunday', meaning_ta: 'ஞாயிற்றுக்கிழமை' },
      { word: '毎日', reading: 'まいにち', meaning_en: 'Every day', meaning_ta: 'ஒவ்வொரு நாளும்' }
    ]
  },
  {
    id: 'kanji_5', char: '月', type: 'kanji', romaji: 'tsuki / getsu', onyomi: 'ゲツ, ガツ', kunyomi: 'つき', stroke_count: 4,
    meaning_en: 'Moon / Month', meaning_ta: 'சந்திரன் / மாதம்',
    mnemonic_en: 'A crescent moon with soft clouds across it.', mnemonic_ta: 'பிறைச் சந்திரன் வடிவம்.',
    vocabulary: [
      { word: '月曜日', reading: 'げつようび', meaning_en: 'Monday', meaning_ta: 'திங்கட்கிழமை' },
      { word: '今月', reading: 'こんげつ', meaning_en: 'This month', meaning_ta: 'இந்த மாதம்' },
      { word: '一月', reading: 'いちがつ', meaning_en: 'January', meaning_ta: 'ஜனவரி' }
    ]
  },
  {
    id: 'kanji_6', char: '火', type: 'kanji', romaji: 'hi / ka', onyomi: 'カ', kunyomi: 'ひ, -び', stroke_count: 4,
    meaning_en: 'Fire', meaning_ta: 'நெருப்பு / தீ',
    mnemonic_en: 'A campfire popping sparks on both sides.', mnemonic_ta: 'எரியும் தீப் பிழம்பு.',
    vocabulary: [
      { word: '火曜日', reading: 'かようび', meaning_en: 'Tuesday', meaning_ta: 'செவ்வாய்க்கிழமை' },
      { word: '火事', reading: 'かじ', meaning_en: 'Fire accident', meaning_ta: 'தீ விபத்து' }
    ]
  },
  {
    id: 'kanji_7', char: '水', type: 'kanji', romaji: 'mizu / sui', onyomi: 'スイ', kunyomi: 'みず', stroke_count: 4,
    meaning_en: 'Water', meaning_ta: 'தண்ணீர் / நீர்',
    mnemonic_en: 'Splash of water dripping left and right from a stream.', mnemonic_ta: 'தெறிக்கும் நீர் துளிகள்.',
    vocabulary: [
      { word: '水曜日', reading: 'すいようび', meaning_en: 'Wednesday', meaning_ta: 'புதன்கிழமை' },
      { word: '水', reading: 'みず', meaning_en: 'Water', meaning_ta: 'தண்ணீர்' }
    ]
  },
  {
    id: 'kanji_8', char: '木', type: 'kanji', romaji: 'ki / moku', onyomi: 'モク, ボク', kunyomi: 'き, こ-', stroke_count: 4,
    meaning_en: 'Tree / Wood', meaning_ta: 'மரம் / காடு',
    mnemonic_en: 'A tree trunk with branches extending out.', mnemonic_ta: 'கிளைகள் கொண்ட மரம்.',
    vocabulary: [
      { word: '木曜日', reading: 'もくようび', meaning_en: 'Thursday', meaning_ta: 'வியாழக்கிழமை' },
      { word: '木', reading: 'き', meaning_en: 'Tree', meaning_ta: 'மரம்' }
    ]
  },
  {
    id: 'kanji_9', char: '金', type: 'kanji', romaji: 'kane / kin', onyomi: 'キン, コン', kunyomi: 'かね, かな-', stroke_count: 8,
    meaning_en: 'Gold / Money', meaning_ta: 'தங்கம் / பணம்',
    mnemonic_en: 'Nuggets of gold buried under a roof inside a mountain.', mnemonic_ta: 'சுரங்கத்தில் தங்கம்.',
    vocabulary: [
      { word: '金曜日', reading: 'きんようび', meaning_en: 'Friday', meaning_ta: 'வெள்ளிக்கிழமை' },
      { word: 'お金', reading: 'おかね', meaning_en: 'Money', meaning_ta: 'பணம்' }
    ]
  },
  {
    id: 'kanji_10', char: '土', type: 'kanji', romaji: 'tsuchi / do', onyomi: 'ド, ト', kunyomi: 'つち', stroke_count: 3,
    meaning_en: 'Soil / Earth / Ground', meaning_ta: 'மண் / தரை',
    mnemonic_en: 'A plant sprout pushing out of a mound of soil.', mnemonic_ta: 'மண்ணிலிருந்து முளைக்கும் செடி.',
    vocabulary: [
      { word: '土曜日', reading: 'どようび', meaning_en: 'Saturday', meaning_ta: 'சனிக்கிழமை' },
      { word: '土', reading: 'つち', meaning_en: 'Soil / Dirt', meaning_ta: 'மண்' }
    ]
  },
  {
    id: 'kanji_11', char: '人', type: 'kanji', romaji: 'hito / jin', onyomi: 'ジン, ニン', kunyomi: 'ひと', stroke_count: 2,
    meaning_en: 'Person / Human', meaning_ta: 'மனிதன் / நபர்',
    mnemonic_en: 'Two legs walking forward.', mnemonic_ta: 'நடந்து செல்லும் இரு கால்கள்.',
    vocabulary: [
      { word: '日本人', reading: 'にほんじん', meaning_en: 'Japanese Person', meaning_ta: 'ஜப்பானியர்' },
      { word: '大人', reading: 'おとな', meaning_en: 'Adult', meaning_ta: 'பெரியவர்' }
    ]
  },
  {
    id: 'kanji_12', char: '大', type: 'kanji', romaji: 'oo / dai', onyomi: 'ダイ, タイ', kunyomi: 'おお-, おお-きい', stroke_count: 3,
    meaning_en: 'Big / Large', meaning_ta: 'பெரிய',
    mnemonic_en: 'A person holding arms wide open shouting "IT IS BIG!".', mnemonic_ta: 'கைகளை விரித்து நிற்பவர்.',
    vocabulary: [
      { word: '大きい', reading: 'おおきい', meaning_en: 'Big / Large', meaning_ta: 'பெரியது' },
      { word: '大学', reading: 'だいがく', meaning_en: 'University', meaning_ta: 'பல்கலைக்கழகம்' }
    ]
  },
  {
    id: 'kanji_13', char: '小', type: 'kanji', romaji: 'chii / shou', onyomi: 'ショウ', kunyomi: 'ちい-さい, こ-', stroke_count: 3,
    meaning_en: 'Small / Little', meaning_ta: 'சிறிய',
    mnemonic_en: 'Splitting something central into tiny drops.', mnemonic_ta: 'சிறிய துளிகள்.',
    vocabulary: [
      { word: '小さい', reading: 'ちいさい', meaning_en: 'Small', meaning_ta: 'சிறிய' },
      { word: '小学校', reading: 'しょうがっこう', meaning_en: 'Elementary School', meaning_ta: 'ஆரம்பப் பள்ளி' }
    ]
  },
  {
    id: 'kanji_14', char: '山', type: 'kanji', romaji: 'yama / san', onyomi: 'サン, セン', kunyomi: 'やま', stroke_count: 3,
    meaning_en: 'Mountain', meaning_ta: 'மலை',
    mnemonic_en: 'Three tall mountain peaks.', mnemonic_ta: 'மூன்று மலைச் சிகரங்கள்.',
    vocabulary: [
      { word: '富士山', reading: 'ふじさん', meaning_en: 'Mount Fuji', meaning_ta: 'ஃபூஜி மலை' },
      { word: '山', reading: 'やま', meaning_en: 'Mountain', meaning_ta: 'மலை' }
    ]
  },
  {
    id: 'kanji_15', char: '川', type: 'kanji', romaji: 'kawa / sen', onyomi: 'セン', kunyomi: 'かわ', stroke_count: 3,
    meaning_en: 'River', meaning_ta: 'ஆறு',
    mnemonic_en: 'Three streams of river water flowing.', mnemonic_ta: 'ஆற்றின் ஓட்டம்.',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning_en: 'River', meaning_ta: 'ஆறு' }
    ]
  }
];

// N5 Core Vocabulary Master Data
export const VOCAB_DATA: VocabItem[] = [
  {
    id: 'v1', word: 'おはようございます', reading: 'おはようございます', romaji: 'ohayou gozaimasu',
    meaning_en: 'Good morning (Polite)', meaning_ta: 'காலை வணக்கம் (மரியாதையுடன்)',
    category: 'Greetings', example_ja: '先生、おはようございます。', example_en: 'Good morning, Sensei.', example_ta: 'ஆசிரியர், காலை வணக்கம்.'
  },
  {
    id: 'v2', word: 'こんにちは', reading: 'こんにちは', romaji: 'konnichiwa',
    meaning_en: 'Hello / Good afternoon', meaning_ta: 'வணக்கம் / மதிய வணக்கம்',
    category: 'Greetings', example_ja: 'みなさん、こんにちは。', example_en: 'Hello everyone.', example_ta: 'அனைவருக்கும் வணக்கம்.'
  },
  {
    id: 'v3', word: 'こんばんは', reading: 'こんばんは', romaji: 'konbanwa',
    meaning_en: 'Good evening', meaning_ta: 'மாலை வணக்கம்',
    category: 'Greetings', example_ja: 'こんばんは、お元気ですか。', example_en: 'Good evening, how are you?', example_ta: 'மாலை வணக்கம், எப்படி இருக்கிறீர்கள்?'
  },
  {
    id: 'v4', word: 'ありがとうございます', reading: 'ありがとうございます', romaji: 'arigatou gozaimasu',
    meaning_en: 'Thank you very much', meaning_ta: 'மிக்க நன்றி',
    category: 'Greetings', example_ja: 'どうもありがとうございます。', example_en: 'Thank you very much.', example_ta: 'மிக்க நன்றி.'
  },
  {
    id: 'v5', word: 'すみません', reading: 'すみません', romaji: 'sumimasen',
    meaning_en: 'Excuse me / I am sorry', meaning_ta: 'மன்னிக்கவும் / என்னை மன்னியுங்கள்',
    category: 'Greetings', example_ja: 'すみません、駅はどこですか。', example_en: 'Excuse me, where is the station?', example_ta: 'மன்னிக்கவும், ரயில் நிலையம் எங்கே உள்ளது?'
  },
  {
    id: 'v6', word: '私', reading: 'わたし', romaji: 'watashi',
    meaning_en: 'I / Myself', meaning_ta: 'நான்',
    category: 'People', example_ja: 'わたしは学生です。', example_en: 'I am a student.', example_ta: 'நான் ஒரு மாணவன்.'
  },
  {
    id: 'v7', word: '先生', reading: 'せんせい', romaji: 'sensei',
    meaning_en: 'Teacher / Master / Doctor', meaning_ta: 'ஆசிரியர் / குரு',
    category: 'People', example_ja: '田中先生は日本語を教えます。', example_en: 'Tanaka Sensei teaches Japanese.', example_ta: 'தனகா ஆசிரியர் ஜப்பானிய மொழி கற்பிக்கிறார்.'
  },
  {
    id: 'v8', word: '学生', reading: 'がくせい', romaji: 'gakusei',
    meaning_en: 'Student', meaning_ta: 'மாணவன் / மாணவி',
    category: 'People', example_ja: 'わたしは日本語の学生です。', example_en: 'I am a Japanese language student.', example_ta: 'நான் ஜப்பானிய மொழி மாணவன்.'
  },
  {
    id: 'v9', word: '本', reading: 'ほん', romaji: 'hon',
    meaning_en: 'Book', meaning_ta: 'புத்தகம்',
    category: 'Objects', example_ja: 'これは日本語の本です。', example_en: 'This is a Japanese book.', example_ta: 'இது ஜப்பானிய மொழி புத்தகம்.'
  },
  {
    id: 'v10', word: '水', reading: 'みず', romaji: 'mizu',
    meaning_en: 'Water', meaning_ta: 'தண்ணீர்',
    category: 'Food & Drink', example_ja: '水をください。', example_en: 'Please give me water.', example_ta: 'எனக்குத் தண்ணீர் தாருங்கள்.'
  },
  {
    id: 'v11', word: '食べる', reading: 'たべる', romaji: 'taberu',
    meaning_en: 'To eat', meaning_ta: 'சாப்பிடுதல்',
    category: 'Verbs', example_ja: 'ごはんを食べます。', example_en: 'I eat rice/meal.', example_ta: 'நான் உணவு சாப்பிடுகிறேன்.'
  },
  {
    id: 'v12', word: '飲む', reading: 'のむ', romaji: 'nomu',
    meaning_en: 'To drink', meaning_ta: 'குடித்தல்',
    category: 'Verbs', example_ja: 'お茶を飲みます。', example_en: 'I drink green tea.', example_ta: 'நான் பச்சை தேநீர் குடிக்கிறேன்.'
  },
  {
    id: 'v13', word: '行く', reading: 'いく', romaji: 'iku',
    meaning_en: 'To go', meaning_ta: 'செல்லுதல்',
    category: 'Verbs', example_ja: '学校へ行きます。', example_en: 'I go to school.', example_ta: 'நான் பள்ளிக்குச் செல்கிறேன்.'
  },
  {
    id: 'v14', word: '来る', reading: 'くる', romaji: 'kuru',
    meaning_en: 'To come', meaning_ta: 'வருதல்',
    category: 'Verbs', example_ja: '友達が来ます。', example_en: 'A friend is coming.', example_ta: 'நண்பன் வருகிறான்.'
  },
  {
    id: 'v15', word: '見る', reading: 'みる', romaji: 'miru',
    meaning_en: 'To see / watch', meaning_ta: 'பார்த்தல்',
    category: 'Verbs', example_ja: 'テレビを見ます。', example_en: 'I watch TV.', example_ta: 'நான் தொலைக்காட்சி பார்க்கிறேன்.'
  }
];

// N5 Core Grammar Points
export const GRAMMAR_DATA: GrammarItem[] = [
  {
    id: 'g1', pattern: 'A は B です',
    title_en: 'Topic Marker は & Predicate です (A is B)',
    title_ta: 'தலைப்பு குறிப்பு は மற்றும் பயனி です (A என்பது B ஆகும்)',
    explanation_en: 'The particle は (pronounced "wa") marks the topic of the sentence. です (desu) means "is / am / are" and creates a polite positive sentence.',
    explanation_ta: 'は (வா என உச்சரிக்கப்படும்) வாக்கியத்தின் தலைப்பைக் குறிக்கும். です (தேஸு) என்பது "ஆகும் / இருக்கிறேன்" எனப்பொருள்படும்.',
    structure: 'Noun (Topic) + は + Noun (Predicate) + です',
    examples: [
      { ja: 'わたしは学生です。', reading: 'わたし は がくせい です。', en: 'I am a student.', ta: 'நான் ஒரு மாணவன்.' },
      { ja: '田中さんは先生です。', reading: 'たなかさん は せんせい です。', en: 'Mr. Tanaka is a teacher.', ta: 'திரு. தனகா ஒரு ஆசிரியர்.' },
      { ja: 'これは本です。', reading: 'これ は ほん です。', en: 'This is a book.', ta: 'இது ஒரு புத்தகம்.' }
    ]
  },
  {
    id: 'g2', pattern: 'A は B ではありません',
    title_en: 'Negative Predicate (A is NOT B)',
    title_ta: 'எதிர்மறை பயனி (A என்பது B அல்ல)',
    explanation_en: 'ではありません (dewa arimasen) or じゃありません (ja arimasen) is the polite negative form of です (desu).',
    explanation_ta: 'ではありません (தெவா அரிமாஸென்) என்பது です என்பதன் எதிர்மறை வடிவம்.',
    structure: 'Noun + は + Noun + ではありません',
    examples: [
      { ja: 'わたしは先生ではありません。', reading: 'わたし は せんせい ではありません。', en: 'I am not a teacher.', ta: 'நான் ஆசிரியர் அல்ல.' },
      { ja: 'かれは日本人ではありません。', reading: 'かれ は にほんじん ではありません。', en: 'He is not Japanese.', ta: 'அவன் ஜப்பானியர் அல்ல.' }
    ]
  },
  {
    id: 'g3', pattern: '～か (Question Particle)',
    title_en: 'Question Particle か (?)',
    title_ta: 'வினா இடைச்சொல் か (?)',
    explanation_en: 'Adding か (ka) at the end of a sentence turns it into a question. Japanese does not require a question mark (?).',
    explanation_ta: 'வாக்கியத்தின் இறுதியில் か என்பதைச் சேர்த்தால் அது கேள்வியாக மாறும்.',
    structure: 'Sentence + か',
    examples: [
      { ja: 'あなたは学生ですか。', reading: 'あなた は がくせい です か。', en: 'Are you a student?', ta: 'நீங்கள் ஒரு மாணவரா?' },
      { ja: 'これは水ですか。', reading: 'これ は みず です か。', en: 'Is this water?', ta: 'இது தண்ணீரா?' }
    ]
  },
  {
    id: 'g4', pattern: 'A の B (Possessive / Association)',
    title_en: 'Possessive Particle の (A\'s B / B of A)',
    title_ta: 'உடைமை இடைச்சொல் の (A-வின் B)',
    explanation_en: 'The particle の (no) connects two nouns. It shows possession, origin, or category.',
    explanation_ta: 'の (னொ) இரு பெயர்ச்சொற்களை இணைக்கும். உடைமை அல்லது தொடர்பைக் காட்டும்.',
    structure: 'Noun 1 + の + Noun 2',
    examples: [
      { ja: 'わたしの本', reading: 'わたし の ほん', en: 'My book', ta: 'என் புத்தகம்' },
      { ja: '日本語の先生', reading: 'にほんご の せんせい', en: 'Japanese language teacher', ta: 'ஜப்பானிய மொழி ஆசிரியர்' }
    ]
  },
  {
    id: 'g5', pattern: '～を Verb (Direct Object)',
    title_en: 'Object Marker を (o)',
    title_ta: 'செயப்படுபொருள் இடைச்சொல் を (ஒ)',
    explanation_en: 'The particle を (written wo, pronounced o) marks the direct object receiving the action of an active verb.',
    explanation_ta: 'を என்பது வினையின் செயப்படுபொருளைக் குறிக்கும்.',
    structure: 'Noun (Object) + を + Verb (Action)',
    examples: [
      { ja: 'ごはんを食べます。', reading: 'ごはん を たべます。', en: 'I eat rice.', ta: 'நான் உணவு சாப்பிடுகிறேன்.' },
      { ja: '水を飲みます。', reading: 'みず を のみます。', en: 'I drink water.', ta: 'நான் தண்ணீர் குடிக்கிறேன்.' }
    ]
  }
];

// N5 Reading Passages
export const READING_DATA: ReadingItem[] = [
  {
    id: 'r1',
    title_ja: '自己紹介 (じこしょうかい)',
    title_en: 'Self Introduction',
    title_ta: 'சுய அறிமுகம்',
    content_ja: 'はじめまして。わたしは マイク です。インドから きました。わたしは 学生です。日本語を 勉強しています。どうぞ よろしく おねがいします。',
    content_furigana: [
      { word: 'はじめまして。' },
      { word: 'わたし', ruby: '私' },
      { word: 'は' },
      { word: 'マイク' },
      { word: 'です。' },
      { word: 'インド' },
      { word: 'から' },
      { word: 'きました。' },
      { word: 'わたし' },
      { word: 'は' },
      { word: '学生', ruby: 'がくせい' },
      { word: 'です。' },
      { word: '日本語', ruby: 'にほんご' },
      { word: 'を' },
      { word: '勉強', ruby: 'べんきょう' },
      { word: 'しています。' },
      { word: 'どうぞ' },
      { word: 'よろしく' },
      { word: 'おねがいします。' }
    ],
    translation_en: 'Nice to meet you. I am Mike. I came from India. I am a student. I am studying Japanese. Pleased to meet you.',
    translation_ta: 'உங்களை சந்திப்பதில் மகிழ்ச்சி. என் பெயர் மைக். நான் இந்தியாவிலிருந்து வந்தேன். நான் ஒரு மாணவன். நான் ஜப்பானிய மொழி படிக்கிறேன். மிக்க மகிழ்ச்சி.',
    questions: [
      {
        question_ja: 'マイクさんは どこから きましたか。',
        question_en: 'Where did Mike come from?',
        question_ta: 'மைக் எங்கிருந்து வந்தார்?',
        options: ['1. にほん (Japan)', '2. インド (India)', '3. アメリカ (America)', '4. ちゅうごく (China)'],
        correct: 2,
        explanation_en: 'The text states: "インドから きました" (came from India).',
        explanation_ta: 'உரையில் "インドから きました" (இந்தியாவிலிருந்து வந்தேன்) எனக் கூறப்பட்டுள்ளது.'
      },
      {
        question_ja: 'マイクさんは 何を していますか。',
        question_en: 'What does Mike do?',
        question_ta: 'மைக் என்ன செய்கிறார்?',
        options: ['1. 先生 (Teacher)', '2. 会社員 (Company worker)', '3. 学生 (Student)', '4. 医者 (Doctor)'],
        correct: 3,
        explanation_en: 'The text states: "わたしは 学生です" (I am a student).',
        explanation_ta: 'உரையில் "わたしは 学生です" (நான் ஒரு மாணவன்) எனக் குறிப்பிடப்பட்டுள்ளது.'
      }
    ]
  }
];

// N5 Listening Scenarios
export const LISTENING_DATA: ListeningItem[] = [
  {
    id: 'l1',
    title: 'Dialogue 1: Meeting at Station',
    audioText: 'すみません、いま 何時ですか。ええと、いま 午後 三時です。ありがとう ございます。いいえ、どういたしまして。',
    speaker: 'A (Man) & B (Woman)',
    options: [
      '1. 1:00 PM (午後 一時)',
      '2. 2:00 PM (午後 二時)',
      '3. 3:00 PM (午後 三時)',
      '4. 4:00 PM (午後 四時)'
    ],
    correct: 3,
    explanation_en: 'The speaker answers: "いま 午後 三時です" (It is 3:00 PM right now).',
    explanation_ta: 'பதில் "いま 午後 三時です" (இப்போது பிற்பகல் 3 மணி).'
  },
  {
    id: 'l2',
    title: 'Dialogue 2: Ordering Drink',
    audioText: 'いらっしゃいませ。何を 飲みますか。水と お茶を ください。はい、わかりました。',
    speaker: 'Waiter & Customer',
    options: [
      '1. Coffee and Tea',
      '2. Water and Green Tea (水と お茶)',
      '3. Juice and Water',
      '4. Milk only'
    ],
    correct: 2,
    explanation_en: 'Customer orders: "水と お茶を ください" (Water and green tea please).',
    explanation_ta: 'வாடிக்கையாளர் "水と お茶を ください" (தண்ணீரும் பச்சை தேநீரும்) எனக் கேட்கிறார்.'
  }
];
