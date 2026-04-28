import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import MockupImage from "../assets/dashboard-unipos.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-400 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-primary/10 border border-blue-100 dark:border-primary/20 px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary dark:text-primary-400">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              {t.hero.titleStart}<span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* BEST PRACTICE: Menambahkan atribut keamanan eksternal */}
              <a 
                href="https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight weight="bold" />
              </a>
            </div>
            
            {/* Trust Badge */}
            <div className="flex items-center space-x-4">
              {/* PERBAIKAN: Menambahkan sedikit penekanan (font-bold) agar angka lebih menonjol */}
              <p className="font-bold text-slate-900 dark:text-white">{t.hero.trustedCount}</p>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t.hero.trustedText}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Mockup */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Mockup */}
            <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0F172A] p-2 shadow-2xl shadow-slate-900/20 border border-slate-800 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <div className="flex items-center space-x-2 px-3 pb-3 pt-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 text-center text-xs text-slate-500 font-mono">unipos.app/dashboard</div>
              </div>
              
              {/* BEST PRACTICE OUT-OF-CONTEXT: fetchpriority="high" untuk SEO/LCP */}
              <img 
                src={MockupImage} 
                alt="Dashboard Mockup" 
                fetchpriority="high"
                className="w-full h-auto rounded-lg object-cover opacity-100 border border-slate-700 bg-[#0F172A]"
              />
            </div>

            {/* Floating Element */}
            {/* PERBAIKAN KONTEKS: Mengganti class abstrak 'glass' dengan Tailwind utilitas agar dark mode memiliki base color yang jelas (slate-800) */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl p-4 rounded-xl animate-float-delayed flex items-center space-x-4 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-400">
                <CheckCircle size={28} weight="fill" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.hero.transactionSuccess}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.hero.transactionAmount}</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}