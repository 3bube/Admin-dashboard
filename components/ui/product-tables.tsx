"use client";

import React from "react";
import Image from "next/image";
import type {
  ProductTables as IProductTables,
  LowQuantityStock,
} from "@/interfaces";

export function ProductTables({
  tsp,
  lowQuantityStock,
  isLoading,
}: {
  tsp: IProductTables;
  lowQuantityStock: LowQuantityStock;
  isLoading?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Top Selling Products */}
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Top Selling Products
          </h3>
          <a href="#" className="text-blue-500 text-sm underline">
            See All
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-t border-gray-100 ">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Sold Quantity</th>
                <th className="pb-3 font-medium">Remaining Quantity</th>
                <th className="pb-3 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="border-t border-gray-100">
                  <td className="py-3">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-24"></div>
                  </td>
                  <td className="py-3">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
                  </td>
                  <td className="py-3">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
                  </td>
                  <td className="py-3">
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                  </td>
                </tr>
              ) : (
                <tr className="border-t border-gray-100 ">
                  <td className="py-3">{tsp?.name ?? ""}</td>
                  <td className="py-3">{tsp?.soldQuantity ?? 0}</td>
                  <td className="py-3">{tsp?.remainingQuantity ?? 0}</td>
                  <td className="py-3">{"₦" + (tsp?.price ?? "")}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Low Quantity Stock */}
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Low Quantity Stock
          </h3>
          <a href="#" className="text-blue-500 text-sm underline">
            See All
          </a>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-32 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <Image
                  src={lowQuantityStock?.thumbnail || "/assets/images/snacks.png"}
                  alt={lowQuantityStock?.name || "Product image"}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{lowQuantityStock?.name}</h4>
                <p className="text-sm text-gray-500">
                  Remaining Quantity: {lowQuantityStock?.quantity}
                </p>
              </div>
              <span className="text-xs font-medium px-2 py-1 bg-red-50 text-red-500 rounded">
                Low
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
