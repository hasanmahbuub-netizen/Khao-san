import React from 'react';
import Image from 'next/image';

export interface MenuCardProps {
    title: string;
    imageSrc: string;
    badge?: 'special' | 'spicy' | null;
    index?: number;
}

export default function MenuCard({ title, imageSrc, badge, index = 0 }: MenuCardProps) {
    // Stagger every even item slightly for an editorial masonry feel
    const isEven = index % 2 === 0;

    return (
        <div className="menu-card reveal-hidden" style={{ alignItems: 'flex-start', textAlign: 'left', padding: '0', background: 'transparent', boxShadow: 'none', transform: isEven ? 'translateY(0)' : 'translateY(40px)', height: 'auto' }}>
            <div className="menu-card-visual" style={{ position: 'relative', background: 'var(--color-surface-elevated)', borderRadius: '4px', padding: '32px', marginBottom: '24px', width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image src={imageSrc} alt={title} fill style={{ objectFit: 'contain', padding: '32px' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="menu-card-content" style={{ width: '100%' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-text-primary)', margin: '0 0 12px 0', lineHeight: 1.3 }}>{title}</h3>
                {(badge === 'special' || badge === 'spicy') && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {badge === 'special' && <span style={{ color: 'var(--color-primary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>⭐ Signature</span>}
                        {badge === 'spicy' && <span style={{ color: '#ff4d4d', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>🌶️ Fiery</span>}
                    </div>
                )}
            </div>
        </div>
    );
}
