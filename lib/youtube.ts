export type VideoCategory =
  | "HSK 1"
  | "HSK 2"
  | "HSK 3"
  | "HSK 4"
  | "HSK 5"
  | "HSK 6"
  | "Chinese Vocabulary"
  | "Chinese Characters"
  | "Chinese Conversations"
  | "Business Chinese"
  | "Construction Chinese"
  | "Restaurant Chinese"
  | "Medical Chinese"
  | "Travel Chinese"
  | "Children's Chinese"
  | "Chinese Stories"
  | "Chinese Culture";

export type YouTubeVideo = {
  id: string;
  title: string;
  slug: string;
  description: string;
  published: string;
  thumbnail: string;
  url: string;
  embedUrl: string;
  categories: VideoCategory[];
};

export const YOUTUBE_CHANNEL_ID = "UC6HEDvSbz-AAYjajihhNDvQ";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@LoveChinese520";
export const YOUTUBE_FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export const videoCategories: { title: VideoCategory; slug: string; description: string }[] = [
  { title: "HSK 1", slug: "hsk-1", description: "Beginner HSK 1 vocabulary and sentence videos." },
  { title: "HSK 2", slug: "hsk-2", description: "HSK 2 vocabulary, grammar, and listening practice." },
  { title: "HSK 3", slug: "hsk-3", description: "Intermediate HSK 3 Chinese lessons." },
  { title: "HSK 4", slug: "hsk-4", description: "HSK 4 Chinese vocabulary and sentence practice." },
  { title: "HSK 5", slug: "hsk-5", description: "Advanced HSK 5 Chinese learning videos." },
  { title: "HSK 6", slug: "hsk-6", description: "Advanced HSK 6 reading and vocabulary lessons." },
  { title: "Chinese Vocabulary", slug: "chinese-vocabulary", description: "Chinese words by topic with pinyin and examples." },
  { title: "Chinese Characters", slug: "chinese-characters", description: "Chinese character learning and reading practice." },
  { title: "Chinese Conversations", slug: "chinese-conversations", description: "Useful Chinese sentences, dialogues, and speaking practice." },
  { title: "Business Chinese", slug: "business-chinese", description: "Chinese for business, trade, and workplace communication." },
  { title: "Construction Chinese", slug: "construction-chinese", description: "Chinese vocabulary and phrases for construction sites." },
  { title: "Restaurant Chinese", slug: "restaurant-chinese", description: "Chinese for ordering, restaurant service, and food topics." },
  { title: "Medical Chinese", slug: "medical-chinese", description: "Chinese for symptoms, clinics, doctors, and patient care." },
  { title: "Travel Chinese", slug: "travel-chinese", description: "Chinese for travel, transport, hotels, and daily life." },
  { title: "Children's Chinese", slug: "childrens-chinese", description: "Chinese videos for children and young learners." },
  { title: "Chinese Stories", slug: "chinese-stories", description: "Stories and graded reading videos for Chinese learners." },
  { title: "Chinese Culture", slug: "chinese-culture", description: "Chinese culture, festivals, food, and modern life." },
];

export const professionalVideoRules = {
  construction: ["construction", "building", "site", "建筑", "工地"],
  restaurant: ["restaurant", "menu", "food", "chef", "kitchen", "餐厅", "菜单", "食物"],
  medical: ["medical", "doctor", "clinic", "patient", "symptom", "hospital", "医疗", "医生"],
  hotel: ["hotel", "reservation", "check-in", "room", "housekeeping", "酒店", "入住"],
  "oil-gas": ["oil", "gas", "petroleum", "natural gas", "energy", "石油", "天然气", "能源"],
  "ocean-transportation": ["ocean", "transport", "shipping", "maritime", "vessel", "cargo", "海运", "运输"],
  mining: ["mining", "mine", "ore", "矿", "矿业"],
} as const;

const fallbackVideos: YouTubeVideo[] = [
  {
    id: "W6atV9FWt1g",
    title: "HSK 1 Vocabulary Words 1-25 | Learn Chinese for Beginners | Love Chinese",
    slug: "hsk-1-vocabulary-words-1-25",
    description: "Learn beginner HSK 1 vocabulary with clear Chinese, pinyin, and English support.",
    published: "2026-06-05T13:00:23+00:00",
    thumbnail: "https://i.ytimg.com/vi/W6atV9FWt1g/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=W6atV9FWt1g",
    embedUrl: "https://www.youtube.com/embed/W6atV9FWt1g",
    categories: ["HSK 1", "Chinese Vocabulary"],
  },
  {
    id: "9yOLnqMe7Ow",
    title: "Learn 40 Useful Chinese Sentences for Oil & Gas Industry",
    slug: "useful-chinese-sentences-oil-gas",
    description: "Practice professional Chinese sentences for oil and gas workplace communication.",
    published: "2026-03-19T17:54:22+00:00",
    thumbnail: "https://i.ytimg.com/vi/9yOLnqMe7Ow/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=9yOLnqMe7Ow",
    embedUrl: "https://www.youtube.com/embed/9yOLnqMe7Ow",
    categories: ["Business Chinese", "Chinese Conversations", "Chinese Vocabulary"],
  },
  {
    id: "3_tLvLh1v5g",
    title: "40 Essential Chinese Sentences about Ocean Transport",
    slug: "essential-chinese-sentences-ocean-transport",
    description: "Learn practical Chinese sentences for ocean transport, shipping, cargo, and maritime communication.",
    published: "2025-12-04T04:31:43+00:00",
    thumbnail: "https://i.ytimg.com/vi/3_tLvLh1v5g/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=3_tLvLh1v5g",
    embedUrl: "https://www.youtube.com/embed/3_tLvLh1v5g",
    categories: ["Business Chinese", "Chinese Conversations", "Travel Chinese"],
  },
  {
    id: "m9kDhCs48lA",
    title: "60 Common Chinese Words about Maritime Shipping",
    slug: "common-chinese-words-maritime-shipping",
    description: "Study ocean transport and maritime shipping vocabulary in Chinese with pinyin and English support.",
    published: "2025-11-14T05:18:15+00:00",
    thumbnail: "https://i.ytimg.com/vi/m9kDhCs48lA/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=m9kDhCs48lA",
    embedUrl: "https://www.youtube.com/embed/m9kDhCs48lA",
    categories: ["Chinese Vocabulary", "Business Chinese", "Travel Chinese"],
  },
  {
    id: "gY9r4QQfFSY",
    title: "Petroleum & Natural Gas Vocabulary",
    slug: "petroleum-natural-gas-vocabulary",
    description: "Learn petroleum and natural gas vocabulary for energy industry Chinese communication.",
    published: "2025-10-22T05:37:33+00:00",
    thumbnail: "https://i.ytimg.com/vi/gY9r4QQfFSY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=gY9r4QQfFSY",
    embedUrl: "https://www.youtube.com/embed/gY9r4QQfFSY",
    categories: ["Chinese Vocabulary", "Business Chinese"],
  },
  {
    id: "ffEPQt83sDQ",
    title: "60 Common Chinese Traffic Safety Words",
    slug: "common-chinese-traffic-safety-words",
    description: "Learn traffic safety Chinese vocabulary with pinyin, pictures, and English meanings.",
    published: "2025-09-25T05:59:40+00:00",
    thumbnail: "https://i.ytimg.com/vi/ffEPQt83sDQ/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ffEPQt83sDQ",
    embedUrl: "https://www.youtube.com/embed/ffEPQt83sDQ",
    categories: ["Chinese Vocabulary", "Travel Chinese"],
  },
  {
    id: "N33QTGGyH_s",
    title: "Everyday Chinese Vocabulary for Home, Travel, and Daily Life",
    slug: "everyday-chinese-vocabulary-home-travel-daily-life",
    description: "Practice everyday Chinese vocabulary for home, travel, and daily life situations.",
    published: "2025-09-23T23:06:58+00:00",
    thumbnail: "https://i.ytimg.com/vi/N33QTGGyH_s/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=N33QTGGyH_s",
    embedUrl: "https://www.youtube.com/embed/N33QTGGyH_s",
    categories: ["Chinese Vocabulary", "Travel Chinese"],
  },
  {
    id: "dRRdnbnH3Gk",
    title: "Construction Site Vocabulary in Chinese",
    slug: "construction-site-vocabulary-in-chinese",
    description: "Learn construction site vocabulary in Chinese for tools, teams, site communication, and safety.",
    published: "2025-09-10T03:35:07+00:00",
    thumbnail: "https://i.ytimg.com/vi/dRRdnbnH3Gk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dRRdnbnH3Gk",
    embedUrl: "https://www.youtube.com/embed/dRRdnbnH3Gk",
    categories: ["Construction Chinese", "Chinese Vocabulary", "Business Chinese"],
  },
  {
    id: "tpmwSAmyGcY",
    title: "60 Chinese Preschool Vocabulary Words for Kids",
    slug: "chinese-preschool-vocabulary-words-for-kids",
    description: "Learn preschool and parent-child activity vocabulary for children learning Chinese.",
    published: "2025-08-23T09:19:25+00:00",
    thumbnail: "https://i.ytimg.com/vi/tpmwSAmyGcY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=tpmwSAmyGcY",
    embedUrl: "https://www.youtube.com/embed/tpmwSAmyGcY",
    categories: ["Children's Chinese", "Chinese Vocabulary"],
  },
  {
    id: "7st-1N2W358",
    title: "60 Chinese Toy Vocabulary Words for Kids",
    slug: "chinese-toy-vocabulary-words-for-kids",
    description: "Learn toy vocabulary in Chinese with picture-based lessons for children.",
    published: "2025-07-25T16:27:00+00:00",
    thumbnail: "https://i.ytimg.com/vi/7st-1N2W358/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=7st-1N2W358",
    embedUrl: "https://www.youtube.com/embed/7st-1N2W358",
    categories: ["Children's Chinese", "Chinese Vocabulary"],
  },
  {
    id: "obIIG1_fBmc",
    title: "60 Common Chinese Political Vocabulary Words",
    slug: "common-chinese-political-vocabulary-words",
    description: "Learn political and public affairs vocabulary in Chinese with pinyin and English.",
    published: "2025-07-11T16:26:25+00:00",
    thumbnail: "https://i.ytimg.com/vi/obIIG1_fBmc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=obIIG1_fBmc",
    embedUrl: "https://www.youtube.com/embed/obIIG1_fBmc",
    categories: ["Chinese Vocabulary", "Business Chinese", "Chinese Culture"],
  },
  {
    id: "5cX8MipuBFw",
    title: "Chinese Culture and Festivals Vocabulary",
    slug: "chinese-culture-and-festivals-vocabulary",
    description: "Learn Chinese culture and festival vocabulary for cultural communication.",
    published: "2025-07-02T03:34:57+00:00",
    thumbnail: "https://i.ytimg.com/vi/5cX8MipuBFw/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=5cX8MipuBFw",
    embedUrl: "https://www.youtube.com/embed/5cX8MipuBFw",
    categories: ["Chinese Culture", "Chinese Vocabulary"],
  },
  {
    id: "D1ZjCkOx1pg",
    title: "Chinese for Careers and Business",
    slug: "chinese-for-careers-and-business",
    description: "Learn Chinese vocabulary for jobs, finance, IT, business, and career communication.",
    published: "2025-07-01T03:38:28+00:00",
    thumbnail: "https://i.ytimg.com/vi/D1ZjCkOx1pg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=D1ZjCkOx1pg",
    embedUrl: "https://www.youtube.com/embed/D1ZjCkOx1pg",
    categories: ["Business Chinese", "Chinese Vocabulary"],
  },
  {
    id: "NUs1MVc23vU",
    title: "Chinese for Health, Fitness, and Medicine",
    slug: "chinese-for-health-fitness-and-medicine",
    description: "Learn Chinese vocabulary for health, fitness, medicine, and clinical communication.",
    published: "2025-06-30T03:36:34+00:00",
    thumbnail: "https://i.ytimg.com/vi/NUs1MVc23vU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=NUs1MVc23vU",
    embedUrl: "https://www.youtube.com/embed/NUs1MVc23vU",
    categories: ["Medical Chinese", "Chinese Vocabulary"],
  },
  {
    id: "iyt8KFc1Cxc",
    title: "Chinese Vocabulary for Animals, Nature, and Environment",
    slug: "chinese-vocabulary-animals-nature-environment",
    description: "Learn Chinese words for animals, nature, and the environment.",
    published: "2025-06-29T09:24:26+00:00",
    thumbnail: "https://i.ytimg.com/vi/iyt8KFc1Cxc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=iyt8KFc1Cxc",
    embedUrl: "https://www.youtube.com/embed/iyt8KFc1Cxc",
    categories: ["Chinese Vocabulary", "Chinese Culture", "Children's Chinese"],
  },
];

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL, { next: { revalidate: 3600 } });
    if (!response.ok) {
      return fallbackVideos;
    }

    const xml = await response.text();
    const videos = parseYouTubeFeed(xml);
    return videos.length ? videos : fallbackVideos;
  } catch {
    return fallbackVideos;
  }
}

export async function getVideoBySlug(slug: string) {
  const videos = await getYouTubeVideos();
  return videos.find((video) => video.slug === slug || video.id === slug);
}

export async function getVideosByCategory(category: VideoCategory) {
  const videos = await getYouTubeVideos();
  return videos.filter((video) => video.categories.includes(category));
}

export function getCategoryBySlug(slug: string) {
  return videoCategories.find((category) => category.slug === slug);
}

export function getRelatedVideos(video: YouTubeVideo, videos: YouTubeVideo[], limit = 4) {
  return videos
    .filter((item) => item.id !== video.id)
    .map((item) => ({
      video: item,
      score: item.categories.filter((category) => video.categories.includes(category)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.video);
}

export function getProfessionalVideos(slug: keyof typeof professionalVideoRules, videos: YouTubeVideo[]) {
  const rules = professionalVideoRules[slug];
  return videos.filter((video) => rules.some((rule) => searchableText(video).includes(rule.toLowerCase())));
}

export function searchVideos(videos: YouTubeVideo[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return videos;
  }
  return videos.filter((video) => searchableText(video).includes(normalized));
}

function parseYouTubeFeed(xml: string): YouTubeVideo[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((match) => match[1]);

  return entries.map((entry) => {
    const id = getXmlValue(entry, "yt:videoId");
    const title = decodeXml(getXmlValue(entry, "title"));
    const description = decodeXml(getMediaDescription(entry)) || `Watch this LOVE CHINESE lesson: ${title}`;
    const published = getXmlValue(entry, "published");
    const thumbnail = getThumbnail(entry, id);
    const slug = makeVideoSlug(title, id);

    return {
      id,
      title,
      slug,
      description,
      published,
      thumbnail,
      url: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
      categories: categorizeVideo(title, description),
    };
  });
}

function categorizeVideo(title: string, description: string): VideoCategory[] {
  const text = `${title} ${description}`.toLowerCase();
  const categories = new Set<VideoCategory>();

  for (let level = 1; level <= 6; level += 1) {
    if (text.includes(`hsk ${level}`) || text.includes(`hsk${level}`)) {
      categories.add(`HSK ${level}` as VideoCategory);
    }
  }

  addIf(categories, "Chinese Vocabulary", text, ["vocabulary", "word", "words", "词汇"]);
  addIf(categories, "Chinese Characters", text, ["character", "characters", "hanzi", "汉字"]);
  addIf(categories, "Chinese Conversations", text, ["sentence", "sentences", "conversation", "dialogue", "speaking", "句子", "会话"]);
  addIf(categories, "Business Chinese", text, ["business", "industry", "workplace", "professional", "oil", "gas", "construction", "transport", "行业", "商务"]);
  addIf(categories, "Construction Chinese", text, ["construction", "building", "site", "建筑", "工地"]);
  addIf(categories, "Restaurant Chinese", text, ["restaurant", "menu", "food", "chef", "kitchen", "餐厅", "菜单"]);
  addIf(categories, "Medical Chinese", text, ["medical", "doctor", "clinic", "hospital", "patient", "医疗", "医生"]);
  addIf(categories, "Travel Chinese", text, ["travel", "traffic", "transport", "shipping", "maritime", "hotel", "home", "daily life", "旅行", "交通", "海运"]);
  addIf(categories, "Children's Chinese", text, ["children", "kids", "preschool", "toy", "toys", "儿童", "学前", "玩具"]);
  addIf(categories, "Chinese Stories", text, ["story", "stories", "reading", "故事", "阅读"]);
  addIf(categories, "Chinese Culture", text, ["culture", "festival", "food culture", "文化", "节日"]);

  if (!categories.size) {
    categories.add("Chinese Vocabulary");
  }

  return [...categories];
}

function addIf(categories: Set<VideoCategory>, category: VideoCategory, text: string, keywords: string[]) {
  if (keywords.some((keyword) => text.includes(keyword))) {
    categories.add(category);
  }
}

function searchableText(video: YouTubeVideo) {
  return `${video.title} ${video.description} ${video.categories.join(" ")}`.toLowerCase();
}

function getXmlValue(xml: string, tag: string) {
  return decodeXml(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`).exec(xml)?.[1] ?? "");
}

function getMediaDescription(xml: string) {
  return /<media:description>([\s\S]*?)<\/media:description>/.exec(xml)?.[1] ?? "";
}

function getThumbnail(xml: string, id: string) {
  return /<media:thumbnail url="([^"]+)"/.exec(xml)?.[1] ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function makeVideoSlug(title: string, id: string) {
  const slug = title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return slug || id;
}
