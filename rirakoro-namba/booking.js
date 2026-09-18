const BOOKING_STORE = {
  name: "カヌン タイ リラクゼーション 南海難波店",
  shopValue: "kanun",
  whatsapp: "85290744644",
  openHour: 11,
  address: {
    en: "〒556-0011 Osaka, Naniwa Ward, Nanbanaka, 1 Chome−18−8 K2ビル 2F",
    jp: "〒556-0011 大阪府大阪市浪速区難波中1丁目18-8 K2ビル2階",
    cn: "〒556-0011 大阪市浪速区难波中1丁目18-8 K2大楼 2楼",
    tw: "〒556-0011 大阪市浪速區難波中1丁目18-8 K2大樓 2樓",
    kr: "〒556-0011 오사카시 나니와구 난바나카 1초메 18-8 K2빌딩 2층"
  }
};

const WHATSAPP_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7-1.87-1.87-4.35-2.9-7-2.92Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>`;

const BOOKING_COPY = {
  en: {
    back: "Back to menu",
    eyebrow: "Booking confirmation",
    title: "Confirm your booking request",
    lead: "Fill in your preferred date, time, and party size. We will prepare a WhatsApp message with your selected menu item.",
    selected: "Selected menu",
    service: "Course",
    duration: "Duration",
    price: "Price",
    date: "Date",
    time: "Time",
    people: "People",
    name: "Name",
    namePlaceholder: "Enter your name",
    total: "Total",
    shop: "Shop",
    address: "Address",
    sameCourse: "All guests choose the same course",
    additionalCourses: "Courses for additional guests",
    guestCourse: (number) => `Guest ${number} course`,
    submit: "Send WhatsApp message",
    defaultService: "Massage course",
    choose: "Please select a course",
    selectTime: "Select a time",
    selectGuests: "Select number of guests",
    guestUnit: (n) => n + (n > 1 ? " Guests" : " Guest"),
    singleGroup: "Single Treatments",
    comboGroup: "Combination Courses",
    previewTitle: "WhatsApp message preview",
    previewHint: "Fill in every field above to preview the message we will send.",
    noticeNominate: "Staff nomination fee: ¥300.",
    messageIntro: "Hello, I would like to make a reservation at kanun Nankai Namba."
  },
  jp: {
    back: "メニューへ戻る",
    eyebrow: "予約確認",
    title: "予約内容を確認",
    lead: "希望日、時間、人数を入力すると、選択したメニュー内容を含む WhatsApp メッセージを作成します。",
    selected: "選択中のメニュー",
    service: "コース",
    duration: "時間",
    price: "料金",
    date: "日付",
    time: "時間",
    people: "人数",
    name: "お名前",
    namePlaceholder: "お名前を入力",
    total: "合計",
    shop: "店舗",
    address: "住所",
    sameCourse: "全員同じコースを選択",
    additionalCourses: "追加ゲストのコース",
    guestCourse: (number) => `ゲスト${number}のコース`,
    submit: "WhatsApp メッセージを送る",
    defaultService: "マッサージコース",
    choose: "メニューを選択してください",
    selectTime: "時間を選択",
    selectGuests: "人数を選択",
    guestUnit: (n) => n + "名",
    singleGroup: "単品メニュー",
    comboGroup: "組み合わせコース",
    previewTitle: "WhatsApp メッセージのプレビュー",
    previewHint: "上のすべての項目を入力すると、送信内容をプレビューできます。",
    noticeNominate: "指名料：¥300。",
    messageIntro: "こんにちは。kanun 南海難波店の予約を希望します。"
  },
  cn: {
    back: "返回菜单",
    eyebrow: "预约确认",
    title: "确认预约内容",
    lead: "请填写希望预约的日期、时间和人数，系统会自动生成包含所选项目的 WhatsApp 消息。",
    selected: "已选项目",
    service: "项目",
    duration: "时长",
    price: "价格",
    date: "日期",
    time: "时间",
    people: "人数",
    name: "姓名",
    namePlaceholder: "请输入您的姓名",
    total: "合计",
    shop: "门店",
    address: "地址",
    sameCourse: "所有客人选择相同项目",
    additionalCourses: "其他客人的项目",
    guestCourse: (number) => `客人${number}项目`,
    submit: "发送 WhatsApp 消息",
    defaultService: "按摩项目",
    choose: "请选择项目",
    selectTime: "请选择时间",
    selectGuests: "请选择人数",
    guestUnit: (n) => n + " 人",
    singleGroup: "单项项目",
    comboGroup: "组合套餐",
    previewTitle: "WhatsApp 消息预览",
    previewHint: "填写上方全部内容后，可预览将要发送的消息。",
    noticeNominate: "指名费：¥300。",
    messageIntro: "您好，我想预约 kanun 南海难波店。"
  },
  tw: {
    back: "返回菜單",
    eyebrow: "預約確認",
    title: "確認預約內容",
    lead: "請填寫希望預約的日期、時間和人數，系統會自動生成包含所選項目的 WhatsApp 訊息。",
    selected: "已選項目",
    service: "項目",
    duration: "時長",
    price: "價格",
    date: "日期",
    time: "時間",
    people: "人數",
    name: "姓名",
    namePlaceholder: "請輸入您的姓名",
    total: "合計",
    shop: "門店",
    address: "地址",
    sameCourse: "所有客人選擇相同項目",
    additionalCourses: "其他客人的項目",
    guestCourse: (number) => `客人${number}項目`,
    submit: "傳送 WhatsApp 訊息",
    defaultService: "按摩項目",
    choose: "請選擇項目",
    selectTime: "請選擇時間",
    selectGuests: "請選擇人數",
    guestUnit: (n) => n + " 人",
    singleGroup: "單項項目",
    comboGroup: "組合套餐",
    previewTitle: "WhatsApp 訊息預覽",
    previewHint: "填寫上方全部內容後，可預覽將要傳送的訊息。",
    noticeNominate: "指名費：¥300。",
    messageIntro: "您好，我想預約 kanun 南海難波店。"
  },
  kr: {
    back: "메뉴로 돌아가기",
    eyebrow: "예약 확인",
    title: "예약 요청 확인",
    lead: "희망 날짜, 시간, 인원을 입력하면 선택한 메뉴가 포함된 WhatsApp 메시지를 자동으로 만듭니다.",
    selected: "선택한 메뉴",
    service: "코스",
    duration: "시간",
    price: "가격",
    date: "날짜",
    time: "시간",
    people: "인원",
    name: "이름",
    namePlaceholder: "이름을 입력해 주세요",
    total: "합계",
    shop: "매장",
    address: "주소",
    sameCourse: "모든 고객이 같은 코스를 선택",
    additionalCourses: "추가 고객 코스",
    guestCourse: (number) => `고객${number}코스`,
    submit: "WhatsApp 메시지 보내기",
    defaultService: "마사지 코스",
    choose: "코스를 선택해 주세요",
    selectTime: "시간을 선택해 주세요",
    selectGuests: "인원을 선택해 주세요",
    guestUnit: (n) => n + "명",
    singleGroup: "단품 메뉴",
    comboGroup: "콤비네이션 코스",
    previewTitle: "WhatsApp 메시지 미리보기",
    previewHint: "위 항목을 모두 입력하면 보낼 메시지를 미리 볼 수 있습니다.",
    noticeNominate: "지명료: ¥300.",
    messageIntro: "안녕하세요. kanun 난카이 난바점을 예약하고 싶습니다."
  }
};

const BOOKING_LANGS = [
  ["en", "EN"],
  ["jp", "JP"],
  ["cn", "简"],
  ["tw", "繁"],
  ["kr", "KR"]
];

function getParams() {
  const params = new URLSearchParams(window.location.search);
  const lang = BOOKING_COPY[params.get("lang")] ? params.get("lang") : "en";
  return {
    lang,
    service: params.get("service") || "",
    duration: params.get("duration") || "",
    price: params.get("price") || "",
    course: params.get("course") || "",
    date: params.get("date") || "",
    time: params.get("time") || "",
    people: params.get("people") || "1",
    name: params.get("name") || "",
    sameCourse: params.get("sameCourse") !== "0",
    guestCourses: (params.get("guestCourses") || "").split(",").filter(Boolean)
  };
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function charsLen(value) {
  return [...String(value || "")].length;
}

function optionLabel(option) {
  return [option.service, option.duration, option.price].filter(Boolean).join(" · ");
}

function shortOptionLabel(option) {
  const full = optionLabel(option);
  if (charsLen(full) <= 34) return full;
  const rest = [option.duration, option.price].filter(Boolean).join(" · ");
  const restLen = charsLen(rest) + (rest ? 3 : 0);
  const budget = Math.max(8, 34 - restLen);
  const chars = [...(option.service || "")];
  const service = chars.length > budget ? chars.slice(0, budget - 1).join("") + "…" : option.service;
  return [service, option.duration, option.price].filter(Boolean).join(" · ");
}

function buildCourseList(params) {
  const list = menuOptions(params.lang);
  const courseIndex = Number(params.course);
  if (params.course !== "" && Number.isInteger(courseIndex) && courseIndex >= 0 && courseIndex < list.length) {
    return { list, selectedIndex: courseIndex, hasCustom: false };
  }
  if (!params.service) return { list, selectedIndex: -1, hasCustom: false };
  const matchIndex = list.findIndex((option) =>
    option.service === params.service && option.duration === params.duration && option.price === params.price);
  if (matchIndex >= 0) return { list, selectedIndex: matchIndex, hasCustom: false };
  list.unshift({ group: "custom", service: params.service, duration: params.duration, price: params.price });
  return { list, selectedIndex: 0, hasCustom: true };
}

function renderCourseOptions(list, selectedIndex, copy) {
  const optionTag = (option, index) =>
    `<option value="${index}"${index === selectedIndex ? " selected" : ""}>${escapeHtml(shortOptionLabel(option))}</option>`;
  const groupTag = (group, label) => {
    const options = list
      .map((option, index) => (option.group === group ? optionTag(option, index) : ""))
      .join("");
    return options ? `<optgroup label="${escapeHtml(label)}">${options}</optgroup>` : "";
  };
  return [
    `<option value=""${selectedIndex < 0 ? " selected" : ""} disabled>${escapeHtml(copy.choose)}</option>`,
    list.map((option, index) => (option.group === "custom" ? optionTag(option, index) : "")).join(""),
    groupTag("single", copy.singleGroup),
    groupTag("combo", copy.comboGroup)
  ].join("");
}

function pad2(n) {
  return n < 10 ? "0" + n : String(n);
}

function buildTimeOptions(selectedValue, copy) {
  const values = [];
  for (let h = BOOKING_STORE.openHour; h < 24; h++) {
    for (let m = 0; m < 60; m += 5) {
      values.push(pad2(h) + ":" + pad2(m));
    }
  }
  if (selectedValue && !values.includes(selectedValue)) values.unshift(selectedValue);
  return [
    `<option value="">${escapeHtml(copy.selectTime)}</option>`,
    ...values.map((v) => `<option value="${v}"${v === selectedValue ? " selected" : ""}>${v}</option>`)
  ].join("");
}

function buildGuestsOptions(selectedValue, copy) {
  let html = `<option value="">${escapeHtml(copy.selectGuests)}</option>`;
  for (let i = 1; i <= 10; i++) {
    const value = String(i);
    html += `<option value="${value}"${value === String(selectedValue) ? " selected" : ""}>${escapeHtml(copy.guestUnit(i))}</option>`;
  }
  return html;
}

function todayString() {
  const now = new Date();
  return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

function priceValue(price) {
  const digits = String(price || "").replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

function formatPrice(amount) {
  return `¥${amount.toLocaleString("en-US")}`;
}

function courseLine(copy, course, label) {
  const body = [course.service, course.duration].filter(Boolean).join(" ");
  const price = course.price ? ` (${course.price})` : "";
  return `${label}: ${body}${price}`;
}

function buildMessage(copy, courses, sameCourse, name, date, time, people, lang) {
  const lines = [
    copy.messageIntro,
    `${copy.shop}: ${BOOKING_STORE.shopValue}`,
    `${copy.name}: ${name}`,
    `${copy.date}: ${date}`,
    `${copy.time}: ${time}`,
    `${copy.people}: ${people}`
  ];
  let total = 0;
  if (people > 1 && !sameCourse) {
    courses.forEach((course, index) => {
      lines.push(courseLine(copy, course, copy.guestCourse(index + 1)));
      total += priceValue(course.price);
    });
  } else {
    lines.push(courseLine(copy, courses[0], copy.service));
    if (people > 1 && sameCourse) lines.push(copy.sameCourse);
    total = priceValue(courses[0].price) * people;
  }
  lines.push(`${copy.address}: ${BOOKING_STORE.address[lang]}`);
  if (total > 0) lines.push(`${copy.total}: ${formatPrice(total)}`);
  return lines.filter(Boolean).join("\n");
}

function renderBooking() {
  const params = getParams();
  const copy = BOOKING_COPY[params.lang];
  const { list, selectedIndex, hasCustom } = buildCourseList(params);
  document.documentElement.lang = params.lang === "jp" ? "ja" : params.lang === "kr" ? "ko" : params.lang === "tw" ? "zh-Hant" : params.lang === "cn" ? "zh-CN" : "en";

  const languageLinks = BOOKING_LANGS.map(([key, label]) => {
    const current = key === params.lang ? ' aria-current="page"' : "";
    return `<a href="#" data-lang="${key}"${current}>${label}</a>`;
  }).join("");

  document.getElementById("booking-app").innerHTML = `
    <div class="booking-topline">
      <a class="booking-back" href="${params.lang}/index.html#menu">${copy.back}</a>
      <nav class="language-switch" aria-label="Language switcher" id="booking-langs">${languageLinks}</nav>
    </div>
    <section class="booking-card">
      <div class="booking-copy">
        <p class="eyebrow">${copy.eyebrow}</p>
        <h1>${copy.title}</h1>
        <p class="booking-store-name">${BOOKING_STORE.name}</p>
        <p>${copy.lead}</p>
      </div>
      <form class="booking-form" id="booking-form">
        <label class="booking-field">
          <span>${copy.name}</span>
          <input type="text" name="name" placeholder="${escapeHtml(copy.namePlaceholder)}" value="${escapeHtml(params.name)}" autocomplete="name" required>
        </label>
        <label class="booking-field">
          <span>${copy.service}</span>
          <select name="course" id="booking-course" required>
            ${renderCourseOptions(list, selectedIndex, copy)}
          </select>
        </label>
        <div class="booking-summary" aria-label="${copy.selected}">
          <dl>
            <div class="booking-summary__stacked"><dt>${copy.service}</dt><dd id="summary-service">-</dd></div>
            <div><dt>${copy.duration}</dt><dd id="summary-duration">-</dd></div>
            <div><dt>${copy.price}</dt><dd id="summary-price">-</dd></div>
          </dl>
        </div>
        <div class="booking-grid">
          <label class="booking-field">
            <span>${copy.date}</span>
            <input type="date" name="date" id="booking-date" min="${todayString()}" value="${escapeHtml(params.date)}" required>
          </label>
          <label class="booking-field">
            <span>${copy.time}</span>
            <select name="time" id="booking-time" required>
              ${buildTimeOptions(params.time, copy)}
            </select>
          </label>
          <label class="booking-field">
            <span>${copy.people}</span>
            <select name="people" id="booking-people" required>
              ${buildGuestsOptions(params.people, copy)}
            </select>
          </label>
        </div>
        <label class="booking-same-course" id="same-course-field" hidden>
          <input type="checkbox" name="sameCourse" id="same-course"${params.sameCourse ? " checked" : ""}>
          <span>${copy.sameCourse}</span>
        </label>
        <section class="booking-additional-courses" id="additional-courses" hidden>
          <h2>${copy.additionalCourses}</h2>
          <div id="additional-course-fields"></div>
        </section>
        <aside class="booking-notice">
          <ul>
            <li>${copy.noticeNominate}</li>
          </ul>
        </aside>
        <section class="booking-preview" id="booking-preview">
          <h2 class="booking-preview__head">${WHATSAPP_ICON}<span>${copy.previewTitle}</span></h2>
          <pre class="booking-preview__body" id="preview-body"></pre>
          <p class="booking-preview__hint">${copy.previewHint}</p>
        </section>
        <button class="btn btn-whatsapp booking-submit" type="submit">${WHATSAPP_ICON}<span>${copy.submit}</span></button>
      </form>
    </section>
    <footer class="site-footer">
      <p>
        © ${new Date().getFullYear()} ${BOOKING_STORE.name}. All rights reserved. Powered by
        <a class="landing-footer__credit" href="https://reserveinjp.com/#/" target="_blank" rel="noopener noreferrer">reserveinjp</a>.
      </p>
    </footer>
  `;

  const bookingForm = document.getElementById("booking-form");
  const courseSelect = document.getElementById("booking-course");
  const preview = document.getElementById("booking-preview");
  const peopleInput = bookingForm.elements.people;
  const dateInput = document.getElementById("booking-date");
  const sameCourseInput = document.getElementById("same-course");
  const sameCourseField = document.getElementById("same-course-field");
  const additionalCourses = document.getElementById("additional-courses");
  const additionalCourseFields = document.getElementById("additional-course-fields");

  function selectedCourse() {
    if (courseSelect.value === "") return null;
    return list[Number(courseSelect.value)] || null;
  }

  function guestCount() {
    return Math.max(1, Math.min(10, Number(peopleInput.value) || 1));
  }

  function syncDateFilled() {
    dateInput.classList.toggle("is-filled", !!dateInput.value);
  }

  function syncGuestCourseFields() {
    const people = guestCount();
    const needsSeparateCourses = people > 1 && !sameCourseInput.checked;
    sameCourseField.hidden = people <= 1;
    additionalCourses.hidden = !needsSeparateCourses;
    if (!needsSeparateCourses) {
      additionalCourseFields.querySelectorAll("select").forEach((select) => {
        select.disabled = true;
      });
      return;
    }
    const requiredFields = people - 1;
    if (Number(additionalCourseFields.dataset.count) === requiredFields) {
      additionalCourseFields.querySelectorAll("select").forEach((select) => {
        select.disabled = false;
      });
      return;
    }
    const oldValues = Array.from(additionalCourseFields.querySelectorAll("select")).map((select) => select.value);
    additionalCourseFields.innerHTML = Array.from({ length: requiredFields }, (_, index) => `
      <label class="booking-field">
        <span>${copy.guestCourse(index + 2)}</span>
        <select name="guestCourse${index + 2}" required>
          ${renderCourseOptions(list, Number(oldValues[index] ?? params.guestCourses[index] ?? -1), copy)}
        </select>
      </label>
    `).join("");
    additionalCourseFields.dataset.count = String(requiredFields);
  }

  function selectedCourses() {
    const mainCourse = selectedCourse();
    if (!mainCourse) return [];
    if (guestCount() <= 1 || sameCourseInput.checked) return [mainCourse];
    return [
      mainCourse,
      ...Array.from(additionalCourseFields.querySelectorAll("select"))
        .map((select) => select.value === "" ? null : list[Number(select.value)] || null)
        .filter(Boolean)
    ];
  }

  function refresh() {
    syncDateFilled();
    syncGuestCourseFields();
    const course = selectedCourse();
    document.getElementById("summary-service").textContent = course ? course.service : "-";
    document.getElementById("summary-duration").textContent = (course && course.duration) || "-";
    document.getElementById("summary-price").textContent = (course && course.price) || "-";
    const data = new FormData(bookingForm);
    const name = String(data.get("name") || "").trim();
    const people = guestCount();
    const courses = selectedCourses();
    const sameCourse = people <= 1 || sameCourseInput.checked;
    const ready = Boolean(
      course &&
      name &&
      data.get("date") &&
      data.get("time") &&
      data.get("people") &&
      (sameCourse || courses.length === people)
    );
    preview.classList.add("has-prefill");
    preview.classList.toggle("is-ready", ready);
    document.getElementById("preview-body").textContent = ready
      ? buildMessage(copy, courses, sameCourse, name, data.get("date"), data.get("time"), people, params.lang)
      : [
          `${copy.shop}: ${BOOKING_STORE.shopValue}`,
          name ? `${copy.name}: ${name}` : "",
          `${copy.address}: ${BOOKING_STORE.address[params.lang]}`
        ].filter(Boolean).join("\n");
  }

  bookingForm.addEventListener("input", refresh);
  bookingForm.addEventListener("change", refresh);
  refresh();

  document.getElementById("booking-langs").addEventListener("click", (event) => {
    const link = event.target.closest("a[data-lang]");
    if (!link) return;
    event.preventDefault();
    const data = new FormData(bookingForm);
    const next = new URLSearchParams({ lang: link.dataset.lang });
    const course = selectedCourse();
    const index = Number(courseSelect.value);
    if (course && course.group === "custom") {
      next.set("service", course.service);
      next.set("duration", course.duration);
      next.set("price", course.price);
    } else if (course) {
      next.set("course", String(hasCustom ? index - 1 : index));
    }
    ["date", "time", "people", "name"].forEach((field) => {
      if (data.get(field)) next.set(field, data.get(field));
    });
    if (guestCount() > 1 && !sameCourseInput.checked) {
      next.set("sameCourse", "0");
      const guestCourses = Array.from(additionalCourseFields.querySelectorAll("select"))
        .map((select) => select.value)
        .filter(Boolean);
      if (guestCourses.length) next.set("guestCourses", guestCourses.join(","));
    }
    window.location.href = `booking.html?${next.toString()}`;
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const course = selectedCourse();
    if (!course) return;
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    if (!name) return;
    const people = guestCount();
    const sameCourse = people <= 1 || sameCourseInput.checked;
    const courses = selectedCourses();
    if (!sameCourse && courses.length !== people) return;
    const message = buildMessage(copy, courses, sameCourse, name, data.get("date"), data.get("time"), people, params.lang);
    window.location.href = `https://api.whatsapp.com/send/?phone=${BOOKING_STORE.whatsapp}&text=${encodeURIComponent(message)}`;
  });
}

renderBooking();
