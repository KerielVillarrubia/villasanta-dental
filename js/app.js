import { state } from './state.js';
import { NavbarComponent, FooterComponent } from './components.js';
import { HomeView } from './views/home.js';
import { CatalogView } from './views/catalog.js';
import { ContactView } from './views/contact.js';

export function renderApp() {
    const appContainer = document.getElementById('app');
    
    // If the container is missing, alert the screen directly
    if (!appContainer) {
        document.body.innerHTML = `<h1 style="color:red; padding:20px;">Error: Could not find <div id="app"> in your HTML!</h1>`;
        return;
    }
    
    try {
        let currentBody = '';
        if (state.currentView === 'home') currentBody = HomeView();
        if (state.currentView === 'catalog') currentBody = CatalogView();
        if (state.currentView === 'contact') currentBody = ContactView();

        appContainer.innerHTML = `
            ${NavbarComponent()}
            <main class="min-h-screen">${currentBody}</main>
            ${FooterComponent()}
        `;
    } catch (error) {
        // Catch any template layout or syntax errors and print them on the screen
        appContainer.innerHTML = `
            <div style="background:#fee2e2; border:2px solid #ef4444; color:#991b1b; padding:20px; margin:20px; rounded:8px;">
                <h2 style="margin-top:0;">Rendering Error Caught!</h2>
                <p><strong>Message:</strong> ${error.message}</p>
                <pre style="background:#fff; padding:10px; overflow:auto;">${error.stack}</pre>
            </div>
        `;
    }
}

// Listen for state changes from state.js and re-render
window.addEventListener('statechange', renderApp);

// Window Scroll listener to handle dynamic transparent-to-solid navbar transition
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (!nav || state.currentView !== 'home') return;
    
    if (window.scrollY > 20) {
        nav.className = "fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-silver/40 shadow-sm flex justify-between items-center py-5 px-8 md:px-12 transition-all duration-300";
    } else {
        nav.className = "fixed top-0 left-0 w-full z-50 bg-transparent border-b border-transparent flex justify-between items-center py-6 px-8 md:px-12 transition-all duration-300";
    }
});

// Bootstrap the application on page ready state
document.addEventListener('DOMContentLoaded', renderApp);