"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionOverlay from '@/components/ui/section-overlay';
import BrushStroke from '@/components/ui/brush-stroke';
import { useReservation } from '@/components/ReservationContext';

export default function Home() {
    const { openDrawer } = useReservation();
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const [hoveredDish, setHoveredDish] = useState<string | null>(null);
    const [activeLocation, setActiveLocation] = useState<string>('gulshan');

    return (
        <>
        {/* CHAPTER I: THE THRESHOLD (Hero) */}
        <section className="hero" style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'var(--color-surface-base)'}}>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.4}}
            >
                <source src="/assets/Brand asset/Khao San_Thoughtful interiors, fl_1602693357399955_720p_20260706.mp4" type="video/mp4" />
            </video>
            <div aria-hidden="true" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(240, 139, 67, 0.04) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none'}}></div>
            <div className="hero-overlay" aria-hidden="true" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(5, 7, 15, 0.2) 0%, rgba(5, 7, 15, 1) 100%)', zIndex: 1}}></div>
            
            <div className="container" style={{position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px', padding: '0 24px'}}>
                <span className="overline" style={{color: 'var(--color-primary)', letterSpacing: '6px', marginBottom: '24px', display: 'block', fontSize: '0.85rem'}}> Dhaka Flagship </span>
                <h1 className="display-1" style={{color: 'var(--color-text-primary)', marginBottom: '32px', position: 'relative', display: 'inline-block'}}>
                    The Thai Way.
                </h1>
                <p className="body-large" style={{color: 'var(--color-text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6}}>
                    Stepping inside is stepping into Bangkok. Dimly lit intimacy, authentic spice, and street craft elevated.
                </p>
                <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <button onClick={openDrawer} className="btn btn-primary" style={{cursor: 'pointer'}}>Book A Table</button>
                    <Link href="/menu" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.25)'}}>Explore Menu</Link>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, textAlign: 'center', opacity: 0.6}}>
                <span className="overline" style={{fontSize: '0.75rem', letterSpacing: '3px', display: 'block', marginBottom: '8px'}}>Scroll to Step In</span>
                <div className="scroll-indicator-line" style={{width: '1px', height: '40px', backgroundColor: 'var(--color-primary)', margin: '0 auto'}}></div>
            </div>
        </section>
 
        {/* CHAPTER II: THE FLAME (Energy & Craft - Split Editorial) */}
        <SectionOverlay 
            backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Lotus/Lotus.webp" 
            overlayOpacity={0.6}
            className="overflow-hidden"
        >
            
            <div className="container" style={{position: 'relative', zIndex: 2, padding: 'var(--space-macro) 0'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center', maxWidth: '1440px', margin: '0 auto'}}>
                    
                    {/* Left: The Video spread */}
                    <div style={{gridColumn: '1 / 9', position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255, 255, 255, 0.05)', aspectRatio: '16/9', zIndex: 1}}>
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.9}}
                        >
                            <source src="/assets/Brand asset/Khao San_Food is fuel, but it’s a_984497544399650_1080p_20260706.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Right: The Narrative description - Overlapping the video */}
                    <div style={{gridColumn: '7 / 13', position: 'relative', zIndex: 2, backgroundColor: 'rgba(7, 9, 17, 0.85)', backdropFilter: 'blur(24px)', padding: '64px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)', marginTop: '80px'}}>
                        <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px'}}>The Kitchen</span>
                        <h2 className="display-2" style={{marginBottom: '32px', fontSize: 'clamp(2rem, 4vw, 3.5rem)'}}>The Theatre of Fire.</h2>
                        <p className="body-large" style={{color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.8, fontSize: '1.1rem'}}>
                            Our woks are fueled by raw heat and culinary discipline. By tossing fresh ingredients at extreme temperatures, we achieve a charred, complex caramelization that defines the soul of authentic street craft.
                        </p>
                        <Link href="/menu" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.2)', padding: '16px 40px'}}>See the Craft</Link>
                    </div>

                </div>
            </div>
        </SectionOverlay>

        {/* CHAPTER III: THE STORY (Classic Editorial Split) */}
        <section className="reveal-hidden" style={{ padding: 'var(--space-macro) 0', backgroundColor: 'var(--color-surface-base)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center', maxWidth: '1440px', margin: '0 auto', justifyContent: 'space-between' }}>
                    
                    {/* Left: Beautiful Architectural/Vibe Image */}
                    <div style={{ flex: '1 1 50%', minWidth: '350px', position: 'relative', borderRadius: '8px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <Image 
                            src="/assets/Location Image 1_1/Dhanmondi Outlet 1.webp" 
                            alt="Khao San Interior Atmosphere" 
                            fill 
                            style={{ objectFit: 'cover', opacity: 0.9 }} 
                            sizes="(max-width: 768px) 100vw, 50vw" 
                        />
                    </div>

                    {/* Right: Clean, Timeless Typography */}
                    <div style={{ flex: '1 1 40%', minWidth: '300px', maxWidth: '500px', padding: '40px 0' }}>
                        <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px', letterSpacing: '4px'}}>Our Heritage</span>
                        
                        <blockquote style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15, color: 'var(--color-text-primary)', fontWeight: 600, fontStyle: 'italic', marginBottom: '32px'}}>
                            "Translating the fiery street corners of Bangkok into a quietly elevated culinary journey."
                        </blockquote>
                        
                        <p style={{color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.8}}>
                            Khao San is a bridge. We preserve the raw techniques and heat levels of legendary Thai street stalls, delivering them in a premium dining environment designed for sharing. No shortcuts. Just authentic craft.
                        </p>
                        
                        <Link href="/about" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.2)'}}>Discover Our Story</Link>
                    </div>
                    
                </div>
            </div>
        </section>
 
        {/* CHAPTER IV: THE EXHIBITION (Food Spotlight) */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Lotus/Lotus.webp" overlayOpacity={0.6}>
            
            
            <div className="container" style={{position: 'relative', zIndex: 2}}>
                <div style={{textAlign: 'center', marginBottom: '80px'}}>
                    <span className="overline" style={{color: 'var(--color-primary)'}}>The Exhibition</span>
                    <h2 className="display-2" style={{marginTop: '8px'}}>Signature Spreads</h2>
                </div>
 
                <div style={{display: 'flex', flexDirection: 'column', gap: '100px', maxWidth: '1000px', margin: '0 auto'}}>
                    {/* Dish 1 */}
                    <div 
                        onMouseEnter={() => setHoveredDish('padthai')}
                        onMouseLeave={() => setHoveredDish(null)}
                        style={{display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'flex-start', opacity: hoveredDish && hoveredDish !== 'padthai' ? 0.35 : 1, transition: 'all 0.5s ease'}}
                    >
                        <div style={{flex: '1 1 450px', position: 'relative'}}>
                            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', zIndex: -1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', background: hoveredDish === 'padthai' ? 'radial-gradient(ellipse at center, rgba(240, 139, 67, 0.06) 0%, transparent 65%)' : 'none', transition: 'all 0.5s ease'}}></div>
                            </div>
                            <Image src="/assets/Menu/KS Menu Webp/E. Noodles/Pad Thai.webp" alt="Pad Thai" width={800} height={600} style={{
                                    width: '100%', 
                                    maxWidth: '480px', 
                                    display: 'block', 
                                    margin: '0 auto', 
                                    filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))',
                                    transform: hoveredDish === 'padthai' ? 'scale(1.02)' : 'scale(1)',
                                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                                }} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                        <div style={{flex: '1 1 350px'}}>
                            <div style={{display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap'}}>
                                <span style={{color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase'}}>⭐ Signature</span>
                                <span style={{color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem'}}>|</span>
                                <span style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem', fontStyle: 'italic'}}>Tamarind, Peanut & Charred Wok</span>
                                <span style={{color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem'}}>|</span>
                                <span style={{color: '#fdfbf7', fontWeight: 600, fontSize: '0.95rem'}}>1250 BDT</span>
                            </div>
                            <h3 className="display-2" style={{marginBottom: '20px'}}>Pad Thai Goong</h3>
                            <p className="body-large" style={{color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.8, fontSize: '1.1rem'}}>
                                Rice noodles flash-tossed in high wok fire with river prawns, baked tofu, peanuts, and our house tamarind reduction. The rhythm of the wok dictates this culinary spread.
                            </p>
                            <Link href="/menu#e-noodles" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.2)'}}>View Noodles</Link>
                        </div>
                    </div>
 
                    {/* Dish 2 */}
                    <div 
                        onMouseEnter={() => setHoveredDish('tomyum')}
                        onMouseLeave={() => setHoveredDish(null)}
                        style={{display: 'flex', flexWrap: 'wrap-reverse', gap: '48px', alignItems: 'center', justifyContent: 'flex-end', opacity: hoveredDish && hoveredDish !== 'tomyum' ? 0.35 : 1, transition: 'all 0.5s ease'}}
                    >
                        <div style={{flex: '1 1 350px', textAlign: 'right'}}>
                            <div style={{display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
                                <span style={{color: '#fdfbf7', fontWeight: 600, fontSize: '0.95rem'}}>950 BDT</span>
                                <span style={{color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem'}}>|</span>
                                <span style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem', fontStyle: 'italic'}}>Lemongrass, Galangal & Kaffir Lime</span>
                                <span style={{color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem'}}>|</span>
                                <span style={{color: '#ff4d4d', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase'}}>🌶️ Fiery</span>
                            </div>
                            <h3 className="display-2" style={{marginBottom: '20px'}}>Tom Yum Goong</h3>
                            <p className="body-large" style={{color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.8, fontSize: '1.1rem', marginLeft: 'auto'}}>
                                A piping hot, sour-spicy river prawn soup infused with hand-crushed aromatics. An uncompromising standard of true Bangkok street balance.
                            </p>
                            <Link href="/menu#b-soups" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.2)'}}>View Soups</Link>
                        </div>
                        <div style={{flex: '1 1 450px', position: 'relative'}}>
                            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', zIndex: -1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', background: hoveredDish === 'tomyum' ? 'radial-gradient(ellipse at center, rgba(240, 139, 67, 0.06) 0%, transparent 65%)' : 'none', transition: 'all 0.5s ease'}}></div>
                            </div>
                            <Image src="/assets/Menu/KS Menu Webp/B. Soups/Tom Yum Goong.webp" alt="Tom Yum Goong" width={800} height={600} style={{
                                    width: '100%', 
                                    maxWidth: '480px', 
                                    display: 'block', 
                                    margin: '0 auto', 
                                    filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))',
                                    transform: hoveredDish === 'tomyum' ? 'scale(1.02)' : 'scale(1)',
                                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                                }} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </div></SectionOverlay>

        {/* CHAPTER V: THE HAVENS (Locations Spread - Full Width / Reduced Margins) */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Landing Page Section/Lotus background.webp" overlayOpacity={0.8}>
            
            {/* Wider container to minimize empty margins */}
            <div style={{position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto', padding: '0 4vw'}}>
                <div style={{textAlign: 'center', marginBottom: '80px'}}>
                    <span className="overline" style={{color: 'var(--color-primary)'}}>The Spaces</span>
                    <h2 className="display-2" style={{marginTop: '8px'}}>Our Havens.</h2>
                    <p style={{color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '16px auto 0'}}>Three deeply atmospheric dining rooms across Dhaka. Find your nearby sanctuary.</p>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center'}}>
                    
                    {/* Gulshan */}
                    <div 
                        className="location-card"
                        onClick={() => setActiveLocation('gulshan')}
                        style={{
                            flex: '1 1 350px', 
                            maxWidth: '400px',
                            backgroundColor: 'transparent', 
                            borderRadius: '4px', 
                            border: activeLocation === 'gulshan' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-float)',
                            overflow: 'hidden',
                            position: 'relative',
                            aspectRatio: '3/4'
                        }}
                    >
                        <Image src="/assets/Location Image 1_1/Gulshan Outlet 2.webp" alt="Gulshan outlet interior" fill style={{objectFit: 'cover', transition: 'transform 0.8s ease', transform: activeLocation === 'gulshan' ? 'scale(1.05)' : 'scale(1)'}} sizes="(max-width: 768px) 100vw, 400px" />
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(7, 9, 17, 0.95) 0%, rgba(7, 9, 17, 0.2) 60%, transparent 100%)', zIndex: 1}}></div>
                        
                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px 32px', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <span className="overline" style={{color: 'var(--color-primary)', marginBottom: '8px', letterSpacing: '3px'}}>Flagship</span>
                            <h3 style={{fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', fontWeight: 500}}>Gulshan 1</h3>
                            <p style={{fontSize: '0.95rem', color: 'rgba(253, 251, 247, 0.85)', marginBottom: '16px', lineHeight: 1.6}}>Level 1, Progress Tower<br/>Road 23</p>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginTop: '16px'}}>
                                <span style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>12:00 PM - 10:15 PM</span>
                                <span style={{color: 'var(--color-text-primary)', fontSize: '0.9rem', fontWeight: 600, borderBottom: '1px solid var(--color-primary)'}}>Reserve &rarr;</span>
                            </div>
                        </div>
                    </div>

                    {/* Dhanmondi */}
                    <div 
                        className="location-card"
                        onClick={() => setActiveLocation('dhanmondi')}
                        style={{
                            flex: '1 1 350px', 
                            maxWidth: '400px',
                            backgroundColor: 'transparent', 
                            borderRadius: '4px', 
                            border: activeLocation === 'dhanmondi' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-float)',
                            overflow: 'hidden',
                            position: 'relative',
                            aspectRatio: '3/4',
                            marginTop: '40px'
                        }}
                    >
                        <Image src="/assets/Location Image 1_1/Dhanmondi Outlet 1.webp" alt="Dhanmondi outlet interior" fill style={{objectFit: 'cover', transition: 'transform 0.8s ease', transform: activeLocation === 'dhanmondi' ? 'scale(1.05)' : 'scale(1)'}} sizes="(max-width: 768px) 100vw, 400px" />
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(7, 9, 17, 0.95) 0%, rgba(7, 9, 17, 0.2) 60%, transparent 100%)', zIndex: 1}}></div>
                        
                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px 32px', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <span className="overline" style={{color: 'var(--color-primary)', marginBottom: '8px', letterSpacing: '3px'}}>Original</span>
                            <h3 style={{fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', fontWeight: 500}}>Dhanmondi</h3>
                            <p style={{fontSize: '0.95rem', color: 'rgba(253, 251, 247, 0.85)', marginBottom: '16px', lineHeight: 1.6}}>Imperial Amin Center<br/>House 54, Road 10A</p>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginTop: '16px'}}>
                                <span style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>12:00 PM - 10:15 PM</span>
                                <span style={{color: 'var(--color-text-primary)', fontSize: '0.9rem', fontWeight: 600, borderBottom: '1px solid var(--color-primary)'}}>Reserve &rarr;</span>
                            </div>
                        </div>
                    </div>

                    {/* Uttara */}
                    <div 
                        className="location-card"
                        onClick={() => setActiveLocation('uttara')}
                        style={{
                            flex: '1 1 350px', 
                            maxWidth: '400px',
                            backgroundColor: 'transparent', 
                            borderRadius: '4px', 
                            border: activeLocation === 'uttara' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-float)',
                            overflow: 'hidden',
                            position: 'relative',
                            aspectRatio: '3/4'
                        }}
                    >
                        <Image src="/assets/Location Image 1_1/Uttara Outlet 3.webp" alt="Uttara outlet interior" fill style={{objectFit: 'cover', transition: 'transform 0.8s ease', transform: activeLocation === 'uttara' ? 'scale(1.05)' : 'scale(1)'}} sizes="(max-width: 768px) 100vw, 400px" />
                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(7, 9, 17, 0.95) 0%, rgba(7, 9, 17, 0.2) 60%, transparent 100%)', zIndex: 1}}></div>
                        
                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '40px 32px', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <span className="overline" style={{color: 'var(--color-primary)', marginBottom: '8px', letterSpacing: '3px'}}>Sanctuary</span>
                            <h3 style={{fontSize: '2rem', marginBottom: '12px', color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', fontWeight: 500}}>Uttara</h3>
                            <p style={{fontSize: '0.95rem', color: 'rgba(253, 251, 247, 0.85)', marginBottom: '16px', lineHeight: 1.6}}>Gausul Azam Avenue<br/>Sector 13</p>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '16px', marginTop: '16px'}}>
                                <span style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)'}}>12:00 PM - 10:15 PM</span>
                                <span style={{color: 'var(--color-text-primary)', fontSize: '0.9rem', fontWeight: 600, borderBottom: '1px solid var(--color-primary)'}}>Reserve &rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{textAlign: 'center', marginTop: '56px'}}>
                    <Link href="/locations" className="btn btn-secondary" style={{color: '#fdfbf7', borderColor: 'rgba(253, 251, 247, 0.25)'}}>Get Directions &rarr;</Link>
                </div>
            </div></SectionOverlay>
        {/* CHAPTER VI: THE GIFT (Exact Poster Reference Implementation - 70/30 Split) */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Lotus/Lotus.webp" overlayOpacity={0.85}>
            <div className="container" style={{position: 'relative', zIndex: 2, padding: 'var(--space-macro) 0'}}>
                <div style={{display: 'flex', flexWrap: 'wrap-reverse', gap: '5%', alignItems: 'center', maxWidth: '1440px', margin: '0 auto'}}>
                    
                    {/* Left: 30% Text Column */}
                    <div style={{flex: '0 1 30%', minWidth: '320px', paddingRight: '20px'}}>
                        <h2 style={{
                            fontFamily: 'var(--font-display)', 
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                            lineHeight: 1.1, 
                            marginBottom: '24px',
                            color: '#fdfbf7',
                            fontWeight: 600
                        }}>
                            An evening, <span style={{color: 'var(--color-primary)', fontStyle: 'italic'}}>Gifted.</span>
                        </h2>
                        
                        <p style={{
                            color: '#fdfbf7', 
                            fontSize: '1.05rem', 
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
                            fontSize: '0.95rem'
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
                        
                        <Link href="/giftcards" style={{
                            backgroundColor: 'var(--color-primary)', 
                            color: '#070911', 
                            padding: '14px 32px', 
                            borderRadius: '4px', 
                            textDecoration: 'none', 
                            display: 'inline-block', 
                            fontWeight: 700,
                            letterSpacing: '0.5px'
                        }}>
                            Purchase Gift Card &rarr;
                        </Link>
                    </div>

                    {/* Right: 70% Picture Showcase */}
                    <div style={{flex: '1 1 60%', position: 'relative', minWidth: '400px', minHeight: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                        {/* Dynamic Orange Brush/Splash Backdrop - Sweeping Curve */}
                        {/* Bottom-Left piece */}
                        <div aria-hidden="true" style={{
                            position: 'absolute',
                            top: '70%',
                            left: '35%',
                            transform: 'translate(-50%, -50%) rotate(-30deg) scale(1.3)',
                            width: '100%',
                            height: '100%',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}>
                            <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                        </div>

                        {/* Center piece */}
                        <div aria-hidden="true" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) rotate(-45deg) scale(1.4)',
                            width: '100%',
                            height: '100%',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}>
                            <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                        </div>

                        {/* Top-Right piece */}
                        <div aria-hidden="true" style={{
                            position: 'absolute',
                            top: '30%',
                            left: '65%',
                            transform: 'translate(-50%, -50%) rotate(-60deg) scale(1.3)',
                            width: '100%',
                            height: '100%',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}>
                            <Image src="/assets/brush-strokes/saffron.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.95 }} />
                        </div>

                        {/* Gift Cards Container */}
                        <div style={{position: 'relative', width: '100%', maxWidth: '800px', aspectRatio: '16/10', zIndex: 1}}>
                            
                            {/* 1500Tk Card (Bottom layer, rotated right) */}
                            <div style={{
                                position: 'absolute',
                                bottom: '5%',
                                right: '10%',
                                width: '70%',
                                transform: 'rotate(12deg)',
                                borderRadius: '16px',
                                boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
                                zIndex: 1,
                                overflow: 'hidden'
                            }}>
                                <Image 
                                    src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/1500Tk Front.webp" 
                                    alt="1500 BDT Gift Card" 
                                    width={1500} 
                                    height={850} 
                                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                                    sizes="(max-width: 768px) 80vw, 600px" 
                                />
                            </div>

                            {/* 3000Tk Card (Top layer, rotated left) */}
                            <div style={{
                                position: 'absolute',
                                top: '5%',
                                left: '5%',
                                width: '70%',
                                transform: 'rotate(-8deg)',
                                borderRadius: '16px',
                                boxShadow: '0 48px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)',
                                zIndex: 2,
                                overflow: 'hidden'
                            }}>
                                <Image 
                                    src="/assets/Giftcards-20260709T183548Z-2-001/Giftcards/3000Tk Front.webp" 
                                    alt="3000 BDT Gift Card" 
                                    width={1500} 
                                    height={850} 
                                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                                    sizes="(max-width: 768px) 80vw, 600px" 
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </SectionOverlay>



        {/* CHAPTER VII: THE INVITATION */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Landing Page Section/Lotus background.webp" overlayOpacity={0.8}>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.4}}
            >
                <source src="/assets/Brand asset/Khao San_The wait is finally over_2134770693761947_1080p_20260706.mp4" type="video/mp4" />
            </video>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(7, 9, 17, 0.4) 0%, rgba(7, 9, 17, 0.8) 100%)', zIndex: 1}}></div>
            <div aria-hidden="true" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(240, 139, 67, 0.08) 0%, transparent 60%)', zIndex: 1, pointerEvents: 'none'}}></div>
            
            <div className="container" style={{position: 'relative', zIndex: 2, maxWidth: '700px'}}>
                <span className="overline" style={{color: 'var(--color-primary)', display: 'block', marginBottom: '24px'}}>The Final Table</span>
                <h2 className="display-2" style={{marginBottom: '32px'}}>Taste the fire.</h2>
                <p className="body-large" style={{color: 'var(--color-text-secondary)', marginBottom: '48px', fontSize: '1.2rem'}}>We recommend reserving in advance. Claim your seat in one of our Dhaka sanctuaries.</p>
                <button onClick={openDrawer} className="btn btn-primary" style={{padding: '20px 48px', fontSize: '1.1rem', cursor: 'pointer'}}>Reserve A Table Now &rarr;</button>
            </div>
        </SectionOverlay>
        </>
    );
}
