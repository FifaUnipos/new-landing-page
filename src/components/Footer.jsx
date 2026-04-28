import { useLanguage } from "../context/LanguageContext";
import Logo from "../assets/Logo UNIPOS - Horizontal.svg";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src={Logo} alt="Unipos Logo" className="h-10 w-auto" />
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {t.footer.productLinks.map((link, idx) => (
                <li key={idx}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.footer.resources}</h4>
            <ul className="space-y-3">
              {t.footer.resourceLinks.map((link, idx) => (
                <li key={idx}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Links Column 3 */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((link, idx) => (
                <li key={idx}><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
