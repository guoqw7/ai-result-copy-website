
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="starlight-header w-full py-8 md:py-10">
      <div className="container text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          AI助手复制工具<span className="whitespace-nowrap"><span className="text-translation-primary">即开即用</span>无须配置</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
        解决百度-AI搜索、字节-豆包、腾讯-元宝等的<span className="font-medium">网页端</span>问答对话场景复制低效问题。<br/>Solve the problem of inefficient replication of web side Q&A dialogue scenes of Baidu -AI search, ByteDance‌-Doubao, Tencent-Yuan Bao, etc.
        </p>
        
        {/* <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full p-1 bg-white">
            <div className="flex items-center gap-1 px-4 py-1 bg-gray-100 rounded-full">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-800 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16L3 12L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium">2024</span>
            </div>
            <span className="text-sm px-2">年度精选</span>
            <span className="text-sm text-gray-500 pr-3">Chrome</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
