import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS_DATA, MILESTONES_TIMELINE, TESTIMONIALS_DATA } from '../constants';
import { ArrowRightIcon, CpuChipIcon, StarIcon } from '../components/Icons';
import type { Testimonial } from '../types';
import ProjectMain from '../assets/images/ProjectMain.jpeg'
import Map from '../assets/images/SingaporeMap.png'

const HeroSection = () => (
    <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${ProjectMain})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4 sm:px-6 md:px-12 lg:px-24">
        <p className="text-sm sm:text-base lg:text-lg">Our Projects</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-2 leading-tight max-w-2xl">Engineering a Connected Singapore.</h1>
        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-gray-200">
          Here, we present the projects that define our capabilities. From complex electrical engineering to large-scale power systems, these works are a testament to our role in building a connected Singapore.
        </p>
      </div>
    </div>
);

const MilestonesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.4 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const milestoneData = MILESTONES_TIMELINE.map((year, index) => {
        const isUpper = index % 2 === 0;
        return {
            year,
            isUpper,
            imageUrl: `https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=400&h=300&fit=crop&seed=${year}`,
            x: (index * 200) + 100,
            y: isUpper ? 150 : 250,
        };
    });

    const pathD = milestoneData.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return (
        <div ref={sectionRef} className="relative py-12 sm:py-16 lg:py-24 bg-uw-dark">
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundColor:'white'}}
                >
            </div>
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative container mx-auto px-4 sm:px-6 text-center" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23E97522\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 text-white" style={{color:'#E97522'}}>Legacy of Milestones</h2>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative w-full max-w-6xl mx-auto" style={{aspectRatio: '1200 / 500'}}>
                    <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute inset-0">
                        <path d={pathD} stroke="#E97522" strokeWidth="4" fill="none" />
                        {milestoneData.map(m => (
                           <g key={`group-${m.year}`}>
                             <circle cx={m.x} cy={m.y} r="8" fill="white" stroke="#E97522" strokeWidth="4" />
                             <circle cx={m.x} cy={m.y} r="3" fill="#1A1A1A" />
                           </g>
                        ))}
                    </svg>

                    {milestoneData.map((m, index) => {
                        const xPercent = (m.x / 1200) * 100;
                        const yPercent = (m.y / 400) * 100;

                        return (
                            <div 
                                key={`item-${m.year}`}
                                className="absolute"
                                style={{ 
                                    left: `${xPercent}%`, 
                                    top: `${yPercent}%`,
                                    transform: `translate(-50%, -50%) translateY(${isVisible ? '0' : '40px'})`,
                                    width: '12rem',
                                    opacity: isVisible ? 1 : 0,
                                    transition: 'opacity 700ms ease-out, transform 700ms ease-out',
                                    transitionDelay: `${index * 300}ms`
                                }}
                            >
                                <div className={`absolute w-full left-1/2 -translate-x-1/2 ${m.isUpper ? 'bottom-8' : 'top-8'}`}>
                                     <div className="p-1.5 border-[6px] border-uw-orange rounded-2xl bg-black/30 backdrop-blur-sm">
                                        <img src={m.imageUrl} alt={`Milestone ${m.year}`} className="rounded-lg w-full object-cover aspect-[4/3]" />
                                    </div>
                                </div>
                                <p className={`absolute font-bold text-xl lg:text-2xl text-white left-1/2 -translate-x-1/2 ${m.isUpper ? 'top-8' : 'bottom-8'}`}>
                                    {m.year}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8">
                    {milestoneData.map((m, index) => (
                        <div key={`mobile-${m.year}`} className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-uw-orange rounded-full border-4 border-white"></div>
                            <div className="flex-1">
                                <p className="text-uw-orange font-bold text-lg">{m.year}</p>
                                <div className="mt-2">
                                    <img src={m.imageUrl} alt={`Milestone ${m.year}`} className="rounded-lg w-full max-w-xs object-cover aspect-[4/3]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectsGallery = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 8;
    const totalPages = Math.ceil(PROJECTS_DATA.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = PROJECTS_DATA.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="py-12 sm:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {currentProjects.map((project, index) => (
                        <div key={index} className="bg-uw-grey-2 rounded-lg overflow-hidden shadow-lg group">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="p-4 sm:p-6">
                                <p className="text-xs sm:text-sm text-uw-orange font-semibold">{project.category}</p>
                                <h3 className="text-lg sm:text-xl font-bold mt-2 text-uw-dark">{project.title}</h3>
                                <p className="text-xs sm:text-sm text-uw-grey-1">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center items-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium ${currentPage === number ? 'bg-uw-orange text-white' : 'bg-uw-grey-3 text-uw-dark hover:bg-gray-300'}`}
                        >
                            {number}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button onClick={() => paginate(currentPage + 1)} className="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium flex items-center space-x-2 bg-uw-grey-3 text-uw-dark hover:bg-gray-300">
                            <span className="hidden sm:inline">Next Page</span>
                            <span className="sm:hidden">Next</span>
                            <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const defaultTestimonial = TESTIMONIALS_DATA.find(t => t.name === 'Mr. Benjamin Lee') || TESTIMONIALS_DATA[0];
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial>(defaultTestimonial);

    const testimonialToDisplay = selectedTestimonial;

    return (
        <div 
            className="py-12 sm:py-16 lg:py-24 bg-uw-grey-3" 
            onMouseLeave={() => setSelectedTestimonial(defaultTestimonial)}
        >
            <div className="container mx-auto px-4 sm:px-6 text-center" >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 text-uw-dark" >Voices Of Trust !</h2>
                
                {/* Desktop Map View */}
                <div className="hidden lg:block relative max-w-5xl mx-auto min-h-[40rem]">
                    <img 
                        src={Map} 
                        alt="Singapore Map Background" 
                        className="w-full h-auto"
                    />

                    {/* Floating Avatars */}
                    {TESTIMONIALS_DATA.map(testimonial => (
                        <div 
                            key={testimonial.name} 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-30"
                            style={{ top: testimonial.position.top, left: testimonial.position.left }}
                            onMouseEnter={() => setSelectedTestimonial(testimonial)}
                        >
                            <img 
                                src={testimonial.avatarUrl} 
                                alt={testimonial.name} 
                                className={`w-16 h-16 rounded-full border-4 object-cover transition-all duration-300 shadow-lg ${testimonialToDisplay.name === testimonial.name ? 'border-yellow-400 scale-125 z-20' : 'border-uw-orange'}`}
                            />
                        </div>
                    ))}

                    {/* Testimonial Card */}
                    {testimonialToDisplay && (
                         <div 
                            key={testimonialToDisplay.name}
                            className="absolute w-[28rem] z-10 animate-push-in"
                            style={{ top: '35%', left: '55%'}}
                        >
                            <div className="relative pt-12">
                                {/* Orange Header */}
                                <div className="bg-uw-orange text-black p-4 rounded-t-lg h-24">
                                    <div className="max-w-[70%]">
                                        <h3 className="font-bold text-lg truncate">{testimonialToDisplay.name}</h3>
                                        <p className="text-sm truncate">{testimonialToDisplay.location}</p>
                                        <div className="flex items-center bg-uw-dark rounded-full px-2 py-0.5 mt-2 space-x-0.5 w-max">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <StarIcon key={i} className={`w-4 h-4 ${i < testimonialToDisplay.rating ? 'text-yellow-400' : 'text-gray-500'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Quote buty */}
                                <div className="bg-uw-dark text-white p-6 rounded-b-lg shadow-xl font-serif">
                                    <p className="text-base leading-relaxed text-left">
                                        "{testimonialToDisplay.quote}"
                                    </p>
                                </div>
                                {/* Avatar on top */}
                                <img 
                                    src={testimonialToDisplay.avatarUrl} 
                                    alt={testimonialToDisplay.name}
                                    className="absolute w-24 h-24 rounded-full border-4 border-uw-orange object-cover top-0 right-4 z-20 shadow-lg"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile Testimonials */}
                <div className="lg:hidden space-y-6">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-6 text-left">
                            <div className="flex items-center space-x-4 mb-4">
                                <img 
                                    src={testimonial.avatarUrl} 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-4 border-uw-orange object-cover"
                                />
                                <div>
                                    <h3 className="font-bold text-lg text-uw-dark">{testimonial.name}</h3>
                                    <p className="text-sm text-uw-grey-1">{testimonial.location}</p>
                                    <div className="flex items-center space-x-1 mt-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarIcon key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-uw-grey-1 leading-relaxed text-sm sm:text-base">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div>
            <HeroSection />
            <MilestonesSection />
            <h2 className="text-4xl font-bold text-center mt-8 text-uw-orange" style={{paddingTop:'50px'}}>Made By United Works</h2>
            <ProjectsGallery />
            <TestimonialsSection />
        </div>
    );
};

export default Projects;