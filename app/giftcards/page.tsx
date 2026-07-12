"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionOverlay from '@/components/ui/section-overlay';

export default function GiftCardsPage() {
    return (
        <main className="page-transition" style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh', paddingTop: '80px' }}>
            
            {/* Section 1: The Flagship Hero (Card design.jpg layout) */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Lotus/Lotus.webp" overlayOpacity={0.85}>
                    <div className="container" style={{position: 'relative', zIndex: 2, padding: 'var(--space-macro) 0'}}>
                        <div style={{display: 'flex', flexWrap: 'wrap-reverse', gap: '5%', alignItems: 'center', maxWidth: '1440px', margin: '0 auto'}}>
                            
                            {/* Left: 30% Text Column */}
                            <div style={{flex: '0 1 30%', minWidth: '320px', paddingRight: '20px'}}>
                                <h1 style={{
                                    fontFamily: 'var(--font-display)', 
                                    fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                                    lineHeight: 1.1, 
                                    marginBottom: '24px',
                                    color: '#fdfbf7',
                                    fontWeight: 600
                                }}>
                                    An evening, <span style={{color: 'var(--color-primary)', fontStyle: 'italic'}}>Gifted.</span>
                                </h1>
                                
                                <p style={{
                                    color: '#fdfbf7', 
                                    fontSize: '1.1rem', 
                                    marginBottom: '32px', 
                                    lineHeight: 1.6,
                                    opacity: 0.9
                                }}>
                                    The perfect present for special occasions, a Khao San gift card unlocks the full menu across all three outlets. Delivered digitally, redeemable instantly.
                                </p>
                                
                                <ul style={{
                                    listStyle: 'none', 
                                    padding: 0, 
                                    margin: '0 0 40px 0', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '16px', 
                                    color: '#fdfbf7', 
                                    fontSize: '1rem'
                                }}>
                                    <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <span style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'inline-block'}}></span>
                                        Redeemable at Dhanmondi, Gulshan & Uttara
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <span style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'inline-block'}}></span>
                                        Personalised note with each digital card
                                    </li>
                                    <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                                        <span style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'inline-block'}}></span>
                                        No expiry, No hidden fees
                                    </li>
                                </ul>
                                
                                <a href="#collection" style={{
                                    backgroundColor: 'var(--color-primary)', 
                                    color: '#070911', 
                                    padding: '14px 32px', 
                                    borderRadius: '4px', 
                                    textDecoration: 'none', 
                                    display: 'inline-block', 
                                    fontWeight: 700,
                                    letterSpacing: '0.5px'
                                }}>
                                    View Collection &darr;
                                </a>
                            </div>

                            {/* Right: 70% Picture Showcase */}
                            <div style={{flex: '1 1 60%', position: 'relative', minWidth: '400px', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                
                                {/* Dynamic Orange Brush/Splash Backdrop - Sweeping Curve */}
                                {/* Bottom-Left piece */}
                                <div aria-hidden="true" style={{position: 'absolute', top: '70%', left: '35%', transform: 'translate(-50%, -50%) rotate(-30deg) scale(1.3)', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
                                    <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                                </div>
                                {/* Center piece */}
                                <div aria-hidden="true" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg) scale(1.4)', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
                                    <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                                </div>
                                {/* Top-Right piece */}
                                <div aria-hidden="true" style={{position: 'absolute', top: '30%', left: '65%', transform: 'translate(-50%, -50%) rotate(-60deg) scale(1.3)', width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
                                    <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                                </div>

                                {/* Gift Cards Container */}
                                <div style={{position: 'relative', width: '100%', maxWidth: '800px', aspectRatio: '16/10', zIndex: 1}}>
                                    
                                    <div style={{position: 'absolute', bottom: '5%', right: '10%', width: '70%', transform: 'rotate(12deg)', borderRadius: '16px', boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)', zIndex: 1, overflow: 'hidden'}}>
                                        <Image src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/1500Tk Front.webp" alt="1500 BDT Gift Card" width={1500} height={850} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} sizes="(max-width: 768px) 80vw, 600px" />
                                    </div>

                                    <div style={{position: 'absolute', top: '5%', left: '5%', width: '70%', transform: 'rotate(-8deg)', borderRadius: '16px', boxShadow: '0 48px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)', zIndex: 2, overflow: 'hidden'}}>
                                        <Image src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/3000Tk Front.webp" alt="3000 BDT Gift Card" width={1500} height={850} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} sizes="(max-width: 768px) 80vw, 600px" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </SectionOverlay>
            </section>

            {/* Section 2: The Collection (Z-Pattern) */}
            <section id="collection" style={{ padding: '120px 0', backgroundColor: 'var(--color-background)' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className="overline" style={{ color: 'var(--color-primary)', letterSpacing: '4px' }}>The Collection</span>
                        <h2 className="display-2" style={{ marginTop: '16px' }}>Choose Your Denomination</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
                        
                        {/* 1500 BDT Tier */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 450px', position: 'relative' }}>
                                {/* Subtle glowing pedestal */}
                                <div style={{ position: 'absolute', bottom: '-20px', left: '10%', right: '10%', height: '40px', background: 'radial-gradient(ellipse at center, rgba(240, 139, 67, 0.4) 0%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }}></div>
                                <div className="gift-card-stack" style={{ position: 'relative', zIndex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <Image src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/1500Tk Front.webp" alt="1500 BDT Gift Card" width={1500} height={850} style={{ width: '100%', height: 'auto', display: 'block' }} sizes="(max-width: 768px) 100vw, 600px" />
                                </div>
                            </div>
                            <div style={{ flex: '1 1 400px' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>1500 BDT</span>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-text-primary)' }}>The Introductory Tasting</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                                    Perfect for a casual lunch or a delightful introductory tasting experience. Gives the recipient the freedom to explore our vibrant appetizers, signature curries, and refreshing beverages.
                                </p>
                                <button className="btn btn-secondary">
                                    Add to Cart &mdash; 1500 BDT
                                </button>
                            </div>
                        </div>

                        {/* 3000 BDT Tier */}
                        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '64px', alignItems: 'center' }}>
                            <div style={{ flex: '1 1 400px' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>3000 BDT</span>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-text-primary)' }}>The Signature Feast</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '32px' }}>
                                    Ideal for an evening of shared dishes. A generous gift that allows the recipient to indulge in our premium wok-charred specialties, elaborate seafood dishes, and complete course meals.
                                </p>
                                <button className="btn btn-primary">
                                    Add to Cart &mdash; 3000 BDT
                                </button>
                            </div>
                            <div style={{ flex: '1 1 450px', position: 'relative' }}>
                                <div style={{ position: 'absolute', bottom: '-20px', left: '10%', right: '10%', height: '40px', background: 'radial-gradient(ellipse at center, rgba(240, 139, 67, 0.4) 0%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }}></div>
                                <div className="gift-card-stack" style={{ position: 'relative', zIndex: 1, borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <Image src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/3000Tk Front.webp" alt="3000 BDT Gift Card" width={1500} height={850} style={{ width: '100%', height: 'auto', display: 'block' }} sizes="(max-width: 768px) 100vw, 600px" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3: The Mechanics */}
            <section style={{ padding: '80px 0 120px 0', backgroundColor: 'var(--color-surface-base)' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
                        
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(240, 139, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--color-primary)', fontSize: '24px' }}>
                                ✉️
                            </div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>Instant Delivery</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                Gift cards are delivered instantly via email. You can send it to yourself to print, or directly to the recipient's inbox.
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(240, 139, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--color-primary)', fontSize: '24px' }}>
                                ✍️
                            </div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>Personal Touch</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                Include a custom message and select exactly when you want the digital gift card to be delivered.
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(240, 139, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'var(--color-primary)', fontSize: '24px' }}>
                                🍽️
                            </div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-primary)' }}>Seamless Redemption</h4>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                Redeemable across all three Khao San outlets. No expiration dates, and no hidden maintenance fees.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 4: Corporate Gifting */}
            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Lotus/Lotus.webp" overlayOpacity={0.9}>
                    <div className="container" style={{ position: 'relative', zIndex: 2, padding: '120px 0', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <span className="overline" style={{ color: 'var(--color-primary)', letterSpacing: '4px', marginBottom: '24px', display: 'block' }}>Corporate & Bulk</span>
                        <h2 className="display-2" style={{ marginBottom: '32px' }}>Impress Your Clients. <br /> Reward Your Team.</h2>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '48px' }}>
                            Looking to purchase gift cards in bulk for corporate events, employee rewards, or client appreciation? We offer dedicated support and custom denomination options for corporate partners.
                        </p>
                        <a href="mailto:corporate@khaosan.com" style={{
                            backgroundColor: 'transparent', 
                            color: '#fdfbf7', 
                            border: '1px solid var(--color-primary)',
                            padding: '14px 32px', 
                            borderRadius: '4px', 
                            textDecoration: 'none', 
                            display: 'inline-block', 
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease'
                        }}>
                            Inquire for Corporate Gifting
                        </a>
                    </div>
                </SectionOverlay>
            </section>

        </main>
    );
}
