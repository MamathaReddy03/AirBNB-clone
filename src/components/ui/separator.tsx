import React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className = '',
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`w-px bg-[#ebebeb] self-stretch ${className}`}
        {...props}
      />
    );
  }
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`h-px w-full bg-[#ebebeb] ${className}`}
      {...props}
    />
  );
};
