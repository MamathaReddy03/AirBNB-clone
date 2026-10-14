import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'coral' | 'teal' | 'ghost';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors';

  const variants: Record<string, string> = {
    default: 'bg-[#222222] text-white',
    secondary: 'bg-neutral-100 text-neutral-700',
    outline: 'border border-neutral-300 text-neutral-700 bg-transparent',
    coral: 'bg-[#FF385C]/10 text-[#E61E4D] border border-[#FF385C]/20',
    teal: 'bg-[#0D5C63]/10 text-[#0D5C63] border border-[#0D5C63]/20',
    ghost: 'bg-transparent text-neutral-600',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
