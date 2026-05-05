import React, { useEffect } from "react";
import Home from "./pages/Home";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Inicializa a rolagem suave global (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 1,
    });

    // Torna o lenis global para que os botões possam usá-lo para ancoragem
    window.lenis = lenis;

    // Sincroniza o Lenis com o ScrollTrigger do GSAP para evitar qualquer dessincronização
    lenis.on("scroll", ScrollTrigger.update);

    // Adiciona o Lenis no ticker do GSAP (o "coração" que bate a cada frame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desliga a suavização de lag padrão do GSAP para ele não brigar com o Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Limpeza de memória quando o componente for desmontado
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return <Home />;
}

export default App;