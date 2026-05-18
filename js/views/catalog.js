import { state } from '../state.js';
import { products } from '../products.js';

/**
 * CatalogView Component
 * Handles layout and interactive tab filtering of products based on state.selectedCategory.
 */
export function CatalogView() {
    const categories = ['all', 'chairs', 'imaging', 'sterilization', 'compressors', 'suction', 'accessories'];
    
    // Evaluate filtered system choices
    const filteredProducts = state.selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === state.selectedCategory);

    // Build the selection filter tabs
    const tabButtons = categories.map(cat => {
        const isActive = state.selectedCategory === cat 
            ? 'bg-cyan text-white shadow-sm border-cyan' 
            : 'bg-white border border-silver text-gray-500 hover:bg-titanium';
        return `
            <button onclick="navigate('catalog', '${cat}')" 
                    class="px-5 py-2.5 text-[10px] md:text-xs font-semibold uppercase rounded tracking-wider transition ${isActive}">
                ${cat}
            </button>
        `;
    }).join('');

    // Generate clinical product cards dynamically
    const productGrid = filteredProducts.map(p => `
        <div class="bg-white border border-silver rounded-xl overflow-hidden shadow-sm flex flex-col justify-between transition hover:shadow-md">
            <div class="p-6 bg-titanium border-b border-silver flex flex-col items-center justify-center h-48 text-gray-400 text-[10px] font-mono tracking-widest relative">
                <span class="absolute top-3 left-3 bg-white border border-silver rounded px-2 py-0.5 text-[8px] text-gray-400 uppercase font-bold">${p.category}</span>
                <div class="w-12 h-12 rounded-full border border-silver flex items-center justify-center mb-3">
                    <span class="text-cyan text-xs font-bold font-sans">VS</span>
                </div>
                [DENTAL SYSTEM PORTAL]
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[9px] text-cyan font-bold tracking-widest uppercase">${p.category}</span>
                    <h3 class="font-bold text-md text-cobalt mt-1 mb-2">${p.name}</h3>
                    <p class="text-[11px] text-gray-400 leading-relaxed mb-4">${p.specs}</p>
                </div>
                <div>
                    <div class="border-t border-silver/50 pt-4 flex justify-between items-baseline mb-4">
                        <div>
                            <span class="text-lg font-bold text-cobalt">$${p.price.toLocaleString()}</span>
                            <p class="text-[9px] text-gray-400">Est. $${p.financing}/mo financing</p>
                        </div>
                    </div>
                    <button onclick="navigate('contact')" class="w-full bg-cobalt text-white text-center py-2.5 rounded-md text-xs font-semibold hover:opacity-90 transition">+ REQUEST QUOTE</button>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <section class="max-w-7xl mx-auto px-8 md:px-12 py-16">
            <div class="mb-10">
                <p class="text-[10px] text-cyan font-bold tracking-widest uppercase mb-1">EQUIPMENT CATALOG</p>
                <h2 class="text-2xl md:text-3xl font-bold text-cobalt">Professional-Grade Equipment</h2>
            </div>
            <div class="flex flex-wrap gap-2 mb-8">${tabButtons}</div>
            <p class="text-[11px] text-gray-400 mb-6">${filteredProducts.length} systems found</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${productGrid}</div>
        </section>
    `;
}