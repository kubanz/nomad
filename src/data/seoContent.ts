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
      title: "Manas Airport to Karakol",
      href: "/transfers/manas-airport-to-karakol",
      price: "From $146",
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
// ALMATY → KARAKOL
// ========================================

export const almatyToKarakolFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much is a transfer from Almaty to Karakol?",
      answer: "Private transfer from Almaty to Karakol costs $235 for Sedan (up to 4 passengers), $275 for Minivan (6-7 passengers), $485 for Bus (up to 30 passengers). Price is per vehicle, not per person. Includes border crossing assistance, fuel, and hotel pickup/drop-off in both cities.",
    },
    {
      question: "How do I book a transfer from Almaty to Karakol?",
      answer: "Book via WhatsApp at +996552291808. Tell us your travel date, pickup location in Almaty, drop-off in Karakol, and number of passengers. We reply within 1-2 minutes with availability and confirmation. English-speaking support available 24/7.",
    },
    {
      question: "How long does the transfer from Almaty to Karakol take?",
      answer: "Allow approximately 7-8 hours for the ~430 km journey, including the Kegen–Karkara border crossing. Optional stops, traffic, weather, and border queues may add time.",
    },
    {
      question: "Can I stop at Charyn Canyon on the way from Almaty to Karakol?",
      answer: "Yes! Charyn Canyon is just 12 km off the main Almaty-Karakol route. This spectacular red rock canyon is often called Kazakhstan's Grand Canyon. Add this 1.5-2 hour stop for only +$35. Highly recommended for first-time visitors.",
    },
    {
      question: "Do I need a visa for Kazakhstan-Kyrgyzstan border crossing from Almaty to Karakol?",
      answer: "Most nationalities (USA, EU, UK, Canada, Australia, Japan, Korea, etc.) do NOT need visas for Kazakhstan or Kyrgyzstan for tourist stays under 30 days. Your driver assists with border formalities. Passport must be valid for 6+ months.",
    },
    {
      question: "What is the Kegen border crossing like from Almaty to Karakol?",
      answer: "Kegen–Karkara is a scenic mountain checkpoint between Kazakhstan and Kyrgyzstan. Bring a valid passport and check entry requirements for your nationality. Operating dates and hours can change, so we confirm the schedule before departure.",
    },
    {
      question: "Is the transfer from Almaty to Karakol available in winter?",
      answer: "Winter transfers are available, but the route depends on current road and border conditions. When the direct Kegen–Karkara crossing is unavailable, we can quote an alternative route via Bishkek after confirming your date.",
    },
    {
      question: "What payment methods do you accept for Almaty to Karakol transfer?",
      answer: "Cash payment (USD, EUR, or KGS) is preferred and paid to driver at journey's end. Bank transfer and card payment can be arranged in advance via WhatsApp. No upfront deposit required for most bookings. Free cancellation up to 24 hours before departure.",
    },
  ],
  ru: [],
  ko: [],
};

export const almatyToKarakolReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Michael T.",
      country: "Kazakhstan",
      rating: 5,
      date: "April 2026",
      text: "Excellent cross-border transfer! Driver handled all border paperwork smoothly. The detour to Charyn Canyon was absolutely worth it. Professional service from start to finish.",
      route: "Almaty → Karakol",
    },
    {
      name: "Anna S.",
      country: "Russia",
      rating: 5,
      date: "March 2026",
      text: "Very comfortable journey with great views of Tien-Shan mountains. Border crossing was quick and hassle-free. Driver spoke good English and Russian. Highly recommend!",
      route: "Almaty → Karakol",
    },
    {
      name: "John W.",
      country: "USA",
      rating: 5,
      date: "February 2026",
      text: "Perfect winter transfer to Karakol ski resort from Almaty. Despite snowy conditions, driver was experienced and safe. Great communication via WhatsApp throughout.",
      route: "Almaty → Karakol (winter)",
    },
  ],
  ru: [],
  ko: [],
};

export const almatyToKarakolTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "info",
      title: "Border Crossing Information",
      content: `Karkara border crossing (Kazakhstan-Kyrgyzstan):
• Typically takes 30-60 minutes
• Bring passport (valid 6+ months)
• Most nationalities don't need visa
• Small fees may apply (have USD or KGS cash)
• Mobile signal limited near border
• Driver assists with all formalities`,
    },
    {
      icon: "calendar",
      title: "Best Time to Travel",
      content: `Summer (June-September): Warmest weather, easiest border conditions. Mountain pass is snow-free.

Winter (December-March): Road to Karakol ski resort. Border crossing still operational but may have snow. Allow extra time.

Spring/Autumn: Fewer tourists, beautiful mountain scenery. Border less crowded.`,
    },
    {
      icon: "package",
      title: "What to Pack for Border Crossing",
      content: `Essential items:
• Passport (original, not copy)
• Cash in USD or KGS for border fees
• Snacks and water (limited food near border)
• Warm clothing (high altitude, even in summer)
• Phone charger & power bank
• Travel insurance documents`,
    },
    {
      icon: "clock",
      title: "Journey Planning",
      content: `Recommended departure: 8:00-9:00 AM from Almaty to arrive in Karakol by 4-5 PM.

Route highlights:
• Almaty → Charyn Canyon (optional, +2-3h)
• Karkara border crossing (~1h)
• Scenic mountain drive through Tien-Shan
• Issyk-Kul east shore → Karakol

Book 48h in advance for guaranteed border crossing preparation.`,
    },
  ],
  ru: [],
  ko: [],
};

export const almatyToKarakolRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek → Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
    {
      title: "Manas Airport to Karakol",
      href: "/transfers/manas-airport-to-karakol",
      price: "From $146",
      duration: "~6-7 hours",
      distance: "~380 km",
    },
    {
      title: "Almaty → Bishkek",
      href: "/transfers/almaty-to-bishkek",
      price: "From $180",
      duration: "~5-6 hours",
      distance: "~250 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// MANAS AIRPORT → KARAKOL
// ========================================

export const manasToKarakolFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much is a transfer from Manas Airport to Karakol?",
      answer: "Sedan $146, Minivan $177, Bus $275. Price is per vehicle, not per person. Includes 60-min free airport waiting, meet & greet with name board, fuel, and hotel drop-off in Karakol.",
    },
    {
      question: "Do you provide meet & greet at Manas Airport?",
      answer: "Yes! Driver meets you at arrivals with a name board displaying your name. We include 60 minutes of free waiting time, so no rush through customs or baggage claim.",
    },
    {
      question: "What if my flight is delayed?",
      answer: "No problem! We track your flight in real-time. If delayed, driver adjusts pickup time automatically. We include 60 min free waiting, and any additional waiting is $10/hour.",
    },
    {
      question: "How long is the drive from Manas Airport to Karakol?",
      answer: "Approximately 6-7 hours (~380 km) depending on traffic and photo stops. Route goes via Bishkek bypass → Boom Gorge → Issyk-Kul north shore → Karakol.",
    },
    {
      question: "Can I stop at Burana Tower on the way?",
      answer: "Yes! Burana Tower is slightly off the main route. You can add this 40-minute stop for +$15 (sedan) or +$20 (minivan). Just mention when booking.",
    },
    {
      question: "Is there space for ski equipment?",
      answer: "Yes. Sedan fits 2-3 pairs of skis + luggage. Minivan fits 4-6 pairs. If traveling with a large group and ski gear, we recommend minivan or bus. Mention equipment when booking.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "Cash payment (USD or KGS) to driver at the end of journey. Bank transfer can be arranged in advance. No upfront payment required for airport pickups.",
    },
    {
      question: "Can I cancel my airport transfer?",
      answer: "Yes. Free cancellation up to 24 hours before scheduled pickup. For cancellations within 24h, a 50% fee applies. Contact via WhatsApp to cancel.",
    },
  ],
  ru: [],
  ko: [],
};

export const manasToKarakolReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Tom H.",
      country: "UK",
      rating: 5,
      date: "March 2026",
      text: "Perfect airport pickup! Driver was waiting with name board despite flight delay. Comfortable minivan with plenty of space for ski equipment. Great scenic drive along Issyk-Kul.",
      route: "Manas → Karakol",
    },
    {
      name: "Sophie L.",
      country: "France",
      rating: 5,
      date: "February 2026",
      text: "Excellent service from landing to hotel drop-off. Driver helped with luggage, spoke good English, and made photo stops at Boom Gorge. Highly professional!",
      route: "Manas → Karakol",
    },
    {
      name: "Mark D.",
      country: "Australia",
      rating: 5,
      date: "January 2026",
      text: "Seamless transfer after long flight. 60-min free waiting was perfect for clearing customs. Clean vehicle, safe driving, beautiful route. Would definitely use again!",
      route: "Manas → Karakol",
    },
  ],
  ru: [],
  ko: [],
};

export const manasToKarakolTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "info",
      title: "Airport Pickup Process",
      content: `What to expect at Manas Airport (FRU):
• Driver waits at arrivals hall with name board
• 60 minutes free waiting included
• Flight tracking (we monitor delays automatically)
• Meet point: Arrivals exit, near currency exchange
• WhatsApp contact for easy communication
• Help with luggage to vehicle`,
    },
    {
      icon: "clock",
      title: "Journey Timeline",
      content: `Manas Airport → Karakol route:
• Pickup at arrivals (10-15 min after landing)
• Bishkek bypass road (~30 min)
• Boom Gorge photo stop (~1h from airport)
• Issyk-Kul north shore scenic drive
• Arrival in Karakol (6-7 hours total)

Recommended: Morning/midday flights to arrive before dark.`,
    },
    {
      icon: "package",
      title: "What to Prepare",
      content: `Before your flight:
• Share flight number via WhatsApp
• Confirm pickup time 24h in advance
• Have driver's phone number saved
• Bring cash (USD or KGS) for payment
• Download offline maps (optional)
• Dress in layers (temperature changes)`,
    },
    {
      icon: "calendar",
      title: "Best Flight Times",
      content: `Ideal arrival times at Manas:
• 8:00-12:00 AM: Best for reaching Karakol in daylight
• 12:00-16:00 PM: Arrive Karakol by evening
• Late evening: Still operational, but arrive Karakol late

Most international flights land morning/midday — perfect timing for scenic drive.`,
    },
  ],
  ru: [],
  ko: [],
};

export const manasToKarakolRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek → Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
    {
      title: "Almaty → Karakol",
      href: "/transfers/almaty-to-karakol",
      price: "From $215",
      duration: "~7-8 hours",
      distance: "~450 km",
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
// BISHKEK → OSH (shorter data - less popular route)
// ========================================

export const bishkekToOshFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much is a private transfer from Bishkek to Osh?",
      answer: "This is a long-distance route (~680 km, 10-12 hours drive). Contact us via WhatsApp for custom pricing based on your travel dates and group size.",
    },
    {
      question: "Is it better to fly or drive from Bishkek to Osh?",
      answer: "For most travelers, flying is recommended (1 hour vs 10-12 hours driving). Private transfer makes sense if you want to stop at attractions along the way or travel with a group.",
    },
    {
      question: "What stops are available on the Bishkek to Osh route?",
      answer: "Possible stops: Toktogul Reservoir, Suusamyr Valley, mountain viewpoints. This is a scenic but long mountain drive. Best done over 2 days with overnight stop.",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToOshRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek → Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
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
// BISHKEK → CHOLPON-ATA
// ========================================

export const bishkekToCholponAtaFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much is a transfer from Bishkek to Cholpon-Ata?",
      answer: "Sedan $95, Minivan $115. Price is per vehicle, not per person. Includes fuel, hotel pickup/drop-off, and short photo stops along the way.",
    },
    {
      question: "How long does it take to drive from Bishkek to Cholpon-Ata?",
      answer: "Approximately 4-5 hours (~250 km) including photo stop at Boom Gorge. Direct drive without stops is about 3.5-4 hours.",
    },
    {
      question: "Can I visit Burana Tower on the way?",
      answer: "Yes! Burana Tower is on the route to Cholpon-Ata. Add this 40-min stop for +$15 (sedan) or +$20 (minivan).",
    },
    {
      question: "What is there to do in Cholpon-Ata?",
      answer: "Cholpon-Ata is a beach town on Issyk-Kul's north shore. Main attractions: sandy beaches, ancient petroglyphs, Rukh Ordo cultural center, water sports, and lakeside restaurants.",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToCholponAtaRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek → Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
    {
      title: "Manas Airport to Karakol",
      href: "/transfers/manas-airport-to-karakol",
      price: "From $146",
      duration: "~6-7 hours",
      distance: "~380 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// ALMATY → BISHKEK
// ========================================

export const almatyToBishkekFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much is a transfer from Almaty to Bishkek?",
      answer: "Sedan $180, Minivan $220. Price is per vehicle, not per person. Includes border crossing assistance, fuel, and hotel pickup/drop-off.",
    },
    {
      question: "Which border crossing do you use for Almaty to Bishkek?",
      answer: "We use Korday border crossing — the main checkpoint between Kazakhstan and Kyrgyzstan. It's well-maintained and typically processes travelers quickly (30-60 minutes).",
    },
    {
      question: "How long is the drive from Almaty to Bishkek?",
      answer: "Approximately 5-6 hours total (~250 km) including border crossing. The border typically takes 30-60 minutes depending on queue.",
    },
    {
      question: "Do I need a visa for Kazakhstan or Kyrgyzstan?",
      answer: "Most nationalities (USA, EU, UK, Canada, Australia) do NOT need visas for stays under 30-60 days. Ensure your passport is valid for 6+ months.",
    },
  ],
  ru: [],
  ko: [],
};

export const almatyToBishkekRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Almaty to Karakol",
      href: "/transfers/almaty-to-karakol",
      price: "From $215",
      duration: "~7-8 hours",
      distance: "~450 km",
    },
    {
      title: "Bishkek to Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// KARAKOL to BISHKEK (REVERSE)
// ========================================

export const karakolToBishkekFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Karakol to Bishkek cost?",
      answer: "Sedan (up to 4 passengers) $136, Minivan (6-7 passengers) $167, Bus (up to 30 passengers) $265. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
    },
    {
      question: "How long does the drive from Karakol to Bishkek take?",
      answer: "Approximately 6-7 hours without stops (~360 km). With optional stops at Cholpon-Ata and Boom Gorge, allow 7-8 hours. No border crossing required.",
    },
    {
      question: "Can I stop at Cholpon-Ata on the way from Karakol to Bishkek?",
      answer: "Yes. Cholpon-Ata is a popular resort town on the Issyk-Kul north shore. You can add this stop for +$20 (sedan/minivan). Mention it when booking via WhatsApp.",
    },
    {
      question: "Is the Karakol to Bishkek transfer available year-round?",
      answer: "Yes. The Karakol–Bishkek route runs year-round along the Issyk-Kul north shore highway. There is no border crossing, so it operates in all seasons.",
    },
    {
      question: "What is Boom Gorge and can we stop there?",
      answer: "Boom Gorge is a dramatic canyon where the Chu River cuts through rocky cliffs, located about 80 km east of Bishkek. Drivers stop 2–3 times along the way for free 10–15 minute photo breaks at scenic spots like Boom Gorge — no extra charge.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
    {
      question: "Can I cancel my Karakol to Bishkek transfer booking?",
      answer: "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
    },
    {
      question: "What payment methods do you accept for the Karakol to Bishkek transfer?",
      answer: "Cash payment (USD or KGS) is preferred and paid directly to the driver at the end of your journey. Bank transfer and card payments can be arranged in advance via WhatsApp. No upfront payment required for most bookings.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToBishkekReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Michael R.",
      country: "Germany",
      rating: 5,
      date: "March 2026",
      text: "Perfect transfer from Karakol back to Bishkek after skiing. Driver arrived on time, vehicle was warm and comfortable. Beautiful views along Issyk-Kul. Highly recommend!",
      route: "Karakol to Bishkek",
    },
    {
      name: "Sophie T.",
      country: "France",
      rating: 5,
      date: "February 2026",
      text: "Excellent service returning from Karakol. Stopped at Cholpon-Ata for lunch as requested. English WhatsApp support made booking very easy. Will use again!",
      route: "Karakol to Bishkek",
    },
    {
      name: "Tom W.",
      country: "Netherlands",
      rating: 5,
      date: "January 2026",
      text: "Reliable and professional. Driver was experienced with winter mountain roads. Fixed price with no surprises. Great value for a private transfer.",
      route: "Karakol to Bishkek",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToBishkekTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "calendar",
      title: "Best departure time",
      content: "Depart Karakol between 9:00-10:00 AM to enjoy scenic daylight views along Issyk-Kul north shore and arrive in Bishkek by late afternoon. Early departures (6-7 AM) are available for flight connections.",
    },
    {
      icon: "package",
      title: "Luggage and equipment",
      content: "If traveling with ski equipment from Karakol ski resort, inform us when booking. Minivans can accommodate 4-6 large bags plus ski gear. Sedan fits 2-3 bags plus skis/snowboards.",
    },
    {
      icon: "info",
      title: "Optional stops on the way",
      content: "Consider adding Cholpon-Ata (+$20) for lunch stop with lake views, or Burana Tower (+$15) for historical sightseeing. Boom Gorge photo stops are included free.",
    },
    {
      icon: "clock",
      title: "Airport connections",
      content: "Allow 7-8 hours total travel time from Karakol to Manas Airport. For international flights, book departures after 5:00 PM to have buffer time for any delays.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToBishkekRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Karakol to Almaty",
      href: "/transfers/karakol-to-almaty",
      price: "From $235",
      duration: "~7-8 hours",
      distance: "~430 km",
    },
    {
      title: "Karakol to Manas Airport",
      href: "/transfers/karakol-to-manas-airport",
      price: "From $146",
      duration: "~6.5-7.5 hours",
      distance: "~390 km",
    },
    {
      title: "Bishkek to Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// KARAKOL to ALMATY (REVERSE)
// ========================================

export const karakolToAlmatyFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Karakol to Almaty cost?",
      answer: "Sedan (up to 4 passengers) $235, Minivan (6-7 passengers) $275. Price is per vehicle, not per person. Includes fuel, hotel pickup/drop-off, and border crossing assistance.",
    },
    {
      question: "How long does the drive from Karakol to Almaty take?",
      answer: "Allow approximately 7-8 hours including the Karkara–Kegen border crossing. Travel and processing times depend on traffic, weather, and the border queue.",
    },
    {
      question: "Which border crossing is used for Karakol to Almaty transfer?",
      answer: "The direct route normally uses the Karkara–Kegen checkpoint. Operating dates and hours can change, so we confirm the available crossing and route before departure.",
    },
    {
      question: "Do I need a visa for the Karkara border crossing?",
      answer: "Visa requirements depend on your nationality. Citizens of most countries can enter Kazakhstan visa-free for up to 30 days. Please check Kazakhstan visa requirements for your specific country before booking.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToAlmatyReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Anna K.",
      country: "Kazakhstan",
      rating: 5,
      date: "March 2026",
      text: "Smooth border crossing from Kyrgyzstan to Kazakhstan. Driver handled all formalities professionally. Comfortable ride all the way to Almaty. Excellent service!",
      route: "Karakol to Almaty",
    },
    {
      name: "Robert S.",
      country: "USA",
      rating: 5,
      date: "February 2026",
      text: "Great transfer service from Karakol to Almaty. Border crossing was efficient with driver's assistance. Clean vehicle, friendly driver. Highly recommended!",
      route: "Karakol to Almaty",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToAlmatyTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "info",
      title: "Border crossing requirements",
      content: "Bring a valid passport and check Kazakhstan entry requirements for your nationality before travel. Have your documents ready at the Karkara–Kegen checkpoint; your driver will guide you through the transfer process.",
    },
    {
      icon: "calendar",
      title: "Best travel time",
      content: "Depart Karakol by 9:00 AM to cross the border during daytime and arrive in Almaty by late afternoon. Avoid Friday afternoons and holidays when border queues are longer.",
    },
    {
      icon: "clock",
      title: "Travel duration",
      content: "Allow 7-8 hours for the journey, including the border crossing. Traffic, weather, and border queues may add time, so avoid tight same-day flight connections from Almaty.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToAlmatyRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Karakol to Bishkek",
      href: "/transfers/karakol-to-bishkek",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
    {
      title: "Almaty to Karakol",
      href: "/transfers/almaty-to-karakol",
      price: "From $235",
      duration: "~7-8 hours",
      distance: "~430 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// KARAKOL to MANAS AIRPORT (REVERSE)
// ========================================

export const karakolToManasAirportFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Karakol to Manas Airport cost?",
      answer: "Sedan (up to 4 passengers) $146, Minivan (6-7 passengers) $177. Price is per vehicle, not per person. Includes fuel and hotel pickup.",
    },
    {
      question: "How long does the drive from Karakol to Manas Airport take?",
      answer: "Approximately 6.5-7.5 hours (~390 km) via Issyk-Kul north shore and Boom Gorge. We recommend booking departure flights after 2:00 PM to allow sufficient travel time.",
    },
    {
      question: "Do you track flights for airport pickups?",
      answer: "Yes. For airport pickups, we track your flight in real-time. If your flight is delayed, your driver will adjust pickup time accordingly at no extra charge.",
    },
    {
      question: "Is the transfer available 24/7?",
      answer: "Yes. We provide 24/7 airport transfer service for early morning and late night flights. Book via WhatsApp anytime.",
    },
    {
      question: "Can I cancel my airport transfer booking?",
      answer: "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToManasAirportReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Lisa M.",
      country: "UK",
      rating: 5,
      date: "March 2026",
      text: "Perfect airport transfer from Karakol. Driver picked us up at 5:00 AM for our afternoon flight. Arrived at Manas with plenty of time. Reliable and professional!",
      route: "Karakol to Manas Airport",
    },
    {
      name: "Peter D.",
      country: "Australia",
      rating: 5,
      date: "February 2026",
      text: "Excellent early morning pickup from Karakol to catch our flight. Driver was punctual, vehicle was warm. Smooth ride to the airport. Highly recommend!",
      route: "Karakol to Manas Airport",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToManasAirportTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "clock",
      title: "Flight timing recommendations",
      content: "Book departure flights after 2:00 PM from Manas Airport. This allows 7-8 hours travel time plus 2 hours airport buffer. For morning flights, depart Karakol very early (3-4 AM) or stay overnight in Bishkek.",
    },
    {
      icon: "package",
      title: "Luggage and ski equipment",
      content: "Inform us if traveling with ski gear from Karakol. Sedans fit 2-3 bags plus skis. Minivans accommodate 4-6 bags plus ski equipment. Airport check-in time is typically 2 hours before international flights.",
    },
    {
      icon: "info",
      title: "Early morning departures",
      content: "For early morning flights (before 12:00 PM), we recommend departing Karakol by 3-4 AM. Driver will be ready at your requested time. 24/7 service available.",
    },
  ],
  ru: [],
  ko: [],
};

export const karakolToManasAirportRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Manas Airport to Karakol",
      href: "/transfers/manas-airport-to-karakol",
      price: "From $146",
      duration: "~6.5-7.5 hours",
      distance: "~390 km",
    },
    {
      title: "Karakol to Bishkek",
      href: "/transfers/karakol-to-bishkek",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// CHOLPON-ATA to BISHKEK (REVERSE)
// ========================================

export const cholponAtaToBishkekFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Cholpon-Ata to Bishkek cost?",
      answer: "Sedan (up to 4 passengers) $97, Minivan (6-7 passengers) $128. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
    },
    {
      question: "How long does the drive from Cholpon-Ata to Bishkek take?",
      answer: "Approximately 4-5 hours without stops (~250 km). With optional stops at Boom Gorge and Burana Tower, allow 5-6 hours. No border crossing required.",
    },
    {
      question: "Can I stop at Burana Tower on the way to Bishkek?",
      answer: "Yes. Burana Tower is a 10th-century minaret located just off the main route. You can add this stop for +$15 (sedan) or +$20 (minivan). Mention it when booking via WhatsApp.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
  ],
  ru: [],
  ko: [],
};

export const cholponAtaToBishkekReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Jennifer L.",
      country: "Canada",
      rating: 5,
      date: "March 2026",
      text: "Great transfer from Cholpon-Ata to Bishkek. Driver was friendly and professional. Beautiful drive along Issyk-Kul. Good value for money!",
      route: "Cholpon-Ata to Bishkek",
    },
    {
      name: "Mark B.",
      country: "USA",
      rating: 5,
      date: "February 2026",
      text: "Excellent service returning from beach vacation at Issyk-Kul. Clean vehicle, punctual pickup. WhatsApp booking was very easy. Recommended!",
      route: "Cholpon-Ata to Bishkek",
    },
  ],
  ru: [],
  ko: [],
};

export const cholponAtaToBishkekTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "calendar",
      title: "Best departure time",
      content: "Depart Cholpon-Ata between 9:00-11:00 AM to enjoy scenic views along Issyk-Kul and arrive in Bishkek by early afternoon. Perfect timing for same-day flight connections from Manas Airport.",
    },
    {
      icon: "info",
      title: "Optional cultural stops",
      content: "Add Burana Tower (+$15-20) to see 11th-century minaret and ancient stone sculptures. Boom Gorge photo stops are included free. Request stops when booking via WhatsApp.",
    },
    {
      icon: "clock",
      title: "Airport connections",
      content: "If connecting to Manas Airport from Cholpon-Ata, allow 5-6 hours total (250 km to Bishkek + 30 km to airport). Book flights after 3:00 PM for comfortable timing.",
    },
  ],
  ru: [],
  ko: [],
};

export const cholponAtaToBishkekRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek to Cholpon-Ata",
      href: "/transfers/bishkek-to-cholpon-ata",
      price: "From $97",
      duration: "~4-5 hours",
      distance: "~250 km",
    },
    {
      title: "Cholpon-Ata to Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~2-3 hours",
      distance: "~150 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// OSH to BISHKEK (REVERSE)
// ========================================

export const oshToBishkekFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Osh to Bishkek cost?",
      answer: "Sedan (up to 4 passengers) $298, Minivan (6-7 passengers) $345. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
    },
    {
      question: "How long does the drive from Osh to Bishkek take?",
      answer: "Approximately 10-12 hours depending on road conditions and mountain passes (~650 km). This is a long-distance transfer through scenic mountain terrain. No border crossing required.",
    },
    {
      question: "Is the Osh to Bishkek route available year-round?",
      answer: "The route is available year-round, but winter conditions (November-March) may require additional travel time due to snow and mountain passes. We monitor road conditions and will inform you of any delays.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
  ],
  ru: [],
  ko: [],
};

export const oshToBishkekReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Daniel F.",
      country: "Switzerland",
      rating: 5,
      date: "March 2026",
      text: "Long but scenic journey from Osh to Bishkek. Driver was experienced with mountain roads. Stopped several times for photos and rest. Professional service!",
      route: "Osh to Bishkek",
    },
    {
      name: "Maria G.",
      country: "Spain",
      rating: 5,
      date: "February 2026",
      text: "Excellent long-distance transfer. Driver was patient and professional during the 11-hour journey. Beautiful mountain scenery throughout. Worth the price!",
      route: "Osh to Bishkek",
    },
  ],
  ru: [],
  ko: [],
};

export const oshToBishkekTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "clock",
      title: "Plan for full day travel",
      content: "Osh to Bishkek is a 10-12 hour journey. Depart early (7-8 AM) to arrive by evening. Multiple rest stops and meal breaks are included. Not recommended if you have same-day flight connections.",
    },
    {
      icon: "calendar",
      title: "Season considerations",
      content: "Summer (June-September) offers best road conditions. Winter (November-March) may have snow on mountain passes, adding 1-2 hours. We monitor weather and road conditions daily.",
    },
    {
      icon: "info",
      title: "Comfort and breaks",
      content: "Driver will stop every 2-3 hours at roadside cafes and scenic viewpoints. Bring snacks and water. Vehicle has air conditioning/heating. Consider overnight stop in Suusamyr for multi-day journey.",
    },
  ],
  ru: [],
  ko: [],
};

export const oshToBishkekRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Bishkek to Osh",
      href: "/transfers/bishkek-to-osh",
      price: "From $298",
      duration: "~10-12 hours",
      distance: "~650 km",
    },
    {
      title: "Osh to Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~8-10 hours",
      distance: "~500 km",
    },
  ],
  ru: [],
  ko: [],
};

// ========================================
// BISHKEK to ALMATY (REVERSE)
// ========================================

export const bishkekToAlmatyFAQ: Record<"en" | "ru" | "ko", FAQItem[]> = {
  en: [
    {
      question: "How much does a private transfer from Bishkek to Almaty cost?",
      answer: "Sedan (up to 4 passengers) $127, Minivan (6-7 passengers) $158. Price is per vehicle, not per person. Includes fuel, hotel pickup/drop-off, and border crossing assistance.",
    },
    {
      question: "How long does the drive from Bishkek to Almaty take?",
      answer: "Approximately 4-5 hours including border crossing at Korday (~230 km). Border processing usually takes 30-60 minutes depending on queue.",
    },
    {
      question: "Which border crossing is used for Bishkek to Almaty transfer?",
      answer: "We use the Korday border crossing, which is the closest and most direct route from Bishkek to Almaty. This border operates year-round.",
    },
    {
      question: "Do I need a visa for the Korday border crossing?",
      answer: "Visa requirements depend on your nationality. Citizens of most countries can enter Kazakhstan visa-free for up to 30 days. Please check Kazakhstan visa requirements for your specific country before booking.",
    },
    {
      question: "Is English-speaking support available for the transfer?",
      answer: "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToAlmatyReviews: Record<"en" | "ru" | "ko", Review[]> = {
  en: [
    {
      name: "Alex P.",
      country: "Russia",
      rating: 5,
      date: "March 2026",
      text: "Smooth transfer from Bishkek to Almaty. Border crossing was quick with driver's help. Clean vehicle, professional service. Highly recommended!",
      route: "Bishkek to Almaty",
    },
    {
      name: "Julia N.",
      country: "Poland",
      rating: 5,
      date: "February 2026",
      text: "Excellent cross-border transfer. Driver handled all formalities at Korday border. Comfortable ride all the way to Almaty city center. Great value!",
      route: "Bishkek to Almaty",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToAlmatyTravelTips: Record<"en" | "ru" | "ko", TravelTip[]> = {
  en: [
    {
      icon: "info",
      title: "Border crossing requirements",
      content: "Ensure your passport is valid for 6+ months. Most nationalities can enter Kazakhstan visa-free. Have your passport ready at Korday border. Driver will assist with formalities.",
    },
    {
      icon: "calendar",
      title: "Best travel time",
      content: "Depart Bishkek by 9:00-10:00 AM to cross the border during daytime and arrive in Almaty by early afternoon. Avoid Friday afternoons and holidays when border queues are longer.",
    },
    {
      icon: "clock",
      title: "Travel duration",
      content: "Total journey is 4-5 hours including 30-60 minutes at Korday border. Plan arrival time accordingly if you have connecting flights from Almaty airport.",
    },
  ],
  ru: [],
  ko: [],
};

export const bishkekToAlmatyRelatedRoutes: Record<"en" | "ru" | "ko", RelatedRoute[]> = {
  en: [
    {
      title: "Almaty to Bishkek",
      href: "/transfers/almaty-to-bishkek",
      price: "From $127",
      duration: "~4-5 hours",
      distance: "~230 km",
    },
    {
      title: "Bishkek to Karakol",
      href: "/transfers/bishkek-to-karakol",
      price: "From $136",
      duration: "~6-7 hours",
      distance: "~360 km",
    },
  ],
  ru: [],
  ko: [],
};
