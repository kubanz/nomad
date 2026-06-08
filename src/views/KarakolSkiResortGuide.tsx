"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Globe, MessageCircle } from "lucide-react";

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/guides/karakol-ski-resort",
  ru: "/ru/guides/karakol-ski-resort",
  ko: "/ko/guides/karakol-ski-resort",
};

const TRANSFER_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/manas-airport-to-karakol",
  ru: "/ru/transfers/manas-airport-to-karakol",
  ko: "/ko/transfers/manas-airport-to-karakol",
};

const WHATSAPP_PHONE = "+996556080714";
const WA_SKI = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi! I want to visit Karakol Ski Resort. Please send me a transfer quote."
)}`;
const WA_SKI_RU = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Привет! Хочу поехать на горнолыжную базу Каракол. Пришлите, пожалуйста, стоимость трансфера."
)}`;
const WA_SKI_KO = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "안녕하세요! 카라콜 스키장에 가고 싶습니다. 이동 견적을 보내주세요."
)}`;

const T = {
  en: {
    langLabel: "Language",
    breadcrumbHome: "Home",
    breadcrumbGuide: "Karakol Ski Resort Guide",
    h1: "Karakol Ski Resort in Kyrgyzstan: Complete Guide 2025",
    introBold: "Discover Central Asia's hidden gem for skiing and snowboarding.",
    introText:
      "Karakol Ski Resort offers world-class powder snow, modern chairlifts, and breathtaking mountain views at a fraction of European prices. Located in the heart of the Tian Shan mountains at 2300–3050 m altitude.",
    whyTitle: "Why Karakol Is the Best Ski Resort in Central Asia",
    whyIntro:
      "If you're looking for an authentic, affordable, and uncrowded ski experience, Karakol should be at the top of your list.",
    cards: [
      { title: "Modern Infrastructure", text: "Recently upgraded chairlifts and gondolas serve multiple trails with minimal waiting time." },
      { title: "Premium Snow Quality", text: "High-altitude location ensures dry, light powder snow perfect for skiing and boarding." },
      { title: "Affordable Prices", text: "Lift passes from $15–25/day, equipment rental $10–20/day — significantly cheaper than Europe or North America." },
      { title: "All Skill Levels", text: "Gentle slopes for beginners, challenging runs for experts, plus excellent off-piste opportunities." },
    ],
    highlightItems: [
      { label: "Season", value: "December to March (best conditions: January–February)" },
      { label: "Altitude", value: "2300 m (base) to 3050 m (summit)" },
      { label: "Vertical drop", value: "750 metres" },
      { label: "Number of runs", value: "7+ marked trails + off-piste areas" },
    ],
    locationTitle: "Location & How to Get There",
    locationText:
      "Karakol Ski Resort is near the city of Karakol in eastern Kyrgyzstan — approximately 400 km from Bishkek and 350 km from Almaty (Kazakhstan).",
    fromBishkek: "From Bishkek / Manas Airport (FRU)",
    bishkekItems: [
      { label: "Distance", value: "400 km" },
      { label: "Drive time", value: "4–5 hours" },
      { label: "Best option", value: "Private transfer with Nomad Transfer — fixed price, English support, meet & greet at airport" },
      { label: "Route", value: "Scenic drive along the northern shore of Issyk-Kul lake" },
    ],
    fromAlmaty: "From Almaty Airport (Kazakhstan)",
    almatyItems: [
      { label: "Distance", value: "~350 km via Kegen road" },
      { label: "Drive time", value: "5–6 hours" },
      { label: "Border crossing", value: "Karkara border (straightforward for most nationalities)" },
    ],
    ctaTitle: "Need a Transfer to Karakol?",
    ctaSubtitle: "Fixed price per car (not per person) • English-speaking support • Meet & greet at airport",
    ctaPrice: "Bishkek / Manas → Karakol: sedan from $146, minivan from $177",
    ctaBook: "Book Transfer via WhatsApp",
    ctaDetails: "View Transfer Details",
    pricesTitle: "Lift Pass Prices & Ski Infrastructure",
    pricesIntro: "Karakol offers excellent value for money compared to ski resorts in Europe, USA, or Japan.",
    tableHeaders: ["Item", "Price (USD)", "Notes"],
    tableRows: [
      ["Full-day lift pass", "$15–25", "Varies by season"],
      ["Half-day lift pass", "$10–15", "After 13:00"],
      ["Ski/snowboard rental (full set)", "$10–20", "Skis/board, boots, poles"],
      ["Helmet rental", "$3–5", "Recommended for all levels"],
      ["Ski instructor (1 hour)", "$20–30", "English-speaking available"],
    ],
    infraTitle: "Chairlifts & Infrastructure",
    infraItems: [
      "2 modern chairlifts serving main slopes",
      "1 gondola for scenic access to higher terrain",
      "Rental shop, café, and warming huts at base area",
      "Free parking available",
      "Operating hours: typically 09:00–17:00",
    ],
    accomTitle: "Accommodation in Karakol",
    accomText:
      "Accommodation ranges from budget guesthouses to comfortable mid-range hotels. Most visitors stay in Karakol city (15–20 min from the ski base) or at hotels near the resort.",
    accomBudget: "Budget ($15–30/night)",
    accomBudgetItems: ["Guesthouses in Karakol city", "Homestays with local families", "Shared dorms in hostels"],
    accomMid: "Mid-Range ($40–80/night)",
    accomMidItems: ["Hotels in Karakol city centre", "Lodges near the ski base", "Includes breakfast and heating"],
    accomLux: "Luxury / Ski-In ($100+/night)",
    accomLuxItems: ["Resort hotels at the base", "Private chalets with mountain views", "Full amenities: restaurant, sauna, Wi-Fi"],
    shuttleNote: "Need transport between your hotel and the ski resort? Nomad Transfer provides daily shuttle service from any accommodation in Karakol to the ski base.",
    shuttleContact: "Contact us on WhatsApp",
    nearbyTitle: "Best Things to Do Near Karakol (After Skiing)",
    nearbyText: "Karakol is not just about skiing! The region offers incredible natural beauty and cultural experiences:",
    nearbyItems: [
      {
        title: "Altyn-Arashan Hot Springs",
        text: "Natural hot springs in a stunning mountain valley, perfect for relaxing tired muscles after a day on the slopes. Access via 4×4 or hiking (2–3 hours).",
      },
      {
        title: 'Jeti-Oguz ("Seven Bulls")',
        text: "Famous red rock formations and scenic gorge, 30 minutes drive from Karakol. Great for photography and short hikes.",
      },
      {
        title: "Karakol City Attractions",
        text: "Dungan Mosque (unique wooden mosque), Russian Orthodox Church, Sunday Animal Market, and local Dungan & Uyghur cuisine.",
      },
      {
        title: "Issyk-Kul Lake",
        text: "The world's second-largest alpine lake is just 1 hour away. Visit year-round for stunning scenery.",
      },
    ],
    faqTitle: "FAQs About Karakol Ski Resort",
    faqs: [
      { q: "How much does a lift pass cost at Karakol?", a: "Full-day lift pass costs approximately $15–25 depending on the season. Multi-day passes are available at discounted rates." },
      { q: "How do I get to Karakol from Bishkek?", a: "The most convenient option is a private transfer (4–5 hours, 400 km). Nomad Transfer offers fixed-price transfers — sedan from $146, minivan from $177 per car — with English-speaking support and airport meet & greet." },
      { q: "Is Karakol Ski Resort good for beginners?", a: "Yes! Karakol has gentler slopes perfect for beginners, plus English-speaking ski instructors available. The uncrowded slopes make it ideal for learning." },
      { q: "What is the ski season in Karakol?", a: "December to March, with best snow conditions in January and February. The high altitude (2300–3050 m) ensures reliable snow coverage." },
      { q: "Can I rent ski equipment at Karakol?", a: "Yes, full ski/snowboard rental is available at the base for $10–20/day including boots, skis/board, and poles." },
      { q: "How far is Karakol from Almaty?", a: "Approximately 350 km via the Kegen road (5–6 hours). Border crossing is straightforward for most nationalities." },
      { q: "Is Karakol safe for tourists?", a: "Yes, very safe. Kyrgyzstan is one of the most welcoming countries in Central Asia. Locals are friendly and English-speaking services are available." },
      { q: "What is the snow quality like?", a: "Excellent — Karakol is famous for dry, light powder snow thanks to its high altitude and continental climate." },
      { q: "Do I need travel insurance?", a: "Highly recommended. Make sure your policy covers skiing/snowboarding and medical evacuation at high altitude." },
      { q: "Can I pay with credit card?", a: "Major hotels accept cards, but cash (USD or Kyrgyz Som) is preferred at the resort and smaller establishments. ATMs available in Karakol city." },
    ],
    whyNomadTitle: "Why Choose Nomad Transfer for Your Karakol Trip?",
    whyNomadItems: [
      { label: "Fixed prices", text: "No haggling, no surprises — price per car, not per person" },
      { label: "English-speaking support", text: "Book easily via WhatsApp, get assistance 24/7" },
      { label: "Airport meet & greet", text: "Name board, 60-min free waiting at Manas Airport" },
      { label: "Comfortable vehicles", text: "Cars, vans, and buses for any group size" },
      { label: "Experienced drivers", text: "Know the routes, safe winter driving, photo stops included" },
      { label: "Korean & Russian support", text: "Multilingual team for international travellers" },
    ],
    cta2Title: "Ready to Ski Karakol?",
    cta2Text: "Book your transfer now and get ready for the ski adventure of a lifetime in Central Asia!",
  },
  ru: {
    langLabel: "Язык",
    breadcrumbHome: "Главная",
    breadcrumbGuide: "Горнолыжная база Каракол",
    h1: "Горнолыжная база Каракол (Кыргызстан): Полный гид 2025",
    introBold: "Откройте для себя скрытую жемчужину Центральной Азии для лыжников и сноубордистов.",
    introText:
      "Горнолыжная база Каракол предлагает порошковый снег мирового класса, современные подъёмники и захватывающие виды на горы по ценам, значительно ниже европейских. Расположена в сердце Тянь-Шаня на высоте 2300–3050 м.",
    whyTitle: "Почему Каракол — лучший горнолыжный курорт Центральной Азии",
    whyIntro:
      "Если вы ищете аутентичный, доступный и некраудный горнолыжный отдых, Каракол — ваш выбор.",
    cards: [
      { title: "Современная инфраструктура", text: "Недавно модернизированные кресельные подъёмники и гондолы обслуживают несколько трасс с минимальным ожиданием." },
      { title: "Премиальное качество снега", text: "Высокогорное расположение обеспечивает сухой лёгкий порошковый снег, идеальный для катания." },
      { title: "Доступные цены", text: "Ски-пасс от $15–25/день, прокат снаряжения $10–20/день — значительно дешевле Европы или Северной Америки." },
      { title: "Для всех уровней", text: "Пологие склоны для новичков, сложные трассы для экспертов и отличные возможности для фрирайда." },
    ],
    highlightItems: [
      { label: "Сезон", value: "Декабрь — март (лучшие условия: январь–февраль)" },
      { label: "Высота", value: "2300 м (база) до 3050 м (вершина)" },
      { label: "Перепад высот", value: "750 метров" },
      { label: "Трасс", value: "7+ размеченных трасс + зоны фрирайда" },
    ],
    locationTitle: "Расположение и как добраться",
    locationText:
      "Горнолыжная база Каракол находится вблизи одноимённого города на востоке Кыргызстана — примерно 400 км от Бишкека и 350 км от Алматы (Казахстан).",
    fromBishkek: "Из Бишкека / Аэропорта Манас (FRU)",
    bishkekItems: [
      { label: "Расстояние", value: "400 км" },
      { label: "Время в пути", value: "4–5 часов" },
      { label: "Лучший вариант", value: "Приватный трансфер с Nomad Transfer — фиксированная цена, поддержка на русском, встреча в аэропорту" },
      { label: "Маршрут", value: "Живописный северный берег Иссык-Куля" },
    ],
    fromAlmaty: "Из Алматы (Казахстан)",
    almatyItems: [
      { label: "Расстояние", value: "~350 км через Кеген" },
      { label: "Время в пути", value: "5–6 часов" },
      { label: "Граница", value: "КПП Каркара (просто для большинства национальностей)" },
    ],
    ctaTitle: "Нужен трансфер в Каракол?",
    ctaSubtitle: "Фиксированная цена за автомобиль • Поддержка на русском • Встреча в аэропорту",
    ctaPrice: "Бишкек / Манас → Каракол: седан от $146, минивэн от $177",
    ctaBook: "Забронировать трансфер в WhatsApp",
    ctaDetails: "Подробнее о трансфере",
    pricesTitle: "Цены на ски-пасс и инфраструктура",
    pricesIntro: "Каракол предлагает отличное соотношение цены и качества по сравнению с курортами Европы, США или Японии.",
    tableHeaders: ["Услуга", "Цена (USD)", "Примечание"],
    tableRows: [
      ["Ски-пасс на полный день", "$15–25", "Зависит от сезона"],
      ["Ски-пасс на полдня", "$10–15", "После 13:00"],
      ["Прокат лыж/сноуборда (комплект)", "$10–20", "Лыжи/борд, ботинки, палки"],
      ["Прокат шлема", "$3–5", "Рекомендуется для всех"],
      ["Инструктор (1 час)", "$20–30", "Есть русскоязычные"],
    ],
    infraTitle: "Подъёмники и инфраструктура",
    infraItems: [
      "2 современных кресельных подъёмника",
      "1 гондола к верхним зонам катания",
      "Прокатный пункт, кафе и отапливаемые зоны отдыха у базы",
      "Бесплатная парковка",
      "Часы работы: 09:00–17:00",
    ],
    accomTitle: "Проживание в Каракол",
    accomText:
      "Варианты размещения — от бюджетных гостевых домов до комфортных отелей. Большинство гостей останавливаются в городе Каракол (15–20 мин от базы) или в отелях у курорта.",
    accomBudget: "Бюджет ($15–30/ночь)",
    accomBudgetItems: ["Гостевые дома в городе", "Homestay у местных семей", "Хостелы"],
    accomMid: "Средний класс ($40–80/ночь)",
    accomMidItems: ["Отели в центре Каракола", "Лоджи у базы", "Завтрак и отопление включены"],
    accomLux: "Люкс / У склона ($100+/ночь)",
    accomLuxItems: ["Курортные отели у базы", "Частные шале с видом на горы", "Ресторан, сауна, Wi-Fi"],
    shuttleNote: "Нужна доставка между отелем и базой? Nomad Transfer организует ежедневные шаттлы и приватные трансферы из любого места в Каракол.",
    shuttleContact: "Написать в WhatsApp",
    nearbyTitle: "Что ещё посмотреть рядом с Каракол (после катания)",
    nearbyText: "Каракол — не только горные лыжи! Регион предлагает потрясающую природу и культурные впечатления:",
    nearbyItems: [
      {
        title: "Горячие источники Алтын-Арашан",
        text: "Природные горячие источники в живописной горной долине — идеальное место для восстановления после катания. Добраться на внедорожнике или пешком (2–3 часа).",
      },
      {
        title: "Джеты-Огуз («Семь Быков»)",
        text: "Знаменитые красные скальные формации и живописное ущелье в 30 минутах от Каракола. Отличное место для фотосессий и прогулок.",
      },
      {
        title: "Достопримечательности Каракола",
        text: "Дунганская мечеть (уникальная деревянная постройка), Православный собор, воскресный базар, дунганская и уйгурская кухня.",
      },
      {
        title: "Озеро Иссык-Куль",
        text: "Второе по величине высокогорное озеро в мире — всего час езды. Посещайте в любое время года для потрясающих пейзажей.",
      },
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      { q: "Сколько стоит ски-пасс в Каракол?", a: "Ски-пасс на полный день — около $15–25 в зависимости от сезона. Многодневные абонементы по сниженным ценам." },
      { q: "Как добраться из Бишкека?", a: "Самый удобный вариант — приватный трансфер (4–5 часов, 400 км). Nomad Transfer предлагает фиксированную цену: седан от $146, минивэн от $177 за автомобиль. Встреча в аэропорту, поддержка на русском." },
      { q: "Подходит ли Каракол для новичков?", a: "Да! Есть пологие трассы для начинающих и инструкторы. Малолюдность курорта — дополнительный плюс для обучения." },
      { q: "Когда горнолыжный сезон?", a: "Декабрь — март, лучший снег в январе–феврале. Высота (2300–3050 м) гарантирует стабильное снегопокрытие." },
      { q: "Можно взять снаряжение в прокат?", a: "Да, у базы работает прокатный пункт. Полный комплект (лыжи/борд, ботинки, палки) — $10–20/день." },
      { q: "Как далеко Каракол от Алматы?", a: "Около 350 км через Кеген (5–6 часов). Пограничный переход на КПП Каркара несложный для большинства национальностей." },
      { q: "Безопасно ли в Каракол?", a: "Очень безопасно. Кыргызстан — одна из самых гостеприимных стран Центральной Азии." },
      { q: "Какой снег в Каракол?", a: "Отличный — сухой лёгкий пухляк благодаря высокогорью и континентальному климату." },
      { q: "Нужна ли страховка?", a: "Настоятельно рекомендуется. Убедитесь, что полис покрывает лыжный спорт и эвакуацию с высокогорья." },
      { q: "Принимают ли карты?", a: "В крупных отелях — да, но наличные (USD или сом) предпочтительнее. В городе есть банкоматы." },
    ],
    whyNomadTitle: "Почему выбирают Nomad Transfer?",
    whyNomadItems: [
      { label: "Фиксированная цена", text: "Никаких торгов — цена за авто, а не за человека" },
      { label: "Поддержка на русском", text: "Бронирование в WhatsApp, помощь 24/7" },
      { label: "Встреча в аэропорту", text: "Табличка, 60 мин бесплатного ожидания в Манасе" },
      { label: "Комфортные автомобили", text: "Седаны, минивэны, автобусы для любой группы" },
      { label: "Опытные водители", text: "Безопасное вождение зимой, фотостопы, знание маршрута" },
      { label: "Корейский и русский", text: "Мультиязычная команда для иностранных туристов" },
    ],
    cta2Title: "Готовы кататься в Каракол?",
    cta2Text: "Бронируйте трансфер прямо сейчас и готовьтесь к незабываемому горнолыжному приключению в Центральной Азии!",
  },
  ko: {
    langLabel: "언어",
    breadcrumbHome: "홈",
    breadcrumbGuide: "카라콜 스키장 가이드",
    h1: "키르기스스탄 카라콜 스키장: 2025 완벽 가이드",
    introBold: "스키와 스노보드를 위한 중앙아시아의 숨겨진 보석을 발견하세요.",
    introText:
      "카라콜 스키장은 유럽 가격의 일부로 세계적 수준의 파우더 눈, 현대적인 리프트, 숨막히는 산 전망을 제공합니다. 해발 2300–3050 m의 톈산 산맥 중심부에 위치하고 있습니다.",
    whyTitle: "카라콜이 중앙아시아 최고의 스키 리조트인 이유",
    whyIntro:
      "진정하고 저렴하며 붐비지 않는 스키 경험을 찾고 있다면 카라콜이 최고의 선택입니다.",
    cards: [
      { title: "현대적 인프라", text: "최근 업그레이드된 리프트와 곤돌라가 최소 대기 시간으로 여러 슬로프를 제공합니다." },
      { title: "프리미엄 설질", text: "고지대 위치는 스키와 보드에 완벽한 건조하고 가벼운 파우더 눈을 보장합니다." },
      { title: "저렴한 가격", text: "리프트권 $15–25/일, 장비 렌탈 $10–20/일 — 유럽이나 북미보다 훨씬 저렴합니다." },
      { title: "모든 기술 레벨", text: "초보자를 위한 완만한 슬로프, 전문가를 위한 어려운 코스, 우수한 오프피스트 기회." },
    ],
    highlightItems: [
      { label: "시즌", value: "12월 ~ 3월 (최상 조건: 1월–2월)" },
      { label: "고도", value: "2300 m (베이스) ~ 3050 m (정상)" },
      { label: "수직 낙차", value: "750미터" },
      { label: "슬로프 수", value: "7개 이상 표시된 슬로프 + 오프피스트 지역" },
    ],
    locationTitle: "위치 및 가는 방법",
    locationText:
      "카라콜 스키장은 키르기스스탄 동부 카라콜 시 근처에 위치하며, 비슈케크에서 약 400 km, 알마티(카자흐스탄)에서 350 km 떨어져 있습니다.",
    fromBishkek: "비슈케크 / 마나스 공항(FRU)에서",
    bishkekItems: [
      { label: "거리", value: "400 km" },
      { label: "운전 시간", value: "4–5시간" },
      { label: "최선의 옵션", value: "Nomad Transfer 개인 차량 이동 — 고정 가격, 한국어 지원, 공항 미팅 서비스" },
      { label: "경로", value: "이식쿨 호수 북쪽 해안을 따라 경치 좋은 드라이브" },
    ],
    fromAlmaty: "알마티 공항(카자흐스탄)에서",
    almatyItems: [
      { label: "거리", value: "케겐 도로를 통해 약 350 km" },
      { label: "운전 시간", value: "5–6시간" },
      { label: "국경 통과", value: "카르카라 국경 (대부분의 국적에 간단함)" },
    ],
    ctaTitle: "카라콜로 이동 서비스가 필요하신가요?",
    ctaSubtitle: "차량당 고정 가격(인당 아님) • 한국어 지원 • 공항 미팅 서비스",
    ctaPrice: "비슈케크 / 마나스 → 카라콜: 세단 $146부터, 밴 $177부터",
    ctaBook: "WhatsApp으로 예약하기",
    ctaDetails: "이동 정보 자세히 보기",
    pricesTitle: "리프트권 가격 및 스키 인프라",
    pricesIntro: "카라콜은 유럽, 미국 또는 일본의 스키 리조트에 비해 뛰어난 가성비를 제공합니다.",
    tableHeaders: ["항목", "가격 (USD)", "참고"],
    tableRows: [
      ["1일 리프트권", "$15–25", "시즌에 따라 다름"],
      ["반나절 리프트권", "$10–15", "13:00 이후"],
      ["스키/스노보드 렌탈 (풀 세트)", "$10–20", "스키/보드, 부츠, 폴 포함"],
      ["헬멧 렌탈", "$3–5", "모든 레벨에 권장"],
      ["스키 강사 (1시간)", "$20–30", "한국어 지원 가능"],
    ],
    infraTitle: "리프트 및 인프라",
    infraItems: [
      "주요 슬로프를 제공하는 2개의 현대적 리프트",
      "높은 지형으로 경치 좋은 접근을 위한 1개의 곤돌라",
      "베이스 지역의 렌탈 샵, 카페 및 난방 시설",
      "무료 주차 가능",
      "운영 시간: 09:00–17:00",
    ],
    accomTitle: "카라콜의 숙박 시설",
    accomText:
      "숙박 옵션은 예산 게스트하우스부터 편안한 중급 호텔까지 다양합니다. 대부분의 방문객은 카라콜 시내(스키 베이스에서 15–20분)나 리조트 근처 호텔에 머뭅니다.",
    accomBudget: "예산 옵션 ($15–30/박)",
    accomBudgetItems: ["카라콜 시내의 게스트하우스", "현지 가족과의 홈스테이", "호스텔의 도미토리"],
    accomMid: "중급 ($40–80/박)",
    accomMidItems: ["카라콜 시내 중심의 호텔", "스키 베이스 근처의 롯지", "조식 및 난방 포함"],
    accomLux: "럭셔리 / 슬로프 인접 ($100+/박)",
    accomLuxItems: ["베이스의 리조트 호텔", "산 전망을 갖춘 개인 샬레", "전체 편의시설: 레스토랑, 사우나, Wi-Fi"],
    shuttleNote: "호텔과 스키 리조트 간 이동이 필요하신가요? Nomad Transfer는 카라콜의 모든 숙박 시설에서 스키 베이스까지 매일 셔틀 및 개인 이동을 제공합니다.",
    shuttleContact: "WhatsApp으로 문의하기",
    nearbyTitle: "카라콜 근처 최고의 볼거리 (스키 후)",
    nearbyText: "카라콜은 스키만이 아닙니다! 이 지역은 놀라운 자연의 아름다움과 문화적 경험을 제공합니다:",
    nearbyItems: [
      {
        title: "알틴-아라샨 온천",
        text: "멋진 산 계곡의 천연 온천으로, 슬로프에서 하루를 보낸 후 피곤한 근육을 풀기에 완벽합니다. 4×4 또는 하이킹(2–3시간)으로 접근 가능합니다.",
      },
      {
        title: "제티-오구즈 (\"일곱 마리 황소\")",
        text: "유명한 붉은 바위 형성물과 경치 좋은 협곡, 카라콜에서 30분 거리. 사진 촬영과 짧은 하이킹에 좋습니다.",
      },
      {
        title: "카라콜 시내 명소",
        text: "둔간 모스크(독특한 목조 모스크), 러시아 정교회, 일요일 동물 시장, 전통 둔간 및 위구르 요리.",
      },
      {
        title: "이식쿨 호수",
        text: "세계에서 두 번째로 큰 고산 호수는 단 1시간 거리. 연중 내내 멋진 경치를 위해 방문하세요.",
      },
    ],
    faqTitle: "카라콜 스키장에 대한 자주 묻는 질문",
    faqs: [
      { q: "카라콜 스키장 리프트권 가격은 얼마인가요?", a: "1일 리프트권은 시즌에 따라 약 $15–25입니다. 복수일 패스는 할인된 가격으로 제공됩니다." },
      { q: "비슈케크에서 카라콜까지 어떻게 가나요?", a: "가장 편리한 방법은 개인 차량 이동입니다(4–5시간, 400 km). Nomad Transfer는 세단 $146부터, 밴 $177부터(차량당) 고정 가격으로 한국어 지원과 공항 미팅 서비스를 제공합니다." },
      { q: "카라콜 스키장은 초보자에게 적합한가요?", a: "네! 초보자를 위한 완만한 슬로프와 한국어 가능 강사가 있습니다. 붐비지 않는 슬로프는 학습에 이상적입니다." },
      { q: "카라콜의 스키 시즌은 언제인가요?", a: "12월부터 3월까지이며, 최상의 눈 상태는 1월과 2월입니다. 높은 고도(2300–3050 m)는 안정적인 적설량을 보장합니다." },
      { q: "카라콜에서 스키 장비를 렌탈할 수 있나요?", a: "네, 베이스에서 부츠, 스키/보드, 폴 포함 하루 $10–20에 렌탈 가능합니다." },
      { q: "알마티에서 카라콜까지 거리는 얼마나 되나요?", a: "케겐 도로를 통해 약 350 km입니다(5–6시간). 카르카라 국경 통과는 대부분의 국적에 간단합니다." },
      { q: "카라콜은 관광객에게 안전한가요?", a: "매우 안전합니다. 키르기스스탄은 중앙아시아에서 가장 환영받는 국가 중 하나입니다." },
      { q: "설질은 어떤가요?", a: "우수합니다! 높은 고도와 대륙성 기후 덕분에 건조하고 가벼운 파우더 눈으로 유명합니다." },
      { q: "여행자 보험이 필요한가요?", a: "강력히 권장됩니다. 스키/스노보드와 높은 고도에서의 의료 후송을 커버하는지 확인하세요." },
      { q: "신용카드로 결제할 수 있나요?", a: "주요 호텔에서 카드를 받지만, 리조트와 작은 시설에서는 현금(USD 또는 솜)이 선호됩니다. ATM은 카라콜 시내에서 이용 가능합니다." },
    ],
    whyNomadTitle: "카라콜 여행에 Nomad Transfer를 선택하는 이유",
    whyNomadItems: [
      { label: "고정 가격", text: "흥정 없음 — 차량당 가격, 인당 아님" },
      { label: "한국어 지원", text: "WhatsApp을 통해 쉽게 예약, 24/7 지원" },
      { label: "공항 미팅 서비스", text: "이름 팻말, 마나스 공항에서 60분 무료 대기" },
      { label: "편안한 차량", text: "모든 그룹 크기를 위한 세단, 밴, 버스" },
      { label: "경험 많은 운전사", text: "경로 숙지, 안전한 겨울 운전, 포토 스톱 포함" },
      { label: "한국어 & 러시아어 지원", text: "국제 여행자를 위한 다국어 팀" },
    ],
    cta2Title: "카라콜 스키 준비되셨나요?",
    cta2Text: "지금 이동 서비스를 예약하고 중앙아시아에서 평생의 스키 모험을 준비하세요!",
  },
};

interface Props {
  initialLang?: "en" | "ru" | "ko";
}

export default function KarakolSkiResortGuide({ initialLang = "en" }: Props) {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(initialLang);
  const router = useRouter();
  const t = T[lang];
  const waLink = lang === "ru" ? WA_SKI_RU : lang === "ko" ? WA_SKI_KO : WA_SKI;

  function switchLang(l: "en" | "ru" | "ko") {
    setLang(l);
    router.push(LANG_ROUTES[l]);
  }

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", lineHeight: 1.6, color: "#1e293b", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 18, color: "#059669", textDecoration: "none" }}>
          Nomad Transfer
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Globe size={16} color="#64748b" />
          {(["en", "ru", "ko"] as const).map((l) => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              style={{
                padding: "4px 10px", borderRadius: 6, border: "1px solid",
                borderColor: lang === l ? "#059669" : "#e2e8f0",
                background: lang === l ? "#ecfdf5" : "#fff",
                color: lang === l ? "#059669" : "#64748b",
                fontWeight: lang === l ? 600 : 400,
                cursor: "pointer", fontSize: 13,
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 60px", background: "#fff" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 14, color: "#64748b", margin: "16px 0" }}>
          <Link href="/" style={{ color: "#0891b2", textDecoration: "none" }}>{t.breadcrumbHome}</Link>
          {" → "}
          {t.breadcrumbGuide}
        </div>

        {/* H1 */}
        <h1 style={{ fontSize: 30, fontWeight: 700, color: "#0f172a", lineHeight: 1.25, margin: "24px 0 16px" }}>
          {t.h1}
        </h1>

        {/* Intro box */}
        <div style={{ background: "linear-gradient(135deg, #0891b2 0%, #059669 100%)", color: "#fff", padding: 32, borderRadius: 12, margin: "24px 0" }}>
          <p style={{ fontWeight: 700, fontSize: 18, margin: "0 0 8px" }}>{t.introBold}</p>
          <p style={{ fontSize: 16, margin: 0, opacity: 0.95 }}>{t.introText}</p>
        </div>

        {/* Why section */}
        <h2 style={h2Style}>{t.whyTitle}</h2>
        <p style={pStyle}>{t.whyIntro}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, margin: "24px 0" }}>
          {t.cards.map((c) => (
            <div key={c.title} style={{ background: "#f8fafc", padding: 20, borderRadius: 8, border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 8px", color: "#0891b2", fontSize: 16, fontWeight: 600 }}>{c.title}</h3>
              <p style={{ margin: 0, color: "#475569", fontSize: 14 }}>{c.text}</p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div style={{ background: "#f0fdf4", borderLeft: "4px solid #059669", padding: 16, margin: "16px 0", borderRadius: 4 }}>
          {t.highlightItems.map((item) => (
            <p key={item.label} style={{ margin: "4px 0", color: "#475569" }}>
              <strong style={{ color: "#059669" }}>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>

        {/* Location */}
        <h2 style={h2Style}>{t.locationTitle}</h2>
        <p style={pStyle}>{t.locationText}</p>

        <h3 style={h3Style}>{t.fromBishkek}</h3>
        <ul style={ulStyle}>
          {t.bishkekItems.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              <strong style={{ color: "#059669" }}>{item.label}:</strong>{" "}
              {i === 2 ? (
                <>
                  <Link href={TRANSFER_ROUTES[lang]} style={{ color: "#0891b2" }}>{item.value}</Link>
                </>
              ) : item.value}
            </li>
          ))}
        </ul>

        <h3 style={h3Style}>{t.fromAlmaty}</h3>
        <ul style={ulStyle}>
          {t.almatyItems.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              <strong style={{ color: "#059669" }}>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>

        {/* CTA box */}
        <div style={ctaBoxStyle}>
          <h2 style={{ color: "#fff", border: "none", margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>{t.ctaTitle}</h2>
          <p style={{ color: "#d1fae5", margin: "8px 0" }}>{t.ctaSubtitle}</p>
          <p style={{ color: "#fff", fontWeight: 600, margin: "8px 0" }}>{t.ctaPrice}</p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={btnStyle}>
              <MessageCircle size={16} style={{ marginRight: 6 }} />{t.ctaBook}
            </a>
            <Link href={TRANSFER_ROUTES[lang]} style={{ ...btnStyle, textDecoration: "none" }}>
              {t.ctaDetails}
            </Link>
          </div>
        </div>

        {/* Prices */}
        <h2 style={h2Style}>{t.pricesTitle}</h2>
        <p style={pStyle}>{t.pricesIntro}</p>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "16px 0" }}>
            <thead>
              <tr>
                {t.tableHeaders.map((h) => (
                  <th key={h} style={{ padding: 12, textAlign: "left", borderBottom: "2px solid #e2e8f0", background: "#f1f5f9", fontWeight: 600, color: "#0f172a" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.tableRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: 12, color: "#475569" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={h3Style}>{t.infraTitle}</h3>
        <ul style={ulStyle}>
          {t.infraItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        {/* Accommodation */}
        <h2 style={h2Style}>{t.accomTitle}</h2>
        <p style={pStyle}>{t.accomText}</p>
        <h3 style={h3Style}>{t.accomBudget}</h3>
        <ul style={ulStyle}>{t.accomBudgetItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
        <h3 style={h3Style}>{t.accomMid}</h3>
        <ul style={ulStyle}>{t.accomMidItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
        <h3 style={h3Style}>{t.accomLux}</h3>
        <ul style={ulStyle}>{t.accomLuxItems.map((item, i) => <li key={i}>{item}</li>)}</ul>

        <div style={{ background: "#f0fdf4", borderLeft: "4px solid #059669", padding: 16, margin: "16px 0", borderRadius: 4 }}>
          <p style={{ margin: 0, color: "#475569" }}>
            <strong style={{ color: "#059669" }}>{t.shuttleNote}</strong>{" "}
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={{ color: "#0891b2" }}>{t.shuttleContact}</a>.
          </p>
        </div>

        {/* Nearby */}
        <h2 style={h2Style}>{t.nearbyTitle}</h2>
        <p style={pStyle}>{t.nearbyText}</p>
        {t.nearbyItems.map((item) => (
          <div key={item.title}>
            <h3 style={h3Style}>{item.title}</h3>
            <p style={pStyle}>{item.text}</p>
          </div>
        ))}

        {/* FAQ */}
        <h2 style={h2Style}>{t.faqTitle}</h2>
        {t.faqs.map((faq) => (
          <div key={faq.q} style={{ margin: "20px 0", padding: 16, background: "#f8fafc", borderRadius: 8, borderLeft: "3px solid #0891b2" }}>
            <div style={{ fontWeight: 600, color: "#0f172a", marginBottom: 8 }}>Q: {faq.q}</div>
            <div style={{ color: "#475569", lineHeight: 1.6 }}>A: {faq.a}</div>
          </div>
        ))}

        {/* Why Nomad */}
        <h2 style={h2Style}>{t.whyNomadTitle}</h2>
        <ul style={ulStyle}>
          {t.whyNomadItems.map((item) => (
            <li key={item.label} style={{ marginBottom: 8 }}>
              <strong style={{ color: "#059669" }}>{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>

        {/* Final CTA */}
        <div style={ctaBoxStyle}>
          <h2 style={{ color: "#fff", border: "none", margin: "0 0 12px", fontSize: 22, fontWeight: 700 }}>{t.cta2Title}</h2>
          <p style={{ color: "#d1fae5", margin: "8px 0" }}>{t.cta2Text}</p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a href={waLink} target="_blank" rel="noopener noreferrer" style={btnStyle}>
              <MessageCircle size={16} style={{ marginRight: 6 }} />{t.ctaBook}
            </a>
          </div>
        </div>

        {/* Footer nav */}
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid #e2e8f0", color: "#64748b", fontSize: 14, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#0891b2", textDecoration: "none" }}>← {t.breadcrumbHome}</Link>
          {(["en", "ru", "ko"] as const).filter((l) => l !== lang).map((l) => (
            <button key={l} onClick={() => switchLang(l)} style={{ background: "none", border: "none", color: "#0891b2", cursor: "pointer", fontSize: 14, padding: 0 }}>
              {l === "en" ? "English" : l === "ru" ? "Русский" : "한국어"}
            </button>
          ))}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 20 }}>
          Nomad Transfer • Bishkek, Kyrgyzstan • WhatsApp: +996 552 291 808
        </p>
      </div>
    </div>
  );
}

const h2Style: React.CSSProperties = {
  fontSize: 22, fontWeight: 600, margin: "32px 0 12px", color: "#1e293b",
  borderBottom: "2px solid #059669", paddingBottom: 8,
};
const h3Style: React.CSSProperties = {
  fontSize: 17, fontWeight: 600, margin: "20px 0 8px", color: "#334155",
};
const pStyle: React.CSSProperties = { margin: "12px 0", color: "#475569" };
const ulStyle: React.CSSProperties = { margin: "12px 0 12px 24px", color: "#475569" };
const ctaBoxStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
  color: "#fff", padding: 32, borderRadius: 12, margin: "32px 0", textAlign: "center",
};
const btnStyle: React.CSSProperties = {
  display: "inline-flex", alignItems: "center",
  background: "#fff", color: "#059669", padding: "12px 24px",
  borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 15,
  border: "none", cursor: "pointer",
};
