"use client";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    // Micro-interaction for cards (move effect)
    const cards = document.querySelectorAll('.glass-card');
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
    };
  }, []);

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Hero Section */}
      <header className="mb-16 mt-8">
        <h1 className="font-display text-display text-on-surface mb-4">Engineering Portfolio</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A selection of high-performance Java full-stack applications, AI integrations, and professional platforms built with architectural integrity.
        </p>
      </header>

      {/* Projects Grid (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap mb-24">
        {/* Path2Ecom.in (Large Featured Card) */}
        <div className="md:col-span-8 glass-card rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img alt="Path2Ecom Project Thumbnail" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ja3UkBzsJRo9njt5JoPMs_tFyKe5U-zGAWHB9gIO0vTjnlM-kiukQA9zAc83zWyVBYqkTHpsVuYhiyhYVs_R-Or1b4XTGOryH9jZ7lvj4HUpmEgt988YIAdFtMQHnFbjZFxdr1Hl7NjMMrVg7sxBd2Redmiqz451ElEz_KeP68RUnU8ZtIzRtbDXhgwk-LyYm4DVq4XOkvChaGl6EbU5r22c4CFtUbWWtK3WjNBhCgITOlZ4m8dVcLNuuWa2PEoP2fL-Hqa5e0Eb"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          <div className="p-gutter flex-1 flex flex-col p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-label-caps text-label-caps text-secondary mb-2 block">FREELANCE CLIENT WORK</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Path2Ecom.in</h2>
              </div>
              <a className="p-2 glass-card rounded-full hover:bg-primary/20 transition-all" href="https://Path2Ecom.in" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </a>
            </div>
            <p className="text-on-surface-variant mb-6 flex-1 text-body-md">
              A comprehensive e-commerce training platform designed for scalability and security. Features a robust REST API backend for managing educational content and seamless payment integration via Razorpay.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">SPRING BOOT</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">REACT</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">MYSQL</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">RAZORPAY</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">VPS</span>
            </div>
            <div className="border-t border-outline-variant/20 pt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">SECURE REST APIs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
                <span className="font-label-caps text-[10px] text-on-surface-variant">VPS DEPLOYMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Research Assistant */}
        <div className="md:col-span-4 glass-card rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-48 overflow-hidden bg-surface-container-high flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-primary to-secondary"></div>
            <span className="material-symbols-outlined text-[64px] text-primary relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>neurology</span>
          </div>
          <div className="p-gutter flex-1 flex flex-col p-6">
            <span className="font-label-caps text-label-caps text-tertiary mb-2 block">CHROME EXTENSION</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">AI-Research Assistant</h2>
            <p className="text-on-surface-variant mb-6 text-sm">
              Leveraging Google's Gemini API to provide real-time web page summarization and intelligent insight extraction directly in the browser.
            </p>
            <div className="flex flex-wrap gap-2 mb-auto">
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">JAVASCRIPT</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">GEMINI API</span>
              <span className="skill-chip px-3 py-1 rounded-full font-label-caps text-[10px] text-primary">SPRING BOOT</span>
            </div>
            <div className="mt-8">
              <a href="https://github.com/AkhileshYadav7007/AI-Powered-Research-Assistant" target="_blank" rel="noopener noreferrer" className="w-full py-3 glass-card hover:bg-primary hover:text-on-primary-container transition-all rounded font-label-caps text-label-caps flex items-center justify-center gap-2">
                VIEW SOURCE <span className="material-symbols-outlined text-sm">code</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minor Stats / Micro Card */}
        <div className="md:col-span-4 glass-card rounded-xl p-gutter p-6 flex flex-col justify-center items-center text-center">
          <span className="material-symbols-outlined text-secondary text-[48px] mb-2">code_blocks</span>
          <div className="font-display text-[40px] font-bold text-on-surface">15+</div>
          <div className="font-label-caps text-label-caps text-on-surface-variant">REPOS ON GITHUB</div>
        </div>

        {/* Technical Mentality Card */}
        <div className="md:col-span-8 glass-card rounded-xl p-gutter p-6 bg-gradient-to-br from-surface-container-low to-surface-container">
          <div className="flex flex-col md:flex-row gap-gutter items-center h-full">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 italic">"Clean Architecture First"</h3>
              <p className="text-on-surface-variant">
                I prioritize reliability and maintainability. Every project is built with the understanding that software is an evolving organism, requiring structured design patterns and rigorous testing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-surface-container-highest p-4 rounded text-center">
                <div className="text-secondary font-bold text-xl">99.9%</div>
                <div className="text-[10px] font-label-caps opacity-60">UPTIME GOAL</div>
              </div>
              <div className="bg-surface-container-highest p-4 rounded text-center">
                <div className="text-primary font-bold text-xl">REST</div>
                <div className="text-[10px] font-label-caps opacity-60">STANDARDS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-headline-lg text-on-surface">Certifications</h2>
          <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-bento-gap">
          {/* Cert 1 */}
          <div className="glass-card p-gutter p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">Software Engineer</h3>
            <p className="text-[10px] text-on-surface-variant font-label-caps opacity-70">HACKERRANK</p>
          </div>
          {/* Cert 2 */}
          <div className="glass-card p-gutter p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">React (Basic)</h3>
            <p className="text-[10px] text-on-surface-variant font-label-caps opacity-70">HACKERRANK</p>
          </div>
          {/* Cert 3 */}
          <div className="glass-card p-gutter p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">JavaScript (Inter.)</h3>
            <p className="text-[10px] text-on-surface-variant font-label-caps opacity-70">HACKERRANK</p>
          </div>
          {/* Cert 4 */}
          <div className="glass-card p-gutter p-6 rounded-xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-1">SQL (Advanced)</h3>
            <p className="text-[10px] text-on-surface-variant font-label-caps opacity-70">HACKERRANK</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="glass-card p-margin-desktop p-10 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <h2 className="font-display text-headline-lg text-on-surface mb-4 relative z-10">Have a technical challenge?</h2>
        <p className="text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
          I'm currently open to freelance opportunities and full-stack engineering roles. Let's discuss your next architectural milestone.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <a href="/#contact" className="bg-tertiary text-on-tertiary px-8 py-4 rounded font-label-caps text-label-caps hover:brightness-110 transition-all shadow-lg shadow-tertiary/20 text-center">
            HIRE ME
          </a>
          <a href="/#contact" className="glass-card px-8 py-4 rounded font-label-caps text-label-caps hover:bg-surface-container-highest transition-all text-center">
            GET IN TOUCH
          </a>
        </div>
      </section>
    </main>
  );
}
