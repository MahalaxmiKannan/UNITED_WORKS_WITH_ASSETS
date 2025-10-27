import React, { useState } from "react";
import { COMPANY_STATS, ESG_DATA } from "../constants";
import type { EsgItem } from "../types";
import { ArrowRightIcon } from "../components/Icons";
import AnimatedSection from "../components/AnimatedSection";
import aboutimg from "../assets/images/WhatsApp Image 2025-09-06 at 14.14.36_5c8c50f7.jpg";
import culimg from "../assets/images/15 Nov 21 N105 Thomson Rd Toolbox mtg.jpg";
import legimg from "../assets/images/WhatsApp Image 2023-12-30 at 12.40.14 PM.jpeg";
import gloico from "../assets/images/globe-icon.png";
import HomeMain from "../assets/videos/6414069-uhd_3840_2160_25fps.mp4";

const HeroSection = () => (
  <div className="w-full">
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HomeMain} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-start justify-start h-full text-white p-12 max-w-7xl mx-auto w-full">
        <p className="text-sm sm:text-base font-semibold tracking-wider">
          Team Work | Integrity | Commitment
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-4 leading-tight max-w-2xl">
          Connecting Cities.
          <br />
          Empowering Communities.
        </h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-gray-200">
          At United Works Pte Ltd, we specialize in electrical engineering,
          infrastructure cabling, power systems, and project management that
          keeps Singapore's future powered and connected.
        </p>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="py-20 bg-uw-orange bg-opacity-10 w-full">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-uw-dark">
        Company at a Glance
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {COMPANY_STATS.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-3 sm:p-4 lg:p-5 bg-white rounded-full shadow-lg border-2 border-uw-orange transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
              <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-uw-dark" />
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 sm:mt-4 text-uw-dark">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm lg:text-base text-uw-grey-1 mt-1 text-center px-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="py-24 bg-white w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-lg sm:text-xl font-semibold text-uw-orange">
            About United Works
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-uw-dark">
            A Trusted Leader in Infrastructure
          </h2>
          <p className="mt-4 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
            United Works Pte. Ltd. is a trusted leader in Singapore's civil
            engineering and infrastructure sector, specializing in underground
            cable and pipe installation, road reinstatement, and large-scale
            infrastructure development projects. Since our establishment, we
            have built a reputation for delivering reliable, high-quality
            engineering solutions that underpin the city's vibrant growth and
            connectivity.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={aboutimg}
            alt="About United Works"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
);

const CultureSection = () => (
  <div className="py-24 bg-uw-grey-2 w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src={culimg}
            alt="Our Culture"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
        <div className="order-1 md:order-2 md:pl-8 lg:pl-12">
          <h3 className="text-lg sm:text-xl font-semibold text-uw-orange">
            Our Culture
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-uw-dark">
            Collaboration, Innovation, and Integrity
          </h2>
          <p className="mt-4 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
            United Works fosters a culture of collaboration, innovation, and
            integrity. Safety and accountability are central to everything they
            do. The company values continuous learning and diverse perspectives.
            Inclusivity and mutual respect create a strong community within and
            beyond the workforce. Together, they deliver trusted, sustainable
            infrastructure solutions with excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const LegacySection = () => (
  <div className="py-24 bg-white w-full">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-lg sm:text-xl font-semibold text-uw-orange">
            Our Legacy
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-uw-dark">
            A Legacy Built on Trust
          </h2>
          <p className="mt-4 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
            United Works Pte. Ltd. has built a trusted reputation through over
            15 years of quality infrastructure work. We focus on safety,
            integrity, and client satisfaction at every step. Our projects go
            beyond construction to foster lasting partnerships. Together, we
            build Singapore's future with dedication and excellence.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={legimg}
            alt="Legacy of Trust"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
);

const EsgSection = () => {
  const [activeEsg, setActiveEsg] = useState<EsgItem>(ESG_DATA[0]);

  const [subtitle, title] = activeEsg.fullTitle.split("\n");

  return (
    <div className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-x-16">
          {/* Left Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-uw-orange text-white rounded-lg p-4 sm:p-6 lg:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {ESG_DATA.map((item) => (
                  <li key={item.id} className="relative">
                    {activeEsg.id === item.id && (
                      <div className="absolute left-[-1rem] sm:left-[-1.5rem] lg:left-[-2rem] top-1/2 -translate-y-1/2 h-0.5 w-4 sm:w-5 lg:w-6 bg-white"></div>
                    )}
                    <button
                      onClick={() => setActiveEsg(item)}
                      className="w-full text-left flex items-baseline group"
                    >
                      <span
                        className={`font-mono text-sm sm:text-base mr-3 sm:mr-4 transition-opacity duration-300 ${
                          activeEsg.id === item.id
                            ? "opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                        }`}
                      >
                        {item.id}
                      </span>
                      <span
                        className={`font-semibold text-lg sm:text-xl lg:text-2xl transition-opacity duration-300 ${
                          activeEsg.id === item.id
                            ? "opacity-100"
                            : "opacity-75 group-hover:opacity-100"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 xl:col-span-9 flex items-center">
            <div
              key={activeEsg.id}
              className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center animate-push-in w-full"
            >
              <div className="order-2 md:order-1">
                <p className="text-xs sm:text-sm font-bold text-uw-orange tracking-widest">
                  {subtitle.toUpperCase()}
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-uw-orange">
                  {title}
                </h2>
                <p className="mt-4 sm:mt-6 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
                  {activeEsg.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-uw-orange hover:text-orange-600 group mt-6 sm:mt-8 text-sm tracking-widest"
                >
                  LEARN MORE
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={activeEsg.imageUrl}
                  alt={activeEsg.title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[5/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <CultureSection />
      </AnimatedSection>
      <AnimatedSection>
        <LegacySection />
      </AnimatedSection>
      <AnimatedSection>
        <EsgSection />
      </AnimatedSection>
    </div>
  );
};

export default Home;
