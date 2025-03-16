"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calendar } from "lucide-react";
import { IPurchases } from "@/interfaces";

export function SalesPurchaseChart({ data }: { data: IPurchases[] }) {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Sales & Purchase
        </h3>
        <div className="border border-gray-100 rounded-md px-3 py-1 text-sm flex items-center gap-1">
          <Calendar width={20} height={20} color="#5D6679" />
          <span className="text-[#5D6679]">Weekly</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <defs>
            <linearGradient id="purchaseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#79D0F1" />
              <stop offset="50%" stopColor="#74B0FA" />
              <stop offset="100%" stopColor="#817AF3" />
            </linearGradient>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#888", fontSize: 12 }}
            tickFormatter={(value) => `${value.toLocaleString()}`}
          />
          <Bar
            dataKey="purchase"
            fill="url(#purchaseGradient)"
            radius={[10, 10, 0, 0]}
            name="Purchase"
          />
          <Bar
            dataKey="sales"
            fill="url(#salesGradient)"
            radius={[10, 10, 0, 0]}
            name="Sales"
          />
          <Legend
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 12,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
