import type { RouteLocationRaw } from "vue-router";

interface NavItem {
  label: string;
  icon: string;
  to: RouteLocationRaw;
}

interface PlaceholderItem {
  label: string;
  icon: string;
}

export const navItems: NavItem[] = [
  { label: "Home", icon: "pi pi-home", to: { name: "dashboardHome" } },
  { label: "Team", icon: "pi pi-users", to: { name: "users" } },
  { label: "Incidents", icon: "pi pi-exclamation-triangle", to: { name: "incidents" } },
  { label: "Design", icon: "pi pi-palette", to: { name: "designForm" } },
];

export const placeholderItems: PlaceholderItem[] = [
  { label: "Reports", icon: "pi pi-chart-line" },
  { label: "Events", icon: "pi pi-calendar" },
];
