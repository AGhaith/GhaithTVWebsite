import React from 'react';
import {
  Search,
  Play,
  Plus,
  Home,
  Bookmark,
  User,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Tv,
  Film,
  Wifi,
  Battery,
  Radio,
  Check,
  X,
} from 'lucide-react';

// Fictional catalog items with original deterministic gradients
const CATALOG_ITEMS = [
  {
    id: 'night-shift',
    title: 'Night Shift',
    titleAr: 'نوبة ليلية',
    meta: 'SERIES · DRAMA',
    metaAr: 'مسلسل · دراما',
    year: '2024',
    bg: 'linear-gradient(150deg, #3d0c11 0%, #170507 55%, #080203 100%)',
    accentColor: '#e50914',
    symbol: 'NS',
  },
  {
    id: 'desert-kings',
    title: 'Desert Kings',
    titleAr: 'ملوك الصحراء',
    meta: 'SERIES · ACTION',
    metaAr: 'مسلسل · أكشن',
    year: '2024',
    bg: 'linear-gradient(150deg, #381e05 0%, #1f1003 55%, #0a0501 100%)',
    accentColor: '#f59e0b',
    symbol: 'DK',
  },
  {
    id: 'signal-lost',
    title: 'Signal Lost',
    titleAr: 'انقطاع البث',
    meta: 'MOVIES · SCI-FI',
    metaAr: 'فيلم · خيال علمي',
    year: '2023',
    bg: 'linear-gradient(150deg, #09332c 0%, #051a17 55%, #020b0a 100%)',
    accentColor: '#10b981',
    symbol: 'SL',
  },
  {
    id: 'blue-hour',
    title: 'Blue Hour',
    titleAr: 'الساعة الزرقاء',
    meta: 'SERIES · MYSTERY',
    metaAr: 'مسلسل · غموض',
    year: '2024',
    bg: 'linear-gradient(150deg, #1d1038 0%, #0e071c 55%, #05020a 100%)',
    accentColor: '#8b5cf6',
    symbol: 'BH',
  },
  {
    id: 'the-long-road',
    title: 'The Long Road',
    titleAr: 'طريق طويل',
    meta: 'MOVIES · DRAMA',
    metaAr: 'فيلم · دراما',
    year: '2023',
    bg: 'linear-gradient(150deg, #2b1308 0%, #170904 55%, #070301 100%)',
    accentColor: '#f97316',
    symbol: 'LR',
  },
  {
    id: 'northbound',
    title: 'Northbound',
    titleAr: 'اتجاه الشمال',
    meta: 'SERIES · THRILLER',
    metaAr: 'مسلسل · تشويق',
    year: '2024',
    bg: 'linear-gradient(150deg, #0c233c 0%, #061321 55%, #02070d 100%)',
    accentColor: '#38bdf8',
    symbol: 'NB',
  },
];

const LIVE_CHANNELS = [
  { id: 's1', name: 'Sports 1 HD', nameAr: 'الرياضية 1 HD', monogram: 'S1', bg: 'linear-gradient(135deg, #1e3a8a, #0f172a)' },
  { id: 's2', name: 'Sports 2 HD', nameAr: 'الرياضية 2 HD', monogram: 'S2', bg: 'linear-gradient(135deg, #581c87, #0f172a)' },
  { id: 'pa', name: 'Premier Arena', nameAr: 'بريمير أرينا', monogram: 'PA', bg: 'linear-gradient(135deg, #065f46, #022c22)' },
  { id: 'n24', name: 'News 24 HD', nameAr: 'الأخبار 24', monogram: 'N24', bg: 'linear-gradient(135deg, #991b1b, #450a0a)' },
  { id: 'c1', name: 'Cinema Plus', nameAr: 'سينما بلس', monogram: 'C+', bg: 'linear-gradient(135deg, #854d0e, #422006)' },
];

export default function AppScreen({ variant = 'home', lang = 'en' }) {
  const isAr = lang === 'ar';

  return (
    <div
      className="app-screen-root"
      aria-hidden="true"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* 1. Phone Status Bar */}
      <div className="as-status-bar">
        <span className="as-time">12:43</span>
        <div className="as-status-icons">
          <Radio size={10} className="as-status-icon" />
          <Wifi size={10} className="as-status-icon" />
          <Battery size={10} className="as-status-icon" />
        </div>
      </div>

      {/* 2. Variant Body */}
      {variant === 'home' && <HomeScreen isAr={isAr} />}
      {variant === 'detail' && <DetailScreen isAr={isAr} />}
      {variant === 'search' && <SearchScreen isAr={isAr} />}
      {variant === 'live' && <LiveScreen isAr={isAr} />}

      {/* 3. Bottom Navigation Bar (Home, Search, Live variants) */}
      {variant !== 'detail' && (
        <div className="as-bottom-nav">
          <div className={`as-nav-item ${variant === 'home' || variant === 'live' ? 'active' : ''}`}>
            <Home size={15} />
            <span>{isAr ? 'الرئيسية' : 'Home'}</span>
          </div>
          <div className={`as-nav-item ${variant === 'search' ? 'active' : ''}`}>
            <Search size={15} />
            <span>{isAr ? 'البحث' : 'Search'}</span>
          </div>
          <div className="as-nav-item">
            <Bookmark size={15} />
            <span>{isAr ? 'قائمتي' : 'My List'}</span>
          </div>
          <div className="as-nav-item">
            <User size={15} />
            <span>{isAr ? 'حسابي' : 'Profile'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   Variant: Home (Series & Movies browsing)
   -------------------------------------------------------------------------- */
function HomeScreen({ isAr }) {
  const heroItem = CATALOG_ITEMS[0];
  const rowItems = CATALOG_ITEMS.slice(1, 4);

  return (
    <div className="as-screen-scrollable">
      {/* Top Header */}
      <div className="as-top-header">
        <span className="as-brand-wordmark">GHAITH</span>
        <button type="button" className="as-icon-btn" tabIndex={-1}>
          <Search size={15} />
        </button>
      </div>

      {/* Category Pills */}
      <div className="as-pills-row">
        <span className="as-pill">{isAr ? 'بث مباشر' : 'Live TV'}</span>
        <span className="as-pill">{isAr ? 'أفلام' : 'Movies'}</span>
        <span className="as-pill active">{isAr ? 'مسلسلات' : 'Series'}</span>
      </div>

      {/* Hero Featured Card */}
      <div className="as-hero-card" style={{ background: heroItem.bg }}>
        <div className="as-card-art-symbol">{heroItem.symbol}</div>
        <div className="as-hero-card-content">
          <span className="as-quality-badge">4K HDR</span>
          <h4 className="as-hero-title">{isAr ? heroItem.titleAr : heroItem.title}</h4>
        </div>
      </div>

      {/* Meta text & Action Buttons */}
      <div className="as-hero-actions-block">
        <span className="as-hero-meta">{isAr ? heroItem.metaAr : heroItem.meta} · 2024</span>
        <div className="as-hero-buttons-row">
          <div className="as-btn-play">
            <Play size={12} fill="#000000" />
            <span>{isAr ? 'تشغيل' : 'Play'}</span>
          </div>
          <div className="as-btn-mylist">
            <Plus size={12} />
            <span>{isAr ? 'قائمتي' : 'My List'}</span>
          </div>
        </div>
      </div>

      {/* Continue Watching Row */}
      <div className="as-content-row-section">
        <div className="as-row-header">
          <span className="as-row-title">{isAr ? 'متابعة المشاهدة' : 'Continue Watching'}</span>
        </div>
        <div className="as-horizontal-posters-row">
          {rowItems.map((item) => (
            <div key={item.id} className="as-poster-card" style={{ background: item.bg }}>
              <div className="as-poster-symbol">{item.symbol}</div>
              <div className="as-poster-footer">
                <span className="as-poster-title">{isAr ? item.titleAr : item.title}</span>
                <div className="as-poster-progress">
                  <div className="as-poster-progress-bar" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Variant: Detail (Title page with season picker & episode resume)
   -------------------------------------------------------------------------- */
function DetailScreen({ isAr }) {
  const item = CATALOG_ITEMS[0];

  return (
    <div className="as-screen-scrollable as-detail-mode">
      {/* 16:9 Backdrop with Overlay */}
      <div className="as-detail-backdrop" style={{ background: item.bg }}>
        <button type="button" className="as-detail-back-btn" tabIndex={-1}>
          {isAr ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
        <div className="as-detail-backdrop-symbol">{item.symbol}</div>
        <div className="as-detail-center-play">
          <div className="as-play-circle">
            <Play size={18} fill="#ffffff" />
          </div>
        </div>
        <div className="as-detail-backdrop-fade" />
      </div>

      {/* Title & Metadata */}
      <div className="as-detail-body">
        <h3 className="as-detail-title">{isAr ? item.titleAr : item.title}</h3>
        <div className="as-detail-meta-line">
          <span>2024</span>
          <span className="as-meta-dot">•</span>
          <span>{isAr ? 'دراما' : 'Drama'}</span>
          <span className="as-meta-dot">•</span>
          <span>{isAr ? 'الموسم 1' : '1 Season'}</span>
          <span className="as-badge-hd">HD</span>
        </div>

        {/* Primary Action Button */}
        <div className="as-detail-resume-btn">
          <Play size={14} fill="#000000" />
          <span>{isAr ? 'استئناف م1:ح3' : 'Resume S1:E3'}</span>
        </div>

        {/* Action icons row */}
        <div className="as-detail-actions-row">
          <div className="as-detail-action-item">
            <Check size={16} />
            <span>{isAr ? 'في قائمتي' : 'In List'}</span>
          </div>
          <div className="as-detail-action-item">
            <Film size={16} />
            <span>{isAr ? 'الحلقات' : 'Episodes'}</span>
          </div>
        </div>

        {/* Synopsis */}
        <p className="as-detail-synopsis">
          {isAr
            ? 'عندما تنقطع إشارات البث في نوبة حراسة ليلية معزولة، يجد الطاقم نفسه أمام مهام غير متوقعة قبل بزوغ الفجر.'
            : 'When an unexplained transmission disrupts the midnight patrol, an isolated desert crew must follow conflicting orders before dawn.'}
        </p>

        {/* Season Selector Pill */}
        <div className="as-season-pill">
          <span>{isAr ? 'الموسم 1' : 'Season 1'}</span>
          <ChevronDown size={13} className="as-season-chevron" />
        </div>

        {/* Episode Rows */}
        <div className="as-episodes-list">
          <div className="as-episode-row">
            <div className="as-ep-thumb" style={{ background: CATALOG_ITEMS[1].bg }}>
              <Play size={10} fill="#ffffff" />
            </div>
            <div className="as-ep-info">
              <span className="as-ep-title">{isAr ? '1. نداء منتصف الليل' : '1. Midnight Call'}</span>
              <span className="as-ep-duration">42m</span>
            </div>
          </div>

          <div className="as-episode-row">
            <div className="as-ep-thumb" style={{ background: CATALOG_ITEMS[2].bg }}>
              <Play size={10} fill="#ffffff" />
            </div>
            <div className="as-ep-info">
              <span className="as-ep-title">{isAr ? '2. إشارة مشوشة' : '2. Blind Signal'}</span>
              <span className="as-ep-duration">38m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Variant: Search (Real-time typed query & 3-column results)
   -------------------------------------------------------------------------- */
function SearchScreen({ isAr }) {
  return (
    <div className="as-screen-scrollable">
      {/* Search Input Bar */}
      <div className="as-search-input-wrap">
        <div className="as-search-box">
          <Search size={14} className="as-search-icon" />
          <span className="as-search-typed">
            {isAr ? 'ليل' : 'night'}
            <span className="as-search-cursor" />
          </span>
          <X size={13} className="as-search-clear" />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="as-pills-row as-search-pills">
        <span className="as-pill">{isAr ? 'قنوات' : 'Live TV'}</span>
        <span className="as-pill active">{isAr ? 'أفلام ومسلسلات' : 'Movies'}</span>
        <span className="as-pill">{isAr ? 'سلسلة كاملة' : 'Series'}</span>
      </div>

      {/* 3-Column Poster Grid */}
      <div className="as-search-grid">
        {CATALOG_ITEMS.map((item) => (
          <div key={item.id} className="as-grid-tile" style={{ background: item.bg }}>
            <span className="as-grid-symbol">{item.symbol}</span>
            <div className="as-grid-footer">
              <span className="as-grid-title">{isAr ? item.titleAr : item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Variant: Live (Live channel lineup & 16:9 stream cards)
   -------------------------------------------------------------------------- */
function LiveScreen({ isAr }) {
  return (
    <div className="as-screen-scrollable">
      {/* Top Header */}
      <div className="as-top-header">
        <span className="as-brand-wordmark">GHAITH</span>
        <button type="button" className="as-icon-btn" tabIndex={-1}>
          <Search size={15} />
        </button>
      </div>

      {/* Category Pills */}
      <div className="as-pills-row">
        <span className="as-pill active">{isAr ? 'بث مباشر' : 'Live TV'}</span>
        <span className="as-pill">{isAr ? 'أفلام' : 'Movies'}</span>
        <span className="as-pill">{isAr ? 'مسلسلات' : 'Series'}</span>
      </div>

      {/* Featured Live Channel Card */}
      <div className="as-live-featured-card" style={{ background: LIVE_CHANNELS[0].bg }}>
        <div className="as-live-badge-top">
          <span className="as-live-dot" />
          <span>LIVE</span>
        </div>
        <div className="as-live-monogram">{LIVE_CHANNELS[0].monogram}</div>
        <div className="as-live-featured-footer">
          <span className="as-live-name">{isAr ? LIVE_CHANNELS[0].nameAr : LIVE_CHANNELS[0].name}</span>
        </div>
      </div>

      {/* Channel Rows */}
      <div className="as-content-row-section">
        <div className="as-row-header">
          <span className="as-row-title">{isAr ? 'قنوات رياضية مباشرة' : 'Sports Channels'}</span>
        </div>
        <div className="as-live-channel-cards-row">
          {LIVE_CHANNELS.slice(0, 3).map((ch) => (
            <div key={ch.id} className="as-live-tile" style={{ background: ch.bg }}>
              <div className="as-live-badge-mini">LIVE</div>
              <span className="as-tile-monogram">{ch.monogram}</span>
              <span className="as-tile-name">{isAr ? ch.nameAr : ch.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="as-content-row-section">
        <div className="as-row-header">
          <span className="as-row-title">{isAr ? 'قنوات الأخبار والمنوعات' : 'News & General'}</span>
        </div>
        <div className="as-live-channel-cards-row">
          {LIVE_CHANNELS.slice(3).map((ch) => (
            <div key={ch.id} className="as-live-tile" style={{ background: ch.bg }}>
              <div className="as-live-badge-mini">LIVE</div>
              <span className="as-tile-monogram">{ch.monogram}</span>
              <span className="as-tile-name">{isAr ? ch.nameAr : ch.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
