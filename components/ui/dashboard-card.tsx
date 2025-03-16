import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DashboardCardProps {
  title: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  valueClassName?: string;
  titleClassName?: string;
  bgColor?: string;
  iconSrc?: string;
  iconAlt?: string;
}

export function DashboardCard({
  title,
  value,
  trend,
  trendValue,
  className,
  valueClassName,
  titleClassName,
  bgColor = "bg-[#062D81]",
  iconSrc,
  iconAlt = "icon",
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        bgColor,
        "rounded-lg p-4 md:px-6 md:py-10 text-white",
        className
      )}
    >
      <div className="flex items-start">
        <div className={cn("p-3 bg-blue-800 rounded-full mr-4 flex-shrink-0")}>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            src={require(iconSrc as string)}
            width={20}
            height={20}
            className="h-5 w-5"
            alt={iconAlt}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline">
            <p className={cn("text-2xl font-bold", valueClassName)}>
              {typeof value === "number"
                ? value.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    minimumFractionDigits: 2,
                  })
                : value}
            </p>
            {trend && trendValue && (
              <span
                className={cn(
                  "ml-2 text-sm font-medium",
                  trend === "up"
                    ? "text-green-300"
                    : trend === "down"
                    ? "text-red-300"
                    : "text-gray-300"
                )}
              >
                {trend === "up" ? "+" : trend === "down" ? "-" : ""}
                {trendValue}
              </span>
            )}
          </div>
          <p className={cn("mt-1 text-sm", titleClassName)}>{title}</p>
        </div>
      </div>
    </div>
  );
}
