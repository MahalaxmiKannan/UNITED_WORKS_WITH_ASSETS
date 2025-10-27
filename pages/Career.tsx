import React, { useState } from 'react';
import { JOB_POSITIONS, BENEFITS_DATA, EMPLOYEE_TESTIMONIALS, COMPANY_STATS } from '../constants';
import type { JobPosition, EmployeeTestimonial } from '../types';
import { ArrowRightIcon, PlusIcon, XMarkIcon } from '../components/Icons';
import AnimatedSection from '../components/AnimatedSection';
import AboutMain from '../assets/images/AboutMain.jpg'

const HeroSection = () => (
    <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${AboutMain})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mt-4 leading-tight">Build Your Career<br/>With United Works</h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-200">
          Join our team of dedicated professionals and be part of Singapore's infrastructure development. We offer exciting career opportunities in civil engineering, project management, and technical services.
        </p>
      </div>
    </div>
);

const WhyJoinUsSection = () => (
    <div className="py-12 sm:py-16 lg:py-20 bg-uw-orange bg-opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23E97522\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">Why Join United Works?</h2>
        <p className="max-w-3xl mx-auto text-uw-grey-1 leading-relaxed text-sm sm:text-base mb-8 sm:mb-12">
          At United Works, we believe our people are our greatest asset. We foster a culture of collaboration, innovation, and integrity where every team member can thrive and grow.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-uw-orange bg-opacity-10 rounded-full">
                  <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-uw-orange" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-uw-dark">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-uw-grey-1 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
);

const CompanyCultureSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">Our Culture & Values</h2>
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-uw-orange rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-uw-dark mb-2">Safety First</h3>
                                <p className="text-uw-grey-1 text-sm sm:text-base">We prioritize the safety and wellbeing of our team members above all else, maintaining the highest safety standards across all projects.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-uw-orange rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-uw-dark mb-2">Collaboration</h3>
                                <p className="text-uw-grey-1 text-sm sm:text-base">We believe in the power of teamwork and foster an environment where diverse perspectives are valued and respected.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-uw-orange rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-uw-dark mb-2">Innovation</h3>
                                <p className="text-uw-grey-1 text-sm sm:text-base">We embrace new technologies and innovative solutions to deliver better outcomes for our clients and communities.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-uw-orange rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">4</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-uw-dark mb-2">Integrity</h3>
                                <p className="text-uw-grey-1 text-sm sm:text-base">We conduct business with honesty, transparency, and ethical practices, building trust with our clients and partners.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className="bg-uw-grey-2 rounded-lg p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-uw-dark">Company at a Glance</h3>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            {COMPANY_STATS.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="p-3 sm:p-4 bg-white rounded-lg shadow-sm mb-2 sm:mb-3">
                                        <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-uw-orange mx-auto" />
                                    </div>
                                    <p className="text-lg sm:text-xl font-bold text-uw-dark">{stat.value}</p>
                                    <p className="text-xs sm:text-sm text-uw-grey-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const JobListing: React.FC<{ job: JobPosition; isExpanded: boolean; onToggle: () => void }> = ({ job, isExpanded, onToggle }) => (
    <div className="bg-white rounded-lg shadow-lg border border-uw-grey-3 overflow-hidden">
        <div className="p-4 sm:p-6">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-uw-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-uw-grey-1 mb-3">
                        <span className="flex items-center">
                            <span className="font-medium">Department:</span> {job.department}
                        </span>
                        <span className="flex items-center">
                            <span className="font-medium">Location:</span> {job.location}
                        </span>
                        <span className="flex items-center">
                            <span className="font-medium">Type:</span> {job.type}
                        </span>
                        <span className="flex items-center">
                            <span className="font-medium">Experience:</span> {job.experience}
                        </span>
                    </div>
                    <p className="text-sm sm:text-base text-uw-grey-1 mb-4">{job.description}</p>
                </div>
                <button
                    onClick={onToggle}
                    className="ml-4 p-2 text-uw-orange hover:bg-uw-orange hover:text-white rounded-lg transition-colors duration-200"
                >
                    {isExpanded ? <XMarkIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                </button>
            </div>
            
            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-uw-grey-3">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-uw-dark mb-3">Requirements:</h4>
                            <ul className="space-y-2">
                                {job.requirements.map((req, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm text-uw-grey-1">
                                        <span className="text-uw-orange mt-1">•</span>
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-uw-dark mb-3">Benefits:</h4>
                            <ul className="space-y-2">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm text-uw-grey-1">
                                        <span className="text-uw-orange mt-1">•</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 bg-uw-orange text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center">
                            Apply Now
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </button>
                        <button className="flex-1 bg-white border border-uw-orange text-uw-orange font-semibold py-3 px-6 rounded-lg hover:bg-uw-orange hover:text-white transition-colors duration-200">
                            Save Job
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
);

const JobOpeningsSection = () => {
    const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

    const toggleJob = (jobId: string) => {
        const newExpanded = new Set(expandedJobs);
        if (newExpanded.has(jobId)) {
            newExpanded.delete(jobId);
        } else {
            newExpanded.add(jobId);
        }
        setExpandedJobs(newExpanded);
    };

    return (
        <div className="py-12 sm:py-16 lg:py-24 bg-uw-grey-2">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">Current Job Openings</h2>
                    <p className="max-w-2xl mx-auto text-uw-grey-1 text-sm sm:text-base">
                        Explore exciting career opportunities with United Works. We're looking for talented individuals to join our growing team.
                    </p>
                </div>

                <div className="space-y-6">
                    {JOB_POSITIONS.filter(job => job.isActive).map((job) => (
                        <JobListing
                            key={job.id}
                            job={job}
                            isExpanded={expandedJobs.has(job.id)}
                            onToggle={() => toggleJob(job.id)}
                        />
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-uw-grey-1 text-sm sm:text-base mb-4">
                        Don't see a position that matches your skills? We're always interested in hearing from talented professionals.
                    </p>
                    <button className="bg-uw-orange text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                        Submit Your Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

const EmployeeTestimonialsSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">What Our Employees Say</h2>
                <p className="max-w-2xl mx-auto text-uw-grey-1 text-sm sm:text-base">
                    Hear from our team members about their experiences working at United Works.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {EMPLOYEE_TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="bg-uw-grey-2 rounded-lg p-6 sm:p-8">
                        <div className="flex items-start space-x-4 mb-4">
                            <img 
                                src={testimonial.avatarUrl} 
                                alt={testimonial.name}
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-uw-orange object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-lg text-uw-dark">{testimonial.name}</h3>
                                <p className="text-uw-orange font-semibold text-sm">{testimonial.position}</p>
                                <p className="text-uw-grey-1 text-sm">{testimonial.department} • {testimonial.yearsAtCompany}</p>
                            </div>
                        </div>
                        <p className="text-uw-grey-1 text-sm sm:text-base leading-relaxed italic">
                            "{testimonial.quote}"
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ApplicationProcessSection = () => (
    <div className="py-12 sm:py-16 lg:py-24 bg-uw-orange bg-opacity-10">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-uw-dark">Our Application Process</h2>
                <p className="max-w-2xl mx-auto text-uw-grey-1 text-sm sm:text-base">
                    We've streamlined our hiring process to make it as smooth and transparent as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-uw-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl sm:text-2xl">1</span>
                    </div>
                    <h3 className="font-bold text-lg text-uw-dark mb-2">Apply Online</h3>
                    <p className="text-uw-grey-1 text-sm sm:text-base">Submit your application and resume through our online portal.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-uw-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl sm:text-2xl">2</span>
                    </div>
                    <h3 className="font-bold text-lg text-uw-dark mb-2">Initial Review</h3>
                    <p className="text-uw-grey-1 text-sm sm:text-base">Our HR team reviews your application within 3-5 business days.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-uw-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl sm:text-2xl">3</span>
                    </div>
                    <h3 className="font-bold text-lg text-uw-dark mb-2">Interview</h3>
                    <p className="text-uw-grey-1 text-sm sm:text-base">Meet with our team for technical and cultural fit interviews.</p>
                </div>
                <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-uw-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl sm:text-2xl">4</span>
                    </div>
                    <h3 className="font-bold text-lg text-uw-dark mb-2">Welcome Aboard</h3>
                    <p className="text-uw-grey-1 text-sm sm:text-base">Join our team and start your journey with United Works!</p>
                </div>
            </div>
        </div>
    </div>
);

const Career = () => {
    return (
        <div>
            <HeroSection />
            <AnimatedSection>
                <WhyJoinUsSection />
            </AnimatedSection>
            <AnimatedSection>
                <CompanyCultureSection />
            </AnimatedSection>
            <AnimatedSection>
                <JobOpeningsSection />
            </AnimatedSection>
            <AnimatedSection>
                <EmployeeTestimonialsSection />
            </AnimatedSection>
            <AnimatedSection>
                <ApplicationProcessSection />
            </AnimatedSection>
        </div>
    );
};

export default Career;
