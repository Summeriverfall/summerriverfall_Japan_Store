const MENU_LABELS = {
  thai: { en: "Thai Traditional", jp: "タイ古式", cn: "泰式古法按摩", tw: "泰式古法按摩", kr: "타이 트래디셔널" },
  oil: { en: "Oil Massage", jp: "オイル", cn: "精油按摩", tw: "精油按摩", kr: "오일 마사지" },
  body: { en: "Body Massage", jp: "もみほぐし", cn: "舒缓按摩", tw: "舒緩按摩", kr: "전신 마사지" },
  foot: { en: "Foot Reflexology", jp: "足ツボ", cn: "足底按摩", tw: "足底按摩", kr: "발 지압" },
  head: { en: "Head Massage", jp: "頭", cn: "头部按摩", tw: "頭部按摩", kr: "헤드 마사지" },
  thaiHeadFoot: { en: "Thai + Head or Foot", jp: "タイ古式 + 頭 or 足ツボ", cn: "泰式古法 + 头部或足底", tw: "泰式古法 + 頭部或足底", kr: "타이 + 헤드 또는 발" },
  oilThai: { en: "Oil + Thai Traditional", jp: "オイル + タイ古式", cn: "精油 + 泰式古法", tw: "精油 + 泰式古法", kr: "오일 + 타이 트래디셔널" },
  bodyHeadFoot: { en: "Body + Head or Foot", jp: "もみほぐし + 頭 or 足ツボ", cn: "舒缓按摩 + 头部或足底", tw: "舒緩按摩 + 頭部或足底", kr: "바디 + 헤드 또는 발" },
  footOil: { en: "Foot + Oil", jp: "足ツボ + オイル", cn: "足底 + 精油", tw: "足底 + 精油", kr: "발 + 오일" }
};

const SINGLE_MENU = [
  { key: "thai", items: [["40 min (half)", "¥4,000"], ["60 min", "¥5,800", "popular"], ["90 min", "¥8,000", "recommended"], ["120 min", "¥10,800"], ["10 min", "¥1,000", "extension"]] },
  { key: "oil", items: [["40 min (half)", "¥4,800"], ["60 min", "¥6,800", "popular"], ["90 min", "¥9,800", "recommended"], ["120 min", "¥12,000"], ["10 min", "¥1,500", "extension"]] },
  { key: "body", items: [["30 min (half)", "¥3,000"], ["60 min", "¥5,000", "popular"], ["90 min", "¥7,000", "recommended"], ["120 min", "¥9,000"], ["10 min", "¥1,000", "extension"]] },
  { key: "foot", items: [["30 min", "¥3,600", "recommended"], ["45 min", "¥4,500", "popular"], ["60 min", "¥5,500", "recommended"], ["10 min", "¥1,000", "extension"]] },
  { key: "head", items: [["30 min", "¥3,000"], ["40 min", "¥4,000"]] }
];

const COMBO_MENU = [
  { key: "thaiHeadFoot", items: [
    [{ en: "Thai 40 + Head/Foot 20", jp: "タイ古式40 + 頭or足ツボ20", cn: "泰式古法40 + 头/足20", tw: "泰式古法40 + 頭/足20", kr: "타이 40 + 헤드·발 20" }, "60 min", "¥6,000"],
    [{ en: "Thai 60 + Head/Foot 30", jp: "タイ古式60 + 頭or足ツボ30", cn: "泰式古法60 + 头/足30", tw: "泰式古法60 + 頭/足30", kr: "타이 60 + 헤드·발 30" }, "90 min", "¥8,200", "recommended"],
    [{ en: "Thai 75 + Foot 30 + Head 15", jp: "タイ古式75 + 足ツボ30 + 頭15", cn: "泰式古法75 + 足底30 + 头15", tw: "泰式古法75 + 足底30 + 頭15", kr: "타이 75 + 발 30 + 헤드 15" }, "120 min", "¥10,800"]
  ] },
  { key: "oilThai", items: [
    [{ en: "Oil 40 + Thai 40", jp: "オイル40 + タイ古式40", cn: "精油40 + 泰式古法40", tw: "精油40 + 泰式古法40", kr: "오일 40 + 타이 40" }, "80 min", "¥8,000"],
    [{ en: "Oil 50 + Thai 50", jp: "オイル50 + タイ古式50", cn: "精油50 + 泰式古法50", tw: "精油50 + 泰式古法50", kr: "오일 50 + 타이 50" }, "100 min", "¥10,000"],
    [{ en: "Oil 60 + Thai 60", jp: "オイル60 + タイ古式60", cn: "精油60 + 泰式古法60", tw: "精油60 + 泰式古法60", kr: "오일 60 + 타이 60" }, "120 min", "¥11,800", "recommended"]
  ] },
  { key: "bodyHeadFoot", items: [
    [{ en: "Body 40 + Head/Foot 20", jp: "もみほぐし40 + 頭or足ツボ20", cn: "舒缓40 + 头/足20", tw: "舒緩40 + 頭/足20", kr: "바디 40 + 헤드·발 20" }, "60 min", "¥5,800"],
    [{ en: "Body 60 + Head/Foot 30", jp: "もみほぐし60 + 頭or足ツボ30", cn: "舒缓60 + 头/足30", tw: "舒緩60 + 頭/足30", kr: "바디 60 + 헤드·발 30" }, "90 min", "¥8,000", "recommended"],
    [{ en: "Body 75 + Foot 30 + Head 15", jp: "もみほぐし75 + 足ツボ30 + 頭15", cn: "舒缓75 + 足底30 + 头15", tw: "舒緩75 + 足底30 + 頭15", kr: "바디 75 + 발 30 + 헤드 15" }, "120 min", "¥10,400"]
  ] },
  { key: "footOil", items: [
    [{ en: "Foot 30 + Oil 40", jp: "足ツボ30 + オイル40", cn: "足底30 + 精油40", tw: "足底30 + 精油40", kr: "발 30 + 오일 40" }, "70 min", "¥7,000"],
    [{ en: "Foot 30 + Oil 60", jp: "足ツボ30 + オイル60", cn: "足底30 + 精油60", tw: "足底30 + 精油60", kr: "발 30 + 오일 60" }, "90 min", "¥9,000", "recommended"],
    [{ en: "Foot 30 + Oil 90", jp: "足ツボ30 + オイル90", cn: "足底30 + 精油90", tw: "足底30 + 精油90", kr: "발 30 + 오일 90" }, "120 min", "¥12,000"]
  ] }
];

function localizeMenuName(name, lang) {
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
        service: `${groupLabel} - ${localizeMenuName(name, lang)}`,
        duration,
        price
      });
    });
  });

  return options;
}

function addonOptions(lang) {
  const options = [];
  SINGLE_MENU.forEach((group) => {
    const groupLabel = MENU_LABELS[group.key][lang] || MENU_LABELS[group.key].en;
    group.items.forEach(([duration, price, type]) => {
      if (!isAddonItem(duration, type)) return;
      options.push({ group: "addon", service: groupLabel, duration, price });
    });
  });
  return options;
}
