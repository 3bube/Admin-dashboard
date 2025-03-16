import React from 'react';

interface ChartPlaceholderProps {
  title: string;
  height?: number;
  className?: string;
}

export function ChartPlaceholder({ 
  title, 
  height = 300, 
  className 
}: ChartPlaceholderProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ${className}`}>
      <h3 className="text-base font-medium text-gray-700 mb-4">{title}</h3>
      <div 
        className="bg-gray-100 rounded-md w-full flex items-center justify-center"
        style={{ height: `${height}px` }}
      >
        <div className="text-center p-6">
          <p className="text-gray-500 mb-2">Chart Visualization</p>
          <p className="text-sm text-gray-400">
            (This is a placeholder for a real chart component)
          </p>
        </div>
      </div>
    </div>
  );
}
