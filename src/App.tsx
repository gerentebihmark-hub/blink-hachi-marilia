import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  BookOpen,
  Globe,
  Star,
  Instagram
} from 'lucide-react';
import { BakeryPattern } from './components/BakeryPattern';
import { LinkItem, RestaurantInfo } from './types';

// Assets locais da pasta public
const logoHachimitsu = '/logo.png?v=3';
const logoRodapeBmk = '/logo-branca-bmk.png';

/* ═══════════════════════════════════════════════════════
 * BLINK — Hachimitsu (Unidade Marília)
 * Padrão BMK · Design Retangular Moderno (Sem Pills)
 * ═══════════════════════════════════════════════════════ */

export default function App() {

  /* ─── Informações da Unidade ─── */
  const infoCasa: RestaurantInfo = {
    name: 'Hachimitsu Atelier de Delícias',
    unit: 'Hachimitsu Marília',
    address: 'Av. Jesus Montolar, 1200 – Parque das Indústrias, Marília – SP',
    cnpj: '20.989.222/0005-10',
    phone: '(14) 2030-0701',
    phoneFormatted: '551420300701',
    instagram: '@hachimitsumarilia',
    hours: [
      'Segunda a sexta: 09h às 19h',
      'Sábado e domingo: 08h às 19h'
    ]
  };

  /* ─── Links rápidos rastreáveis ─── */
  const linksRapidos: LinkItem[] = [
    {
      id: 'whatsapp',
      label: 'Faça sua Encomenda no WhatsApp',
      description: 'Converse direto com nossa equipe: (14) 2030-0701',
      url: 'https://wa.me/551420300701?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20unidade%20Mar%C3%ADlia',
      icon: 'whatsapp',
      highlighted: true,
      eventKey: 'click_whatsapp_encomenda'
    },
    {
      id: 'instagram',
      label: 'Siga no Instagram',
      description: '@hachimitsumarilia • Novidades, delícias e bastidores',
      url: 'https://www.instagram.com/hachimitsumarilia/',
      icon: 'instagram',
      highlighted: true,
      eventKey: 'click_instagram'
    },
    {
      id: 'cardapio',
      label: 'Cardápio Digital & Pedidos',
      description: 'Explore nossos doces nobres, bolos e salgados',
      url: 'https://hachimitsumarilia.cloudfy.net.br/',
      icon: 'cardapio',
      eventKey: 'click_cardapio_digital'
    },
    {
      id: 'ligue',
      label: 'Ligue para nós',
      description: 'Atendimento direto e rápido: (14) 2030-0701',
      url: 'tel:+551420300701',
      icon: 'phone',
      eventKey: 'click_telefone'
    },
    {
      id: 'site',
      label: 'Acesse nosso site',
      description: 'Conheça mais sobre o universo Hachimitsu',
      url: 'https://share.google/lA5x1UMkgpPo9CF5o',
      icon: 'site',
      eventKey: 'click_site_oficial'
    }
  ];

  const urlAvaliacaoGoogle = 'https://www.google.com/search?q=Hachimitsu+Mar%C3%ADlia+Avalia%C3%A7%C3%B5es';

  /* ─── LGPD ─── */
  const [lgpdAceito, setLgpdAceito] = useState(() => {
    try {
      return localStorage.getItem('hachimitsu_marilia_lgpd') === 'true';
    } catch {
      return false;
    }
  });

  const aceitarLgpd = () => {
    try {
      localStorage.setItem('hachimitsu_marilia_lgpd', 'true');
    } catch (e) {
      console.warn('LocalStorage inacessível:', e);
    }
    setLgpdAceito(true);
  };

  /* ─── Favicon dinâmico (logo abelha) ─── */
  useEffect(() => {
    const updateFavicon = () => {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const faviconUrl = isDark ? '/hachi abelhasbrancas.webp' : '/hachi abelhas.webp';
      
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = faviconUrl;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.type = 'image/webp';
        newLink.href = faviconUrl;
        document.head.appendChild(newLink);
      }
    };

    updateFavicon();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateFavicon);

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

/* ═══ Ícone Oficial WhatsApp ═══ */
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`shrink-0 ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.01 2.002C6.488 2.002 2 6.49 2 12.012c0 1.765.46 3.49 1.334 5.006L2 22l5.127-1.344a9.96 9.96 0 004.883 1.272c5.523 0 10.011-4.488 10.011-10.01C22.021 6.49 17.533 2.002 12.01 2.002z"
      fill="#25D366"
    />
    <path
      d="M17.51 14.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"
      fill="#FFFFFF"
    />
  </svg>
);

  /* ─── Ícones SVG e componentes ─── */
  const getIcon = (iconName: string) => {
    const iconClass = 'h-5 w-5 text-white';
    switch (iconName) {
      case 'ifood':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ea1d2c] drop-shadow-sm overflow-visible">
            <path d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293z" />
            <g className="ifood-wink-eye" style={{ transformOrigin: '76% 28%' }}>
              <path d="M19.756 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293z" />
            </g>
            <path d="M14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z" />
          </svg>
        );
      case 'whatsapp':
        return <WhatsAppIcon className="h-6 w-6" />;
      case 'instagram':
        return <Instagram className="h-5 w-5 text-[#f2c17b]" />;
      case 'phone':
        return <Phone className="h-5 w-5 text-white" />;
      case 'cardapio':
        return <BookOpen className="h-5 w-5 text-[#F5D76E]" />;
      case 'site':
        return <Globe className="h-5 w-5 text-white" />;
      case 'avalie':
        return <Star className="h-5 w-5 text-[#F5D76E] fill-[#F5D76E]" />;
      default:
        return <ArrowUpRight className={iconClass} />;
    }
  };

  /* ─── Rastreamento de eventos (Analytics/Pixel) ─── */
  const trackClick = (eventKey: string, url: string) => {
    console.log(`[Analytics] Clique registrado: ${eventKey}`);
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', eventKey, { url });
    }
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventKey, { value: url });
    }
  };

  /* ─── Slides do Carrossel de Produtos: Bolos | Pães | Doces | Salgados ─── */
  const carouselSlides = [
    {
      id: 1,
      image: '/bolos.webp',
      tag: 'BOLOS',
      title: 'BOLOS ARTESANAIS',
      text: 'Receitas nobres e exclusivas Hachimitsu com massas leves e recheios delicados para suas celebrações.',
      whatsappUrl: 'https://wa.me/551420300701?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20um%20Bolo%20na%20unidade%20Mar%C3%ADlia'
    },
    {
      id: 2,
      image: '/paes.webp',
      tag: 'PÃES',
      title: 'PÃES ESPECIAIS',
      text: 'Fermentação natural lenta, casca dourada e crocante, miolo macio e o verdadeiro sabor da panificação artesanal.',
      whatsappUrl: 'https://wa.me/551420300701?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20P%C3%A3es%20Artesanais%20na%20unidade%20Mar%C3%ADlia'
    },
    {
      id: 3,
      image: '/doces.webp',
      tag: 'DOCES',
      title: 'DOCES FINOS',
      text: 'A união perfeita entre a delicadeza oriental e a sofisticação da confeitaria nobre com ingredientes selecionados.',
      whatsappUrl: 'https://wa.me/551420300701?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20Doces%20Finos%20na%20unidade%20Mar%C3%ADlia'
    },
    {
      id: 4,
      image: '/salgados.webp',
      tag: 'SALGADOS',
      title: 'SALGADOS ARTESANAIS',
      text: 'Croissants amanteigados, folhados crocantes, quiches e salgados nobres preparados diariamente.',
      whatsappUrl: 'https://wa.me/551420300701?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20Salgados%20na%20unidade%20Mar%C3%ADlia'
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  /* ─── Preload em memória limpo (Zero elementos no DOM) ─── */
  useEffect(() => {
    carouselSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#3b2011] text-[#FAF3E0] font-sans flex flex-col justify-start items-center pt-6 pb-12 px-4 select-none relative z-0 overflow-x-hidden">

      {/* ═══ Background Pattern da Confeitaria ═══ */}
      <BakeryPattern />

      {/* ═══ Container principal ═══ */}
      <main className="max-w-[430px] w-full flex flex-col items-center relative z-10">

        {/* ─── Bloco de Perfil / Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-7 w-full"
        >
          {/* Logo Principal Hachimitsu Oficial 2026 (Transparente sem quadrado, +15%) */}
          <img
            src={logoHachimitsu}
            alt="Logo Hachimitsu"
            className="w-[250px] sm:w-[290px] h-auto object-contain drop-shadow-lg hover:scale-[1.02] transition-all duration-300 mb-7 sm:mb-8"
          />

          {/* Nome da Unidade (Tipografia Nobre, sem pill) */}
          <h1 className="text-[#f2c17b] font-serif text-[21px] sm:text-[23px] font-bold tracking-wide drop-shadow-md mb-1">
            {infoCasa.unit}
          </h1>

          {/* Tagline */}
          <p className="text-white/85 text-[13px] sm:text-[14px] font-medium tracking-wide drop-shadow-sm">
            Confeitaria Fina & Encomendas Especiais
          </p>
        </motion.div>

        {/* ─── Separador LINKS ─── */}
        <div className="w-full flex items-center gap-3 mb-5">
          <span className="text-[10px] font-bold tracking-widest text-white/90 font-mono uppercase drop-shadow-sm">
            Links Oficiais
          </span>
          <div className="flex-grow h-[1px] bg-white/20" />
          <span className="text-[10px] font-bold tracking-widest text-white/90 font-mono drop-shadow-sm">
            {String(linksRapidos.length).padStart(2, '0')}
          </span>
        </div>

        {/* ─── Lista de Botões (Cards Modernos sem Pill) ─── */}
        <div className="w-full space-y-3 mb-9">
          {linksRapidos.map((link, index) => {
            const isIfood = link.id === 'ifood';
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick(link.eventKey, link.url)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`group flex items-center gap-3.5 w-full p-3.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isIfood
                    ? 'bg-[#ea1d2c] border-[#ea1d2c] hover:bg-[#d81825] hover:border-[#d81825] hover:shadow-lg hover:shadow-red-950/30 hover:-translate-y-0.5 shadow-md shadow-red-950/20'
                    : 'bg-black/55 backdrop-blur-md border-white/10 hover:border-[#D4A017]/60 hover:bg-black/75 hover:shadow-lg hover:shadow-black/25 hover:-translate-y-0.5 shadow-md'
                }`}
              >
                {/* Ícone quadrado arredondado */}
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isIfood
                    ? 'bg-white border-transparent'
                    : 'bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-[#D4A017]/60'
                }`}>
                  {getIcon(link.icon)}
                </div>

                {/* Textos */}
                <div className="flex-grow pr-2 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-[15.5px] leading-tight text-white">
                      {link.label}
                    </h3>
                    {link.tag && (
                      <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md font-mono shrink-0 ${
                        link.tag === '★★★★★'
                          ? 'text-[#F5D76E] bg-amber-950/50 border border-[#D4A017]/40'
                          : 'text-[#F5D76E] bg-[#D4A017]/20 border border-[#D4A017]/35'
                      }`}>
                        {link.tag}
                      </span>
                    )}
                  </div>
                  {link.description && (
                    <p className={`text-[12px] font-medium mt-0.5 leading-snug truncate transition-colors ${
                      isIfood ? 'text-red-100/90' : 'text-white/70 group-hover:text-white/95'
                    }`}>
                      {link.description}
                    </p>
                  )}
                </div>

                {/* Seta discreta */}
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isIfood
                    ? 'bg-white/15 text-white hover:bg-white/25 group-hover:scale-110'
                    : 'bg-white/5 border border-white/10 text-white group-hover:border-[#D4A017]/60 group-hover:bg-[#D4A017]/10 group-hover:text-[#D4A017] group-hover:scale-110'
                }`}>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ═══ CARROSSEL — Conheça nossos produtos ═══ */}
        <div className="w-full mb-9 flex flex-col items-center">
          {/* Separador */}
          <div className="w-full flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-widest text-white/90 font-mono uppercase drop-shadow-sm">
              Produtos em Destaque
            </span>
            <div className="flex-grow h-[1px] bg-white/20" />
            <span className="text-[10px] font-bold tracking-widest text-white/90 font-mono drop-shadow-sm">
              {String(carouselSlides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Card do Carrossel Full-Width */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/60 backdrop-blur-md border border-white/15 flex flex-col">
            {/* Foto em Tamanho Real Completo (Aspect Ratio 2:3 - Sem Corte, Sem Bordas Cinzas, Sem Distorção) */}
            <div className="relative w-full aspect-[2/3] overflow-hidden bg-black/95">
              <AnimatePresence initial={false}>
                <motion.img
                  key={activeSlide}
                  src={carouselSlides[activeSlide].image}
                  alt={carouselSlides[activeSlide].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                />
              </AnimatePresence>

              {/* Tag Superior na Foto */}
              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md font-mono bg-black/75 backdrop-blur-md border border-[#D4A017]/50 text-[#F5D76E] shadow-lg">
                  {carouselSlides[activeSlide].tag}
                </span>
              </div>

              {/* Setas de Navegação Laterais */}
              <button
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-black/95 border border-white/30 flex items-center justify-center text-white shadow-xl transition-all cursor-pointer active:scale-90 z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próximo slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-black/95 border border-white/30 flex items-center justify-center text-white shadow-xl transition-all cursor-pointer active:scale-90 z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores de Slide (Dots + Contador) */}
              <div className="absolute bottom-3.5 inset-x-0 flex items-center justify-center gap-1.5 z-20">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSlide(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === i ? 'w-6 bg-[#D4A017]' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Bloco de Informações & Botão de WhatsApp */}
            <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-black/50 border-t border-white/10 text-white">
              <div>
                <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#f2c17b] mb-1 leading-tight">
                  {carouselSlides[activeSlide].title}
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-white/85 leading-relaxed min-h-[38px] flex items-center">
                  {carouselSlides[activeSlide].text}
                </p>
              </div>

              <a
                href={carouselSlides[activeSlide].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('click_carousel_encomendar', carouselSlides[activeSlide].whatsappUrl)}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-bold text-[13.5px] flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-black/40 active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pedir no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* ═══ Botão de Avaliação Google (Abaixo do Carrossel) ═══ */}
        <motion.a
          href={urlAvaliacaoGoogle}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('click_avaliar_google', urlAvaliacaoGoogle)}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group flex items-center gap-3.5 w-full p-3.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden bg-black/55 backdrop-blur-md border-white/10 hover:border-[#D4A017]/60 hover:bg-black/75 hover:shadow-lg hover:shadow-black/25 hover:-translate-y-0.5 shadow-md mb-5"
        >
          <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-[#D4A017]/60">
            <Star className="h-5 w-5 text-[#F5D76E] fill-[#F5D76E]" />
          </div>
          <div className="flex-grow pr-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-[15.5px] leading-tight text-white">
                Avalie-nos no Google
              </h3>
              <span className="text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md font-mono shrink-0 text-[#F5D76E] bg-amber-950/50 border border-[#D4A017]/40">
                ★★★★★
              </span>
            </div>
            <p className="text-[12px] font-medium mt-0.5 leading-snug truncate transition-colors text-white/70 group-hover:text-white/95">
              Sua opinião é fundamental para nós
            </p>
          </div>
          <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 bg-white/5 border border-white/10 text-white group-hover:border-[#D4A017]/60 group-hover:bg-[#D4A017]/10 group-hover:text-[#D4A017] group-hover:scale-110">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </motion.a>

        {/* ═══ Bloco de Localização ═══ */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Av.+Jesus+Montolar,+1200+-+Parque+das+Indústrias,+Marília+-+SP"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('click_localizacao_maps', 'https://www.google.com/maps/search/?api=1&query=Av.+Jesus+Montolar,+1200+-+Parque+das+Indústrias,+Marília+-+SP')}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="group flex items-center gap-3.5 w-full p-3.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden bg-black/55 backdrop-blur-md border-white/10 hover:border-white/60 hover:bg-black/75 hover:shadow-lg hover:shadow-black/25 hover:-translate-y-0.5 shadow-md mb-5"
        >
          <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 bg-white/5 border-white/20 group-hover:bg-white/10 group-hover:border-white">
            <MapPin className="h-5 w-5 text-[#F5D76E]" />
          </div>
          <div className="flex-grow pr-2">
            <h3 className="font-semibold text-[15.5px] leading-tight transition-colors text-white">
              Onde Estamos
            </h3>
            <p className="text-[12px] font-medium mt-0.5 leading-snug transition-colors text-white/70 group-hover:text-white">
              {infoCasa.address}
            </p>
          </div>
          <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 bg-white/5 border border-white/10 text-white group-hover:border-white/60 group-hover:bg-white/10 group-hover:scale-110">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.a>

        {/* ═══ Bloco de Funcionamento ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-black/45 border border-white/10 backdrop-blur-md rounded-2xl p-5 text-center shadow-md mb-6"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest font-mono text-[#F5D76E] mb-3 block">
            Horário de Funcionamento
          </span>
          <div className="space-y-1.5 text-white text-[13.5px] font-semibold">
            {infoCasa.hours.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </motion.div>

        {/* ═══ Footer BMK ═══ */}
        <footer className="w-full py-6 text-center mt-4 border-t border-white/10 flex flex-col items-center gap-4">
          <div className="flex gap-4 text-[10px] font-bold text-white/80 uppercase tracking-wider">
            <a href="/SECURITY_AND_COMPLIANCE.md" target="_blank" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-white/20">•</span>
            <a href="/SECURITY_AND_COMPLIANCE.md" target="_blank" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://bmkdigital.com.br"
              target="_blank"
              rel="noopener noreferrer"
              title="BMK Agência"
              className="inline-flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logoRodapeBmk}
                alt="BMK Agência"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-[9px] text-white/70 font-medium tracking-wide uppercase drop-shadow-sm mt-1">
              © {new Date().getFullYear()} Hachimitsu Marília. Todos os direitos reservados.
            </p>
            {infoCasa.cnpj && (
              <p className="text-[9px] text-white/50 font-mono tracking-wider">
                CNPJ: {infoCasa.cnpj}
              </p>
            )}
          </div>
        </footer>

      </main>

      {/* ═══ Banner LGPD ═══ */}
      {!lgpdAceito && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1816] border-t border-white/15 p-4 shadow-2xl backdrop-blur-lg"
        >
          <div className="max-w-[430px] mx-auto flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-amber-950/60 border border-[#D4A017]/30 flex items-center justify-center text-[#F5D76E] shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-bold text-xs">Uso de Cookies e Privacidade</h4>
                <p className="text-stone-300 text-[10px] leading-relaxed font-normal">
                  Usamos cookies para analisar o tráfego de nossa página e otimizar campanhas de tráfego pago. Nenhuma informação sensível é coletada sem seu consentimento nos termos da LGPD.
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <a
                href="/SECURITY_AND_COMPLIANCE.md"
                target="_blank"
                className="px-3 py-1.5 text-stone-300 hover:text-white text-[10px] font-bold border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                Termos
              </a>
              <button
                onClick={aceitarLgpd}
                className="px-4 py-1.5 bg-[#D4A017] hover:bg-[#F5D76E] text-stone-950 text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
