export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-gutter px-margin-desktop max-w-container-max mx-auto gap-base">
        <div className="text-label-caps font-label-caps text-on-surface">
          {"</Akhilesh Yadav>"}
        </div>
        <div className="text-on-surface-variant dark:text-on-surface-variant text-body-md text-center">
          © 2026 Akhilesh Yadav | Ayodhya/Gurugram
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary transition-colors font-label-caps text-label-caps" href="https://github.com/AkhileshYadav7007" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary transition-colors font-label-caps text-label-caps" href="https://linkedin.com/in/akhilesh-yadav-java-full-stack" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-tertiary transition-colors font-label-caps text-label-caps" href="mailto:akhileshyadavofficial7007@gmail.com">Email</a>
          <span className="text-secondary font-bold font-label-caps text-label-caps hidden lg:inline">Built with Java &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
