"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply staggered delay for grid items
                    if (entry.target.classList.contains('food-card') || entry.target.classList.contains('menu-card') || entry.target.classList.contains('masonry-item')) {
                        const cards = Array.from(document.querySelectorAll('.food-card, .menu-card, .masonry-item'));
                        const index = cards.indexOf(entry.target);
                        (entry.target as HTMLElement).style.transitionDelay = `${(index % 6) * 100}ms`;
                    }
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-hidden, .story-content, .story-visual, .food-card, .menu-card, .masonry-item, .exp-content, .exp-visual, .gallery-img-1, .gallery-img-2, .gallery-img-3, .res-banner, .res-cinematic-content');
        
        revealElements.forEach(el => {
            if (!el.classList.contains('reveal-hidden')) {
                el.classList.add('reveal-hidden');
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return <>{children}</>;
}
