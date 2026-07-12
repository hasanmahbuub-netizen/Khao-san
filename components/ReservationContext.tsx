"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ReservationContextType {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function useReservation() {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error("useReservation must be used within a ReservationProvider");
    }
    return context;
}

export function ReservationProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const openDrawer = () => {
        setIsOpen(true);
        setIsSubmitted(false);
    };
    
    const closeDrawer = () => setIsOpen(false);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <ReservationContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
            {children}
            
            {/* The Overlay Backdrop */}
            <div 
                className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
                onClick={closeDrawer}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 999,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 0.4s ease'
                }}
            />

            {/* The Drawer Panel */}
            <div 
                className={`reservation-drawer ${isOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: isOpen ? 0 : '-100%',
                    width: '100%',
                    maxWidth: '500px',
                    height: '100vh',
                    backgroundColor: 'var(--color-surface-elevated)',
                    zIndex: 1000,
                    transition: 'right 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                    overflowY: 'auto',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ padding: '32px clamp(24px, 5vw, 48px)', flex: '1 0 auto' }}>
                    
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <div>
                            <span className="overline" style={{color: 'var(--color-primary)'}}>Experience</span>
                            <h2 className="display-2" style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2rem)'}}>Reserve your table.</h2>
                        </div>
                        <button onClick={closeDrawer} style={{ background: 'none', border: 'none', color: '#fdfbf7', fontSize: '2.5rem', cursor: 'pointer', padding: '0 8px', lineHeight: 1 }}>&times;</button>
                    </div>

                    {isSubmitted ? (
                        <div style={{ textAlign: 'center', padding: '64px 0' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(240, 139, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto', color: 'var(--color-primary)', fontSize: '32px' }}>✓</div>
                            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '16px' }}>Reservation Confirmed</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>We have received your reservation request. A confirmation details have been sent to your email.</p>
                            <button onClick={closeDrawer} className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 32px' }}>Return to Website</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="premium-form" style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                            
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Location</label>
                                <select required className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }}>
                                    <option value="" disabled selected style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-secondary)'}}>Select Branch</option>
                                    <option value="gulshan" style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>Gulshan 1</option>
                                    <option value="dhanmondi" style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>Dhanmondi</option>
                                    <option value="uttara" style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>Uttara</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 180px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Date</label>
                                    <input type="date" required min={new Date().toISOString().split('T')[0]} className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }} />
                                </div>
                                <div style={{ flex: '1 1 180px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Time</label>
                                    <select required className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }}>
                                        <option value="" disabled selected style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-secondary)'}}>Select Time</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>12:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>1:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>2:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>7:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>8:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>9:00 PM</option>
                                        <option style={{backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-primary)'}}>10:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>Party Size</label>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {['2', '3', '4', '5+'].map(size => (
                                        <label key={size} style={{ flex: 1, minWidth: '80px' }}>
                                            <input type="radio" name="partySize" value={size} required style={{ display: 'none' }} />
                                            <div style={{
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '4px',
                                                padding: '12px 8px',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                color: 'var(--color-text-primary)',
                                                fontSize: '0.9rem'
                                            }}
                                            className="party-size-btn"
                                            >
                                                {size} {size === '5+' ? 'Guests' : 'Persons'}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <style dangerouslySetInnerHTML={{__html: `
                                input[type="radio"]:checked + .party-size-btn {
                                    border-color: var(--color-primary) !important;
                                    background-color: rgba(240, 139, 67, 0.1) !important;
                                    color: var(--color-primary) !important;
                                }
                                .party-size-btn:hover {
                                    border-color: rgba(255,255,255,0.3);
                                }
                            `}} />

                            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 180px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Name</label>
                                    <input type="text" placeholder="Full Name" required className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }} />
                                </div>
                                <div style={{ flex: '1 1 180px' }}>
                                    <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Phone</label>
                                    <input type="tel" placeholder="Phone Number" required className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Special Requests (Optional)</label>
                                <input type="text" placeholder="Dietary restrictions or occasions" className="premium-input" style={{ width: '100%', outline: 'none', color: 'var(--color-text-primary)' }} />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '16px', fontSize: '1rem' }}>Confirm Reservation</button>
                        </form>
                    )}
                </div>
            </div>
        </ReservationContext.Provider>
    );
}
