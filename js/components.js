import { state } from './state.js';

// Reusable SVG Graphics
export const cartIcon = `
    <svg class="w-5 h-5 text-cobalt transition hover:text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>
`;

// Dynamic Navigation Bar Component
export function NavbarComponent() {
    const homeIndicator = state.currentView === 'home' 
        ? `<span class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan rounded-full"></span>` : '';
    const catalogIndicator = state.currentView === 'catalog' 
        ? `<span class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan rounded-full"></span>` : '';
    const contactIndicator = state.currentView === 'contact' 
        ? `<span class="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan rounded-full"></span>` : '';

    const homeWeight = state.currentView === 'home' ? 'font-semibold text-cobalt' : 'text-gray-500 hover:text-cobalt';
    const catalogWeight = state.currentView === 'catalog' ? 'font-semibold text-cobalt' : 'text-gray-500 hover:text-cobalt';
    const contactWeight = state.currentView === 'contact' ? 'font-semibold text-cobalt' : 'text-gray-500 hover:text-cobalt';

    const initialNavClass = state.currentView === 'home' 
        ? 'fixed top-0 left-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-300' 
        : 'sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-silver shadow-sm';

    return `
        <nav id="main-nav" class="${initialNavClass} flex justify-between items-center py-6 px-8 md:px-12">
            <div class="flex items-center space-x-2 cursor-pointer" onclick="navigate('home')">
                <div class="bg-cyan text-white font-bold px-2 py-1 rounded text-sm tracking-wider">VS</div>
                <span class="font-bold tracking-widest text-xs md:text-sm text-cobalt">
                    VILLASANTA <span class="font-normal text-[10px] md:text-xs text-gray-400">DENTAL CORP</span>
                </span>
            </div>

            <div class="flex space-x-10 text-xs md:text-sm font-medium">
                <button onclick="navigate('home')" class="relative ${homeWeight} transition">
                    Home
                    ${homeIndicator}
                </button>
                <button onclick="navigate('catalog')" class="relative ${catalogWeight} transition">
                    Catalog
                    ${catalogIndicator}
                </button>
                <button onclick="navigate('contact')" class="relative ${contactWeight} transition">
                    Contact
                    ${contactIndicator}
                </button>
            </div>

            <div class="cursor-pointer">
                ${cartIcon}
            </div>
        </nav>
    `;
}

// Global Footer Component
export function FooterComponent() {
    return `
        <footer class="bg-cobalt text-white py-12 border-t border-silver/10">
            <div class="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between">
                <div class="mb-8 md:mb-0 max-w-sm">
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="bg-cyan text-white font-bold px-2 py-1 rounded text-sm">VS</div>
                        <span class="font-bold tracking-widest text-sm text-gray-300">VILLASANTA</span>
                    </div>
                    <p class="text-xs text-gray-400 leading-relaxed">The precision infrastructure behind the world's most reliable dental clinics.</p>
                </div>
                <div class="flex space-x-16">
                    <div>
                        <h4 class="font-bold text-xs tracking-wider mb-4 text-cyan">NAVIGATION</h4>
                        <ul class="space-y-2 text-xs text-gray-400">
                            <li><button onclick="navigate('home')" class="hover:text-white">Home</button></li>
                            <li><button onclick="navigate('catalog')" class="hover:text-white">Equipment Catalog</button></li>
                            <li><button onclick="navigate('contact')" class="hover:text-white">Request a Quote</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold text-xs tracking-wider mb-4 text-cyan">CONTACT</h4>
                        <ul class="space-y-2 text-xs text-gray-400">
                            <li>info@villasantadental.com</li>
                            <li>+1 (800) 555-DENTAL</li>
                            <li>Miami, FL - United States</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-8 md:px-12 mt-12 pt-8 border-t border-silver/10 text-[10px] text-gray-500 flex justify-between">
                <p>&copy; 2026 VillaSanta Dental Corp. All rights reserved.</p>
                <div class="space-x-4 tracking-widest uppercase hidden md:block">
                    <span>Precision</span> <span>Reliability</span> <span>Excellence</span>
                </div>
            </div>
        </footer>
    `;
}