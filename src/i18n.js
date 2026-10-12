export const translations = {
  en: {
    brand: "GHAITH",
    brandSubtitle: "TV",
    nav: {
      features: "Features",
      player: "Player",
      download: "Download",
      faq: "FAQ",
      downloadBtn: "Download",
      langToggle: "العربية",
    },
    hero: {
      eyebrow: "GhaithTV",
      headline: "Everything you subscribe to. One beautiful app.",
      subhead: "Live channels, movies, and series ready to watch with instant search and responsive touch controls.",
      ctaAndroid: "Download for Android",
      ctaWindows: "Windows ›",
      screens: {
        home: "GhaithTV home catalog screen",
        detail: "GhaithTV series detail and episode resume screen",
      },
    },
    sticky: {
      eyebrow: "Interface",
      heading: "Built for watching, not waiting.",
      statements: [
        {
          id: "home",
          title: "Browse like a streaming app.",
          desc: "Live TV, films, and series all organized in one view without playlist reloads.",
          shot: "/shots/home.webp",
          alt: "GhaithTV home catalog screen",
        },
        {
          id: "detail",
          title: "Pick up where you left off.",
          desc: "Return to any show with one tap. Your exact episode and position stay ready.",
          shot: "/shots/detail.webp",
          alt: "GhaithTV title page with episodes",
        },
        {
          id: "search",
          title: "Find anything instantly.",
          desc: "Type a couple of letters to search channels, movies, and series simultaneously.",
          shot: "/shots/search.webp",
          alt: "GhaithTV instant search results grid",
        },
        {
          id: "live",
          title: "Live TV, organised.",
          desc: "Channel guides sorted by country and category with fast broadcast startup.",
          shot: "/shots/live.webp",
          alt: "GhaithTV live TV channel list",
        },
      ],
    },
    player: {
      eyebrow: "The Player",
      headline: "A player that keeps up with your thumbs.",
      subhead: "Skip scenes, speed up dialogue, and adjust lighting without leaving the screen.",
      gestures: [
        {
          id: "seek",
          title: "Double-tap to skip, keep tapping to stack",
          desc: "Skip 10 seconds with a double-tap. Keep tapping to stack 20, 30, and 40 seconds instantly.",
        },
        {
          id: "speed",
          title: "Hold for 2x",
          desc: "Press and hold anywhere on the video for double speed. Release to return to normal.",
        },
        {
          id: "swipe",
          title: "Swipe for brightness and volume",
          desc: "Slide up or down on the left edge for screen brightness, or on the right edge for volume.",
        },
        {
          id: "pinch",
          title: "Pinch to fill",
          desc: "Pinch outward to fill wide displays, and lock controls with one tap against accidental touches.",
        },
      ],
    },
    bento: {
      eyebrow: "Details",
      headline: "The details, handled.",
      tiles: [
        {
          id: "security",
          title: "Your password stays on your device.",
          desc: "Credentials are saved in hardware-backed storage: Android Keystore and Windows Credential Manager. Never written to plain text files.",
          caption: "Private by default",
        },
        {
          id: "performance",
          title: "4 MB on Windows.",
          desc: "A lean desktop client that launches in a fraction of a second and leaves memory free for your computer.",
          caption: "Light on your PC",
        },
        {
          id: "resume",
          title: "Resume on any episode.",
          desc: "Switch between series without losing your place. GhaithTV preserves playback position across every season.",
          caption: "Never lose your place",
        },
        {
          id: "bilingual",
          title: "Arabic and English.",
          desc: "Authentic right-to-left layout and carefully tuned Cairo typography alongside native English.",
          caption: "Made for both languages",
        },
      ],
    },
    downloads: {
      eyebrow: "Get Started",
      heading: "Download GhaithTV.",
      subhead: "Direct downloads for Android and Windows. Set up in seconds.",
      android: {
        title: "Android",
        desc: "Smooth streaming player built for Android phones and tablets.",
        cta: "Download APK (30 MB)",
        url: "/downloads/GhaithTV-Android-arm64.apk",
        secondary: "Older phone? Get the 32-bit version ›",
        secondaryUrl: "/downloads/GhaithTV-Android-armv7.apk",
        requirements: "Android 7.0 or newer",
        installTip: "Open the downloaded APK and approve installations from your browser if prompted.",
      },
      windows: {
        title: "Windows",
        desc: "Instant startup and featherweight memory footprint for your PC.",
        cta: "Download Setup (4 MB)",
        url: "/downloads/GhaithTV-Windows-Setup.exe",
        secondary: "64-bit installer (.exe) ›",
        secondaryUrl: "/downloads/GhaithTV-Windows-Setup.exe",
        requirements: "Windows 10 or Windows 11 64-bit",
        installTip: "Run the setup file and log in with your subscription details to start watching.",
      },
    },
    faq: {
      eyebrow: "Support",
      heading: "Frequently Asked Questions",
      items: [
        {
          q: "Do I need a GhaithTV subscription to use the app?",
          a: "Yes. GhaithTV is the player client for your subscription. Log in with your username and password to access your channels, movies, and series.",
        },
        {
          q: "How is my password stored?",
          a: "Your password is encrypted inside your operating system's secure vault: Android Keystore on mobile and Windows Credential Manager on PC. It is never stored in readable text files.",
        },
        {
          q: "Which Android file should I download?",
          a: "Download the ARM64 APK for almost all modern Android phones. Use the ARMv7 32-bit build only if you have an older device released before 2017.",
        },
        {
          q: "Does GhaithTV work on Android TV boxes?",
          a: "Yes. You can install the APK on Android TV devices. Broadcasts and video streams play smoothly.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 GhaithTV. All rights reserved.",
      note: "GhaithTV is a dedicated player client for subscribers on Android and Windows.",
      links: [
        { label: "Features", href: "#features" },
        { label: "Player", href: "#player" },
        { label: "Download", href: "#downloads" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  },
  ar: {
    brand: "غيث",
    brandSubtitle: "TV",
    nav: {
      features: "المميزات",
      player: "المشغل",
      download: "التحميل",
      faq: "الأسئلة الشائعة",
      downloadBtn: "تحميل",
      langToggle: "English",
    },
    hero: {
      eyebrow: "GhaithTV",
      headline: "كل اشتراكاتك. في تطبيق واحد أنيق.",
      subhead: "قنوات حية وأفلام ومسلسلات جاهزة للمشاهدة فوراً مع بحث فوري وتحكم سلس باللمس.",
      ctaAndroid: "تحميل للأندرويد",
      ctaWindows: "ويندوز ›",
      screens: {
        home: "شاشة تطبيق غيث تي في الرئيسية لتصفح المحتوى",
        detail: "شاشة تفاصيل العمل واستئناف الحلقات في تطبيق غيث تي في",
      },
    },
    sticky: {
      eyebrow: "الواجهة",
      heading: "مصمم لتشاهد، لا لتنتظر.",
      statements: [
        {
          id: "home",
          title: "تصفح بانسيابية منصات البث العالمية.",
          desc: "قنوات وأفلام ومسلسلات منظمة في عرض واحد سريع دون انتظار إعادة تحميل القوائم.",
          shot: "/shots/home.webp",
          alt: "واجهة تصفح الأقسام",
        },
        {
          id: "detail",
          title: "تابع من حيث توقفت.",
          desc: "عد إلى أي مسلسل بنقرة واحدة مع حفظ دقيق لموضع المشاهدة وآخر حلقة تابعتها.",
          shot: "/shots/detail.webp",
          alt: "واجهة تفاصيل المسلسل",
        },
        {
          id: "search",
          title: "اعثر على أي عمل في ثوانٍ.",
          desc: "اكتب أول حرفين من الاسم لتظهر النتائج فوراً مصنفة بين القنوات والأفلام والمسلسلات.",
          shot: "/shots/search.webp",
          alt: "واجهة البحث الفوري",
        },
        {
          id: "live",
          title: "بث تلفزيوني مباشر ومنظم.",
          desc: "دليل قنوات مرتب حسب الدول والفئات مع تشغيل فوري وشعارات واضحة.",
          shot: "/shots/live.webp",
          alt: "واجهة البث التلفزيوني المباشر",
        },
      ],
    },
    player: {
      eyebrow: "مشغل الفيديو",
      headline: "مشغل يسبق حركة أصابعك.",
      subhead: "تخطَّ المشاهد وسرّع الحوار واضبط الإضاءة والصوت دون مغادرة الصورة.",
      gestures: [
        {
          id: "seek",
          title: "نقر مزدوج للتخطي مع تتابع الثواني",
          desc: "انقر مرتين للتخطي 10 ثوانٍ، واستمر بالنقر للقفز 20 و 30 و 40 ثانية دفعة واحدة.",
        },
        {
          id: "speed",
          title: "اضغط مطولاً لتسريع 2x",
          desc: "اضغط مع الاستمرار في أي مكان لتسريع العرض لضعف السرعة، وارفع إصبعك للعودة فوراً.",
        },
        {
          id: "swipe",
          title: "سحب رأسي للإضاءة ومستوى الصوت",
          desc: "اسحب إصبعك عمودياً على الطرف الأيسر لضبط السطوع، وعلى الطرف الأيمن لضبط الصوت.",
        },
        {
          id: "pinch",
          title: "باعد أصابعك لملء الشاشة",
          desc: "باعد بإصبعيك لملء الشاشة بدون حواف سوداء، مع إمكانية قفل الشاشة لتفادي اللمسات العرضية.",
        },
      ],
    },
    bento: {
      eyebrow: "دقة التفاصيل",
      headline: "كل التفاصيل محسوبة.",
      tiles: [
        {
          id: "security",
          title: "كلمة مرورك تبقى على جهازك.",
          desc: "تُحفظ بيانات الدخول مشفرة داخل Android Keystore و Windows Credential Manager، ولا تُسجل في ملفات مكشوفة إطلاقاً.",
          caption: "خصوصيتك أولاً",
        },
        {
          id: "performance",
          title: "4 ميجابايت فقط على ويندوز.",
          desc: "برنامج كمبيوتر فائق الخفة يفتح في لحظة ويستهلك حداً أدنى من ذاكرة جهازك.",
          caption: "خفيف على جهازك",
        },
        {
          id: "resume",
          title: "استئناف فوري لأي حلقة.",
          desc: "تنقل بين مسلسلاتك دون أن تفقد نقطة التوقف، حيث يتذكر التطبيق موضعك عبر كل المواسم.",
          caption: "مكانك محفوظ دائماً",
        },
        {
          id: "bilingual",
          title: "عربي وإنجليزي بدقة كاملة.",
          desc: "تصميم أصيل ومحكم يدعم الاتجاه من اليمين إلى اليسار مع خط Cairo المريح للقراءة.",
          caption: "مصمم للغتين",
        },
      ],
    },
    downloads: {
      eyebrow: "البدء",
      heading: "حمّل غيث تي في.",
      subhead: "روابط تحميل مباشرة لأندرويد وويندوز. التثبيت في ثوانٍ معدودة.",
      android: {
        title: "أندرويد",
        desc: "مشاهدة سريعة وسلسة مصممة لهواتف وأجهزة أندرويد اللوحية.",
        cta: "تحميل APK (30 ميجابايت)",
        url: "/downloads/GhaithTV-Android-arm64.apk",
        secondary: "هاتف أقدم؟ احصل على نسخة 32-بت ›",
        secondaryUrl: "/downloads/GhaithTV-Android-armv7.apk",
        requirements: "أندرويد 7.0 أو أحدث",
        installTip: "افتح ملف APK بعد التنزيل ووافق على التثبيت من المتصفح إذا طُلب منك ذلك.",
      },
      windows: {
        title: "ويندوز",
        desc: "تشغيل فوري واستهلاك خفيف لموارد أجهزة الكمبيوتر.",
        cta: "تحميل المثبت (4 ميجابايت)",
        url: "/downloads/GhaithTV-Windows-Setup.exe",
        secondary: "مثبت مباشر 64-بت (.exe) ›",
        secondaryUrl: "/downloads/GhaithTV-Windows-Setup.exe",
        requirements: "ويندوز 10 أو ويندوز 11 (64-بت)",
        installTip: "شغّل ملف التثبيت وسجّل الدخول ببيانات اشتراكك لتبدأ المشاهدة فوراً.",
      },
    },
    faq: {
      eyebrow: "المساعدة",
      heading: "الأسئلة الشائعة",
      items: [
        {
          q: "هل أحتاج إلى اشتراك في غيث تي في لاستخدام التطبيق؟",
          a: "نعم. التطبيق مخصص لتشغيل اشتراكك. سجّل الدخول باسم المستخدم وكلمة السر لتصل إلى قنواتك وأفلامك ومسلسلاتك.",
        },
        {
          q: "كيف يتم تخزين وتأمين كلمة المرور؟",
          a: "بياناتك لا تغادر جهازك أبداً؛ حيث تُحفظ مشفرة في Android Keystore على أندرويد و Windows Credential Manager على ويندوز.",
        },
        {
          q: "أي ملف أندرويد ينبغي أن أقوم بتحميله؟",
          a: "حمّل نسخة ARM64 لمعظم الهواتف الحديثة. نسخة ARMv7 مخصصة فقط للأجهزة القديمة المصنعة قبل 2017.",
        },
        {
          q: "هل يعمل التطبيق على أجهزة Android TV Box؟",
          a: "نعم. يمكنك تثبيت ملف APK على أجهزة TV Box وستعمل القنوات والبث المباشر بسلاسة تامة.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 غيث تي في. جميع الحقوق محفوظة.",
      note: "غيث تي في هو مشغل وسائط مخصص لمشتركي الخدمة على أندرويد وويندوز.",
      links: [
        { label: "المميزات", href: "#features" },
        { label: "المشغل", href: "#player" },
        { label: "التحميل", href: "#downloads" },
        { label: "الأسئلة الشائعة", href: "#faq" },
      ],
    },
  },
};
