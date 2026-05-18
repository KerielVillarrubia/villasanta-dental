/**
 * ContactView Component
 * Renders the clean clinical quote request form, input channels, 
 * and value points column.
 */
export function ContactView() {
    return `
        <section class="max-w-5xl mx-auto px-8 md:px-12 py-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                <!-- Request Form panel -->
                <div class="md:col-span-2 bg-white p-8 border border-silver rounded-xl shadow-sm">
                    <h2 class="text-xl font-bold text-cobalt mb-1">Request a Quote</h2>
                    <p class="text-xs text-gray-400 mb-6">Fill out the form below and our specialists will prepare a detailed breakdown.</p>
                    <form onsubmit="alert('Quote requested successfully!'); event.preventDefault();" class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Full Name</label>
                                <input type="text" placeholder="Dr. John Smith" class="w-full border border-silver bg-titanium p-3 rounded-md text-xs outline-none focus:border-cyan transition" required>
                            </div>
                            <div>
                                <label class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Email Address</label>
                                <input type="email" placeholder="john@dentalclinic.com" class="w-full border border-silver bg-titanium p-3 rounded-md text-xs outline-none focus:border-cyan transition" required>
                            </div>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Clinic Name</label>
                            <input type="text" placeholder="Sunshine Dental Clinic" class="w-full border border-silver bg-titanium p-3 rounded-md text-xs outline-none focus:border-cyan transition">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Additional Requirements</label>
                            <textarea rows="4" placeholder="Tell us about your setup needs..." class="w-full border border-silver bg-titanium p-3 rounded-md text-xs outline-none focus:border-cyan transition"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-cyan text-white font-bold py-3.5 rounded-md text-xs uppercase tracking-wider hover:bg-opacity-90 transition">
                            Submit Quote Request
                        </button>
                    </form>
                </div>
                
                <!-- Benefits Sidebar Block -->
                <div class="space-y-6">
                    <div class="bg-cobalt text-white p-6 rounded-xl">
                        <h3 class="font-bold text-xs tracking-wider uppercase mb-4 text-cyan">Why VillaSanta?</h3>
                        <ul class="space-y-4 text-xs">
                            <li class="flex items-start">
                                <span class="text-cyan mr-2 font-bold">&check;</span>
                                <span class="text-gray-300">Professional dynamic equipment consulting</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan mr-2 font-bold">&check;</span>
                                <span class="text-gray-300">Competitive pricing & customizable financing plans</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan mr-2 font-bold">&check;</span>
                                <span class="text-gray-300">Complete logistics, installation & clinical training</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-cyan mr-2 font-bold">&check;</span>
                                <span class="text-gray-300">Full warranty and priority support network</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    `;
}