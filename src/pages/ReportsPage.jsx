import PageHeader from "../components/PageHeader";

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="گزارش ها"
        description="گزارش‌های تحلیلی و آماری سامانه"
      />

      <div className="rounded-2xl border border-mist-200 bg-white p-8 text-center text-sm text-ink-900/50">
        نمودارها و گزارش‌ها پس از مشخص‌شدن داده‌های موردنیاز اضافه می‌شوند.
      </div>
    </div>
  );
}
