export const site = {
  name: "LOVE CHINESE 爱中文",
  slogan: "Learn Chinese Step by Step",
  domain: "https://lovechinese520.com",
  description:
    "Learn Chinese through videos, vocabulary, sentences, grammar, culture, HSK lessons, and professional Chinese topics.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "HSK", href: "/hsk" },
  { label: "Pronunciation", href: "/pronunciation" },
  { label: "Characters", href: "/characters" },
  { label: "Vocabulary", href: "/vocabulary" },
  { label: "Sentences", href: "/sentences" },
  { label: "Grammar", href: "/grammar" },
  { label: "Culture", href: "/culture" },
  { label: "Professional Chinese", href: "/professional" },
  { label: "Graded Reading", href: "/reading" },
  { label: "About", href: "/about" },
];

export const youtube = {
  channelUrl: "https://www.youtube.com/@LoveChinese520",
  videos: [
    {
      id: "W6atV9FWt1g",
      title: "HSK 1 Vocabulary Words 1-25",
      description: "Learn beginner HSK 1 vocabulary with clear Chinese, pinyin, and English support.",
    },
    {
      id: "9yOLnqMe7Ow",
      title: "40 Useful Chinese Sentences for Oil & Gas",
      description: "Practice professional Chinese sentences for oil and gas workplace communication.",
    },
  ],
};

export const hsk1Vocabulary = [
  {
    chinese: "你好",
    pinyin: "nǐ hǎo",
    english: "hello",
    exampleChinese: "你好，我是 Suo 老师。",
    examplePinyin: "Nǐ hǎo, wǒ shì Suo lǎoshī.",
    exampleEnglish: "Hello, I am Teacher Suo.",
  },
  {
    chinese: "谢谢",
    pinyin: "xièxie",
    english: "thank you",
    exampleChinese: "谢谢你的帮助。",
    examplePinyin: "Xièxie nǐ de bāngzhù.",
    exampleEnglish: "Thank you for your help.",
  },
  {
    chinese: "再见",
    pinyin: "zàijiàn",
    english: "goodbye",
    exampleChinese: "老师，再见！",
    examplePinyin: "Lǎoshī, zàijiàn!",
    exampleEnglish: "Goodbye, teacher!",
  },
  {
    chinese: "是",
    pinyin: "shì",
    english: "to be; yes",
    exampleChinese: "我是学生。",
    examplePinyin: "Wǒ shì xuésheng.",
    exampleEnglish: "I am a student.",
  },
  {
    chinese: "不",
    pinyin: "bù",
    english: "not; no",
    exampleChinese: "我不忙。",
    examplePinyin: "Wǒ bù máng.",
    exampleEnglish: "I am not busy.",
  },
  {
    chinese: "我",
    pinyin: "wǒ",
    english: "I; me",
    exampleChinese: "我学习中文。",
    examplePinyin: "Wǒ xuéxí Zhōngwén.",
    exampleEnglish: "I study Chinese.",
  },
  {
    chinese: "你",
    pinyin: "nǐ",
    english: "you",
    exampleChinese: "你叫什么名字？",
    examplePinyin: "Nǐ jiào shénme míngzi?",
    exampleEnglish: "What is your name?",
  },
  {
    chinese: "他",
    pinyin: "tā",
    english: "he; him",
    exampleChinese: "他是医生。",
    examplePinyin: "Tā shì yīshēng.",
    exampleEnglish: "He is a doctor.",
  },
  {
    chinese: "她",
    pinyin: "tā",
    english: "she; her",
    exampleChinese: "她会说中文。",
    examplePinyin: "Tā huì shuō Zhōngwén.",
    exampleEnglish: "She can speak Chinese.",
  },
  {
    chinese: "我们",
    pinyin: "wǒmen",
    english: "we; us",
    exampleChinese: "我们一起学习。",
    examplePinyin: "Wǒmen yìqǐ xuéxí.",
    exampleEnglish: "We study together.",
  },
  {
    chinese: "中国",
    pinyin: "Zhōngguó",
    english: "China",
    exampleChinese: "我喜欢中国文化。",
    examplePinyin: "Wǒ xǐhuan Zhōngguó wénhuà.",
    exampleEnglish: "I like Chinese culture.",
  },
  {
    chinese: "中文",
    pinyin: "Zhōngwén",
    english: "Chinese language",
    exampleChinese: "中文很有意思。",
    examplePinyin: "Zhōngwén hěn yǒu yìsi.",
    exampleEnglish: "Chinese is very interesting.",
  },
];

export const featuredCourses = [
  {
    title: "Pronunciation",
    href: "/pronunciation",
    icon: "Pinyin",
    description: "Build a strong foundation with tones, initials, finals, and clear speaking habits.",
  },
  {
    title: "Chinese Characters",
    href: "/characters",
    icon: "汉字",
    description: "Learn radicals, stroke order, and character stories step by step.",
  },
  {
    title: "HSK Vocabulary",
    href: "/hsk",
    icon: "HSK",
    description: "Study core words for HSK learners with examples and review paths.",
  },
  {
    title: "Practical Chinese Sentences",
    href: "/sentences",
    icon: "句子",
    description: "Speak useful Chinese for daily life, study, travel, and work.",
  },
  {
    title: "Professional Chinese",
    href: "/professional",
    icon: "行业",
    description: "Learn job-specific Chinese for international work environments.",
  },
  {
    title: "Chinese Culture",
    href: "/culture",
    icon: "文化",
    description: "Explore traditions, stories, festivals, and modern Chinese life.",
  },
];

export const professionalCategories = [
  {
    title: "Construction Chinese",
    slug: "construction",
    description: "Vocabulary and practical phrases for building sites, safety, tools, and teams.",
    keywords: ["safety helmet", "drawing", "cement", "crane", "site meeting", "inspection"],
  },
  {
    title: "Oil & Gas Chinese",
    slug: "oil-gas",
    description: "Industry terms for energy projects, operations, equipment, and communication.",
    keywords: ["pipeline", "valve", "drilling", "pressure", "refinery", "shutdown"],
  },
  {
    title: "Ocean Transportation Chinese",
    slug: "ocean-transportation",
    description: "Chinese for ports, shipping, vessels, cargo, and maritime coordination.",
    keywords: ["vessel", "cargo", "port", "container", "schedule", "customs"],
  },
  {
    title: "Mining Chinese",
    slug: "mining",
    description: "Workplace Chinese for mining operations, materials, safety, and machinery.",
    keywords: ["mine", "ore", "truck", "tunnel", "safety", "equipment"],
  },
  {
    title: "Hotel Chinese",
    slug: "hotel",
    description: "Guest service, reservations, check-in, housekeeping, and hospitality phrases.",
    keywords: ["reservation", "check-in", "room card", "breakfast", "housekeeping", "invoice"],
  },
  {
    title: "Medical Chinese",
    slug: "medical",
    description: "Useful Chinese for symptoms, appointments, patient care, and clinic settings.",
    keywords: ["appointment", "symptom", "medicine", "doctor", "blood pressure", "allergy"],
  },
  {
    title: "Restaurant Chinese",
    slug: "restaurant",
    description: "Ordering, kitchen words, service phrases, menus, and food culture.",
    keywords: ["menu", "order", "spicy", "bill", "table", "chef"],
  },
];

export const professionalPages = professionalCategories;

export const pages = {
  hsk: {
    title: "HSK",
    kicker: "Exam-ready Chinese",
    description:
      "Follow a clear path through HSK vocabulary, listening, reading, grammar, and sentence practice.",
    sections: ["HSK word lists", "Example sentences", "Listening practice", "Review plans"],
  },
  pronunciation: {
    title: "Pronunciation",
    kicker: "Speak clearly from day one",
    description:
      "Master pinyin, tones, initials, finals, and rhythm with beginner-friendly lessons.",
    sections: ["Pinyin basics", "Four tones", "Tone pairs", "Speaking drills"],
  },
  characters: {
    title: "Chinese Characters",
    kicker: "Read and write with confidence",
    description:
      "Understand how Chinese characters work through radicals, stroke order, and memory stories.",
    sections: ["Stroke order", "Common radicals", "Character families", "Writing practice"],
  },
  vocabulary: {
    title: "Vocabulary",
    kicker: "Words you can actually use",
    description:
      "Learn Chinese vocabulary by topic with pronunciation, meaning, and practical usage.",
    sections: ["Daily words", "Theme lists", "Picture vocabulary", "Review cards"],
  },
  sentences: {
    title: "Sentences",
    kicker: "Useful Chinese patterns",
    description:
      "Practice complete sentences for greetings, questions, travel, study, work, and daily life.",
    sections: ["Daily expressions", "Question patterns", "Travel sentences", "Work phrases"],
  },
  grammar: {
    title: "Grammar",
    kicker: "Simple explanations",
    description:
      "Learn Chinese grammar through clear patterns, examples, and step-by-step practice.",
    sections: ["Beginner grammar", "Word order", "Particles", "Pattern practice"],
  },
  culture: {
    title: "Chinese Culture",
    kicker: "Language with context",
    description:
      "Discover Chinese festivals, customs, stories, food, and culture while building language skills.",
    sections: ["Festivals", "Food culture", "Stories", "Modern China"],
  },
  reading: {
    title: "Graded Reading",
    kicker: "Read at your level",
    description:
      "Build reading fluency with short Chinese texts designed for learners from beginner upward.",
    sections: ["Beginner stories", "Vocabulary support", "Reading questions", "Audio reading"],
  },
};
