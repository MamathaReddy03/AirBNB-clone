import React from 'react';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0–100
  indicatorClassName?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  className = '',
  indicatorClassName = '',
  ...props
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 ${className}`}
      {...props}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${indicatorClassName || 'bg-[#222222]'}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
};
