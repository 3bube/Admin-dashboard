"use client";

import React from "react";
import { IOrder } from "@/interfaces";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export function OrderSummaryChart({ data }: { data: IOrder[] }) {
  return (
    <div className="bg-white p-6 rounded-lg ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="orderedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E5A043" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E5A043" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="deliveredGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.1} />
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
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ordered"
            stroke="#E5A043"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#orderedGradient)"
            name="Ordered"
          />
          <Area
            type="monotone"
            dataKey="delivered"
            stroke="#60A5FA"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#deliveredGradient)"
            name="Delivered"
          />
          <Legend
            iconType="circle"
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 12,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
