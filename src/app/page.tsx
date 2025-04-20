'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-900'>
      {/* Background elements */}
      <div className="bg-grid absolute w-full h-full top-0 left-0 opacity-15 z-1"></div>
      <div className="bg-glow glow-1 absolute w-[500px] h-[500px] rounded-full top-[-10%] right-[-10%] z-0"></div>
      <div className="bg-glow glow-2 absolute w-[500px] h-[500px] rounded-full bottom-[-30%] left-[-10%] z-0"></div>
      
      {/* Hero Section */}
      <section className="hero pt-24 pb-16 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="hero-content max-w-3xl mx-auto text-center relative z-10">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">
              Revolutionize Your Text Analytics with Our Intelligent Similarity API
            </h1>
            <p className="hero-subtitle text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Calculate the similarity score between two pieces of text by creating a free{' '}
              <Link href='/login' className="accent-text text-amber-600 dark:text-amber-400 font-medium hover:underline">
                API Key
              </Link>.
            </p>
            <div className="cta-buttons flex flex-wrap justify-center gap-4 mb-12">
              <Link href="/login" className="cta-btn primary-btn bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition transform hover:-translate-y-0.5">
                Get Started
              </Link>
              <Link href="/documentation" className="cta-btn secondary-btn bg-transparent text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 px-6 py-3 rounded-md font-semibold transition transform hover:-translate-y-0.5 hover:bg-amber-100/20 dark:hover:bg-amber-400/10">
                View Documentation
              </Link>
            </div>
          </div>

          {/* Demo Section */}
          <div className="demo-section mt-8 relative z-10">
            <div className="demo-container bg-white/90 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-6 backdrop-blur-md shadow-xl dark:shadow-2xl max-w-4xl mx-auto">
              <div className="demo-header flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700 mb-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Try it out</h3>
                <div className="text-sm text-slate-600 dark:text-slate-400">Similarity Score: <span className="text-emerald-600 dark:text-emerald-400 font-medium">0.89</span></div>
              </div>
              <div className="demo-content grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="input-section">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Text 1</label>
                  <div className="relative">
                    <textarea 
                      className="w-full h-32 bg-slate-50 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 rounded-md p-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Enter your first text sample here..."
                    ></textarea>
                  </div>
                </div>
                <div className="input-section">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Text 2</label>
                  <div className="relative">
                    <textarea 
                      className="w-full h-32 bg-slate-50 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 rounded-md p-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Enter your second text sample here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="demo-footer mt-6 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition transform hover:-translate-y-0.5">
                  Calculate Similarity
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        .bg-grid {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.15;
        }
        
        .bg-glow {
          background: radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
        }
        
        .glow-2 {
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
        }

        @media (prefers-color-scheme: dark) {
          .bg-glow {
            background: radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(15, 23, 42, 0) 70%);
          }
          
          .glow-2 {
            background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(15, 23, 42, 0) 70%);
          }
        }
      `}</style>
    </div>
  )
}
