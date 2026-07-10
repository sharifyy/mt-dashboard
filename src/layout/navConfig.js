// Single source of truth for the sidebar. Add a `roles` array to restrict
// an item to specific roles; omit it to show the item to everyone.
export const navItems = [
  {
    key: "requests",
    label: "درخواست کالا",
    to: "/requests",
    icon: "box",
  },
  {
    key: "users",
    label: "کاربران",
    to: "/users",
    icon: "users",
    roles: ["admin"],
  },
  {
    key: "reports",
    label: "گزارش ها",
    to: "/reports",
    icon: "chart",
    roles: ["admin"],
  },
];
