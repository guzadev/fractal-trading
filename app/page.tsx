"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, TrendingUp, Users, Calendar, BookOpen, Bot, BarChart3, Globe, Mail, Github, Instagram} from "lucide-react";
import { translations, type Language } from "@/app/i18n/translations";

export default function FractalTradingLanding() {
  const [language, setLanguage] = useState<Language>("es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const t = translations[language];

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const icons = [Calendar, BarChart3, BookOpen, Bot, TrendingUp];

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white">
              <img
                src="/ft.png"
                alt="Fractal Trading Logo"
                className="w-full h-full object-cover scale-150 -translate-y-1"
              />
            </div>
            <span className="text-2xl font-gruppo font-semibold tracking-wide text-[#0D1B2A]">Fractal Trading</span>
          </a>


            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "products", "contact"].map((key) => (
                <button key={key} onClick={() => scrollToSection(key)} className="text-gray-700 hover:text-[#0D1B2A] transition-colors">
                  {t.nav[key as keyof typeof t.nav]}
                </button>
              ))}
              <button onClick={toggleLanguage} className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-200 hover:border-[#0D1B2A] transition-colors">
                <span className="text-sm">{language === "en" ? "🇬🇧 EN" : "🇪🇸 ES"}</span>
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleLanguage} className="flex items-center space-x-1 px-2 py-1 rounded-full border border-gray-200">
                <span className="text-sm">{language === "en" ? "🇬🇧" : "🇪🇸"}</span>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#0D1B2A]">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {["home", "about", "products", "contact"].map((key) => (
                  <button key={key} onClick={() => scrollToSection(key)} className="text-left text-gray-700 hover:text-[#0D1B2A] transition-colors">
                    {t.nav[key as keyof typeof t.nav]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0D1B2A] via-[#1a2332] to-black text-white text-center px-4 relative">
        <div className="absolute inset-0 opacity-10">
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4 z-10 leading-normal pb-3">
          {t.hero.headline}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 z-10 leading-[1.2] pb-[0.15em] leading-normal">
          {t.hero.subheadline}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mb-10 z-10">{t.hero.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <Button className="bg-white text-black px-6 py-3 min-w-[200px] text-center rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection("contact")}>{t.hero.cta1}</Button>

          <Button className="bg-white text-black px-6 py-3 min-w-[200px] text-center rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" onClick={() => scrollToSection("products")}>{t.hero.cta2}</Button>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">{t.about.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{t.about.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.about.description}</p>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="h-8 w-8 text-[#0D1B2A]" />
                    <h3 className="text-2xl font-bold text-[#0D1B2A]">{t.about.team.title}</h3>
                  </div>
                  <p className="text-gray-600">{t.about.team.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-[#0D1B2A] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">LL</span>
                </div>
                <h4 className="font-semibold text-[#0D1B2A] mb-2">{t.about.team.trader1}</h4>
                <p className="text-sm text-gray-600">{t.about.team.role1}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-20 h-20 bg-[#0D1B2A] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">GP</span>
                </div>
                <h4 className="font-semibold text-[#0D1B2A] mb-2">{t.about.team.trader2}</h4>
                <p className="text-sm text-gray-600">{t.about.team.role2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">{t.products.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{t.products.subtitle}</p>
            <p className="text-lg text-gray-500">{t.products.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.items.map((item, index) => {
              const Icon = icons[index] || TrendingUp;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-[#0D1B2A] rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0D1B2A]">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#0D1B2A] via-[#1a2332] to-black text-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Columna izquierda: info de contacto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-2">{t.contact.title}</h2>
            <p className="text-xl text-gray-300">{t.contact.subtitle}</p>
            <p className="text-gray-400">{t.contact.description}</p>

            <div className="mt-8 space-y-4 text-sm text-white">
              <a
                href="mailto:fractal.trading.ict@gmail.com"
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5 text-gray-400" />
                fractal.trading.ict@gmail.com
              </a>
              <a
                href="https://instagram.com/fractal_trading_"
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-gray-400" />
                @fractal_trading_
              </a>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <Card className="bg-white text-black shadow-lg">
            <CardContent className="p-8 text-left">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" className="bg-[#0D1B2A] text-white px-6 py-3">
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0D1B2A] via-[#1a2332] to-black text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="h-8 w-8 text-white" />
              <span className="text-2xl font-gruppo font-semibold tracking-wide text-white">Fractal Trading</span>

            </div>
            <p className="text-gray-400">{t.footer.description}</p>
            <p className="text-xs text-white mt-2 flex items-center gap-3">
              {t.footer.copyright}
              <a href="https://gustavopaz.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Sitio web">
                <Globe className="h-4 w-4 hover:text-white" />
              </a>
              <a href="https://github.com/guzadev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 hover:text-white" />
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
