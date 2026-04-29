import { useState, useRef, useEffect } from "react";
import { List, X, GlobeSimple, CaretDown, Check, Moon, Sun } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "../assets/Logo UNIPOS - Horizontal.svg";

// BEST PRACTICE: Pindahkan data statis ke luar komponen agar tidak dirender ulang setiap kali state berubah
const languages = [
  { code: "id", label: "ID - Indonesia", mobileLabel: "Bahasa Indonesia" },
  { code: "en", label: "EN - English", mobileLabel: "English" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMobileLangDropdownOpen(false);
  };

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="Unipos Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">{t.header.features}</a>
            <a href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">{t.header.pricing}</a>
            {/* <a href="#integrations" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">{t.header.integrations}</a> */}
            {/* <a href="#solutions" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">{t.header.solutions}</a> */}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} weight="duotone" /> : <Moon size={20} weight="duotone" />}
            </button>

            {/* Custom Language Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                aria-expanded={isLangDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  isLangDropdownOpen 
                    ? "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 ring-2 ring-primary/20" 
                    : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <GlobeSimple size={18} weight="duotone" className="text-primary" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{currentLang.label}</span>
                <CaretDown size={14} weight="bold" className={`text-slate-400 transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl rounded-xl overflow-hidden z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        language === lang.code 
                          ? "bg-primary/5 text-primary" 
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <Check size={16} weight="bold" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BEST PRACTICE: Tambahkan target="_blank" dan rel="noopener noreferrer" untuk link eksternal */}
            <a href="https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">{t.header.login}</a>
            <a href="https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-primary/30">
              {t.header.getStarted}
            </a>
          </div>

          {/* Mobile menu button & Theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={24} weight="duotone" /> : <Moon size={24} weight="duotone" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary focus:outline-none cursor-pointer p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-lg">
          <nav className="px-4 pt-2 pb-6 space-y-1">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">{t.header.features}</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">{t.header.pricing}</a>
            <a href="#integrations" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">{t.header.integrations}</a>
            <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors">{t.header.solutions}</a>
            
            {/* Custom Language Dropdown (Mobile) */}
            <div className="mx-3 mt-2">
              <button
                onClick={() => setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all cursor-pointer ${
                  isMobileLangDropdownOpen 
                    ? "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600" 
                    : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <GlobeSimple size={20} weight="duotone" className="text-primary" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">{currentLang.mobileLabel}</span>
                </div>
                <CaretDown size={16} weight="bold" className={`text-slate-400 transition-transform duration-200 ${isMobileLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobileLangDropdownOpen && (
                <div className="mt-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-3 font-medium transition-colors flex items-center justify-between border-b last:border-0 border-slate-50 dark:border-slate-700 cursor-pointer ${
                        language === lang.code 
                          ? "bg-primary/5 text-primary" 
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span>{lang.mobileLabel}</span>
                      {language === lang.code && <Check size={18} weight="bold" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 flex flex-col space-y-3 px-3">
              <a href="https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host" target="_blank" rel="noopener noreferrer" className="w-full text-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium py-2 transition-colors">{t.header.login}</a>
              <a href="https://amio-unipos-unipos-web-app.yi8k7d.easypanel.host" target="_blank" rel="noopener noreferrer" className="w-full text-center bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-full font-medium shadow-md transition-colors">
                {t.header.getStarted}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}