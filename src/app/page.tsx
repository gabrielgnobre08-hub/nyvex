"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // =========================
  // HOME
  // =========================

  const inicioRef = useRef<HTMLElement>(null);
  const homeTextoRef = useRef<HTMLDivElement>(null);
  const homeTituloRef = useRef<HTMLHeadingElement>(null);
  const homeSubtituloRef = useRef<HTMLParagraphElement>(null);

  // =========================
  // COLEÇÃO
  // =========================

  const colecaoRef = useRef<HTMLElement>(null);
  const textoRef = useRef<HTMLDivElement>(null);

  const frenteRef = useRef<HTMLDivElement>(null);
  const costasRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const mangaRef = useRef<HTMLDivElement>(null);
  const etiquetaRef = useRef<HTMLDivElement>(null);

  // =========================
  // SOBRE
  // =========================

  const sobreRef = useRef<HTMLElement>(null);
  const sobreIntroRef = useRef<HTMLDivElement>(null);
  const sobreTextoRef = useRef<HTMLDivElement>(null);
  const sobreFinalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inicio = inicioRef.current;
    const homeTexto = homeTextoRef.current;
    const homeTitulo = homeTituloRef.current;
    const homeSubtitulo = homeSubtituloRef.current;

    const colecao = colecaoRef.current;
    const texto = textoRef.current;

    const frente = frenteRef.current;
    const costas = costasRef.current;
    const logo = logoRef.current;
    const manga = mangaRef.current;
    const etiqueta = etiquetaRef.current;

    const sobre = sobreRef.current;
    const sobreIntro = sobreIntroRef.current;
    const sobreTexto = sobreTextoRef.current;
    const sobreFinal = sobreFinalRef.current;

    if (
      !inicio ||
      !homeTexto ||
      !homeTitulo ||
      !homeSubtitulo ||
      !colecao ||
      !texto ||
      !frente ||
      !costas ||
      !logo ||
      !manga ||
      !etiqueta ||
      !sobre ||
      !sobreIntro ||
      !sobreTexto ||
      !sobreFinal
    ) {
      return;
    }

    // =========================
    // ANIMAÇÃO DA HOME
    // =========================

    const homeCtx = gsap.context(() => {
      gsap.set(homeTexto, {
        scale: 1,
        y: 0,
        autoAlpha: 1,
        transformOrigin: "center center",
      });

      gsap.set(homeTitulo, {
        letterSpacing: "0.18em",
        scale: 1,
      });

      gsap.set(homeSubtitulo, {
        autoAlpha: 1,
        y: 0,
      });

      const homeTl = gsap.timeline({
        scrollTrigger: {
          trigger: inicio,
          start: "top top",
          end: "+=1600",
          scrub: 1.3,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // NYVEX COMEÇA A CRESCER
      homeTl.to(homeTitulo, {
        scale: 1.12,
        letterSpacing: "0.25em",
        duration: 1,
        ease: "none",
      });

      // SLOGAN DESAPARECE
      homeTl.to(
        homeSubtitulo,
        {
          autoAlpha: 0,
          y: -30,
          duration: 0.8,
          ease: "none",
        },
        0.7
      );

      // NYVEX GANHA MAIS PRESENÇA
      homeTl.to(homeTitulo, {
        scale: 1.3,
        letterSpacing: "0.32em",
        duration: 1,
        ease: "none",
      });

      // HOME SOBE E SOME
      homeTl.to(homeTexto, {
        y: -120,
        autoAlpha: 0,
        scale: 1.4,
        duration: 1,
        ease: "power2.in",
      });

      // SEGURA UM POUCO
      homeTl.to({}, { duration: 0.5 });
    }, inicio);

    // =========================
    // ANIMAÇÃO DA COLEÇÃO
    // =========================

    const colecaoCtx = gsap.context(() => {
      gsap.set(frente, {
        autoAlpha: 0,
        y: 160,
        scale: 0.86,
        rotate: -2,
      });

      gsap.set(costas, {
        autoAlpha: 0,
        y: 170,
        scale: 0.86,
        rotate: 2,
      });

      gsap.set(logo, {
        autoAlpha: 0,
        x: -80,
        y: 100,
        scale: 0.82,
      });

      gsap.set(manga, {
        autoAlpha: 0,
        x: 90,
        y: 90,
        scale: 0.82,
      });

      gsap.set(etiqueta, {
        autoAlpha: 0,
        y: 120,
        scale: 0.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: colecao,
          start: "top top",
          end: "+=3400",
          scrub: 1.35,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // TEXTO INICIAL SOME
      tl.to(texto, {
        y: -170,
        autoAlpha: 0,
        duration: 1,
        ease: "none",
      });

      // FRENTE
      tl.to(
        frente,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1.1,
          ease: "power2.out",
        },
        0.6
      );

      // COSTAS
      tl.to(costas, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.1,
        ease: "power2.out",
      });

      // DETALHE DO PEITO
      tl.to(logo, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
      });

      // MANGA
      tl.to(manga, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
      });

      // ETIQUETA
      tl.to(etiqueta, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
      });

      // SEGURA A COMPOSIÇÃO
      tl.to({}, { duration: 0.8 });
    }, colecao);

    // =========================
    // ANIMAÇÃO DO SOBRE
    // =========================

    const sobreCtx = gsap.context(() => {
      gsap.set(sobreIntro, {
        autoAlpha: 1,
        y: 0,
      });

      gsap.set(sobreTexto, {
        autoAlpha: 0,
        y: 100,
      });

      gsap.set(sobreFinal, {
        autoAlpha: 0,
        y: 120,
        scale: 0.9,
      });

      const sobreTl = gsap.timeline({
        scrollTrigger: {
          trigger: sobre,
          start: "top top",
          end: "+=2800",
          scrub: 1.3,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ABERTURA SOME
      sobreTl.to(sobreIntro, {
        y: -100,
        autoAlpha: 0,
        duration: 1,
        ease: "none",
      });

      // FILOSOFIA APARECE
      sobreTl.to(sobreTexto, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      sobreTl.to({}, { duration: 0.8 });

      // FILOSOFIA SOME
      sobreTl.to(sobreTexto, {
        y: -100,
        autoAlpha: 0,
        duration: 1,
        ease: "none",
      });

      // FINAL APARECE
      sobreTl.to(sobreFinal, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });

      sobreTl.to({}, { duration: 1 });
    }, sobre);

    // =========================
    // RECALCULA O SCROLL
    // =========================

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      window.clearTimeout(refreshTimer);

      homeCtx.revert();
      colecaoCtx.revert();
      sobreCtx.revert();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* =========================
          MENU
      ========================= */}

      <header className="fixed left-0 top-0 z-[100] flex w-full items-center justify-between px-8 py-6 md:px-12">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-[0.35em] md:text-xl"
        >
          NYVEX
        </a>

        <nav className="hidden gap-10 text-xs tracking-[0.25em] text-zinc-400 md:flex">
          <a href="#inicio" className="transition hover:text-white">
            INÍCIO
          </a>

          <a href="#colecao" className="transition hover:text-white">
            COLEÇÃO
          </a>

          <a href="#sobre" className="transition hover:text-white">
            SOBRE
          </a>

          <a href="#contato" className="transition hover:text-white">
            CONTATO
          </a>
        </nav>
      </header>

      {/* =========================
          HOME
      ========================= */}

      <section
        ref={inicioRef}
        id="inicio"
        className="relative h-screen overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div ref={homeTextoRef} className="w-full text-center">
            <p className="mb-5 text-[10px] tracking-[0.55em] text-zinc-600 md:text-xs">
              EST. 2026
            </p>

            <h1
              ref={homeTituloRef}
              className="text-6xl font-bold text-white sm:text-7xl md:text-9xl lg:text-[10rem]"
            >
              NYVEX
            </h1>

            <p
              ref={homeSubtituloRef}
              className="mx-auto mt-7 max-w-[300px] text-[8px] leading-5 tracking-[0.22em] text-zinc-500 sm:max-w-none sm:text-[9px] sm:tracking-[0.4em] md:text-sm"
            >
              IDENTIDADE CRIADA NO SILÊNCIO DA ESCURIDÃO
            </p>
          </div>
        </div>

        {/* DETALHES LATERAIS */}
        <div className="pointer-events-none absolute left-8 top-1/2 hidden h-px w-16 bg-white/10 md:block" />

        <div className="pointer-events-none absolute right-8 top-1/2 hidden h-px w-16 bg-white/10 md:block" />

        {/* INDICAÇÃO */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[0.45em] text-zinc-700 md:text-[9px]">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* =========================
          COLEÇÃO
      ========================= */}

      <section
        ref={colecaoRef}
        id="colecao"
        className="relative h-screen overflow-hidden border-t border-white/10 bg-black"
      >
        {/* TEXTO INICIAL */}
        <div className="absolute left-1/2 top-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2">
          <div
            ref={textoRef}
            className="mx-auto max-w-5xl px-6 text-center"
          >
            <p className="mb-5 text-[10px] tracking-[0.5em] text-zinc-500 md:text-xs">
              NYVEX / COLLECTION 001
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-7xl">
              NÃO É SÓ UMA ESTAMPA.
              <br />
              É PRESENÇA.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
              Explore cada detalhe da peça conforme a coleção se revela.
            </p>
          </div>
        </div>

        {/* FRENTE */}
        <div className="absolute left-[31%] top-[43%] z-10 -translate-x-1/2 -translate-y-1/2">
          <div ref={frenteRef}>
            <img
              src="/camisetas/frente.png"
              alt="Frente da camiseta NYVEX"
              draggable={false}
              className="block w-[310px] max-w-none select-none md:w-[440px] lg:w-[500px]"
            />
          </div>
        </div>

        {/* COSTAS */}
        <div className="absolute left-[59%] top-[39%] z-20 -translate-x-1/2 -translate-y-1/2">
          <div ref={costasRef}>
            <img
              src="/camisetas/costas.png"
              alt="Costas da camiseta NYVEX"
              draggable={false}
              className="block w-[330px] max-w-none select-none md:w-[470px] lg:w-[540px]"
            />
          </div>
        </div>

        {/* DETALHE DO PEITO */}
        <div className="absolute left-[16%] top-[76%] z-30 -translate-x-1/2 -translate-y-1/2">
          <div ref={logoRef}>
            <img
              src="/camisetas/detalhe-logo.png"
              alt="Detalhe do logo NYVEX"
              draggable={false}
              className="block w-[145px] max-w-none select-none md:w-[210px]"
            />
          </div>
        </div>

        {/* MANGA */}
        <div className="absolute left-[77%] top-[68%] z-30 -translate-x-1/2 -translate-y-1/2">
          <div ref={mangaRef}>
            <img
              src="/camisetas/detalhe-manga.png"
              alt="Detalhe da manga NYVEX"
              draggable={false}
              className="block w-[155px] max-w-none select-none md:w-[220px]"
            />
          </div>
        </div>

        {/* ETIQUETA */}
        <div className="absolute left-[50%] top-[82%] z-30 -translate-x-1/2 -translate-y-1/2">
          <div ref={etiquetaRef}>
            <img
              src="/camisetas/detalhe-etiqueta.png"
              alt="Etiqueta NYVEX"
              draggable={false}
              className="block w-[185px] max-w-none select-none md:w-[260px]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.45em] text-zinc-700">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* =========================
          SOBRE
      ========================= */}

      <section
        ref={sobreRef}
        id="sobre"
        className="relative h-screen overflow-hidden border-t border-white/10 bg-black"
      >
        {/* ABERTURA */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            ref={sobreIntroRef}
            className="mx-auto max-w-6xl text-center"
          >
            <p className="mb-6 text-[10px] tracking-[0.55em] text-zinc-600 md:text-xs">
              SOBRE A NYVEX
            </p>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              A NYVEX NASCEU PARA
              <br />
              TRANSFORMAR IDEIAS
              <br />
              EM IDENTIDADE.
            </h2>
          </div>
        </div>

        {/* FILOSOFIA */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            ref={sobreTextoRef}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-xl leading-9 text-zinc-400 md:text-2xl md:leading-[1.7]">
              Não existe um único tema, símbolo ou estilo
              <br className="hidden md:block" />
              que defina a NYVEX.
            </p>

            <p className="mx-auto mt-10 max-w-3xl text-sm leading-8 text-zinc-500 md:text-lg">
              Cada criação parte de uma ideia diferente.
              <br />
              Fé, arte, cultura, intensidade, personalidade —
              <br className="hidden md:block" />
              o que importa é que cada peça tenha algo a dizer.
            </p>

            <div className="mx-auto my-12 h-px w-20 bg-white/20" />

            <p className="text-xs tracking-[0.35em] text-zinc-600">
              UMA CAMISETA PODE SER MAIS DO QUE AQUILO QUE VOCÊ VESTE.
            </p>
          </div>
        </div>

        {/* FINAL */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            ref={sobreFinalRef}
            className="mx-auto max-w-6xl text-center"
          >
            <p className="mb-7 text-[10px] tracking-[0.5em] text-zinc-600 md:text-xs">
              MAIS DO QUE UMA PEÇA
            </p>

            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-8xl">
              PODE SER PARTE
              <br />
              DE QUEM VOCÊ É.
            </h2>

            <div className="mx-auto mt-14 h-px w-24 bg-white/20" />

            <p className="mt-10 text-xl font-bold tracking-[0.5em]">
              NYVEX
            </p>

            <p className="mt-4 text-[10px] tracking-[0.35em] text-zinc-600 md:text-xs">
              IDENTIDADE CRIADA NO SILÊNCIO DA ESCURIDÃO
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.45em] text-zinc-700">
          OUR IDENTITY
        </div>
      </section>

      {/* =========================
          CONTATO
      ========================= */}

      <section
        id="contato"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-t border-white/10 bg-black px-6"
      >
        {/* NYVEX GIGANTE AO FUNDO */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <p className="select-none whitespace-nowrap text-[28vw] font-black tracking-[-0.08em] text-white/[0.025]">
            NYVEX
          </p>
        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-7 text-[10px] tracking-[0.55em] text-zinc-600 md:text-xs">
            FALE COM A NYVEX
          </p>

          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            VIU UMA PEÇA
            <br />
            QUE É A SUA CARA?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
            Fale diretamente com a NYVEX.
            <br />
            Consulte modelos, tamanhos e disponibilidade.
          </p>

          {/* BOTÕES */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511966728860"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[230px] items-center justify-between border border-white bg-white px-7 py-5 text-xs font-bold tracking-[0.3em] text-black transition duration-300 hover:bg-transparent hover:text-white"
            >
              WHATSAPP

              <span className="ml-8 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://www.instagram.com/nyvex_vx?stkn=NWk1MTc0eGM5bDNq"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[230px] items-center justify-between border border-white/20 px-7 py-5 text-xs font-bold tracking-[0.3em] text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              INSTAGRAM

              <span className="ml-8 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* ASSINATURA */}
          <div className="mx-auto mt-16 h-px w-16 bg-white/20" />

          <p className="mt-8 text-sm font-bold tracking-[0.45em]">
            NYVEX
          </p>

          <p className="mt-4 text-[9px] tracking-[0.35em] text-zinc-700 md:text-[10px]">
            IDENTIDADE CRIADA NO SILÊNCIO DA ESCURIDÃO
          </p>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-7 left-0 z-10 flex w-full items-center justify-between px-8 text-[8px] tracking-[0.25em] text-zinc-700 md:px-12 md:text-[9px]">
          <p>© 2026 NYVEX</p>

          <a
            href="#inicio"
            className="transition hover:text-white"
          >
            VOLTAR AO TOPO ↑
          </a>
        </div>
      </section>
    </main>
  );
}