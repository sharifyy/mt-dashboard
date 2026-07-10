import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login, loginError, loggingIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    const ok = await login(username, password);
    if (ok) {
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    }
  }

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2" dir="rtl">
      {/* Branding panel */}
      <div className="relative hidden overflow-hidden bg-ink-950 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <PatternBackdrop />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-lg font-extrabold text-ink-950 shadow-[0_0_30px_-6px_rgba(45,212,191,0.7)]">
            MT
          </div>
          <span className="text-lg font-bold text-mist-100">
            سامانه مدیریت MT
          </span>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-3xl font-extrabold leading-tight text-mist-100">
            مدیریت یکپارچه درخواست‌ها،
            <br />
            کاربران و گزارش‌ها
          </h1>
          <p className="mt-4 text-sm leading-7 text-mist-100/60">
            برای ادامه، وارد حساب کاربری خود شوید. دسترسی هر کاربر بر اساس
            نقش تعریف‌شده در سیستم تعیین می‌شود.
          </p>
        </div>

        <div className="relative z-10 text-xs text-mist-100/40">
          نسخه ۱٫۰ — محیط داخلی سازمان
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-teal-600 text-sm font-extrabold text-ink-950">
                MT
              </div>
              <span className="text-base font-bold text-ink-900">
                سامانه مدیریت MT
              </span>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-ink-900">
            ورود به سامانه
          </h2>
          <p className="mt-1.5 text-sm text-ink-900/50">
            نام کاربری و رمز عبور خود را وارد کنید
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="username"
                className="mb-1.5 block text-sm font-medium text-ink-900/80"
              >
                نام کاربری
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-xl border border-mist-200 bg-mist-50 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                placeholder="مثلاً: ali.ahmadi"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-ink-900/80"
              >
                رمز عبور
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-mist-200 bg-mist-50 px-4 py-2.5 pl-11 text-sm text-ink-900 outline-none transition-colors focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-ink-900/40 hover:text-ink-900/70"
                >
                  {showPassword ? "پنهان" : "نمایش"}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loggingIn}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingIn && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {loggingIn ? "در حال ورود..." : "ورود"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// A quiet geometric motif (rotated squares, referencing Persian girih
// tilework at a very low opacity) so the branding panel has one
// deliberate signature detail instead of a generic gradient blob.
function PatternBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id="girih"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(15)"
          >
            <rect width="72" height="72" fill="none" />
            <path
              d="M36 4 L68 36 L36 68 L4 36 Z"
              fill="none"
              stroke="#5eead4"
              strokeWidth="1"
            />
            <circle cx="36" cy="36" r="10" fill="none" stroke="#5eead4" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#girih)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
    </div>
  );
}
