import PageHeader from "../components/PageHeader";

export default function RequestsPage() {
  return (
    <div>
      <PageHeader
        title="درخواست کالا"
        description="فهرست درخواست‌های ثبت‌شده و وضعیت هرکدام"
        action={
          <button className="rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-bold text-ink-950 transition-colors hover:bg-teal-400">
            + درخواست جدید
          </button>
        }
      />

      <div className="rounded-2xl border border-mist-200 bg-white p-8 text-center text-sm text-ink-900/50">
        این بخش آماده اتصال به داده‌های واقعی است — منتظر توضیحات شما درباره
        ساختار «MT» و فیلدهای درخواست هستم.
      </div>
    </div>
  );
}
