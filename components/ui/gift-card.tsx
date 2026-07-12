"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import BrushStroke from '@/components/ui/brush-stroke';

export interface GiftCardProps {
    amount: string;
    description: string;
    imageSrc: string;
    brushColor: 'ochre' | 'saffron' | 'terracotta';
    brushVariant: 'horizontal' | 'diagonal';
    brushStyle?: React.CSSProperties;
}

export default function GiftCard({
    amount,
    description,
    imageSrc,
    brushColor,
    brushVariant,
    brushStyle
}: GiftCardProps) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 15, y: y * -15 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                flex: '1 1 380px', 
                maxWidth: '440px',
                backgroundColor: 'var(--color-surface-elevated)', 
                padding: '48px', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center',
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: 'transform 0.1s ease, border 0.3s ease',
                boxShadow: 'var(--shadow-float)'
            }}
        >
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', zIndex: -1, pointerEvents: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: 'absolute', width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(240, 139, 67, 0.06) 0%, transparent 60%)'}}></div>
                <BrushStroke variant={brushVariant} color={brushColor} style={brushStyle} />
            </div>
            
            <Image 
                src={imageSrc} 
                alt={`${amount} Gift Card`}
                width={1500}
                height={850}
                style={{width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '32px', boxShadow: '0 16px 32px rgba(0,0,0,0.6)', objectFit: 'contain'}}
                sizes="(max-width: 768px) 100vw, 400px"
            />
            
            <h2 className="display-2" style={{fontSize: '2rem', marginBottom: '16px', fontFamily: 'var(--font-display)'}}>{amount}</h2>
            <p className="body-regular" style={{color: 'var(--color-text-secondary)', marginBottom: '32px', lineHeight: 1.6}}>{description}</p>
            <button className="btn btn-secondary" style={{width: '100%', color: 'white', borderColor: 'rgba(255,255,255,0.2)'}}>Purchase Digital Card</button>
        </div>
    );
}
