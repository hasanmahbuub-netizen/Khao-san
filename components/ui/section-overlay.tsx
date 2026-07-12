import React from 'react';

interface SectionOverlayProps {
    backgroundImage: string;
    overlayOpacity?: number;
    padding?: string;
    children: React.ReactNode;
    className?: string;
}

export default function SectionOverlay({ 
    backgroundImage, 
    overlayOpacity = 0.6, 
    padding = 'var(--space-macro) 0',
    children,
    className = ''
}: SectionOverlayProps) {
    return (
        <section className={`pattern-overlay ${className}`.trim()} style={{
            padding: padding, 
            backgroundImage: `url("${backgroundImage}")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
        }}>
            <div 
                className="hero-overlay" 
                aria-hidden="true" 
                style={{
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: `rgba(7, 9, 17, ${overlayOpacity})`, 
                    zIndex: 0
                }}
            ></div>
            {children}
        </section>
    );
}
