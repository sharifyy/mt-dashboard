import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex h-full min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="text-6xl font-extrabold text-ink-900/10">۴۰۴</div>
      <h1 className="mt-2 text-lg font-bold text-ink-900">
        صفحه مورد نظر یافت نشد
      </h1>
      <Link
        to="/"
        className="mt-4 rounded-xl bg-ink-900 px-4 py-2 text-sm font-bold text-white hover:bg-ink-800"
      >
        بازگشت به داشبورد
      </Link>
    </div>
  );
}
