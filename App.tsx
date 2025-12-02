
import React, { useState } from 'react';
import { PageView, StatData } from './types';
import { COMMUNITY_CONTENT, FAMILY_CONTENT, RECOVERY_STATS } from './constants';
import { InfoCard } from './components/InfoCard';
import { ChatWidget } from './components/ChatWidget';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Heart, Users, ArrowRight, BookOpen, Activity, Home, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PageView>(PageView.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const COLORS = ['#2563eb', '#14b8a6', '#f59e0b', '#ef4444'];

  const handleNavClick = (page: PageView) => {
    setActiveTab(page);
    setIsMobileMenuOpen(false);
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-slate-900 relative flex flex-col justify-center items-center overflow-hidden font-sans">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                alt="Background" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center w-full">
            <div className="mb-10 flex justify-center animate-fade-in-up">
                 <div className="bg-white/10 backdrop-blur-md p-5 rounded-full border border-white/20 shadow-2xl">
                    <Heart className="w-20 h-20 text-blue-500 fill-blue-500" />
                 </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                Vida Plena
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                Um espaço seguro de informação e acolhimento. <br/>
                <span className="font-medium text-white">Escolha como podemos ajudar você hoje:</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
                {/* Community Action Card */}
                <button 
                    onClick={() => setActiveTab(PageView.COMMUNITY)}
                    className="group relative bg-gradient-to-br from-blue-600/20 to-blue-900/40 hover:from-blue-600/30 hover:to-blue-800/50 backdrop-blur-md border border-blue-500/30 rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-900/20 hover:shadow-2xl hover:border-blue-400/50 flex flex-col"
                >
                    <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="text-white w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Comunidade</h2>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed flex-grow">
                        Busco informações sobre prevenção, redução de danos, reinserção social e superação do alcoolismo.
                    </p>
                    <div className="flex items-center text-white font-bold text-lg bg-blue-600/20 p-3 rounded-xl w-fit group-hover:bg-blue-600 transition-colors">
                        Acessar Área <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </button>

                {/* Family Action Card */}
                <button 
                    onClick={() => setActiveTab(PageView.FAMILY)}
                    className="group relative bg-gradient-to-br from-teal-600/20 to-teal-900/40 hover:from-teal-600/30 hover:to-teal-800/50 backdrop-blur-md border border-teal-500/30 rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-teal-900/20 hover:shadow-2xl hover:border-teal-400/50 flex flex-col"
                >
                    <div className="bg-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Home className="text-white w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Familiares</h2>
                    <p className="text-teal-100 text-lg mb-8 leading-relaxed flex-grow">
                        Sou familiar ou amigo e busco orientação sobre codependência, apoio emocional e como ajudar.
                    </p>
                    <div className="flex items-center text-white font-bold text-lg bg-teal-600/20 p-3 rounded-xl w-fit group-hover:bg-teal-500 transition-colors">
                        Acessar Apoio <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </button>
            </div>
        </div>
        
        <footer className="absolute bottom-6 text-slate-500 text-sm">
            © 2024 Vida Plena Project • Baseado em evidências científicas
        </footer>
    </div>
  );

  const renderHero = () => (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src={activeTab === PageView.COMMUNITY 
            ? "https://picsum.photos/1920/1080?grayscale" 
            : "https://picsum.photos/1920/1081?grayscale&blur=2"} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
            <Activity className="w-4 h-4 mr-2" />
            Baseado em Evidências Científicas
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {activeTab === PageView.COMMUNITY 
              ? "Prevenção e Superação Comunitária" 
              : "Apoio e Orientação para Familiares"}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            {activeTab === PageView.COMMUNITY 
              ? "A dependência do álcool é um desafio de saúde pública. Conheça estratégias de intervenção breve, redução de danos e caminhos para a reintegração social."
              : "A família é parte essencial da recuperação, mas também precisa de cuidado. Aprenda a romper ciclos de codependência e encontrar apoio emocional."}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={activeTab === PageView.COMMUNITY 
                ? "https://scholar.google.com/scholar?hl=pt-BR&as_sdt=0%2C5&q=+alcoolismo+comunitario&btnG="
                : "https://scholar.google.com/scholar?hl=pt-BR&as_sdt=0%2C5&q=curiosidades+sobre+alcoolismo&oq=curiosidades+sobre+alcoo"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition flex items-center shadow-lg"
            >
              Saiba Mais <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStats = () => (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Eficácia do Tratamento Integrado</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Dados sugerem que a combinação de intervenção precoce, apoio familiar estruturado e acompanhamento profissional aumenta drasticamente as taxas de recuperação e manutenção da sobriedade.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">1</span>
                </div>
                <p className="ml-3 text-slate-600 text-sm">Intervenções Breves reduzem o consumo em até 30% nos primeiros meses.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                  <span className="text-teal-600 text-xs font-bold">2</span>
                </div>
                <p className="ml-3 text-slate-600 text-sm">Famílias engajadas em grupos de apoio têm menor incidência de depressão.</p>
              </li>
            </ul>
          </div>
          <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={RECOVERY_STATS}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {RECOVERY_STATS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

  // Conditional Rendering
  if (activeTab === PageView.HOME) {
    return renderLanding();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab(PageView.HOME)}>
              <div className="flex-shrink-0 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
                <Heart className="h-8 w-8 fill-blue-600" />
                <span className="font-bold text-xl tracking-tight text-slate-900">Vida Plena</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleNavClick(PageView.COMMUNITY)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === PageView.COMMUNITY
                    ? 'bg-blue-50 text-blue-700 border border-blue-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Comunidade</span>
              </button>
              <button
                onClick={() => handleNavClick(PageView.FAMILY)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === PageView.FAMILY
                    ? 'bg-teal-50 text-teal-700 border border-teal-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Familiares</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => handleNavClick(PageView.HOME)}
                className="w-full text-left block px-3 py-4 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              >
                <span className="flex items-center gap-3"><Heart className="w-5 h-5"/> Página Inicial</span>
              </button>
              <button
                onClick={() => handleNavClick(PageView.COMMUNITY)}
                className={`w-full text-left block px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                  activeTab === PageView.COMMUNITY 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Users className="w-5 h-5" /> Comunidade
              </button>
              <button
                onClick={() => handleNavClick(PageView.FAMILY)}
                className={`w-full text-left block px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                  activeTab === PageView.FAMILY 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Home className="w-5 h-5" /> Familiares
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow animate-fade-in-up">
        {renderHero()}
        
        {renderStats()}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {activeTab === PageView.COMMUNITY ? "Pilares da Prevenção" : "Pilares do Apoio Familiar"}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Informações selecionadas a partir de diretrizes da Revista Brasileira de Psiquiatria e estudos clínicos recentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === PageView.COMMUNITY ? COMMUNITY_CONTENT : FAMILY_CONTENT).map((item) => (
              <InfoCard
                key={item.id}
                title={item.title}
                content={item.content}
                iconName={item.icon}
                color={activeTab === PageView.COMMUNITY ? 'blue-600' : 'teal-500'}
              />
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-indigo-500" />
                Referências Bibliográficas
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                O conteúdo desta plataforma foi sintetizado a partir de estudos acadêmicos rigorosos para garantir a precisão e a eficácia das orientações.
              </p>
              <ul className="space-y-2 text-sm text-indigo-600">
                <li>• <a href="https://doi.org/10.1590/S1516-44462004000500002" target="_blank" rel="noreferrer" className="hover:underline">Diretrizes Brasileiras sobre Intervenção Breve (Rev. Bras. Psiquiatr.)</a></li>
                <li>• <a href="https://doi.org/10.1590/S0101-60832008000700007" target="_blank" rel="noreferrer" className="hover:underline">Abordagens Terapêuticas e Impacto Familiar (Rev. Psiquiatr. Clín.)</a></li>
              </ul>
            </div>
            <div className="flex-shrink-0">
               <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center">
                 <Activity className="w-12 h-12 text-indigo-500" />
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Vida Plena</h3>
            <p className="text-sm leading-relaxed">
              Uma iniciativa dedicada a combater o alcoolismo através da educação, ciência e apoio comunitário. Juntos somos mais fortes.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Ajuda Rápida</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Encontre um AA</a></li>
              <li><a href="#" className="hover:text-white transition">Encontre um Al-Anon</a></li>
              <li><a href="#" className="hover:text-white transition">Emergência: 192</a></li>
              <li><a href="#" className="hover:text-white transition">CVV: 188</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <p className="text-xs leading-relaxed">
              Este site é informativo e não substitui aconselhamento médico profissional. Em caso de crise, procure o hospital mais próximo.
            </p>
            <p className="text-xs mt-4">© 2024 Vida Plena Project.</p>
          </div>
        </div>
      </footer>

      {/* 
        ChatWidget with key=activeTab forces a re-mount when changing pages, 
        effectively creating a "new bot" session for that specific context as requested. 
      */}
      <ChatWidget key={activeTab} currentPage={activeTab} />
    </div>
  );
};

export default App;
