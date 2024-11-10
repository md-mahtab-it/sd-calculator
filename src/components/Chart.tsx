import React from 'react';

interface ChartProps {
  data: number[];
}

export function Chart({ data }: ChartProps) {
  const maxValue = Math.max(...data);
  const chartHeight = 200;

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Column Chart of Values</h3>
      <div className="relative h-[200px] w-full bg-gray-50 rounded-lg p-4">
        <div className="absolute inset-0 flex items-end justify-around p-4">
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative">
                <div
                  className="w-8 sm:w-12 bg-blue-500 rounded-t transition-all duration-300 ease-in-out group-hover:bg-blue-600"
                  style={{
                    height: `${(value / maxValue) * (chartHeight - 40)}px`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Value: {value}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}