import { CheckCircle } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

const planMeta = [
  {
    id: "starter",
    buttonClass: "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white",
    href: "https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host",
    isPopular: false,
  },
  {
    id: "pro",
    buttonClass: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30",
    href: "https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host",
    isPopular: true,
  },
  {
    id: "enterprise",
    buttonClass: "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white",
    href: "#",
    isPopular: false,
  },
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const meta = planMeta[idx];
            return (
              <div 
                key={meta.id}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  meta.isPopular 
                    ? "border-2 border-primary shadow-2xl scale-105 z-10 bg-white dark:bg-slate-800" 
                    : "border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-800/50"
                }`}
              >
                {meta.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm h-10">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{plan.priceSub}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle size={20} weight="fill" className={`mt-0.5 ${meta.isPopular ? "text-primary" : "text-blue-400"}`} />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={meta.href}
                  className={`block text-center w-full py-3.5 rounded-xl font-semibold transition-all ${meta.buttonClass}`}
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
