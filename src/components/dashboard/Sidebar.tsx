"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { donorSidebar } from "@/data/sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-3xl font-bold">
          FoodBridge
        </h1>

        <p className="text-sm text-gray-500">
          Save Food. Save Lives.
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {donorSidebar.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl p-3 transition-all
                ${
                  pathname === item.href
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}