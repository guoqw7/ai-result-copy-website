
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { DownloadSection } from '@/components/DownloadSection';
import bannerImage from '/banner.png';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-translation-muted">
      <Header />
      <main className="flex-1">
        <Hero />
        <DownloadSection />
        <div className="container py-8">
          <p className="text-center text-3xl md:text-5xl font-bold mb-4">
            使用场景展示
          </p>
          <img src={bannerImage} alt="Banner" className="w-full rounded-lg shadow-lg" />
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        <div className="container">
          <p>© 2025 AI助手复制工具</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
