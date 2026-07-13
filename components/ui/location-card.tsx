"use client";
import React from 'react';
import Image from 'next/image';
import { useReservation } from '@/components/ReservationContext';

export interface LocationCardProps {
    type: string;
    name: string;
    address: string;
    phone: string;
    hours: string[];
    imageSrc: string;
    imageAlt?: string;
    mapQuery: string;
    reverse?: boolean;
    className?: string;
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
    reverse = false,
    className = ""
}: LocationCardProps) {
    const { openDrawer } = useReservation();
    const whatsappNumber = phone.replace(/[^0-9]/g, '');
    return (
        <div className={`reveal-hidden ${className}`} style={{position: 'relative', width: '100vw', height: '100vh', minHeight: '800px', display: 'flex', alignItems: 'center', justifyContent: reverse ? 'flex-start' : 'flex-end', marginLeft: 'calc(50% - 50vw)'}}>
            
            {/* Massive Background Image */}
            <Image src={imageSrc} alt={imageAlt || name} fill style={{objectFit: 'cover', zIndex: 0}} sizes="100vw" />
            
            {/* Gradient Overlay for text contrast only */}
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: reverse ? 'linear-gradient(to right, rgba(7,9,17,0.9) 0%, rgba(7,9,17,0.2) 60%, rgba(7,9,17,0) 100%)' : 'linear-gradient(to left, rgba(7,9,17,0.9) 0%, rgba(7,9,17,0.2) 60%, rgba(7,9,17,0) 100%)', zIndex: 1}}></div>
            
            {/* Typography Canvas */}
            <div className="reveal-hidden" style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '700px',
                padding: '0 8vw',
                textAlign: reverse ? 'left' : 'right'
            }}>
                <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px', letterSpacing: '6px'}}>{type}</span>
                <h2 className="display-2" style={{marginBottom: '32px', fontSize: 'clamp(3rem, 8vw, 7rem)', fontFamily: 'var(--font-display)', lineHeight: 0.9}}>{name}</h2>
                <p className="body-large" style={{color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: 1.8, fontSize: '1.2rem', marginLeft: reverse ? '0' : 'auto', marginRight: reverse ? 'auto' : '0'}}>{address}</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px', alignItems: reverse ? 'flex-start' : 'flex-end'}}>
                    <span style={{color: 'var(--color-text-primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '1.1rem'}}>📞 {phone}</span>
                    {hours.map((line) => (
                        <span key={line} style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px'}}>{line}</span>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: reverse ? 'flex-start' : 'flex-end'}}>
                    <button onClick={openDrawer} className="btn btn-primary">Reserve Table</button>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-secondary">WhatsApp</a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`} target="_blank" rel="noreferrer" className="btn btn-secondary">Directions</a>
                </div>
            </div>
        </div>
    );
}
