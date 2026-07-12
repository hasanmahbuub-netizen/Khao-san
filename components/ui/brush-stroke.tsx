import React from 'react';
import Image from 'next/image';

export interface BrushStrokeProps {
    variant: 'horizontal' | 'vertical' | 'diagonal';
    color: 'ochre' | 'saffron' | 'terracotta';
    style?: React.CSSProperties;
    className?: string;
}

const BRUSH_MAP = {
    horizontal: {
        ochre: '/assets/brush-strokes/ochre-horizontal.webp',
        saffron: '/assets/brush-strokes/saffron-horizontal.webp',
        terracotta: '/assets/brush-strokes/terracotta-horizontal.webp',
    },
    vertical: {
        ochre: '/assets/brush-strokes/ochre-vertical.webp',
        saffron: '/assets/brush-strokes/saffron-vertical.webp',
        terracotta: '/assets/brush-strokes/terracotta-vertical.webp',
    },
    diagonal: {
        ochre: '/assets/brush-strokes/ochre-diagonal.webp',
        saffron: '/assets/brush-strokes/saffron-diagonal.webp',
        terracotta: '/assets/brush-strokes/terracotta-diagonal.webp',
    }
};

export default function BrushStroke({ variant, color, style, className }: BrushStrokeProps) {
    const src = BRUSH_MAP[variant][color];
    
    return (
        <div 
            className={`brush-stroke ${className || ''}`}
            style={{
                position: 'absolute',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.8,
                mixBlendMode: 'screen',
                ...style
            }}
            aria-hidden="true"
        >
            <Image 
                src={src} 
                alt="" 
                fill
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                sizes="(max-width: 1200px) 100vw, 50vw"
            />
        </div>
    );
}
