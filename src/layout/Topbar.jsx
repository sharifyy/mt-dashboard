export default function Topbar({ onMenuClick }) {
  return (
    <header className="flex h-14 items-center gap-3 border-b border-mist-200 bg-white px-4 lg:hidden">
      <button
        onClick={onMenuClick}
        aria-label="باز کردن منو"
        className="flex h-9 w-9 items-center justify-center rounded-xl text-ink-700 hover:bg-mist-100"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-xs font-bold text-ink-950">
          MT
        </div>
        <span className="text-sm font-bold text-ink-900">سامانه مدیریت MT</span>
      </div>
    </header>
  );
}
