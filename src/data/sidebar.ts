import {
  LayoutDashboard,
  Package,
  Bell,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export const donorSidebar = [
  {
    title: "Dashboard",
    href: "/dashboard/donor",
    icon: LayoutDashboard,
  },
  {
    title: "My Donations",
    href: "/dashboard/donor/donations",
    icon: Package,
  },
  {
    title: "Analytics",
    href: "/dashboard/donor/analytics",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    href: "/dashboard/donor/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/donor/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    href: "#",
    icon: LogOut,
  },
];