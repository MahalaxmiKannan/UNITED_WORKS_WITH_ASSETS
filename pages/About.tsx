import React from 'react';
import { SUCCESS_TIMELINE } from '../constants';
import AboutMain from '../assets/images/AboutMain.jpg'
import Vision from '../assets/images/2021 Kampong Java Re-bar to Concrete Pipe Laying.jpg'
import Mission from '../assets/images/Cable Lay 3.jpg'
import Satisfaction from '../assets/images/IMG-20250906-WA0102.jpg'
import Reliability from '../assets/images/IMG_1127.jpg'

const HeroSection = () => (
    <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${AboutMain  })` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-4 leading-tight">Connecting Cities.<br/>Empowering Communities.</h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-200">
          At United Works Pte Ltd, we specialize in electrical engineering, infrastructure cabling, power systems, and project management that keeps Singapore's future powered and connected.
        </p>
      </div>
    </div>
  );

const WhoWeAreSection = () => (
    <div className="py-12 sm:py-16 lg:py-20 bg-uw-orange bg-opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23E97522\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-uw-grey-1 leading-relaxed text-sm sm:text-base">
          The company, incorporated in 2007 provides infrastructure, underground civil works and cable installation to support networks in the power and telecommunication industry. We are built with the mindset to be united at work. Our strength in being able to deliver our services comes from our experienced, qualified and understanding staff.
        </p>
      </div>
    </div>
  );
  
const TimelineSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-uw-dark">Our Line of Success</h2>
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-uw-orange rounded-full"></div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-16">
            {SUCCESS_TIMELINE.map((event, index) => (
              <React.Fragment key={event.year}>
                {index % 2 === 0 ? (
                  <>
                    <div className="text-right pr-8 relative">
                      <div className="absolute right-[-2.125rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-uw-orange rounded-full z-10"></div>
                      <p className="text-uw-orange font-bold text-xl lg:text-2xl">{event.year}</p>
                      <h3 className="font-semibold text-lg lg:text-xl mt-1 text-uw-dark">{event.title}</h3>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                     <div className="text-left pl-8 relative">
                       <div className="absolute left-[-2.125rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-uw-orange rounded-full z-10"></div>
                       <p className="text-uw-orange font-bold text-xl lg:text-2xl">{event.year}</p>
                       <h3 className="font-semibold text-lg lg:text-xl mt-1 text-uw-dark">{event.title}</h3>
                     </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {SUCCESS_TIMELINE.map((event, index) => (
              <div key={event.year} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-uw-orange rounded-full border-4 border-white"></div>
                <div className="flex-1">
                  <p className="text-uw-orange font-bold text-lg">{event.year}</p>
                  <h3 className="font-semibold text-base text-uw-dark">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

const VisionMissionSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-uw-grey-2">
      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1">
          <img src={Vision} alt="Vision" className="rounded-lg shadow-xl mb-4 sm:mb-6 w-full h-auto"/>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-uw-dark">Vision</h2>
          <p className="text-uw-grey-1 leading-relaxed text-sm sm:text-base lg:text-lg">Create <b className="text-lg sm:text-xl lg:text-2xl">I</b>nnovative & <b className="text-lg sm:text-xl lg:text-2xl">S</b>ustainable <b className="text-lg sm:text-xl lg:text-2xl">G</b>rowth for the Future of our Environment</p>
        </div>
        <div className="order-1 md:order-2">
          <img src={Mission} alt="Mission" className="rounded-lg shadow-xl mb-4 sm:mb-6 w-full h-auto"/>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-uw-dark">Mission</h2>
          <p className="text-uw-grey-1 leading-relaxed text-sm sm:text-base lg:text-lg">Provide relevant <b className="text-lg sm:text-xl lg:text-2xl">S</b>kills and <b className="text-lg sm:text-xl lg:text-2xl">I</b>nnovative <b className="text-lg sm:text-xl lg:text-2xl">S</b>olutions for Sustainable Growth</p>
        </div>
      </div>
    </div>
  );

const WhyUsSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-uw-dark">Why Us?</h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
                 <div className="order-1 md:order-first">
                     <img src={Reliability} alt="Reliability" className="rounded-lg shadow-xl w-full h-auto"/>
                 </div>
                <div className="order-2 md:order-last md:pl-8 lg:pl-12">
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-uw-dark">Reliability</h3>
                    <p className="mt-4 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
                    United Works Pte Ltd employs relevant qualified personnel with the requisite skills and expertise necessary to operate the machines and provide relevant facilities/equipment to provide the services needed. We have a continuous programme to replace aging equipment. All equipment are of less than 5 years.
                    </p>
                </div>
            </div>
             <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-uw-dark">Satisfaction</h3>
                    <p className="mt-4 text-uw-grey-1 leading-relaxed text-sm sm:text-base">
                        United Works Pte Ltd has steadily maintained sound reputation for delivering high quality works with excellent customer services.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img src={Satisfaction} alt="Satisfaction" className="rounded-lg shadow-xl w-full h-auto"/>
                </div>
            </div>
        </div>
    </div>
);


const About = () => {
    return (
        <div>
            <HeroSection />
            <WhoWeAreSection />
            <TimelineSection />
            <VisionMissionSection />
            <WhyUsSection />
        </div>
    );
};

export default About;