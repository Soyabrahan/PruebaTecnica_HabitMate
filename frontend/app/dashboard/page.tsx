"use client";

import { HabitsDashboard } from "@/components/HabitsDashboard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden py-16 md:py-24">
      <HabitsDashboard />
    </div>
  );
}
