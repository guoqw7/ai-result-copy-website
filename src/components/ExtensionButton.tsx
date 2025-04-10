
import React from 'react';
import { cn } from '@/lib/utils';
import { getBrowserIcon } from './icons';

type IconType = 
  | 'edge' 
  | 'chrome' 
  | 'firefox' 
  | 'safari' 
  | 'oil' 
  | 'crx'
  | 'ios'
  | 'android'
  | 'ios-safari'
  | 'android-store'
  | 'edge-android'
  | 'wechat';

type ExtensionButtonProps = {
  // icon: string;
  iconType?: IconType;
  name: string;
  tag?: string;
  href?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

export const ExtensionButton: React.FC<ExtensionButtonProps> = ({ 
  // icon,
  iconType,
  name,
  tag,
  href,
  disabled = false,
  isLoading = false
}) => {
  return (
    <button 
      className={cn("feature-button relative", {
        "opacity-50 cursor-not-allowed": disabled || isLoading
      })} 
      disabled={disabled || isLoading}
      onClick={() => {
        if (!disabled && !isLoading && href) {
          window.open(href, '_blank');
        }
      }}
    >
      {tag && <span className={cn("feature-tag", {
        "!bg-gray-400": disabled,
        "!bg-orange-400": isLoading
      })}>{tag}</span>}
       {iconType && getBrowserIcon(iconType)}
      <span className="font-medium">{name}</span>
    </button>
  );
};