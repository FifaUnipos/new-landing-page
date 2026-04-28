import { DeviceMobile, Package, QrCode, ChartLineUp, Tag } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

const featureIcons = [
  { icon: <DeviceMobile size={32} weight="duotone" className="text-blue-600 dark:text-blue-400" />, bgColor: "bg-blue-50 dark:bg-blue-900/30", className: "col-span-1 md:col-span-2 lg:col-span-2" },
  { icon: <QrCode size={32} weight="duotone" className="text-indigo-600 dark:text-indigo-400" />, bgColor: "bg-indigo-50 dark:bg-indigo-900/30", className: "col-span-1 md:col-span-1 lg:col-span-1" },
  { icon: <Package size={32} weight="duotone" className="text-purple-600 dark:text-purple-400" />, bgColor: "bg-purple-50 dark:bg-purple-900/30", className: "col-span-1" },
  { icon: <ChartLineUp size={32} weight="duotone" className="text-pink-600 dark:text-pink-400" />, bgColor: "bg-pink-50 dark:bg-pink-900/30", className: "col-span-1" },
  { icon: <Tag size={32} weight="duotone" className="text-orange-600 dark:text-orange-400" />, bgColor: "bg-orange-50 dark:bg-orange-900/30", className: "col-span-1 md:col-span-2 lg:col-span-1" },
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.features.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group ${featureIcons[idx].className}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${featureIcons[idx].bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {featureIcons[idx].icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
