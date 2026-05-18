// ==========================================
// STATE MANAGEMENT
// ==========================================
export let state = {
    currentView: 'home',       // 'home' | 'catalog' | 'contact'
    selectedCategory: 'all'    // For product filtering
};

/**
 * Global Routing Controller
 */
export function navigate(view, category = 'all') {
    state.currentView = view;
    state.selectedCategory = category;
    
    // Dispatch a global custom event to tell the app to re-render
    window.dispatchEvent(new CustomEvent('statechange'));
    
    const nav = document.getElementById('main-nav');
    if (nav) {
        if (state.currentView === 'home') {
            nav.className = "fixed top-0 left-0 w-full z-50 bg-transparent border-b border-transparent transition-all duration-300 flex justify-between items-center py-6 px-8 md:px-12";
        } else {
            nav.className = "sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-silver shadow-sm flex justify-between items-center py-6 px-8 md:px-12";
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bind navigation helper to window so inline onclick="..." triggers continue to work
window.navigate = navigate;