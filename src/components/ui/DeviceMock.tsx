import { ReactNode } from 'react';

interface DeviceMockProps {
  children: ReactNode;
  className?: string;
}

export function DeviceMock({ children, className = '' }: DeviceMockProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="rounded-2xl border-4 border-gray-800 bg-gray-900 p-2 shadow-xl">
        <div className="rounded-xl bg-gray-100 p-6">{children}</div>
      </div>
    </div>
  );
}
