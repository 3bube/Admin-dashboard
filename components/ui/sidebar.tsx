"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  FileText,
  Users,
  ShoppingBag,
  Store,
  Settings,
  LogOut,
  X,
} from "lucide-react";

// Import logo
import LogoImage from "@/assets/images/logo.png";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState(0);

  // Use Lucide icons instead of PNG files
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Package, label: "Inventory", href: "/inventory" },
    { icon: FileText, label: "Reports", href: "/reports" },
    { icon: Users, label: "Suppliers", href: "/suppliers" },
    { icon: ShoppingBag, label: "Orders", href: "/orders" },
    { icon: Store, label: "Manage Store", href: "/store" },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white text-[#062D81] transition-transform duration-300 ease-in-out lg:relative lg:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 ">
          <div className="mx-auto">
            <Image src={LogoImage} width={100} height={100} alt="Logo" />
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-800 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 flex flex-col h-full">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      activeMenu === index
                        ? "text-[#5D6679]"
                        : "text-gray-500 hover:bg-gray-100"
                    )}
                    onClick={() => setActiveMenu(index)}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        activeMenu === index
                          ? "text-blue-600"
                          : "text-gray-500"
                      )}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="space-y-2 my-auto">
            <li>
              <Link
                href="/settings"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-500 hover:bg-gray-100"
                )}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-gray-500 hover:bg-gray-100"
                )}
              >
                <LogOut className="w-5 h-5" />
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
