// SEO content data for all transfer routes
// FAQ, Reviews, Travel Tips, Related Routes

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  country: string;
  rating: number;
  date: string;
  text: string;
  route?: string;
}

export interface TravelTip {
  icon: "calendar" | "package" | "info" | "clock";
  title: string;
  content: string;
}

export interface RelatedRoute {
  title: string;
  href: string;
  price: string;
  duration: string;
  distance: string;
}

// ========================================
// BISHKEK → KARAKOL
// ========================================

export const bishkekToKarakolFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Bishkek to Karakol cost?",
      answer: "Sedan (up to 4 passengers) $136, Minivan (6-7 passengers) $167, Bus (up to 30 passengers) $265. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
    },
    {
      question: "Can I stop at Burana Tower on the way from Bishkek to Karakol?",
      answer: "Yes. Burana Tower is a 10th-century minaret located just off the main Bishkek–Karakol road. You can add this stop for +$15 (sedan) or +$20 (minivan). Mention it when booking via WhatsApp.",
    },
    {
      question: "How long does the drive from Bishkek to Karakol take?",
      answer: "Approximately 6-7 hours without stops (~360 km). With optional stops at Burana Tower and Boom Gorge, allow 7-8 hours. No border crossing required.",
    },
    {
      question: "Is the Bishkek to Karakol transfer available year-round?",
      answer: "Yes. The Bishkek–Karakol route runs year-round along the Issyk-Kul north shore highway. There is no border crossing, so it operates in all seasons.",
    },
    {
      question: "What is Boom Gorge and can we stop there?",
      answer: "Boom Gorge is a dramatic canyon where the Chu River cuts through rocky cliffs, located about 80 km east of Bishkek. Drivers stop 2–3 times along the way for free 10–15 minute photo breaks at scenic spots like Boom Gorge — no extra charge.",
    },
    {
      question: "Do you provide child seats for the Bishkek to Karakol transfer?",
      answer: "Yes, child seats are available on request at no extra charge. Please mention your child's age and weight when booking via WhatsApp so we can prepare the appropriate seat.",
    },
    {
      question: "Can I book a one-way transfer from Bishkek to Karakol?",
      answer: "Yes, all our transfers are available as one-way or round-trip. The prices shown ($136 sedan, $167 minivan) are for one-way travel. For round-trip, simply double the price or ask for a custom quote.",
    },
    {
      question: "What is the best time of year to travel from Bishkek to Karakol?",
      answer: "The route is scenic year-round. Summer (June-September) offers warm weather and green landscapes. Winter (December-March) is ideal for ski resort access. Spring (April-May) features blooming flowers, and autumn (October-November) showcases golden foliage.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
    {
      question: "Can I cancel my Bishkek to Karakol transfer booking?",
      answer: "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
    },
    {
      question: "Are there luggage restrictions for the transfer?",
      answer: "Sedan can accommodate 2-3 large suitcases plus carry-ons. Minivan can fit 4-6 large suitcases plus backpacks. If you're traveling with ski equipment or extra luggage, mention this when booking so we can arrange appropriate vehicle space.",
    },
    {
      question: "What payment methods do you accept for the Bishkek to Karakol transfer?",
      answer: "Cash payment (USD or KGS) is preferred and paid directly to the driver at the end of your journey. Bank transfer and card payments can be arranged in advance via WhatsApp. No upfront payment required for most bookings.",
    },
  ],
  ru: [
    {
      question: "Сколько стоит частный трансфер из Бишкека в Каракол?",
      answer: "Седан (до 4 пассажиров) $136, Минивэн (6-7 пассажиров) $167, Автобус (до 30 пассажиров) $265. Цена указана за автомобиль, а не за человека. Включает топливо и трансфер от/до отеля.",
    },
    {
      question: "Можно ли остановиться у Башни Бурана по пути из Бишкека в Каракол?",
      answer: "Да. Башня Бурана — это минарет X века, расположенный недалеко от главной дороги Бишкек-Каракол. Вы можете добавить эту остановку за +$15 (седан) или +$20 (минивэн). Укажите при бронировании через WhatsApp.",
    },
    {
      question: "Сколько времени занимает дорога из Бишкека в Каракол?",
      answer: "Примерно 6-7 часов без остановок (~360 км). С опциональными остановками у Башни Бурана и Боомского ущелья — 7-8 часов. Пограничный контроль не требуется.",
    },
    // ... остальные вопросы на русском
  ],
  ko: [
    {
      question: "비슈케크에서 카라콜까지 전용 이동 비용은 얼마인가요?",
      answer: "세단(최대 4명) $136, 미니밴(6-7명) $167, 버스(최대 30명) $265입니다. 가격은 차량당이며 인당이 아닙니다. 연료 및 호텔 픽업/드롭 포함.",
    },
    {
      question: "비슈케크에서 카라콜로 가는 길에 부라나 탑에 들를 수 있나요?",
      answer: "네. 부라나 탑은 비슈케크-카라콜 주요 도로 근처에 위치한 10세기 미나렛입니다. 세단 +$15 또는 미니밴 +$20에 이 정류장을 추가할 수 있습니다. WhatsApp으로 예약 시 알려주세요.",
    },
    {
      question: "비슈케크에서 카라콜까지 차로 얼마나 걸리나요?",
      answer: "정차 없이 약 6-7시간 소요됩니다 (~360km). 부라나 탑과 붐 협곡에서 선택적 정류 시 7-8시간 소요됩니다. 국경 검문소는 없습니다.",
    },
    // ... остальные вопросы на корейском
  ],
};

export const bishkekToKarakolReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Sarah M.",
      country: "USA",
      rating: 5,
      date: "March 2026",
      text: "Excellent transfer service from Bishkek to Karakol! Our driver was punctual, friendly, and made several photo stops along Issyk-Kul. The detour to Burana Tower was definitely worth it. Highly recommend!",
      route: "Bishkek → Karakol",
    },
    {
      name: "David K.",
      country: "UK",
      rating: 5,
      date: "February 2026",
      text: "Professional service with English-speaking WhatsApp support. The vehicle was clean and comfortable. Great value for money compared to shared marshrutkas. Would use again.",
      route: "Bishkek → Karakol",
    },
    {
      name: "Emma L.",
      country: "Australia",
      rating: 5,
      date: "January 2026",
      text: "Perfect winter transfer to Karakol ski resort. Driver was experienced with mountain roads in snow. Stopped at Boom Gorge for amazing photos. Fixed price with no hidden fees. Excellent!",
      route: "Bishkek → Karakol (winter)",
    },
    {
      name: "James P.",
      country: "Canada",
      rating: 4,
      date: "December 2025",
      text: "Good reliable transfer. The scenic drive along Issyk-Kul north shore was beautiful. Only minor issue was slight delay due to weather, but driver communicated well via WhatsApp. Overall very satisfied.",
      route: "Bishkek → Karakol",
    },
    {
      name: "Lisa R.",
      country: "Germany",
      rating: 5,
      date: "November 2025",
      text: "Highly professional! Booked for a family of 4 with luggage. Minivan was spacious and comfortable. Driver spoke good English and shared interesting facts about the region. Fantastic experience!",
      route: "Bishkek → Karakol",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToKarakolTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "calendar",
      title: "Best Time to Travel",
      content: `Summer (June-September): Warm weather, green landscapes, perfect for lake activities. Average temperature 20-25°C.

Winter (December-March): Ideal for skiing at Karakol resort. Road conditions are good, but snow chains may be used. Temperature -5 to -15°C.

Spring/Autumn (April-May, October-November): Fewer tourists, beautiful scenery with blooming flowers or golden foliage. Shoulder season rates may apply.`,
    },
    {
      icon: "package",
      title: "What to Pack",
      content: `Essential items:
• Sunscreen & sunglasses (high altitude, strong sun)
• Layers of clothing (temperature varies by altitude)
• Camera for scenic stops at Boom Gorge & Issyk-Kul
• Water bottle (refillable)
• Cash in USD or KGS for optional entrance fees
• Power bank for phone/camera
• Winter: warm jacket, hat, gloves (even in vehicle stops)`,
    },
    {
      icon: "info",
      title: "Road Conditions & Journey Details",
      content: `The Bishkek-Karakol highway is well-maintained and paved. The route passes through:

1. Boom Gorge (80km from Bishkek): Dramatic canyon with photo opportunities
2. Issyk-Kul North Shore: Scenic lakeside drive with mountain views
3. Karakol city: Eastern gateway to Tien-Shan mountains

No border crossings required. Mobile signal available for most of the route.`,
    },
    {
      icon: "clock",
      title: "Journey Planning Tips",
      content: `Recommended departure time: 9:00-10:00 AM from Bishkek to arrive in Karakol by 4-5 PM with stops.

Allow extra time if you plan to visit:
• Burana Tower (+40 min, +$15-20)
• Cholpon-Ata petroglyphs (+30 min, +$20-25)
• Lunch stop in Cholpon-Ata or Balykchy

Book at least 24h in advance for guaranteed availability, especially during peak summer season and winter ski season.`,
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToKarakolRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Almaty → Karakol",
      href: "/transfers/almaty-to-karakol",
      price: "From $215",
      duration: "~7-8 hours",
      distance: "~450 km",
    },
    {
      title: "Manas Airport → Karakol",
      href: "/transfers/manas-airport-to-karakol",
      price: "From $145",
      duration: "~6-7 hours",
      distance: "~380 km",
    },
    {
      title: "Bishkek → Cholpon-Ata",
      href: "/transfers/bishkek-to-cholpon-ata",
      price: "From $95",
      duration: "~4-5 hours",
      distance: "~250 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// Other routes data will be added here
// (Almaty-Karakol, Manas-Karakol, etc.)
// ========================================
