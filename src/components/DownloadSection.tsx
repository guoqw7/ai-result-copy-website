
import React from 'react';
import { ExtensionButton } from './ExtensionButton';

export const DownloadSection: React.FC = () => {
  return (
    <div className="container px-20 py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/40 rounded-3xl px-8 py-9">
          <h2 className="text-2xl font-bold mb-6">安装浏览器插件（桌面端使用）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ExtensionButton
              iconType="crx"
              name="crx 安装包"
              tag="点击下载"
              href="https://d.guoqw.com/ai-result-copy.crx"
            />
            <ExtensionButton
              iconType="chrome"
              name="Chrome 扩展"
              tag="已提审，审核中。。。"
              isLoading
            />
            <ExtensionButton
              iconType="oil"
              name="油猴脚本"
              tag="待上架"
              disabled
            />
            <ExtensionButton
              iconType="edge"
              name="Edge 扩展"
              tag="待上架"
              disabled
            />
            <ExtensionButton
              iconType="firefox"
              name="Firefox 扩展"
              tag="待上架"
              disabled
            />
            <ExtensionButton
              iconType="safari"
              name="Mac Safari 扩展"
              tag="待上架"
              disabled
            />
          </div>
        </div>

        <div className="bg-white/40 rounded-3xl px-8 py-9">
          <h2 className="text-2xl font-bold mb-6">已适配的AI助手</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ExtensionButton
              // iconType="ios"
              name="百度-AI搜索"
              tag="点击跳转"
              href="https://chat.baidu.com"
            />
            <ExtensionButton
              // iconType="android"
              name="字节-豆包"
              tag="点击跳转"
              href="https://www.doubao.com/chat/"
            />
            <ExtensionButton
              // iconType="ios-safari"
              name="腾讯-元宝"
              tag="点击跳转"
              href="https://yuanbao.tencent.com/chat/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
