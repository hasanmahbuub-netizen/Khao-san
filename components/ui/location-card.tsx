import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface LocationCardProps {
    type: string;
    name: string;
    address: string;
    phone: string;
    hours: string;
    imageSrc: string;
    imageAlt?: string;
    mapQuery: string;
    reverse?: boolean;
}

export default function LocationCard({
    type,
    name,
    address,
    phone,
    hours,
    imageSrc,
    imageAlt,
    mapQuery,
    reverse = false
}: LocationCardProps) {
    return (
        <div className="reveal-hidden" style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center', margin: '0 auto', gap: 0}}>
            
            {/* Image Container */}
            <div style={{
                gridColumn: reverse ? '6 / 13' : '1 / 8',
                gridRow: 1,
                position: 'relative',
                zIndex: 1,
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-float)',
                aspectRatio: '4/3'
            }}>
                <Image src={imageSrc} alt={imageAlt || name} fill style={{objectFit: 'cover', display: 'block'}} sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            
            {/* Text Container */}
            <div style={{
                gridColumn: reverse ? '1 / 7' : '7 / 13',
                gridRow: 1,
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(7, 9, 17, 0.9)',
                backdropFilter: 'blur(24px)',
                padding: '56px',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
                marginTop: '64px',
                textAlign: 'left'
            }}>
                <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '16px', letterSpacing: '4px'}}>{type}</span>
                <h2 className="display-2" style={{marginBottom: '24px', fontSize: 'clamp(2rem, 3vw, 3rem)', fontFamily: 'var(--font-display)'}}>{name}</h2>
                <p className="body-large" style={{color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.8, fontSize: '1.05rem'}}>{address}</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px'}}>
                    <span style={{color: 'var(--color-text-primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '1rem'}}>📞 {phone}</span>
                    <span style={{color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>{hours}</span>
                </div>
                <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                    <Link href="/reserve" className="btn btn-primary" style={{padding: '16px 32px'}}>Reserve Table</Link>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.2)', padding: '16px 32px'}}>Directions</a>
                </div>
            </div>
        </div>
    );
}
