// ==========================================
// 1. DATA STORE (Your Product Catalog)
// ==========================================
const products = [
    { id: 1, name: "VillaSanta Pro-X Dental Chair", category: "chairs", price: 12500, financing: 347, specs: "Full-featured hydraulic dynamic chair with LED light." },
    { id: 2, name: "VillaSanta Comfort Series Chair", category: "chairs", price: 7800, financing: 217, specs: "Entry-level dental chair with reliable electromechanical operation." },
    { id: 3, name: "PanoView 360 Digital X-Ray", category: "imaging", price: 28000, financing: 778, specs: "High-resolution panoramic X-ray system with CMOS sensor technology." },
    { id: 4, name: "PanoView Compact CBCT", category: "imaging", price: 45000, financing: 1250, specs: "Cone beam computed tomography system for 3D imaging." },
    { id: 5, name: "SterileMax B-Class Autoclave", category: "sterilization", price: 4200, financing: 117, specs: "Class B vacuum autoclave with 23L chamber capacity." },
    { id: 6, name: "SterileMax N-Class Autoclave", category: "sterilization", price: 2800, financing: 78, specs: "Compact 18L Class N autoclave ideal for solid instrument sterilization." },
    { id: 7, name: "AirPure 50 Oil-Free Compressor", category: "compressors", price: 3500, financing: 97, specs: "Medical-grade oil-free compressor with integrated dryer." },
    { id: 8, name: "AirPure 100 Multi-Station Compressor", category: "compressors", price: 5800, financing: 161, specs: "High-capacity oil-free compressor for multi-chair clinics." },
    { id: 9, name: "VacuPro Wet Suction System", category: "suction", price: 6200, financing: 172, specs: "Powerful wet-ring vacuum suction system for up to 4 operators." },
    { id: 10, name: "VacuPro Dry Suction Unit", category: "suction", price: 4800, financing: 133, specs: "Eco-friendly dry vacuum suction system with turbine technology." },
    { id: 11, name: "MixMaster Pro Amalgamator", category: "accessories", price: 650, financing: 18, specs: "High-speed capsule amalgamator with digital timer." },
    { id: 12, name: "MixMaster Compact Amalgamator", category: "accessories", price: 420, financing: 12, specs: "Compact and reliable amalgamator for everyday clinical use." }
];

// ==========================================
// 2. STATE MANAGEMENT (App Status)
// ==========================================
let state = {
    currentView: 'home',       // 'home' | 'catalog' | 'contact'
    selectedCategory: 'all'    // Filters catalog view
};

// Function to update state and trigger a re-render
function navigate(view, category = 'all') {
    state.currentView = view;
    state.selectedCategory = category;
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 3. UI COMPONENTS (Reusable Templates)
// ==========================================

function NavbarComponent() {
    const isHome = state.currentView === 'home' ? 'text-black border-b-2 border-black pb-1' : 'hover:text-black';
    const isCatalog = state.currentView === 'catalog' ? 'text-black border-b-2 border-black pb-1' : 'hover:text-black';
    const isContact = state.currentView === 'contact' ? 'text-black border-b-2 border-black pb-1' : 'hover:text-black';

    return `
        <nav class="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 sticky top-0 z-50">
            <div class="flex items-center space-x-2 cursor-pointer" onclick="navigate('home')">
                <div class="bg-blue-600 text-white font-bold px-2 py-1 rounded text-sm">VS</div>
                <span class="font-bold tracking-widest text-sm text-gray-700">VILLASANTA <span class="font-normal text-xs text-gray-500">DENTAL CORP</span></span>
            </div>
            <div class="flex space-x-8 text-sm font-semibold text-gray-600">
                <button onclick="navigate('home')" class="${isHome}">Home</button>
                <button onclick="navigate('catalog')" class="${isCatalog}">Catalog</button>
                <button onclick="navigate('contact')" class="${isContact}">Contact</button>
            </div>
            <div>
                <svg class="w-5 h-5 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
        </nav>
    `;
}

function FooterComponent() {
    return `
        <footer class="bg-[#0f172a] text-white py-12 border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between">
                <div class="mb-8 md:mb-0 max-w-sm">
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="bg-blue-600 text-white font-bold px-2 py-1 rounded text-sm">VS</div>
                        <span class="font-bold tracking-widest text-sm text-gray-300">VILLASANTA</span>
                    </div>
                    <p class="text-sm text-gray-500">The precision infrastructure behind the world's most reliable dental clinics.</p>
                </div>
                <div class="flex space-x-16">
                    <div>
                        <h4 class="font-semibold text-sm tracking-widest mb-4">NAVIGATION</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li><button onclick="navigate('home')" class="hover:text-white">Home</button></li>
                            <li><button onclick="navigate('catalog')" class="hover:text-white">Equipment Catalog</button></li>
                            <li><button onclick="navigate('contact')" class="hover:text-white">Request a Quote</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-sm tracking-widest mb-4">CONTACT</h4>
                        <ul class="space-y-2 text-sm text-gray-400">
                            <li>info@villasantadental.com</li>
                            <li>+1 (800) 555-DENTAL</li>
                            <li>Miami, FL - United States</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-between">
                <p>&copy; 2026 VillaSanta Dental Corp. All rights reserved.</p>
                <div class="space-x-4 tracking-widest uppercase hidden md:block">
                    <span>Precision</span> <span>Reliability</span> <span>Excellence</span>
                </div>
            </div>
        </footer>
    `;
}

// ==========================================
// 4. VIEWS (Page Layouts)
// ==========================================

function HomeView() {
    return `
        <header class="max-w-6xl mx-auto px-8 py-20">
            <p class="text-blue-600 font-semibold text-sm tracking-widest mb-4">VILLASANTA DENTAL CORP</p>
            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                The Architecture <br> of Clinical <br> <span class="text-blue-600">Excellence</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mb-8">
                Premium dental equipment engineered for practitioners who demand precision, reliability, and uncompromising quality.
            </p>
            <div class="flex space-x-4">
                <button onclick="navigate('catalog')" class="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">Explore Catalog &rarr;</button>
                <button onclick="navigate('contact')" class="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition">Request Quote</button>
            </div>
        </header>

        <section class="bg-white py-20 border-t border-gray-200">
            <div class="max-w-4xl mx-auto px-8 text-center">
                <p class="text-xs font-bold tracking-widest text-gray-400 mb-6 uppercase">Our Mission</p>
                <h2 class="text-3xl md:text-4xl font-semibold leading-relaxed mb-6">
                    We are the architects of clinical excellence. We provide the <span class="text-blue-600">precision infrastructure</span> that allows practitioners to focus on the <span class="text-blue-600">art of healing.</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12 mt-12">
                    <div><h3 class="text-4xl font-bold text-gray-900 mb-2">500+</h3><p class="text-xs tracking-widest text-gray-500 uppercase">Clinics Equipped</p></div>
                    <div><h3 class="text-4xl font-bold text-gray-900 mb-2">15+</h3><p class="text-xs tracking-widest text-gray-500 uppercase">Years of Experience</p></div>
                    <div><h3 class="text-4xl font-bold text-gray-900 mb-2">24/7</h3><p class="text-xs tracking-widest text-gray-500 uppercase">Technical Support</p></div>
                </div>
            </div>
        </section>
    `;
}

function CatalogView() {
    const categories = ['all', 'chairs', 'imaging', 'sterilization', 'compressors', 'suction', 'accessories'];
    
    // Filter logic using JavaScript array filtering
    const filteredProducts = state.selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === state.selectedCategory);

    // Map out the category tab buttons
    const tabButtons = categories.map(cat => {
        const isActive = state.selectedCategory === cat 
            ? 'bg-blue-600 text-white' 
            : 'bg-white border text-gray-600 hover:bg-gray-50';
        return `<button onclick="navigate('catalog', '${cat}')" class="px-4 py-2 text-xs font-semibold uppercase rounded tracking-wider transition ${isActive}">${cat}</button>`;
    }).join('');

    // Map out the product grid layout dynamically
    const productGrid = filteredProducts.map(p => `
        <div class="bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col justify-between">
            <div class="p-6 bg-gray-50 border-b flex items-center justify-center h-48 text-gray-400 text-xs font-mono tracking-widest">
                [${p.category.toUpperCase()} IMAGE PLACEHOLDER]
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[10px] text-blue-600 font-bold tracking-widest uppercase">${p.category}</span>
                    <h3 class="font-bold text-lg text-gray-900 mt-1 mb-2">${p.name}</h3>
                    <p class="text-xs text-gray-500 mb-4">${p.specs}</p>
                </div>
                <div>
                    <div class="border-t pt-4 flex justify-between items-baseline mb-4">
                        <div>
                            <span class="text-xl font-bold text-gray-900">$${p.price.toLocaleString()}</span>
                            <p class="text-[10px] text-gray-400">Est. $${p.financing}/mo financing</p>
                        </div>
                    </div>
                    <button onclick="navigate('contact')" class="w-full bg-gray-900 text-white text-center py-2 rounded text-xs font-semibold hover:bg-black transition">+ QUOTE</button>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <section class="max-w-7xl mx-auto px-8 py-12">
            <div class="mb-8">
                <p class="text-xs text-blue-600 font-bold tracking-widest uppercase mb-1">EQUIPMENT CATALOG</p>
                <h2 class="text-3xl font-bold text-gray-900">Professional-Grade Equipment</h2>
            </div>
            <div class="flex flex-wrap gap-2 mb-8">${tabButtons}</div>
            <p class="text-xs text-gray-400 mb-6">${filteredProducts.length} products found</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${productGrid}</div>
        </section>
    `;
}

function ContactView() {
    return `
        <section class="max-w-4xl mx-auto px-8 py-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="md:col-span-2 bg-white p-8 border rounded-xl shadow-sm">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
                    <p class="text-sm text-gray-500 mb-6">Fill out the form below and our specialists will prepare a detailed breakdown.</p>
                    <form onsubmit="alert('Quote requested successfully!'); event.preventDefault();" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div><label class="text-xs font-semibold text-gray-600 block mb-1">Full Name</label><input type="text" placeholder="Dr. John Smith" class="w-full border p-2 rounded text-sm outline-none focus:border-blue-500" required></div>
                            <div><label class="text-xs font-semibold text-gray-600 block mb-1">Email Address</label><input type="email" placeholder="john@dentalclinic.com" class="w-full border p-2 rounded text-sm outline-none focus:border-blue-500" required></div>
                        </div>
                        <div><label class="text-xs font-semibold text-gray-600 block mb-1">Clinic Name</label><input type="text" placeholder="Sunshine Dental Clinic" class="w-full border p-2 rounded text-sm outline-none focus:border-blue-500"></div>
                        <div><label class="text-xs font-semibold text-gray-600 block mb-1">Additional Requirements</label><textarea rows="4" placeholder="Tell us about your setup needs..." class="w-full border p-2 rounded text-sm outline-none focus:border-blue-500"></textarea></div>
                        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-3 rounded text-sm hover:bg-blue-700 transition">Submit Quote Request</button>
                    </form>
                </div>
                <div class="space-y-6">
                    <div class="bg-gray-900 text-white p-6 rounded-xl">
                        <h3 class="font-bold text-sm tracking-wider mb-4">Why VillaSanta?</h3>
                        <ul class="space-y-3 text-xs text-gray-300">
                            <li>&check; Professional equipment consultation</li>
                            <li>&check; Competitive pricing & financing</li>
                            <li>&check; Installation & training included</li>
                            <li>&check; Extended warranty options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ==========================================
// 5. THE ROUTER / ENGINE
// ==========================================
function renderApp() {
    const appContainer = document.getElementById('app');
    
    // Choose the central body section based on current view
    let currentBody = '';
    if (state.currentView === 'home') currentBody = HomeView();
    if (state.currentView === 'catalog') currentBody = CatalogView();
    if (state.currentView === 'contact') currentBody = ContactView();

    // Splice everything together seamlessly
    appContainer.innerHTML = `
        ${NavbarComponent()}
        <main class="min-h-screen">${currentBody}</main>
        ${FooterComponent()}
    `;
}

// Kickstart the app when the page loads
document.addEventListener('DOMContentLoaded', renderApp);