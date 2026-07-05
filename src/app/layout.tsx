import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sriram Fruits | Premium Pomegranates from Tirupati",
  description: "Premium pomegranates from Tirupati. Rooted in tradition, trusted everywhere. Sriram Fruits - Excellence from seed to skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${workSans.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-primary">
        {children}
        <Script id="smooth-scroll" strategy="afterInteractive">
          {`
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              });
            });

            // Sticky header with shadow
            window.addEventListener('scroll', () => {
              const nav = document.querySelector('nav');
              if (nav) {
                if (window.scrollY > 50) {
                  nav.classList.add('shadow-md');
                } else {
                  nav.classList.remove('shadow-md');
                }
              }
            });

            // Scroll animations
            const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                  setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                  }, index * 100);
                  observer.unobserve(entry.target);
                }
              });
            }, observerOptions);

            // Observe sections and cards
            window.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('section > div > div:not(.grid), .card, article').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(el);
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
