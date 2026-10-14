import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Avatar: React.FC<AvatarProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes: Record<string, string> = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };
  return (
    <div
      className={`relative flex items-center justify-center rounded-full overflow-hidden shrink-0 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<AvatarImageProps> = ({
  className = '',
  alt = '',
  ...props
}) => {
  return (
    <img
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
};

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-neutral-200 text-neutral-600 text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
