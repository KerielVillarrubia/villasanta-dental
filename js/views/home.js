/**
 * HomeView Component
 * Renders the primary landing page, including the premium hero header,
 * the mission statement with horizontal stats, the interactive dark product categories,
 * the trust & quality mini-cards, and the seamless gradient CTA block.
 */
export function HomeView() {
    return `
        <!-- HERO BACKDROP SECTION -->
        <header class="relative min-h-screen flex items-center bg-cover bg-no-repeat bg-center md:bg-right-bottom" 
                style="background-image: url('hero-chair-bg.jpg'), url('./images/hero-chair-bg.jpg');">
            
            <!-- Left-to-right soft frosted gradient mask covering the text block for optimal legibility -->
            <div class="absolute inset-0 bg-gradient-to-r from-titanium via-titanium/85 to-transparent pointer-events-none z-0"></div>

            <!-- Left Aligned Value Proposition -->
            <div class="relative max-w-7xl mx-auto w-full px-8 md:px-12 py-32 z-10">
                <div class="max-w-2xl">
                    
                    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-cobalt leading-[1.1] tracking-tight mb-6">
                        Helping Dentists <br> 
                        <span class="text-cobalt">Build</span> <br> 
                        <span class="text-cyan">Reliable Clinics</span>
                    </h1>
                    
                    <p class="text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-lg mb-10">
                        Your trusted partner for quality equipment, smooth installation, and the ongoing support your daily practice depends on.
                    </p>
                    
                    <div class="flex space-x-4">
                        <button onclick="navigate('catalog')" class="bg-cyan text-white text-xs md:text-sm font-semibold tracking-wide px-6 py-3.5 rounded-md hover:bg-opacity-90 transition flex items-center space-x-2 shadow-sm">
                            <span>Explore Catalog</span>
                            <span>&rarr;</span>
                        </button>
                        <button onclick="navigate('contact')" class="bg-white/90 backdrop-blur-sm border border-silver text-cobalt text-xs md:text-sm font-semibold tracking-wide px-6 py-3.5 rounded-md hover:bg-titanium transition">
                            Request Quote
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bouncing Down Chevron scroll indicator -->
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer" onclick="document.getElementById('mission-section').scrollIntoView({behavior: 'smooth'})">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </header>

        <!-- Brand Mission Statement -->
        <section id="mission-section" class="tech-grid bg-white py-24 border-t border-silver relative overflow-hidden">
            <div class="max-w-4xl mx-auto px-8 text-center relative z-10">
                <p class="text-[10px] font-bold tracking-[0.25em] text-cyan mb-6 uppercase">Our Mission</p>
                <h2 class="text-3xl md:text-4xl font-semibold text-cobalt leading-[1.3] mb-8">
                    Providing the solid foundation every modern dental clinic deserves. We focus on <span class="text-cyan font-semibold">quality equipement</span> so that you can focus on <span class="text-cyan font-semibold">patient care.</span>
                </h2>
                <p class="text-gray-500 text-xs md:text-sm leading-relaxed mb-16 max-w-2xl mx-auto">
                    Every dental chair, every imaging system, every sterilization unit we deliver is a commitment to the practitioners who trust us — and the patients who trust them. We source and deliver equipment that meets high standards, so your clinic can operate with the confidence it deserves.
                </p>
                
                <!-- Pristine Horizontal Stats Bar Layout -->
                <div class="flex flex-row justify-between items-center max-w-3xl mx-auto border-t border-silver/60 pt-12 mt-12 gap-4">
                    <div class="flex-1 text-center">
                        <h3 class="text-3xl md:text-4xl font-bold text-cobalt mb-1">500+</h3>
                        <p class="text-[9px] tracking-[0.15em] text-gray-400 uppercase font-semibold">Clinics Equipped</p>
                    </div>
                    <div class="w-[1px] h-10 bg-silver/60"></div>
                    <div class="flex-1 text-center">
                        <h3 class="text-3xl md:text-4xl font-bold text-cobalt mb-1">15+</h3>
                        <p class="text-[9px] tracking-[0.15em] text-gray-400 uppercase font-semibold">Years of Experience</p>
                    </div>
                    <div class="w-[1px] h-10 bg-silver/60"></div>
                    <div class="flex-1 text-center">
                        <h3 class="text-3xl md:text-4xl font-bold text-cobalt mb-1">24/7</h3>
                        <p class="text-[9px] tracking-[0.15em] text-gray-400 uppercase font-semibold">Technical Support</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- EQUIPMENT CATEGORIES GRID SECTION (Dark Theme) -->
        <section class="bg-cobalt text-white py-24 relative overflow-hidden">
            <div class="absolute inset-0 opacity-[0.03] pointer-events-none tech-grid"></div>
            
            <div class="relative max-w-7xl mx-auto px-8 md:px-12 z-10">
                <div class="flex justify-between items-end mb-12">
                    <div>
                        <p class="text-cyan font-semibold text-xs tracking-[0.2em] uppercase mb-2">Equipment Categories</p>
                        <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for the Modern Clinic</h2>
                    </div>
                    <button onclick="navigate('catalog', 'all')" class="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white flex items-center space-x-1.5 transition">
                        <span>View Full Catalog</span>
                        <span class="text-sm">↗</span>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 border border-slate-800 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    
                    <div onclick="navigate('catalog', 'chairs')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=1000" 
                                alt="Dental Chairs" 
                                class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Chairs</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Dental Chairs</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">Precision-engineered operatory chairs with hydraulic lift systems.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                    <div onclick="navigate('catalog', 'imaging')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="./images/pano-home.jpg"
                                alt="Panoramic X-Rays" 
                                class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Imaging</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Panoramic X-Rays</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">Advanced digital imaging systems for comprehensive diagnostics.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                    <div onclick="navigate('catalog', 'sterilization')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="./images/autoclave-home.jpg"
                                alt="Autoclaves" 
                                class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Sterilization</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Autoclaves</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">Medical-grade sterilization units for uncompromising safety.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                    <div onclick="navigate('catalog', 'compressors')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="./images/compressor-home.jpg" 
                                alt="Compressors" 
                                class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Compressors</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Compressors</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">Oil-free dental compressors engineered for continuous operation.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                    <div onclick="navigate('catalog', 'suction')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="./images/suction-home.jpg" 
                                alt="Suction Systems" 
                                class="w-full h-full object-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Suction</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Suction Systems</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">High-performance evacuation systems for modern clinics.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                    <div onclick="navigate('catalog', 'accessories')" class="group relative min-h-[400px] cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-end p-8">
                        <div class="absolute inset-0 z-0">
                            <img src="./images/amalgamator-home.jpg" 
                                alt="Amalgamators" 
                                class="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-102 brightness-[0.4] group-hover:brightness-[0.45]" />
                            <div class="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
                        </div>
                        
                        <div class="relative z-10">
                            <span class="text-[9px] text-cyan font-bold tracking-widest uppercase mb-2 block">Accessories</span>
                            <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">Amalgamators</h3>
                            <p class="text-xs text-gray-400 mb-6 leading-relaxed max-w-sm">Precision mixing devices for consistent amalgam preparation.</p>
                            <span class="text-xs font-semibold text-cyan inline-flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Explore</span> <span class="text-sm">↗</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- TRUST / FEATURE MINI HORIZONTAL BOXES (3 Columns) -->
        <section class="bg-titanium py-16">
            <div class="max-w-7xl mx-auto px-8 md:px-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <!-- Box 1: Certified Quality -->
                    <div class="bg-white border border-silver rounded-2xl p-6 shadow-sm flex items-center space-x-5">
                        <div class="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-cobalt mb-0.5">Certified Quality</h4>
                            <p class="text-xs text-gray-400 leading-relaxed">All equipment meets ISO and FDA standards.</p>
                        </div>
                    </div>

                    <!-- Box 2: Worldwide Delivery -->
                    <div class="bg-white border border-silver rounded-2xl p-6 shadow-sm flex items-center space-x-5">
                        <div class="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-cobalt mb-0.5">Worldwide Delivery</h4>
                            <p class="text-xs text-gray-400 leading-relaxed">Professional logistics and on-site installation.</p>
                        </div>
                    </div>

                    <!-- Box 3: 24/7 Support -->
                    <div class="bg-white border border-silver rounded-2xl p-6 shadow-sm flex items-center space-x-5">
                        <div class="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-cobalt mb-0.5">24/7 Support</h4>
                            <p class="text-xs text-gray-400 leading-relaxed">Dedicated technical assistance whenever you need it.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- PORTAL CALL-TO-ACTION (Seamless Gradient Merger to Cobalt Footer) -->
        <section class="bg-gradient-to-b from-titanium via-cobalt/95 to-cobalt pb-24 pt-8 px-8 md:px-12">
            <div class="max-w-7xl mx-auto">
                <div class="relative bg-cobalt/40 backdrop-blur-md border border-silver/10 rounded-[2rem] py-20 px-8 md:px-12 text-center overflow-hidden shadow-xl">
                    <div class="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid"></div>
                    <div class="relative z-10 max-w-3xl mx-auto">
                        <p class="text-cyan font-semibold text-xs tracking-[0.25em] uppercase mb-4">Ready to equip your clinic?</p>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Start building the clinic your patients deserve.
                        </h2>
                        <p class="text-sm md:text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            Browse our full equipment catalog or get a personalized quote from our specialists.
                        </p>
                        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <button onclick="navigate('catalog', 'all')" class="w-full sm:w-auto bg-cyan text-white text-xs md:text-sm font-semibold tracking-wider px-8 py-4 rounded-md hover:bg-opacity-95 transition flex items-center justify-center space-x-2 shadow-sm">
                                <span>Shop Now</span>
                                <span>&rarr;</span>
                            </button>
                            <button onclick="navigate('contact')" class="w-full sm:w-auto border border-silver/30 bg-white/5 hover:bg-white/10 text-white text-xs md:text-sm font-semibold tracking-wider px-8 py-4 rounded-md transition">
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}