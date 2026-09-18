const STORE = {
  nameJa: "リラころ 長堀橋店",
  nameEn: "Rirakoro Nagahoribashi",
  phone: "+81662441830",
  phoneDisplay: "06-6244-1830",
  whatsapp: "85290744644",
  maps: "https://www.google.com/maps/search/?api=1&query=%E3%80%92542-0082%20%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%B3%B6%E3%83%8E%E5%86%851%E4%B8%81%E7%9B%AE19-15%20%E9%AB%98%E5%90%89%E5%A0%BA%E7%AD%8B%E3%83%93%E3%83%AB%202%E9%9A%8E",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2102547812974!2d135.5065208!3d34.6746426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7463873f62f%3A0xbc8c33a9bb1dca03!2z44Oq44Op44GT44KNIOmVt-WggOapi-W6lw!5e0!3m2!1szh-CN!2sjp!4v1778464923448!5m2!1szh-CN!2sjp",
  addressJa: "〒542-0082 大阪府大阪市中央区島ノ内１丁目１９−１５ 高吉堺筋ビル ２階",
  station: "Nagahoribashi Station"
};

const COPY = {
  en: {
    code: "EN",
    title: "Rirakoro Nagahoribashi",
    kicker: "Osaka massage salon",
    lead: "",
    priceListLabel: "Price List",
    navBooking: "WhatsApp booking",
    phone: STORE.phoneDisplay,
    maps: "Google Maps",
    galleryTitle: "Salon gallery",
    introTitle: "Easy access, late-night care",
    intro: "Full-body massage, foot reflexology, intestinal massage, aromatic essential oil massage, and lymphatic oil massage for travel fatigue, work tension, and late-night visits near Nagahoribashi",
    info: ["Hours", "Daily 12:00–00:00", "Open seven days", "Phone", STORE.phoneDisplay, "Phone booking available", "Address", "〒542-0082 Osaka, Chuo Ward, Shimanouchi, 1 Chome 19-15 Takayoshi Sakaisuji Building 2F", "About 1 min walk from Nagahoribashi Station Exit 4"],
    servicesTitle: "Services",
    servicesLead: "Choose from full-body massage, foot reflexology, intestinal massage, aromatic essential oil massage, or lymphatic oil massage to match your needs.",
    services: [
      ["Full-body Massage", "Targeted kneading for shoulder, back, and leg fatigue."],
      ["Foot Reflexology", "Focused foot care with foot bath included."],
      ["Intestinal Massage", "Gentle abdominal work to ease tension and support digestion."],
      ["Aromatic Essential Oil Massage", "Relaxing full-body massage with scented essential oils."],
      ["Lymphatic Oil Massage", "Essential oil massage with lymph-focused techniques for relaxation and circulation."]
    ],
    menuTitle: "Menu & Prices",
    menuLead: "All prices include tax.",
    singleMenuTitle: "Single Treatments",
    comboMenuTitle: "Combination Courses",
    durationLabel: "Duration",
    priceLabel: "Price",
    popular: "Popular",
    recommended: "Recommended",
    extension: "Extension",
    note: "Notes",
    oilNote: "Foot reflexology includes a foot bath. Ask us about extensions.",
    nominateNote: "Staff nomination fee: ¥200.",
    visitTitle: "Visit",
    visitLead: "",
    visitWeekLines: [
      "Monday: 12:00 – 00:00",
      "Tuesday: 12:00 – 00:00",
      "Wednesday: 12:00 – 00:00",
      "Thursday: 12:00 – 00:00",
      "Friday: 12:00 – 00:00",
      "Saturday: 12:00 – 00:00",
      "Sunday: 12:00 – 00:00"
    ],
    footer: "Rirakoro Nagahoribashi"
  },
  jp: {
    code: "JP",
    title: "リラころ 長堀橋店",
    kicker: "長堀橋のリラクゼーションサロン",
    lead: "",
    priceListLabel: "価格表",
    navBooking: "WhatsApp 予約",
    phone: STORE.phoneDisplay,
    maps: "Google Maps",
    galleryTitle: "店内ギャラリー",
    introTitle: "駅近で深夜まで利用しやすい整体サロン",
    intro: "全身もみほぐし、足ツボ、腸もみ、アロマティック精油マッサージ、リンパオイルマッサージなど、旅行中やお仕事帰りの疲れに合わせて選べます",
    info: ["営業時間", "毎日 12:00～24:00（深夜0時まで）", "定休日なし", "電話", STORE.phoneDisplay, "電話予約可", "住所", STORE.addressJa, "長堀橋駅4番出口から徒歩約1分"],
    servicesTitle: "メニュー",
    servicesLead: "もみほぐし、足ツボ、腸もみ、アロマティック精油マッサージ、リンパオイルマッサージから、お体の状態に合わせてお選びください。",
    services: [
      ["全身もみほぐし", "肩、背中、脚など日常の疲れを丁寧にケア。"],
      ["足ツボ", "足湯付きの足ツボリフレクソロジー。"],
      ["腸もみ", "お腹まわりをやさしくほぐし、腸の働きをサポート。"],
      ["アロマティック精油マッサージ", "香り豊かな精油で全身をゆったりトリートメント。"],
      ["リンパオイルマッサージ", "オイルでリンパの流れを整えながら、深いリラクゼーションへ。"]
    ],
    menuTitle: "価格表",
    menuLead: "税込。",
    singleMenuTitle: "単品メニュー",
    comboMenuTitle: "組み合わせコース",
    durationLabel: "時間",
    priceLabel: "料金",
    popular: "人気",
    recommended: "おすすめ",
    extension: "延長",
    note: "備考",
    oilNote: "足ツボは足湯付き。延長をご希望の場合はお申し付けください。",
    nominateNote: "指名料（男女・強め）：¥200。",
    visitTitle: "アクセス",
    visitLead: "",
    visitWeekLines: [
      "月曜：12:00～24:00",
      "火曜：12:00～24:00",
      "水曜：12:00～24:00",
      "木曜：12:00～24:00",
      "金曜：12:00～24:00",
      "土曜：12:00～24:00",
      "日曜：12:00～24:00"
    ],
    footer: "リラころ 長堀橋店"
  },
  cn: {
    code: "CN",
    title: "Rirakoro 长堀桥店",
    kicker: "大阪长堀桥按摩店",
    lead: "",
    priceListLabel: "价格表",
    navBooking: "WhatsApp 预约",
    phone: STORE.phoneDisplay,
    maps: "Google Maps",
    galleryTitle: "环境展示",
    introTitle: "靠近车站，深夜也方便到店",
    intro: "提供全身按摩、足底按摩、肠道按摩、芳香精油按摩、淋巴精油按摩等项目，适合旅行后放松、工作后舒缓和深夜预约",
    info: ["营业时间", "每天 12:00–次日00:00", "全年无休", "电话", STORE.phoneDisplay, "可电话预约", "地址", "〒542-0082 大阪市中央区岛之内1丁目19-15 高吉堺筋大楼 2楼", "从长堀桥站4号出口步行约1分钟"],
    servicesTitle: "服务项目",
    servicesLead: "可按全身按摩、足底按摩、肠道按摩、芳香精油按摩、淋巴精油按摩等项目，根据需求选择最适合的课程。",
    services: [
      ["全身按摩", "针对肩颈、背部和腿部疲劳的经典全身护理。"],
      ["足底按摩", "含足浴的足底穴位护理。"],
      ["肠道按摩", "针对腹部肠道的轻柔按揉护理，舒缓放松。"],
      ["芳香精油按摩", "以芳香精油进行全身舒缓放松的护理。"],
      ["淋巴精油按摩", "配合精油与淋巴手法，舒缓放松、促进循环。"]
    ],
    menuTitle: "项目与价格",
    menuLead: "以下价格均含税。",
    singleMenuTitle: "单项项目",
    comboMenuTitle: "组合套餐",
    durationLabel: "时长",
    priceLabel: "价格",
    popular: "人气",
    recommended: "推荐",
    extension: "延长",
    note: "备注",
    oilNote: "足底按摩含足浴。如需延长时间请告知。",
    nominateNote: "指定工作人员费用：¥200。",
    visitTitle: "位置",
    visitLead: "",
    visitWeekLines: [
      "星期一：12:00 – 次日00:00",
      "星期二：12:00 – 次日00:00",
      "星期三：12:00 – 次日00:00",
      "星期四：12:00 – 次日00:00",
      "星期五：12:00 – 次日00:00",
      "星期六：12:00 – 次日00:00",
      "星期日：12:00 – 次日00:00"
    ],
    footer: "Rirakoro 长堀桥店"
  },
  tw: {
    code: "TW",
    title: "Rirakoro 長堀橋店",
    kicker: "大阪長堀橋按摩店",
    lead: "",
    priceListLabel: "價格表",
    navBooking: "WhatsApp 預約",
    phone: STORE.phoneDisplay,
    maps: "Google Maps",
    galleryTitle: "環境展示",
    introTitle: "近車站，深夜也方便到店",
    intro: "提供全身按摩、足底按摩、腸道按摩、芳香精油按摩、淋巴精油按摩等項目，適合旅行後放鬆、工作後舒緩與深夜預約",
    info: ["營業時間", "每天 12:00–翌日00:00", "全年無休", "電話", STORE.phoneDisplay, "可電話預約", "地址", "〒542-0082 大阪市中央區島之內1丁目19-15 高吉堺筋大樓 2樓", "從長堀橋站4號出口步行約1分鐘"],
    servicesTitle: "服務項目",
    servicesLead: "可依全身按摩、足底按摩、腸道按摩、芳香精油按摩、淋巴精油按摩等項目，依需求選擇最適合的課程。",
    services: [
      ["全身按摩", "針對肩頸、背部與腿部疲勞的經典全身護理。"],
      ["足底按摩", "含足浴的足底穴位護理。"],
      ["腸道按摩", "針對腹部腸道的輕柔按揉護理，舒緩放鬆。"],
      ["芳香精油按摩", "以芳香精油進行全身舒緩放鬆的護理。"],
      ["淋巴精油按摩", "配合精油與淋巴手法，舒緩放鬆、促進循環。"]
    ],
    menuTitle: "項目與價格",
    menuLead: "以下價格均含稅。",
    singleMenuTitle: "單項項目",
    comboMenuTitle: "組合套餐",
    durationLabel: "時長",
    priceLabel: "價格",
    popular: "人氣",
    recommended: "推薦",
    extension: "延長",
    note: "備註",
    oilNote: "足底按摩含足浴。如需延長時間請告知。",
    nominateNote: "指定工作人員費用：¥200。",
    visitTitle: "位置",
    visitLead: "",
    visitWeekLines: [
      "星期一：12:00 – 翌日00:00",
      "星期二：12:00 – 翌日00:00",
      "星期三：12:00 – 翌日00:00",
      "星期四：12:00 – 翌日00:00",
      "星期五：12:00 – 翌日00:00",
      "星期六：12:00 – 翌日00:00",
      "星期日：12:00 – 翌日00:00"
    ],
    footer: "Rirakoro 長堀橋店"
  },
  kr: {
    code: "KR",
    title: "리라코로 나가호리바시점",
    kicker: "오사카 나가호리바시 마사지",
    lead: "",
    priceListLabel: "가격표",
    navBooking: "WhatsApp 예약",
    phone: STORE.phoneDisplay,
    maps: "Google Maps",
    galleryTitle: "매장 분위기",
    introTitle: "역에서 가깝고 늦은 시간에도 이용하기 좋은 살롱",
    intro: "전신 마사지, 발 마사지, 장 마사지, 아로마 에센셜 오일 마사지, 림프 오일 마사지 등 여행 피로와 업무 후 긴장을 풀기 좋은 메뉴를 제공합니다",
    info: ["영업시간", "매일 12:00–24:00", "연중 무휴", "전화", STORE.phoneDisplay, "전화 예약 가능", "주소", "〒542-0082 오사카시 주오구 시마노우치 1초메 19-15 다카요시사카스지 빌딩 2층", "나가호리바시역 4번 출구에서 도보 약 1분"],
    servicesTitle: "서비스",
    servicesLead: "전신 마사지, 발 마사지, 장 마사지, 아로마 에센셜 오일 마사지, 림프 오일 마사지 중 컨디션에 맞게 선택할 수 있습니다.",
    services: [
      ["전신 마사지", "어깨, 등, 다리 피로를 위한 기본 전신 케어."],
      ["발 마사지", "족욕 포함 발 지압 리플렉솔로지."],
      ["장 마사지", "복부와 장을 부드럽게 풀어 소화와 이완을 돕는 케어."],
      ["아로마 에센셜 오일 마사지", "향긋한 에센셜 오일로 온전히 이완되는 전신 케어."],
      ["림프 오일 마사지", "오일로 림프 순환을 돕고 깊은 이완을 위한 케어."]
    ],
    menuTitle: "메뉴 및 가격",
    menuLead: "가격은 세금 포함입니다.",
    singleMenuTitle: "단품 메뉴",
    comboMenuTitle: "콤비네이션 코스",
    durationLabel: "시간",
    priceLabel: "가격",
    popular: "인기",
    recommended: "추천",
    extension: "연장",
    note: "비고",
    oilNote: "발 마사지는 족욕 포함. 연장을 원하시면 말씀해 주세요.",
    nominateNote: "직원 지명료: ¥200.",
    visitTitle: "오시는 길",
    visitLead: "",
    visitWeekLines: [
      "월요일: 12:00 – 24:00",
      "화요일: 12:00 – 24:00",
      "수요일: 12:00 – 24:00",
      "목요일: 12:00 – 24:00",
      "금요일: 12:00 – 24:00",
      "토요일: 12:00 – 24:00",
      "일요일: 12:00 – 24:00"
    ],
    footer: "리라코로 나가호리바시점"
  }
};

const COMBO_PAGE_LABELS = {
  en: { back: "Back" },
  jp: { back: "戻る" },
  cn: { back: "返回" },
  tw: { back: "返回" },
  kr: { back: "뒤로" }
};

const LANGS = [
  ["en", "EN"],
  ["jp", "JP"],
  ["cn", "简"],
  ["tw", "繁"],
  ["kr", "KR"]
];

const BOOKING_LABELS = {
  en: "Book",
  jp: "予約",
  cn: "预约",
  tw: "預約",
  kr: "예약"
};

const MORE_LABELS = {
  en: "More",
  jp: "もっと見る",
  cn: "更多",
  tw: "更多",
  kr: "더보기"
};

function shopBookingHref(query) {
  const qs = query instanceof URLSearchParams ? query.toString() : String(query || "");
  const suffix = qs ? `booking.html?${qs}` : "booking.html";
  const slug = (location.pathname.match(/\/shops\/([^/]+)/) || [])[1];
  if (slug) return `/shops/${slug}/${suffix}`;
  return `../${suffix}`;
}

function generalBookingUrl(lang) {
  return shopBookingHref(new URLSearchParams({ lang }));
}

function bookingUrl(lang, service, duration, price) {
  return shopBookingHref(new URLSearchParams({ lang, service, duration, price }));
}

function badge(type, copy) {
  if (!type) return "";
  const label = type === "popular" ? copy.popular : type === "recommended" ? copy.recommended : copy.extension;
  return `<span class="menu-badge menu-badge--${type}">${label}</span>`;
}

function bookingButton(lang, service, duration, price) {
  const label = BOOKING_LABELS[lang] || BOOKING_LABELS.en;
  return `<a class="menu-book-btn" href="${bookingUrl(lang, service, duration, price)}">${label}</a>`;
}

function isPrimaryMenuItem(duration, type) {
  return type === "popular" || type === "recommended" || /(^|\s)(60|90|120)\s*min/i.test(duration);
}

function renderSingleRow(copy, lang, service, duration, price, type) {
  return `
    <div class="menu-row">
      <span>${duration}${badge(type, copy)}</span>
      <strong>${price}</strong>
      ${bookingButton(lang, service, duration, price)}
    </div>
  `;
}

function renderComboRow(copy, lang, service, name, duration, price, type) {
  const localizedName = localizeName(name, lang);
  return `
    <div class="combo-row">
      <span>${localizedName}${badge(type, copy)}</span>
      <em>${duration}</em>
      <strong>${price}</strong>
      ${bookingButton(lang, `${service} - ${localizedName}`, duration, price)}
    </div>
  `;
}

function renderMoreBlock(lang, rows) {
  if (!rows.length) return "";
  const label = MORE_LABELS[lang] || MORE_LABELS.en;
  return `
    <details class="menu-more">
      <summary>${label}</summary>
      <div class="menu-more-list">${rows.join("")}</div>
    </details>
  `;
}

function splitRowsByPriority(items, durationIndex, typeIndex) {
  if (items.length <= 3) {
    return { primary: items, secondary: [] };
  }

  const primary = items.filter((item) => isPrimaryMenuItem(item[durationIndex], item[typeIndex]));
  return {
    primary: primary.length ? primary : items.slice(0, 3),
    secondary: primary.length
      ? items.filter((item) => !isPrimaryMenuItem(item[durationIndex], item[typeIndex]))
      : items.slice(3)
  };
}

function renderSingleMenu(copy, lang) {
  return SINGLE_MENU.map((group) => {
    const rows = splitRowsByPriority(group.items, 0, 2);
    return `
      <article class="menu-card">
        <h3>${MENU_LABELS[group.key][lang]}</h3>
        <div class="menu-list">
          ${rows.primary
            .map(([duration, price, type]) => renderSingleRow(copy, lang, MENU_LABELS[group.key][lang], duration, price, type))
            .join("")}
          ${renderMoreBlock(lang, rows.secondary
            .map(([duration, price, type]) => renderSingleRow(copy, lang, MENU_LABELS[group.key][lang], duration, price, type)))}
        </div>
      </article>
    `;
  }).join("");
}

function renderComboMenu(copy, lang) {
  const limitGroups = arguments.length > 2 && arguments[2] && typeof arguments[2].limitGroups === "number"
    ? arguments[2].limitGroups
    : null;
  const groups = typeof limitGroups === "number" ? COMBO_MENU.slice(0, limitGroups) : COMBO_MENU;

  return groups.map((group) => {
    const rows = splitRowsByPriority(group.items, 1, 3);
    return `
      <article class="menu-card menu-card--wide">
        <h3>${MENU_LABELS[group.key][lang]}</h3>
        <div class="combo-list">
          ${rows.primary
            .map(([name, duration, price, type]) => renderComboRow(copy, lang, MENU_LABELS[group.key][lang], name, duration, price, type))
            .join("")}
          ${renderMoreBlock(lang, rows.secondary
            .map(([name, duration, price, type]) => renderComboRow(copy, lang, MENU_LABELS[group.key][lang], name, duration, price, type)))}
        </div>
      </article>
    `;
  }).join("");
}

function render() {
  const lang = document.body.dataset.lang || "en";
  const copy = COPY[lang] || COPY.en;
  document.body.classList.add("shop-page");

  const isComboPage = /combo\.html$/i.test(window.location.pathname || "");
  const comboLabels = COMBO_PAGE_LABELS[lang] || COMBO_PAGE_LABELS.en;

  const galleryImages = [
    { src: "../images/20.webp", alt: "" },
    { src: "../images/21.webp", alt: "" },
    { src: "../images/22.webp", alt: "" },
    { src: "../images/23.webp", alt: "" }
  ];

  const languageLinks = LANGS.map(([key, label]) => {
    const current = key === lang ? ' aria-current="page"' : "";
    const page = isComboPage ? "combo.html" : "index.html";
    return `<a href="../${key}/${page}"${current}>${label}</a>`;
  }).join("");

  document.getElementById("app").innerHTML = `
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="../landing.html">${STORE.nameJa}</a>
        <div class="topbar-actions">
          <nav class="language-switch" aria-label="Language switcher">${languageLinks}</nav>
          <button class="lang-menu-btn" type="button" aria-label="Open language menu" aria-expanded="false" aria-controls="lang-menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="lang-menu" id="lang-menu" hidden>
        <nav class="lang-menu-list" aria-label="Language menu">${languageLinks}</nav>
      </div>
    </header>

    <main class="page-shell">
      ${isComboPage ? `
        <section class="section" id="combo">
          <div class="menu-panel">
            <div class="section-head">
              <a class="back-link" href="./index.html">${comboLabels.back}</a>
              <p class="eyebrow">${copy.priceListLabel || "Price List"}</p>
              <h2>${copy.comboMenuTitle}</h2>
            </div>
            <div class="menu-grid menu-grid--combo">${renderComboMenu(copy, lang)}</div>
            <ul class="sheet-note"><li>${copy.nominateNote}</li></ul>
          </div>
        </section>
      ` : `
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow">${copy.kicker}</p>
          <h1>${copy.title}</h1>
          <p class="hero-intro">${copy.intro}</p>
          ${copy.lead ? `<p class="lead">${copy.lead}</p>` : ""}
          <div class="hero-actions">
            <a class="btn btn-whatsapp" href="${generalBookingUrl(lang)}">${copy.navBooking}</a>
            <a class="btn btn-outline" href="tel:${STORE.phone}">${copy.phone}</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="photo-slot" aria-label="Store photo">
          <img class="photo-slot__img" src="../images/22.webp" alt="" loading="lazy">
        </div>
      </section>

      <section class="section" id="menu">
        <div class="menu-panel">
          <div class="section-head">
            <p class="eyebrow">${copy.priceListLabel || "Price List"}</p>
            <h2>${copy.menuTitle}</h2>
            ${copy.menuLead ? `<p class="section-lead">${copy.menuLead}</p>` : ""}
          </div>
          <div class="menu-note">
            <span>${copy.oilNote}</span>
          </div>
          <h3 class="menu-section-title">${copy.singleMenuTitle}</h3>
          <div class="menu-grid">${renderSingleMenu(copy, lang)}</div>
          <h3 class="menu-section-title">${copy.comboMenuTitle}</h3>
          <div class="menu-grid menu-grid--combo">${renderComboMenu(copy, lang)}</div>
          <ul class="sheet-note"><li>${copy.nominateNote}</li></ul>
        </div>
      </section>

      <section class="section" aria-label="${copy.galleryTitle}">
        <div class="section-head section-head--center">
          <h2>${copy.galleryTitle}</h2>
        </div>
        <div class="carousel" data-carousel>
          <div class="carousel-viewport">
            <div class="carousel-track">
              ${galleryImages.map((img, idx) => `
                <div class="carousel-slide" data-slide="${idx}">
                  <img src="${img.src}" alt="${img.alt}" loading="lazy">
                </div>
              `).join("")}
            </div>
          </div>
          <button class="carousel-btn carousel-btn--prev" type="button" aria-label="Previous image" data-carousel-prev>‹</button>
          <button class="carousel-btn carousel-btn--next" type="button" aria-label="Next image" data-carousel-next>›</button>
          <div class="carousel-dots" role="tablist" aria-label="Select image">
            ${galleryImages.map((_, idx) => `
              <button class="carousel-dot" type="button" aria-label="Go to image ${idx + 1}" data-carousel-dot="${idx}"></button>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="map-section">
          <div class="map-copy">
            <p class="eyebrow">Access</p>
            <h2>${copy.visitTitle}</h2>
            <p class="address">${copy.info[7]}</p>
            <div class="visit-facts">
              <p class="visit-facts__near">${copy.info[8]}</p>
              <p class="visit-week__summary"><strong>${copy.info[0]}:</strong> ${copy.info[1]} · ${copy.info[2]}</p>
            </div>
            ${copy.visitLead ? `<p>${copy.visitLead}</p>` : ""}
            <div class="nav-actions">
              <a class="btn btn-whatsapp" href="${generalBookingUrl(lang)}">${copy.navBooking}</a>
              <a class="btn btn-dark" href="tel:${STORE.phone}">${copy.phone}</a>
            </div>
          </div>
          <div class="map-frame">
            <iframe src="${STORE.mapEmbed}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="${copy.title} map"></iframe>
          </div>
        </div>
      </section>
      `}
    </main>

    <footer class="site-footer">
      <p>${copy.footer} / ${STORE.phoneDisplay}</p>
    </footer>
  `;

  const menuButton = document.querySelector(".lang-menu-btn");
  const menu = document.getElementById("lang-menu");

  function closeMenu() {
    if (!menuButton || !menu) return;
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menuButton || !menu) return;
    const nextOpen = menu.hidden;
    menu.hidden = !nextOpen;
    menuButton.setAttribute("aria-expanded", String(nextOpen));
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleMenu();
    });

    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    document.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevBtn = carousel.querySelector("[data-carousel-prev]");
    const nextBtn = carousel.querySelector("[data-carousel-next]");
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    let index = 0;
    let timer = null;

    function setIndex(next) {
      if (!slides.length) return;
      index = (next + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
        dot.setAttribute("aria-current", i === index ? "true" : "false");
      });
    }

    function start() {
      stop();
      timer = window.setInterval(() => setIndex(index + 1), 4500);
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    prevBtn?.addEventListener("click", () => {
      stop();
      setIndex(index - 1);
      start();
    });

    nextBtn?.addEventListener("click", () => {
      stop();
      setIndex(index + 1);
      start();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        stop();
        setIndex(Number(dot.dataset.carouselDot || 0));
        start();
      });
    });

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);

    setIndex(0);
    start();
  }
}

render();
