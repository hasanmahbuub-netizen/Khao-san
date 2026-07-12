import React from 'react';
import Image from 'next/image';

export interface EditorialBlockProps {
    overline: string;
    title: string;
    description: string;
    mediaType: 'image' | 'video';
    mediaSrc: string;
    mediaAlt?: string;
    reverse?: boolean;
    children?: React.ReactNode;
}

export default function EditorialBlock({
    overline,
    title,
    description,
    mediaType,
    mediaSrc,
    mediaAlt,
    reverse = false,
    children
}: EditorialBlockProps) {
    return (
        <div className="container" style={{position: 'relative', zIndex: 2, padding: 'var(--space-macro) 0'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center', margin: '0 auto'}}>
                
                {/* Media Side */}
                <div className="reveal-hidden" style={{
                    gridColumn: reverse ? '6 / 13' : '1 / 8', 
                    gridRow: 1,
                    position: 'relative', 
                    zIndex: 1, 
                    borderRadius: '4px', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-float)',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    {mediaType === 'video' ? (
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            style={{
                                width: '100%', 
                                height: 'auto', 
                                display: 'block',
                                objectFit: 'cover'
                            }}
                        >
                            <source src={mediaSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <Image src={mediaSrc} alt={mediaAlt || title} width={1200} height={800} style={{width: '100%', height: 'auto', display: 'block'}} sizes="(max-width: 768px) 100vw, 60vw" />
                    )}
                </div>
                
                {/* Content Side */}
                <div className="reveal-hidden" style={{
                    gridColumn: reverse ? '1 / 7' : '7 / 13', 
                    gridRow: 1,
                    position: 'relative', 
                    zIndex: 2, 
                    backgroundColor: 'rgba(7, 9, 17, 0.9)', 
                    backdropFilter: 'blur(24px)', 
                    padding: '64px', 
                    borderRadius: '4px', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                    marginTop: '80px'
                }}>
                    <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px'}}>{overline}</span>
                    <h2 className="display-2" style={{marginBottom: '32px', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontFamily: 'var(--font-display)'}}>{title}</h2>
                    <p className="body-large" style={{color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: children ? '40px' : '0'}}>{description}</p>
                    {children}
                </div>
                
            </div>
        </div>
    );
}
