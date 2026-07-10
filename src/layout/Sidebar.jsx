import { NavLink } from "react-router-dom";
import { navItems } from "./navConfig";
import { iconMap, LogoutIcon } from "../components/Icons";
import { useAuth } from "../context/AuthContext";

const roleLabels = {
  admin: "مدیر سیستم",
};

export default function Sidebar({ onNavigate }) {
  const { user, logout } = useAuth();

  const visibleItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role)
  );

  const initials = (user?.name || user?.username || "?").trim().charAt(0);

  return (
    <aside className="flex h-full w-64 flex-col bg-ink-900 text-mist-100">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-base font-bold text-ink-950 shadow-[0_0_20px_-4px_rgba(45,212,191,0.6)]">
          MT
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold">سامانه مدیریت MT</div>
          <div className="text-xs text-mist-100/50">پنل کنترل</div>
        </div>
      </div>

      <div className="mx-5 h-px bg-white/10" />

      {/* Nav */}
      <nav className="scroll-thin flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {visibleItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <NavLink
              key={item.key}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  "group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-teal-500/15 text-teal-300"
                    : "text-mist-100/70 hover:bg-white/5 hover:text-mist-100",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      "absolute right-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full transition-opacity",
                      isActive ? "bg-teal-400 opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                  {Icon && <Icon className="shrink-0" />}
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="mx-5 h-px bg-white/10" />

      {/* User card + logout */}
      <div className="px-3 py-4">
        <div className="mb-2 flex items-center gap-3 rounded-2xl px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-700 text-sm font-bold text-teal-300">
            {initials}
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold">
              {user?.name || user?.username}
            </div>
            <div className="truncate text-xs text-mist-100/50">
              {roleLabels[user?.role] || user?.role}
            </div>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-mist-100/70 transition-colors hover:bg-red-500/10 hover:text-red-300"
        >
          <LogoutIcon className="shrink-0" />
          <span>خروج</span>
        </button>
      </div>
    </aside>
  );
}
