"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center justify-center pt-24 pb-12 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-secondary">Available for new opportunities</span>
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface mb-6">
            Akhilesh Yadav — Building <span className="text-primary">Scalable</span> Full-Stack Solutions.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Java Full Stack Developer specialized in Spring Boot, React, and MySQL. Engineering precise, reliable systems from Ayodhya/Gurugram.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto bg-tertiary text-on-tertiary px-8 py-4 rounded font-label-caps text-label-caps hover:brightness-110 transition-all text-center" href="#contact">
              Hire Me
            </a>
            <Link className="w-full sm:w-auto border border-secondary text-secondary px-8 py-4 rounded font-label-caps text-label-caps hover:bg-secondary/10 transition-all text-center" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="py-12 border-y border-outline-variant/20 bg-surface-container-low overflow-hidden" id="skills">
        <div className="animate-marquee gap-12 flex items-center">
          <div className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-label-caps text-headline-md text-outline">JAVA</span>
            <span className="material-symbols-outlined text-primary">terminal</span>
            <span class="font-label-caps text-headline-md text-outline">SPRING BOOT</span>
            <span className="material-symbols-outlined text-secondary">database</span>
            <span className="font-label-caps text-headline-md text-outline">REACT.JS</span>
            <span className="material-symbols-outlined text-tertiary">code</span>
            <span className="font-label-caps text-headline-md text-outline">MYSQL</span>
            <span className="material-symbols-outlined text-primary">cloud</span>
            <span className="font-label-caps text-headline-md text-outline">DOCKER</span>
            <span className="material-symbols-outlined text-secondary">architecture</span>
            <span className="font-label-caps text-headline-md text-outline">AWS</span>
          </div>
          {/* Duplicate for seamless scroll */}
          <div className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-label-caps text-headline-md text-outline">JAVA</span>
            <span className="material-symbols-outlined text-primary">terminal</span>
            <span className="font-label-caps text-headline-md text-outline">SPRING BOOT</span>
            <span className="material-symbols-outlined text-secondary">database</span>
            <span className="font-label-caps text-headline-md text-outline">REACT.JS</span>
            <span className="material-symbols-outlined text-tertiary">code</span>
            <span className="font-label-caps text-headline-md text-outline">MYSQL</span>
            <span className="material-symbols-outlined text-primary">cloud</span>
            <span className="font-label-caps text-headline-md text-outline">DOCKER</span>
            <span className="material-symbols-outlined text-secondary">architecture</span>
            <span className="font-label-caps text-headline-md text-outline">AWS</span>
          </div>
        </div>
      </section>

      {/* Strengths Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col mb-16">
          <span className="font-label-caps text-label-caps text-primary mb-2">ARCHITECTURAL FOCUS</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Competencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap">
          {/* Large Card: Backend */}
          <div className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col justify-between group hover:border-primary/50 transition-all">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
                </div>
                <h3 className="font-headline-md text-headline-md">Robust Backend Engineering</h3>
              </div>
              <p className="text-on-surface-variant mb-6 text-body-lg">
                Architecting microservices with Java and Spring Boot. I focus on building high-concurrency APIs, distributed systems, and secure authentication flows that scale with your business growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-surface-variant/40 px-3 py-1 rounded text-code-sm font-label-caps text-primary">Spring Security</span>
              <span className="bg-surface-variant/40 px-3 py-1 rounded text-code-sm font-label-caps text-primary">JPA/Hibernate</span>
              <span className="bg-surface-variant/40 px-3 py-1 rounded text-code-sm font-label-caps text-primary">REST APIs</span>
            </div>
          </div>
          {/* Small Card: Quick Stats */}
          <div className="md:col-span-4 glass-card p-8 rounded-xl flex flex-col justify-center text-center bg-primary-container/10">
            <span className="text-display font-display text-primary leading-none mb-2">3+</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">YEARS OF SYSTEM DESIGN</span>
          </div>
          {/* Medium Card: Frontend */}
          <div className="md:col-span-6 glass-card p-8 rounded-xl hover:border-secondary/50 transition-all">
            <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>layers</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Responsive Frontend</h3>
            <p className="text-on-surface-variant text-body-md mb-6">
              Crafting intuitive user interfaces using React.js and Tailwind CSS. Bridging the gap between design and functionality with state-of-the-art state management.
            </p>
            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[90%]"></div>
            </div>
          </div>
          {/* Medium Card: Cloud/DevOps */}
          <div className="md:col-span-6 glass-card p-8 rounded-xl hover:border-tertiary/50 transition-all">
            <div className="w-12 h-12 rounded bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_queue</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">Cloud &amp; Automation</h3>
            <p className="text-on-surface-variant text-body-md mb-6">
              Deployment strategies using AWS and Docker. Implementing CI/CD pipelines to ensure continuous delivery with minimal downtime and maximum efficiency.
            </p>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span className="font-label-caps text-label-caps">Dockerized Environments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="py-24 bg-surface-container-lowest" id="projects">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-2">PORTFOLIO</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Recent Projects</h2>
            </div>
            <Link className="group flex items-center gap-2 text-primary font-label-caps text-label-caps" href="/projects">
              EXPLORE ALL WORK 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 relative glass-card">
                <img alt="Cloud Management System Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkpreHCB-mxHozNp15_zrIJ8gxouQmRV4tOT1bQ4qOU8grJf8PGphEf6BjrkmO-b1n0CpYXI95MzVy0VpPzx0zBxoRWshdeJoyX9tBgMuHpFGHvGn0g9HPCOewDpi1UP_h67QPfP42ksAhVGE957yHJGyHMz2ZpYEwp6mFpkaRShtdOFxt1_ZmMblYq0dApiulR9AYDm_rHfJySG7vED_uUzrRGLmEGV3tJYLIdfLCooBPkruWIc4nI6ztIH6hOEbdMxubHGTuaH0T"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">E-Commerce Orchestrator</h3>
                  <p className="text-on-surface-variant mb-4">Spring Boot microservices architecture for real-time inventory management.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">JAVA</span>
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">MYSQL</span>
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">REDIS</span>
                  </div>
                </div>
                <Link className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all" href="/projects">
                  <span className="material-symbols-outlined">launch</span>
                </Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group">
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 relative glass-card">
                <img alt="API Gateway Visualization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKMGulTySCo0hUsMkWsXtzLlWmH72IZppkCMar_geGXjDQNdPzlq105_rIzvpjoew2ZWvPW0kyT_cKfhqW3d2k4UFz9Krpz3GFYr1S10sQlAuAC_IxGIzs6jfHadivPu5LsyMfiB382n4fV6ffPjmRAvDxWJ67r8u0WZE44V1QF9-T3nYJ-tqthZdhHtWORDwPg1aEqU7eyk5KwlGtBlWp5ziYTkIuMSlRjmuI0OlsypRTLmT811Vj_pEapm-Lln5pyJQOSGHn6X9"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">FinTech Core Engine</h3>
                  <p className="text-on-surface-variant mb-4">Secure transaction processing system with multi-layer encryption.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">REACT</span>
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">SPRING SECURITY</span>
                    <span className="px-2 py-1 bg-surface-variant rounded text-code-sm font-label-caps text-on-surface-variant">AWS</span>
                  </div>
                </div>
                <Link className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all" href="/projects">
                  <span className="material-symbols-outlined">launch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop" id="contact">
        <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <span className="font-label-caps text-label-caps text-tertiary mb-4 block">GET IN TOUCH</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Let's build something extraordinary.</h2>
              <p className="text-on-surface-variant mb-10 text-body-lg">
                Ready to take your product to the next level? I'm open to full-stack opportunities and technical collaborations.
              </p>
              <div className="space-y-6">
                <a className="flex items-center gap-4 group" href="mailto:akhileshyadavofficial7007@gmail.com">
                  <div className="w-10 h-10 rounded bg-surface-variant/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <span className="text-body-md">akhileshyadavofficial7007@gmail.com</span>
                </a>
                <a className="flex items-center gap-4 group" href="tel:+917007976393">
                  <div className="w-10 h-10 rounded bg-surface-variant/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <span className="text-body-md">+91-7007976393</span>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded bg-surface-variant/50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <span className="text-body-md">Ayodhya / Gurugram, India</span>
                </div>
              </div>
            </div>
            <form className="space-y-4" action="https://formsubmit.co/akhileshyadavofficial7007@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1">NAME</label>
                <input name="name" className="w-full bg-surface-container-highest border-outline-variant/30 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all py-3 px-4 text-on-surface" placeholder="John Doe" type="text" required/>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1">EMAIL</label>
                <input name="email" className="w-full bg-surface-container-highest border-outline-variant/30 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all py-3 px-4 text-on-surface" placeholder="john@example.com" type="email" required/>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant ml-1">MESSAGE</label>
                <textarea name="message" className="w-full bg-surface-container-highest border-outline-variant/30 rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all py-3 px-4 text-on-surface" placeholder="How can I help you?" rows={4} required></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary-container font-label-caps text-label-caps py-4 rounded hover:brightness-110 transition-all active:scale-[0.98]" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
