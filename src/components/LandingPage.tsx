import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { LandingPageProps } from '../types';
import { Header } from './landing/Header';
import { Features } from './landing/Features';
import { DynamicBackground } from './background/DynamicBackground';

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <DynamicBackground />

      <div className="relative min-h-screen flex flex-col justify-center items-center p-4">
        <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Header />
          <Features />

          <button
            onClick={onEnter}
            className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto text-lg shadow-lg hover:shadow-xl"
          >
            Enter Platform
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Made with <span className="text-red-400">♥</span> for Invesco Hack2Hire 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};