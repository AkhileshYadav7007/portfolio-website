"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const isActive = pathname === path;
    return isActive
      ? "text-primary dark:text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps"
      : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps";
  };

  return (
    <nav className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-outline-variant/30 h-16">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <Link href="/" className="text-body-lg font-display font-bold text-on-surface dark:text-on-surface tracking-tight">
          {"</Akhilesh Yadav>"}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className={getLinkClass("/")} href="/">Home</Link>
          <Link className={getLinkClass("/experience")} href="/experience">Experience</Link>
          <Link className={getLinkClass("/projects")} href="/projects">Projects</Link>
          <Link className={getLinkClass("/skills")} href="/skills">Skills</Link>
          <Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="/#contact">Contact</Link>
        </div>
        <a href="/resume.pdf" download="Akhilesh_Yadav_Resume.pdf" className="bg-primary text-on-primary-container px-6 py-2 rounded-lg font-label-caps text-label-caps hover:scale-105 transition-transform inline-block text-center">
          Download CV
        </a>
      </div >
    </nav >
  );
}
