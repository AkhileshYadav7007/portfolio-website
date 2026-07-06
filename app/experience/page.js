"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Experience() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">Career Journey</span>
          <h1 className="font-headline-lg text-headline-lg md:text-display max-w-3xl mb-6">
            Building Scalable <span className="text-primary">Architecture</span> Through Experience.
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            Detailed timeline of my professional tenure as a Software Developer, focusing on high-performance Java ecosystems and enterprise-level system optimization.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto pb-32">
        <div className="relative experience-timeline pl-8 md:pl-0">
          {/* Role 1: Hamsa Soham */}
          <div className="relative mb-24 md:flex md:justify-between md:items-center">
            <div className="hidden md:block w-[45%] text-right pr-16">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Feb 2026 – Present</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-2">Patna, India</h3>
            </div>
            <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-primary border-4 border-background rounded-full z-20"></div>
            <div className="md:w-[45%]">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">Feb 2026 – Present</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Software Developer</h2>
                <h3 className="font-body-lg text-primary mb-4">Hamsa Soham Healthcare Pvt. Ltd.</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontSize: "18px" }}>check_circle</span>
                    <span className="text-on-surface-variant">Spearheaded data processing module redesign, achieving a <strong className="text-secondary">25% improvement</strong> in data processing efficiency for large-scale healthcare datasets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontSize: "18px" }}>check_circle</span>
                    <span className="text-on-surface-variant">Developed robust RESTful APIs using Spring Boot to handle sensitive patient records with high security and low latency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontSize: "18px" }}>check_circle</span>
                    <span className="text-on-surface-variant">Optimized MySQL query performance by implementing strategic indexing and query caching mechanisms.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">JAVA</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">SPRING BOOT</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">MYSQL</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">REST API</span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 2: Bytemate IT Services */}
          <div className="relative mb-24 md:flex md:justify-between md:items-center">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">Apr 2025 - Feb 2026 (11 mos)</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Building &amp; Leading</h2>
                <h3 className="font-body-lg text-secondary mb-4">Bytemate IT Services</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "18px" }}>verified</span>
                    <span className="text-on-surface-variant">Leading technical initiatives and building scalable solutions for enterprise clients.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">LEADERSHIP</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">ARCHITECTURE</span>
                </div>
              </div>
            </div>
            <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-secondary border-4 border-background rounded-full z-20"></div>
            <div className="hidden md:block w-[45%] order-1 md:order-2 text-left pl-16">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Apr 2025 - Feb 2026</span>
              <h3 class="font-headline-md text-headline-md text-on-surface mt-2">Remote</h3>
            </div>
          </div>

          {/* Role 3: codetalentX */}
          <div className="relative mb-24 md:flex md:justify-between md:items-center">
            <div className="hidden md:block w-[45%] text-right pr-16">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Apr 2025 - Oct 2025</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-2">Noida, India</h3>
            </div>
            <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-primary border-4 border-background rounded-full z-20"></div>
            <div className="md:w-[45%]">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">Apr 2025 - Oct 2025 (7 mos)</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Software Developer</h2>
                <h3 className="font-body-lg text-primary mb-4">codetalentX</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary mt-1" style={{ fontSize: "18px" }}>check_circle</span>
                    <span className="text-on-surface-variant">Contributing to core product development and optimizing backend services.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">JAVA</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-caps text-[10px] border border-primary/20">SPRING</span>
                </div>
              </div>
            </div>
          </div>

          {/* Role 4: GirlScript SoC */}
          <div className="relative mb-24 md:flex md:justify-between md:items-center">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">Oct 2024 - Dec 2024 (3 mos)</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Contributor</h2>
                <h3 className="font-body-lg text-secondary mb-4">GirlScript Summer of Code</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "18px" }}>verified</span>
                    <span className="text-on-surface-variant">Contributed to open-source projects and collaborated with global developers.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">OPEN SOURCE</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">GIT</span>
                </div>
              </div>
            </div>
            <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-secondary border-4 border-background rounded-full z-20"></div>
            <div className="hidden md:block w-[45%] order-1 md:order-2 text-left pl-16">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Oct 2024 - Dec 2024</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-2">Remote</h3>
            </div>
          </div>

          {/* Role 5: Anudip Foundation */}
          <div className="relative md:flex md:justify-between md:items-center">
            <div className="md:w-[45%] order-2 md:order-1">
              <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 group font-body-md text-body-md">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary">Mar 2024 - Oct 2024 (8 mos)</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Software Developer Trainee</h2>
                <h3 className="font-body-lg text-secondary mb-4">ANUDIP FOUNDATION</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "18px" }}>verified</span>
                    <span className="text-on-surface-variant">Designed and implemented a Student Management System that increased administrative efficiency by <strong className="text-primary">35%</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "18px" }}>verified</span>
                    <span className="text-on-surface-variant">Mastered the implementation of ORM frameworks with Hibernate to bridge the gap between Java and relational databases.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "18px" }}>verified</span>
                    <span className="text-on-surface-variant">Developed interactive desktop application GUIs using Java Swing during the intensive training program.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">CORE JAVA</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-caps text-[10px] border border-secondary/20">HIBERNATE ORM</span>
                </div>
              </div>
            </div>
            <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 bg-secondary border-4 border-background rounded-full z-20"></div>
            <div className="hidden md:block w-[45%] order-1 md:order-2 text-left pl-16">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Mar 2024 - Oct 2024</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-2">Gurugram, India</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-24">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-card p-10 rounded-xl text-center">
              <div className="text-display text-primary mb-2">2+</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Years of Experience</p>
            </div>
            <div className="glass-card p-10 rounded-xl text-center">
              <div className="text-display text-secondary mb-2">15+</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Projects Delivered</p>
            </div>
            <div className="glass-card p-10 rounded-xl text-center">
              <div className="text-display text-tertiary mb-2">100%</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant">Clean Code Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire CTA */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg mb-8">Interested in working together on your next <span className="text-secondary">technical</span> project?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/#contact" className="bg-tertiary text-inverse-on-surface px-8 py-4 rounded-xl font-label-caps text-label-caps hover:scale-105 transition-transform text-center">
              Hire Me
            </a>
            <Link href="/projects" className="border border-outline text-on-surface px-8 py-4 rounded-xl font-label-caps text-label-caps hover:bg-surface-variant/20 transition-all text-center">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
