"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { SalesPurchaseChart } from "@/components/ui/sales-purchase-chart";
import { OrderSummaryChart } from "@/components/ui/order-summary-chart";
import { ProductTables } from "@/components/ui/product-tables";
import {
  useSalesData,
  usePurchasesData,
  useOrderData,
  useTopSellingProducts,
  useLowQuantityStock,
} from "@/hooks/useQueries";

export default function Home() {
  const { salesData, isLoading } = useSalesData();

  const { purchasesData } = usePurchasesData();

  const { orderData } = useOrderData();

  const { topSellingProducts, isLoading: topSellingLoading } =
    useTopSellingProducts();

  const { lowQuantityStock, isLoading: lowQuantityLoading } =
    useLowQuantityStock();
  return (
    <DashboardLayout>
      {/* Dashboard Content */}
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            // Loading skeleton for cards
            Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))
          ) : (
            <>
              <DashboardCard
                title="Total Revenue"
                value={salesData?.totalRevenue}
                trend="up"
                trendValue="12.5%"
              />
              <DashboardCard
                title="Return Sales"
                value={salesData?.returnSales}
                trend="up"
                trendValue="5.2%"
              />
              <DashboardCard
                title="Gross Profit"
                value={salesData?.grossProfit}
                trend="down"
                trendValue="3.1%"
              />
              <DashboardCard
                title="NET Profit"
                value={salesData?.netProfit}
                trend="up"
                trendValue="1.2%"
              />
            </>
          )}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesPurchaseChart data={purchasesData} />
          <OrderSummaryChart data={orderData} />
        </div>

        {/* Product Tables */}
        <ProductTables
          tsp={topSellingProducts}
          lowQuantityStock={lowQuantityStock}
          isLoading={topSellingLoading || lowQuantityLoading}
        />
      </div>
    </DashboardLayout>
  );
}
