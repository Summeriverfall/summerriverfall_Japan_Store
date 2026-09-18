const MENU_LABELS = {
  body: { en: "Full-body Massage", jp: "全身ほぐし", cn: "全身按摩", tw: "全身按摩", kr: "전신 마사지" },
  foot: { en: "Foot Sole Massage", jp: "足裏マッサージ", cn: "足底按摩", tw: "足底按摩", kr: "발 마사지" },
  eyeHead: { en: "Eye & Head Refresh", jp: "目・頭スッキリ", cn: "眼头放松", tw: "眼頭放鬆", kr: "눈·머리 리프레시" },
  drainage: { en: "Intestinal Massage", jp: "腸もみ", cn: "肠道按摩", tw: "腸道按摩", kr: "장 마사지" },
  cupping: { en: "Cupping", jp: "吸い玉", cn: "拔罐", tw: "拔罐", kr: "부항" },
  lymph: { en: "Aroma Oil Massage", jp: "アロマオイルマッサージ", cn: "芳香精油按摩", tw: "芳香精油按摩", kr: "아로마 오일 마사지" },
  thai: { en: "Lymphatic Oil Massage", jp: "リンパオイルマッサージ", cn: "淋巴精油按摩", tw: "淋巴精油按摩", kr: "림프 오일 마사지" },
  bodyFoot: { en: "Full Body + Foot", jp: "全身＋足裏", cn: "全身＋足底", tw: "全身＋足底", kr: "전신 + 발" },
  bodyLymph: { en: "Body or Foot + Aroma Oil", jp: "全身or足裏＋アロマオイル", cn: "全身或足底＋芳香精油", tw: "全身或足底＋芳香精油", kr: "전신 또는 발 + 아로마 오일" },
  aromaIntestinal: { en: "Aroma Oil + Intestinal", jp: "アロマオイル＋腸もみ", cn: "芳香精油＋肠道按摩", tw: "芳香精油＋腸道按摩", kr: "아로마 오일 + 장 마사지" }
};

const SINGLE_MENU = [
  { key: "body", items: [
    ["30 min", "¥2,500"],
    ["45 min", "¥3,000"],
    ["60 min", "¥3,900", "popular"],
    ["75 min", "¥4,600"],
    ["90 min", "¥5,500", "recommended"],
    ["120 min", "¥7,500"],
    ["10 min", "¥1,000", "extension"]
  ]},
  { key: "foot", items: [
    ["30 min", "¥2,800"],
    ["45 min", "¥4,000", "popular"],
    ["60 min", "¥5,500"],
    ["10 min", "¥1,500", "extension"]
  ]},
  { key: "eyeHead", items: [
    ["15 min", "¥1,800"],
    ["30 min", "¥3,500"]
  ]},
  { key: "drainage", items: [
    ["30 min", "¥4,000"],
    ["60 min", "¥6,500"]
  ]},
  { key: "cupping", items: [
    ["20 min", "¥2,500"],
    ["30 min", "¥3,000"]
  ]},
  { key: "lymph", items: [
    ["30 min", "¥3,500"],
    ["60 min", "¥6,000"],
    ["90 min", "¥9,500", "recommended"],
    ["120 min", "¥11,000"],
    ["10 min", "¥1,500", "extension"]
  ]},
  { key: "thai", items: [
    ["30 min", "¥4,000"],
    ["60 min", "¥7,500"],
    ["90 min", "¥11,000", "recommended"],
    ["120 min", "¥14,000"],
    ["10 min", "¥2,000", "extension"]
  ]}
];

const COMBO_MENU = [
  { key: "bodyFoot", items: [
    [{ en: "Foot 30 + Body 30", jp: "足裏30 + 全身30", cn: "足底30 + 全身30", tw: "足底30 + 全身30", kr: "발 30 + 전신 30" }, "60 min", "¥4,500"],
    [{ en: "Foot 30 + Body 40", jp: "足裏30 + 全身40", cn: "足底30 + 全身40", tw: "足底30 + 全身40", kr: "발 30 + 전신 40" }, "70 min", "¥5,000"],
    [{ en: "Foot 30 + Body 30 + Head 15", jp: "足裏30 + 全身30 + 頭15", cn: "足底30 + 全身30 + 头部15", tw: "足底30 + 全身30 + 頭部15", kr: "발 30 + 전신 30 + 헤드 15" }, "75 min", "¥5,500"],
    [{ en: "Foot 30 + Body 70", jp: "足裏30 + 全身70", cn: "足底30 + 全身70", tw: "足底30 + 全身70", kr: "발 30 + 전신 70" }, "100 min", "¥7,000", "recommended"],
    [{ en: "Foot 60 + Body 60", jp: "足裏60 + 全身60", cn: "足底60 + 全身60", tw: "足底60 + 全身60", kr: "발 60 + 전신 60" }, "120 min", "¥8,500"],
    [{ en: "Foot 45 + Body 45 + Head 15", jp: "足裏45 + 全身45 + 頭15", cn: "足底45 + 全身45 + 头部15", tw: "足底45 + 全身45 + 頭部15", kr: "발 45 + 전신 45 + 헤드 15" }, "105 min", "¥7,500"]
  ]},
  { key: "bodyLymph", items: [
    [{ en: "Body or Foot 30 + Aroma Oil 60", jp: "全身or足裏30 + アロマオイル60", cn: "全身或足底30 + 芳香精油60", tw: "全身或足底30 + 芳香精油60", kr: "전신 또는 발 30 + 아로마 오일 60" }, "90 min", "¥8,500", "popular"],
    [{ en: "Body or Foot 60 + Aroma Oil 60", jp: "全身or足裏60 + アロマオイル60", cn: "全身或足底60 + 芳香精油60", tw: "全身或足底60 + 芳香精油60", kr: "전신 또는 발 60 + 아로마 오일 60" }, "120 min", "¥9,500"]
  ]},
  { key: "aromaIntestinal", items: [
    [{ en: "Aroma Oil 30 + Intestinal 60", jp: "アロマオイル30 + 腸もみ60", cn: "芳香精油30 + 肠道按摩60", tw: "芳香精油30 + 腸道按摩60", kr: "아로마 오일 30 + 장 마사지 60" }, "90 min", "¥9,000"],
    [{ en: "Aroma Oil 60 + Intestinal 60", jp: "アロマオイル60 + 腸もみ60", cn: "芳香精油60 + 肠道按摩60", tw: "芳香精油60 + 腸道按摩60", kr: "아로마 오일 60 + 장 마사지 60" }, "120 min", "¥11,000"]
  ]}
];

function localizeName(name, lang) {
  if (typeof name === "string") return name;
  return name[lang] || name.en || "";
}

function isAddonItem(duration, type) {
  return type === "extension" || /^\s*10\s*min/i.test(String(duration || ""));
}

function menuOptions(lang) {
  const options = [];

  SINGLE_MENU.forEach((group) => {
    const groupLabel = MENU_LABELS[group.key][lang] || MENU_LABELS[group.key].en;
    group.items.forEach(([duration, price, type]) => {
      if (isAddonItem(duration, type)) return;
      options.push({ group: "single", service: groupLabel, duration, price });
    });
  });

  COMBO_MENU.forEach((group) => {
    const groupLabel = MENU_LABELS[group.key][lang] || MENU_LABELS[group.key].en;
    group.items.forEach(([name, duration, price]) => {
      options.push({
        group: "combo",
        service: `${groupLabel} - ${localizeName(name, lang)}`,
        duration,
        price
      });
    });
  });

  return options;
}

