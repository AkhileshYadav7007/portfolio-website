"use client";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    // Micro-interactions for skill badges
    const badges = document.querySelectorAll('.skill-badge');
    
    const handleMouseOver = (e) => {
      const badge = e.currentTarget;
      const tilt = (Math.random() - 0.5) * 5;
      badge.style.transform = `translateY(-4px) rotate(${tilt}deg) scale(1.05)`;
    };

    const handleMouseOut = (e) => {
      const badge = e.currentTarget;
      badge.style.transform = `translateY(0) rotate(0) scale(1)`;
    };

    badges.forEach(badge => {
      badge.addEventListener('mouseover', handleMouseOver);
      badge.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      badges.forEach(badge => {
        badge.removeEventListener('mouseover', handleMouseOver);
        badge.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      {/* Hero Section / Title */}
      <header className="mb-16 mt-8">
        <span className="text-secondary font-label-caps text-label-caps mb-4 block">PORTFOLIO DOMAIN</span>
        <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-6">Expertise &amp; <span className="text-primary">Academic Foundation</span></h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          A systematic approach to Full Stack Engineering, focusing on Java-based architectures and modern frontend frameworks.
        </p>
      </header>

      {/* Main Bento Grid */}
      <div className="bento-grid">
        {/* Education Section */}
        <section className="col-span-12 lg:col-span-8 glass-card p-8 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-9xl">school</span>
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-8">Education</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
              </div>
              <div>
                <h3 className="text-body-lg font-bold text-on-surface">Master of Computer Applications (MCA)</h3>
                <p className="text-body-md text-on-surface-variant mt-1">St. Andrews Institute of Technology &amp; Management</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-label-caps font-label-caps text-secondary bg-secondary/10 px-3 py-1 rounded">Jul 2025 – Jul 2027</span>
                  <span className="text-label-caps font-label-caps text-tertiary bg-tertiary/10 px-3 py-1 rounded">Upcoming</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start border-t border-outline-variant/20 pt-8">
              <div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">account_balance</span>
              </div>
              <div>
                <h3 className="text-body-lg font-bold text-on-surface">Bachelor of Computer Science (BCA)</h3>
                <p className="text-body-md text-on-surface-variant mt-1">St. Andrews Institute of Technology &amp; Management</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-label-caps font-label-caps text-secondary bg-secondary/10 px-3 py-1 rounded">Sep 2022 – Apr 2025</span>
                  <span className="text-label-caps font-label-caps text-primary bg-primary/10 px-3 py-1 rounded">Grade: A+</span>
                </div>
                <p className="text-body-md text-on-surface-variant mt-6 leading-relaxed">Focusing on core computer science principles, data structures, and object-oriented programming. Engaged in deep-dive study of Java Full Stack ecosystems and enterprise-level application architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Programming (Quick Stats) */}
        <section className="col-span-12 lg:col-span-4 glass-card p-8 rounded-xl flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md font-headline-md text-on-surface mb-6">Achievements</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded bg-[#FFA116]/10 flex items-center justify-center border border-[#FFA116]/30">
                  <span className="material-symbols-outlined text-[#FFA116]">code</span>
                </div>
                <div>
                  <h4 className="text-body-md font-bold text-on-surface">LeetCode</h4>
                  <p className="text-label-caps font-label-caps text-on-surface-variant">Data Structures &amp; Algos</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded bg-[#2EC866]/10 flex items-center justify-center border border-[#2EC866]/30">
                  <span className="material-symbols-outlined text-[#2EC866]">terminal</span>
                </div>
                <div>
                  <h4 className="text-body-md font-bold text-on-surface">HackerRank</h4>
                  <p className="text-label-caps font-label-caps text-on-surface-variant">5★ Java Specialist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/30">
            <p className="text-code-sm font-code-sm text-on-surface-variant mb-4">// Technical proficiency in solving complex computational problems.</p>
            <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-bento-gap">
          {/* Languages */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-label-caps font-label-caps text-primary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">language</span> LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Java</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">JavaScript</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">C++</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">C</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">HTML5</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">CSS3</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">C#</span>
            </div>
          </div>
          {/* Frameworks */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-label-caps font-label-caps text-secondary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">architecture</span> FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Spring Boot</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">React.js</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Tailwind CSS</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Hibernate/JPA</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Java Development</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">API Development</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">PrimeFaces</span>
            </div>
          </div>
          {/* Tools */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-label-caps font-label-caps text-tertiary mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">build</span> TOOLS
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Git</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">GitHub</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">VS Code</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">IntelliJ IDEA</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">GitHub Actions</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Figma</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">GitHub Copilot</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">NetBeans</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">OpenAI</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">Gemini API</span>
            </div>
          </div>
          {/* Databases */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">database</span> DATABASES
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">MySQL</span>
              <span className="skill-badge px-3 py-2 rounded text-code-sm font-code-sm bg-surface-container border border-outline-variant/30 cursor-default">SQL Server</span>
            </div>
          </div>
        </section>

        {/* Atmospheric Visual / CTA */}
        <section className="col-span-12 glass-card rounded-xl p-12 overflow-hidden relative border-none">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-headline-md font-headline-md text-on-surface mb-4">Building Scalable Solutions</h2>
              <p className="text-body-md text-on-surface-variant">
                Combining rigorous academic study with practical implementation of the modern tech stack. I'm always looking to apply my skills to real-world engineering challenges.
              </p>
            </div>
            <a href="/#contact" className="bg-tertiary text-on-tertiary px-8 py-4 rounded font-label-caps text-label-caps font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-tertiary/10 text-center">
              GET IN TOUCH
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
