import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={{
            padding: '120px 0 60px 0', 
            backgroundImage: 'url("/assets/Background-20260709T183540Z-2-001/Background/Footer/Footer.webp")', 
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-surface-base)'
        }}>
            {/* Blending the blue background properly into the dark aesthetic */}
            <div className="hero-overlay" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(7, 9, 17, 0.95)', zIndex: 0}}></div>
            
            <div className="container" style={{position: 'relative', zIndex: 1}}>
                {/* Refined Footer Grid */}
                <div style={{
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    borderBottom: '1px solid rgba(255,255,255,0.08)', 
                    paddingBottom: '64px',
                    marginBottom: '40px'
                }}>
                    <div style={{flex: '1 1 300px', marginBottom: '40px'}}>
                        <div style={{ position: 'relative', height: '60px', width: '200px', marginBottom: '24px' }}>
                            <Image src="/assets/Logos-20260709T183558Z-2-001/Logos/Khao San Logo.webp" alt="Khao San Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} sizes="200px" />
                        </div>
                        <p style={{color: 'var(--color-text-secondary)', maxWidth: '300px', fontSize: '0.95rem', lineHeight: 1.6}}>
                            Elevating authentic Thai street food to a premium dining standard in Dhaka.
                        </p>
                    </div>

                    <div style={{display: 'flex', gap: '80px', flexWrap: 'wrap'}}>
                        <div>
                            <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px'}}>Explore</span>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}}>
                                <li><Link href="/menu" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Menu</Link></li>
                                <li><Link href="/locations" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Locations</Link></li>
                                <li><Link href="/about" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Our Story</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px'}}>Connect</span>
                            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px'}}>
                                <li><Link href="/reserve" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Reservations</Link></li>
                                <li><Link href="/giftcards" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Gift Cards</Link></li>
                                <li><a href="https://www.instagram.com/explore/tags/khaosandhaka/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Instagram</a></li>
                                <li><a href="https://www.facebook.com/KhaoSanDhaka" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem'}}>Facebook</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Watermark & Copyright */}
                <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    color: 'rgba(255,255,255,0.3)', 
                    fontSize: '0.85rem', 
                    flexWrap: 'wrap', 
                    gap: '16px'
                }}>
                    <p>&copy; {new Date().getFullYear()} Khao San Dhaka. All rights reserved.</p>
                    <div style={{display: 'flex', gap: '24px'}}>
                        <Link href="#" style={{color: 'inherit', textDecoration: 'none'}}>Privacy Policy</Link>
                        <Link href="#" style={{color: 'inherit', textDecoration: 'none'}}>Terms</Link>
                    </div>
                </div>

            </div>

            <div style={{
                position: 'absolute', 
                bottom: '-2vw', 
                left: '0', 
                width: '100%', 
                textAlign: 'center', 
                fontSize: '18vw', 
                fontWeight: 700, 
                fontFamily: 'var(--font-display)', 
                color: 'rgba(253, 251, 247, 0.02)', 
                lineHeight: 1, 
                whiteSpace: 'nowrap', 
                pointerEvents: 'none', 
                zIndex: 0
            }}>
                KHAO SAN
            </div>
        </footer>
    );
}
