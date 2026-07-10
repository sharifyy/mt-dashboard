import PageHeader from "../components/PageHeader";

export default function UsersPage() {
  return (
    <div>
      <PageHeader
        title="کاربران"
        description="مدیریت کاربران و نقش‌های دسترسی"
        action={
          <button className="rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-bold text-ink-950 transition-colors hover:bg-teal-400">
            + کاربر جدید
          </button>
        }
      />

      <div className="rounded-2xl border border-mist-200 bg-white p-8 text-center text-sm text-ink-900/50">
        این صفحه فقط برای مدیر سیستم قابل مشاهده است.
      </div>
    </div>
  );
}
