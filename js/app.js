import { state } from './state.js';
import { NavbarComponent, FooterComponent } from './components.js';
import { HomeView } from './views/home.js';
import { CatalogView } from './views/catalog.js';
import { ContactView } from './views/contact.js';

export function renderApp() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;
    
    let currentBody = '';
    if (state.currentView === 'home') currentBody = HomeView();
    if (state.currentView === 'catalog') currentBody = CatalogView();
    if (state.currentView === 'contact') currentBody = ContactView();

    appContainer.innerHTML = `
        ${NavbarComponent()}
        <main class="min-h-screen">${currentBody}</main>
        ${FooterComponent()}
    `;
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