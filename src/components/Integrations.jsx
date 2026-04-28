import { Bank, Wallet, Lightning, CellSignalFull } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="py-16 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 tracking-widest uppercase mb-8">
          {t.integrations.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Bank size={32} weight="duotone" />
            <span className="text-xl font-bold">Bank Nasional</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Wallet size={32} weight="duotone" />
            <span className="text-xl font-bold">E-Wallet Plus</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
            <Lightning size={32} weight="duotone" />
            <span className="text-xl font-bold">PLN Bill</span>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer grayscale hover:grayscale-0">
            <CellSignalFull size={32} weight="duotone" />
            <span className="text-xl font-bold">Telco Net</span>
          </div>
        </div>
      </div>
    </section>
  );
}
