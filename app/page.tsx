"use client";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import Table from "./components/Table";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<IParallax>(null);

  const scrollToSection = (sectionId: string) => {
    const scrollContainer = parallaxRef.current?.container?.current;
    if (!scrollContainer) return;

    let targetOffset = 0;
    switch (sectionId) {
      case "home":
        targetOffset = 0;
        break;
      case "leaderboard":
        targetOffset = scrollContainer.scrollHeight * (2 / 5);
        break;
      case "about":
        targetOffset = scrollContainer.scrollHeight * (1 / 5);
        break;
      default:
        return;
    }

    scrollContainer.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = parallaxRef.current?.container?.current;
      const scrollTop = scrollContainer?.scrollTop || 0;

      if (containerRef.current) {
        const loopWidth = 2520;
        const offset = (scrollTop * 1) % loopWidth;
        containerRef.current.style.transform = `translateX(-${offset}px)`;
        containerRef.current.style.transition = "0";
      }

      if (moonRef.current) {
        const moonOffset = scrollTop * 0.2;
        moonRef.current.style.transform = `translate(-${moonOffset}px, 2px)`;
      }
    };

    const scrollContainer = parallaxRef.current?.container?.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
    initialInView: false,
    rootMargin: "0px 0px -340px 0px",
  });

  const cardsAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="min-h-screen  text-white w-screen box-border">
      <Parallax ref={parallaxRef} pages={5} className=" box-border">
        <ParallaxLayer
          factor={5}
          className="bg-gradient-to-b from-black to-[#191E2A]"
        ></ParallaxLayer>
        <ParallaxLayer offset={0} className="w-full">
          <ParallaxLayer
            offset={0}
            className="relative z-10 py-[32px] px-[80px] h-max"
          >
            <header
              id="home"
              className="flex justify-center items-center gap-6 mb-[102px]"
            >
              <Button variant="text" onClick={() => scrollToSection("home")}>
                How It Works
              </Button>
              <Button onClick={() => scrollToSection("leaderboard")}>
                Buy Salt AI
              </Button>
            </header>
            <h1
              className={`${
                inView ? "gradient-text-secondary" : "gradient-text-primary"
              } text-[128px] font-medium transition-all duration-500`}
            >
              A new economic primitive for funding decentralized AI
            </h1>

            <p>
              We track, rank and pay for the best open source decentralized LLMs
              to compete against OpenAI
            </p>

            <div className="flex gap-[16px] mt-[32px]">
              <Button variant="outlined">Buy Spice AI</Button>
              <Button variant="text">Try Now</Button>
            </div>

            <div className="mt-[200px]">
              <animated.div
                ref={ref}
                style={cardsAnimation}
                className="flex gap-[32px] justify-center"
              >
                <Card title="1,873" subtitle="LLM models" />
                <Card title="$326,734" subtitle="Paid to data scientists" />
                <Card title="6,557" subtitle="Developers" />
              </animated.div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} factor={5} speed={-0.78}>
            <Image
              src="/planet.png"
              width={916}
              height={916}
              alt=""
              className="absolute right-0 top-0"
            />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer
          id="about"
          offset={1}
          className="flex  py-[32px] px-[80px]"
        >
          <div className="flex flex-col gap-12 justify-center items-start text-center max-w-[1150px]">
            <h3 className="text-start text-[64px] font-medium leading-[110%]">
              Crowdsourcing our collective intelligence to build the best AI
            </h3>

            <p className="text-start text-[24px] font-normal leading-[32px]">
              Open source AI has been lagging behind the likes of Google and
              OpenAI by billions of dollars. <br /> <br /> Salt aims to solve
              that by rewarding open source developers who contribute to the
              democratization of AI. We run competitions between AI models to
              find and reward the best AI models. As a result, our users will be
              able to access the latest cutting edge AI models.
            </p>

            <Button
              className="box-border px-[20px] text-[24px] py-[24px]"
              variant="outlined"
            >
              Use The Cutting Edge AI
            </Button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          id="leaderboard"
          offset={2}
          className="py-[32px] px-[80px]"
        >
          <Table />
        </ParallaxLayer>

        <ParallaxLayer offset={1.99} speed={0.2}>
          <Image
            src="/roket.png"
            height={750}
            width={226}
            alt="roket"
            className="absolute left-[25vw] bottom-0"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <div className="flex justify-center items-center h-full overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-24 sticky top-[30vh] will-change-transform"
            >
              <Image
                src="/solana.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/arweave.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/bittnsor.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/red-c.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/message.png"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/solana.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/arweave.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/bittnsor.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/red-c.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/message.png"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/solana.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/arweave.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/bittnsor.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/red-c.svg"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
              <Image
                src="/message.png"
                width={420}
                height={100}
                alt="Image"
                className="h-[100px] w-auto object-fit flex-shrink-0"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4}>
          <div
            ref={moonRef}
            className="absolute right-[-700px] top-[20%] -translate-y-1/2"
          >
            <Image src="/moon.png" width={400} height={400} alt="About Image" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.2}>
          <Image
            src="/earth.png"
            alt=""
            height={550}
            width={1000}
            className="absolute bottom-0 w-full"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={4} className=" box-border">
          <div className="flex flex-col gap-12 justify-center items-start text-center max-w-[1150px] py-[32px] px-[80px]">
            <h3 className="text-start text-[64px] font-medium leading-[110%]">
              Text here
            </h3>

            <p className="text-start text-[24px] font-normal leading-[32px]">
              Every month, we run a competition between all the AI models
              submitted on a leaderboard. The best model will be featured and
              will earn tokens.
            </p>

            <Button
              className="box-border px-[20px] text-[24px] py-[24px]"
              variant="outlined"
            >
              Read Whitepaper
            </Button>
          </div>

          <footer className="absolute py-[32px] px-[80px] w-full flex flex-col gap-4 divide-y-1 mb-[120px] bottom-0">
            <div className="flex justify-center items-center gap-32">
              <Button variant="text" onClick={() => scrollToSection("home")}>
                Home
              </Button>
              <Button
                variant="text"
                onClick={() => scrollToSection("leaderboard")}
              >
                Leaderboard
              </Button>
              <Button variant="text" onClick={() => scrollToSection("about")}>
                About
              </Button>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="size-[32px] rounded-full bg-[#8E8E8E]"></div>
                <div className="size-[32px] rounded-full bg-[#8E8E8E]"></div>
                <div className="size-[32px] rounded-full bg-[#8E8E8E]"></div>
              </div>
              <div>
                <Button
                  variant="text"
                  className="text-[12px] font-normal text-[#bebebe]"
                >
                  Terms of Use
                </Button>
                <Button
                  variant="text"
                  className="text-[12px] font-normal text-[#bebebe]"
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="text"
                  className="text-[12px] font-normal text-[#bebebe]"
                >
                  Cookie Policy
                </Button>
              </div>
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
