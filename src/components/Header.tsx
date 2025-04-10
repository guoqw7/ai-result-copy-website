
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <Button variant="ghost" size="sm">下载</Button>
          
          {/* <div className="hidden md:flex items-center">
            <Button variant="ghost" size="sm" className="opacity-50">功能一</Button>
            <Button variant="ghost" size="sm" className="opacity-50">功能二</Button>
            <Button variant="ghost" size="sm" className="opacity-50">功能三</Button>
          </div> */}
        </div>
        
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="sm" className="flex items-center gap-1">
            更多 <ChevronDown size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="opacity-50">登录</Button>
          <Button variant="ghost" size="sm" className="opacity-50">注册</Button> */}
          <Button
            variant="ghost"
            size="sm"
            className="opacity-50"
            onClick={() => window.open('https://a.guoqw.com', '_blank')}
          >
            个人博客
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
