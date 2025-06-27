"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DashboardNavbar from "./dashboardNavbar";

import { useAuth } from "@/contexts/AuthContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, signout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-200 ">
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
