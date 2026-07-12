"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import MenuCard from '@/components/ui/menu-card';

const MENU_DATA = [
    {
        id: 'a-appetizers',
        name: 'Appetizers',
        items: [
            { title: 'Bangkok Fried Chicken with House Special Dip', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Bangkok Fried Chicken with House Special Dip.webp', badge: 'special' },
            { title: 'Crispy Chicken Cabbage Roll with Sweet Chili Sauce (4pcs)', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Crispy Chicken Cabbage Roll with Sweet Chili Sauce (4pcs).webp', badge: 'spicy' },
            { title: 'Fried Garlic Calamari', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Fried Garlic Calamari.webp', badge: null },
            { title: 'Grilled Chicken Satay with Peanut Sauce (6pcs)', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Grilled Chicken Satay with Peanut Sauce (6pcs).webp', badge: null },
            { title: 'Morning Glory with Larb Gai Dip', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Morning Glory with Larb Gai Dip.webp', badge: 'spicy' },
            { title: 'Thai Fish Cake with Vinaigrette Dip (6pcs)', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Thai Fish Cake with Vinaigrette Dip (6pcs).webp', badge: null },
            { title: 'Thai Prawn Tempura With Sweet Chili Sauce (5pcs)', imageSrc: '/assets/Menu/KS Menu Webp/A. Appetizers/Thai Prawn Tempura With Sweet Chili Sauce (5pcs).webp', badge: 'spicy' },
        ]
    },
    {
        id: 'b-soups',
        name: 'Soups',
        items: [
            { title: 'Seafood Clear Soup', imageSrc: '/assets/Menu/KS Menu Webp/B. Soups/Seafood Clear Soup.webp', badge: null },
            { title: 'Tom Kha Chicken _ Seafood', imageSrc: '/assets/Menu/KS Menu Webp/B. Soups/Tom Kha Chicken _ Seafood.webp', badge: null },
            { title: 'Tom Yum Goong', imageSrc: '/assets/Menu/KS Menu Webp/B. Soups/Tom Yum Goong.webp', badge: 'spicy' },
        ]
    },
    {
        id: 'c-dumplings',
        name: 'Dumplings',
        items: [
            { title: 'Beef and Basil Potsticker', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Beef and Basil Potsticker.webp', badge: 'spicy' },
            { title: 'Chicken Lemon Grass Siu Mai', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Chicken Lemon Grass Siu Mai.webp', badge: null },
            { title: 'Chicken Wonton Soup (4 pcs wontons)', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Chicken Wonton Soup (4 pcs wontons).webp', badge: null },
            { title: 'Chicken and Basil Potsticker', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Chicken and Basil Potsticker.webp', badge: 'spicy' },
            { title: 'Chicken and Prawn Siu Mai', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Chicken and Prawn Siu Mai.webp', badge: null },
            { title: 'Prawn and Cream Cheese Rangoon', imageSrc: '/assets/Menu/KS Menu Webp/C. Dumplings/Prawn and Cream Cheese Rangoon.webp', badge: null },
        ]
    },
    {
        id: 'd-salads',
        name: 'Salads',
        items: [
            { title: 'Chicken Cashew Nut Salad', imageSrc: '/assets/Menu/KS Menu Webp/D. Salads/Chicken Cashew Nut Salad.webp', badge: null },
            { title: 'Grilled Beef Salad in Nam Tok Sauce', imageSrc: '/assets/Menu/KS Menu Webp/D. Salads/Grilled Beef Salad in Nam Tok Sauce.webp', badge: null },
            { title: 'Som Tam (Thai Papaya Salad)', imageSrc: '/assets/Menu/KS Menu Webp/D. Salads/Som Tam (Thai Papaya Salad).webp', badge: 'spicy' },
            { title: 'Thai Seafood Salad', imageSrc: '/assets/Menu/KS Menu Webp/D. Salads/Thai Seafood Salad.webp', badge: null },
        ]
    },
    {
        id: 'e-noodles',
        name: 'Noodles',
        items: [
            { title: 'KS Special Mixed Noodles', imageSrc: '/assets/Menu/KS Menu Webp/E. Noodles/KS Special Mixed Noodles.webp', badge: null },
            { title: 'Khao Soi Gai', imageSrc: '/assets/Menu/KS Menu Webp/E. Noodles/Khao Soi Gai.webp', badge: null },
            { title: 'Khao Soi Neua', imageSrc: '/assets/Menu/KS Menu Webp/E. Noodles/Khao Soi Neua.webp', badge: null },
            { title: 'Pad Thai', imageSrc: '/assets/Menu/KS Menu Webp/E. Noodles/Pad Thai.webp', badge: 'special' },
            { title: 'Thai Chilli Garlic Noodles', imageSrc: '/assets/Menu/KS Menu Webp/E. Noodles/Thai Chilli Garlic Noodles.webp', badge: null },
        ]
    },
    {
        id: 'f-rice',
        name: 'Rice',
        items: [
            { title: 'Khao San Seafood Rice', imageSrc: '/assets/Menu/KS Menu Webp/F. Rice/Khao San Seafood Rice.webp', badge: 'special' },
            { title: 'Pineapple Fried Rice', imageSrc: '/assets/Menu/KS Menu Webp/F. Rice/Pineapple Fried Rice.webp', badge: null },
            { title: 'Steamed Rice', imageSrc: '/assets/Menu/KS Menu Webp/F. Rice/Steamed Rice.webp', badge: null },
            { title: 'Thai Fried Rice', imageSrc: '/assets/Menu/KS Menu Webp/F. Rice/Thai Fried Rice.webp', badge: null },
            { title: 'Tom Yum Rice with Prawn', imageSrc: '/assets/Menu/KS Menu Webp/F. Rice/Tom Yum Rice with Prawn.webp', badge: 'spicy' },
        ]
    },
    {
        id: 'g-chicken',
        name: 'Chicken',
        items: [
            { title: 'Chicken Green Curry', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Chicken Green Curry.webp', badge: 'spicy' },
            { title: 'Chicken Penang Curry', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Chicken Penang Curry.webp', badge: null },
            { title: 'Chicken Red Curry', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Chicken Red Curry.webp', badge: null },
            { title: 'Chicken in Black Pepper', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Chicken in Black Pepper.webp', badge: null },
            { title: 'Chicken in Holy Basil', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Chicken in Holy Basil.webp', badge: 'spicy' },
            { title: 'Ginger Chicken', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Ginger Chicken.webp', badge: null },
            { title: 'Grilled Pineapple Chicken', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Grilled Pineapple Chicken.webp', badge: null },
            { title: 'Soy Glazed Honey Chicken', imageSrc: '/assets/Menu/KS Menu Webp/G. Chicken/Soy Glazed Honey Chicken.webp', badge: null },
        ]
    },
    {
        id: 'h-beef',
        name: 'Beef',
        items: [
            { title: 'Beef Basil', imageSrc: '/assets/Menu/KS Menu Webp/H. Beef/Beef Basil.webp', badge: 'spicy' },
            { title: 'Beef Red Curry', imageSrc: '/assets/Menu/KS Menu Webp/H. Beef/Beef Red Curry.webp', badge: null },
            { title: 'Beef in Black Pepper', imageSrc: '/assets/Menu/KS Menu Webp/H. Beef/Beef in Black Pepper.webp', badge: null },
            { title: 'Beef in Chilli Paste', imageSrc: '/assets/Menu/KS Menu Webp/H. Beef/Beef in Chilli Paste.webp', badge: null },
            { title: 'Wok Charred Beef', imageSrc: '/assets/Menu/KS Menu Webp/H. Beef/Wok Charred Beef.webp', badge: null },
        ]
    },
    {
        id: 'i-seafood',
        name: 'Seafood',
        items: [
            { title: 'Calamari Stir Fry', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Calamari Stir Fry.webp', badge: null },
            { title: 'Fried Whole Fish in Spicy Hot Sauce', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Fried Whole Fish in Spicy Hot Sauce.webp', badge: 'spicy' },
            { title: 'Oriental Fish in Hot Sauce', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Oriental Fish in Hot Sauce.webp', badge: null },
            { title: 'Seafood Garlic Stir Fry', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Seafood Garlic Stir Fry.webp', badge: null },
            { title: 'Seafood Yellow Curry', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Seafood Yellow Curry.webp', badge: null },
            { title: 'Seafood in Tom Yum Paste', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Seafood in Tom Yum Paste.webp', badge: 'spicy' },
            { title: 'Steamed Whole Fish Infused with Garlic Lime Sauce', imageSrc: '/assets/Menu/KS Menu Webp/I. Seafood/Steamed Whole Fish Infused with Garlic Lime Sauce.webp', badge: null },
        ]
    },
    {
        id: 'j-vegetarian',
        name: 'Vegetarian',
        items: [
            { title: 'Mushroom in Oyster Sauce', imageSrc: '/assets/Menu/KS Menu Webp/J. Vegetarian/Mushroom in Oyster Sauce.webp', badge: null },
            { title: 'Thai Green Curry', imageSrc: '/assets/Menu/KS Menu Webp/J. Vegetarian/Thai Green Curry.webp', badge: 'spicy' },
            { title: 'Thai Red Curry', imageSrc: '/assets/Menu/KS Menu Webp/J. Vegetarian/Thai Red Curry.webp', badge: null },
        ]
    },
    {
        id: 'k-rice-bowls',
        name: 'Rice Bowls',
        items: [
            { title: 'Pad Kra Pao Gai', imageSrc: '/assets/Menu/KS Menu Webp/K. Rice Bowls/Pad Kra Pao Gai.webp', badge: null },
            { title: 'Thai Chicken Bowl', imageSrc: '/assets/Menu/KS Menu Webp/K. Rice Bowls/Thai Chicken Bowl.webp', badge: null },
            { title: 'Thai Seafood Bowl', imageSrc: '/assets/Menu/KS Menu Webp/K. Rice Bowls/Thai Seafood Bowl.webp', badge: null },
            { title: 'Tom Yum Bowl', imageSrc: '/assets/Menu/KS Menu Webp/K. Rice Bowls/Tom Yum Bowl.webp', badge: 'spicy' },
        ]
    },
    {
        id: 'kids-menu',
        name: 'Kids Menu',
        items: [
            { title: 'Chicken Fried Rice with Soy Glazed Honey Chicken', imageSrc: '/assets/Menu/KS Menu Webp/Kids Menu/Chicken Fried Rice with Soy Glazed Honey Chicken.webp', badge: null },
        ]
    },
    {
        id: 'l-desserts',
        name: 'Desserts',
        items: [
            { title: 'Coconut Ice Cream Over Sticky Rice', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Coconut Ice Cream Over Sticky Rice.webp', badge: null },
            { title: 'Mango Sticky Rice with Coconut Ice Cream', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Mango Sticky Rice with Coconut Ice Cream.webp', badge: 'special' },
            { title: 'Mango Sticky Rice', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Mango Sticky Rice.webp', badge: 'special' },
            { title: 'Pina Colada Sorbet', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Pina Colada Sorbet.webp', badge: null },
            { title: 'Tapioca Mango Pudding', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Tapioca Mango Pudding.webp', badge: null },
            { title: 'Thai Milk Tea Ice Cream', imageSrc: '/assets/Menu/KS Menu Webp/L. Desserts/Thai Milk Tea Ice Cream.webp', badge: null },
        ]
    },
    {
        id: 'm-drinks',
        name: 'Drinks',
        items: [
            { title: 'Chilled Lemon Tea', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Chilled Lemon Tea.webp', badge: null },
            { title: 'Coconut Shake', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Coconut Shake.webp', badge: null },
            { title: 'Cold Brewed Tea', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Cold Brewed Tea.webp', badge: null },
            { title: 'Iced Milo', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Iced Milo.webp', badge: null },
            { title: 'Lemon Tea (Hot)', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Lemon Tea (Hot).webp', badge: null },
            { title: 'Lemongrass Ginger Tea (Hot)', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Lemongrass Ginger Tea (Hot).webp', badge: null },
            { title: 'Mixed Berry Mojito', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Mixed Berry Mojito.webp', badge: null },
            { title: 'Thai Iced Milk Tea', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Thai Iced Milk Tea.webp', badge: null },
            { title: 'Tropical Cream Limeade', imageSrc: '/assets/Menu/KS Menu Webp/M. Drinks/Tropical Cream Limeade.webp', badge: null },
        ]
    },
];


export default function Menu() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Update the sliding pill position
    useEffect(() => {
        const currentRef = navRefs.current[activeIndex];
        if (currentRef && scrollContainerRef.current) {
            // Calculate left relative to the scroll container's content
            // offsetLeft is relative to the offsetParent (the container if it has position: relative)
            setPillStyle({
                left: currentRef.offsetLeft,
                width: currentRef.offsetWidth,
                opacity: 1
            });
            
            // Scroll the container to keep the active item in view
            const container = scrollContainerRef.current;
            const scrollLeft = currentRef.offsetLeft - container.offsetWidth / 2 + currentRef.offsetWidth / 2;
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }, [activeIndex]);

    // Intersection Observer for scroll tracking
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        
        MENU_DATA.forEach((category, index) => {
            const el = document.getElementById(category.id);
            if (el) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveIndex(index);
                        }
                    },
                    { rootMargin: '-20% 0px -75% 0px' }
                );
                observer.observe(el);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, id: string) => {
        e.preventDefault();
        setActiveIndex(index);
        const el = document.getElementById(id);
        if (el) {
            // smooth scroll to element, accounting for sticky headers
            const y = el.getBoundingClientRect().top + window.scrollY - 140; 
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
        {/*  Page Hero  */}
        <PageHero overline="The Menu" title="Explore The Thai Way." description="Discover our authentic Thai dishes, crafted with uncompromising standards." />

        {/*  Category Navigation  */}
        <section 
            className="menu-nav-section" 
            style={{
                position: 'sticky',
                top: '100px', // Below the main header, with a bit of gap
                zIndex: 50,
                padding: '0 var(--space-component)', // Add padding to avoid touching screen edges
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none', // Let clicks pass through the invisible section wrapper
            }}
        >
            <div 
                className="container" 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    pointerEvents: 'auto' // Re-enable clicks for the actual nav
                }}
            >
                <div 
                    ref={scrollContainerRef}
                    className="menu-nav" 
                    style={{
                        backgroundColor: 'var(--color-surface-elevated)', // elevated brand color
                        border: '1px solid var(--color-border)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        borderRadius: '40px',
                        padding: '8px',
                        display: 'flex',
                        position: 'relative',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch',
                        gap: '8px',
                        maxWidth: '100%'
                    }}
                >
                    {/* The Sliding Pill */}
                    <div 
                        style={{
                            position: 'absolute',
                            top: 0,
                            height: '100%',
                            left: `${pillStyle.left}px`,
                            width: `${pillStyle.width}px`,
                            opacity: pillStyle.opacity,
                            backgroundColor: 'var(--color-primary)', // Solid primary brand color
                            borderRadius: '30px',
                            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                            pointerEvents: 'none', // Allow clicking through
                            zIndex: 0,
                            boxShadow: '0 4px 12px rgba(240, 139, 67, 0.4)' // Glow effect matching the primary color
                        }}
                    />

                    {MENU_DATA.map((category, index) => (
                        <a 
                            key={category.id}
                            href={`#${category.id}`} 
                            className="overline" 
                            ref={el => { navRefs.current[index] = el; }}
                            onClick={(e) => handleClick(e, index, category.id)}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                padding: '10px 24px',
                                color: activeIndex === index ? '#ffffff' : 'var(--color-text-secondary)',
                                fontWeight: activeIndex === index ? 600 : 400,
                                transition: 'color 0.3s ease, font-weight 0.3s ease',
                                fontSize: '0.8rem',
                                letterSpacing: '0.15em',
                                margin: 0,
                                borderRadius: '30px'
                            }}
                        >
                            {category.name}
                        </a>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .menu-nav::-webkit-scrollbar { display: none; }
            `}} />
        </section>

        {/*  Menu Sections  */}
        <div className="menu-sections" style={{backgroundColor: 'var(--color-surface-base)', paddingTop: 'var(--space-macro)', paddingBottom: 'var(--space-macro)'}}>
            {MENU_DATA.map((category) => (
                <section key={category.id} id={category.id} className="menu-category" style={{marginBottom: '120px'}}>
                    <div className="container">
                        <h2 className="display-2" style={{borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 'var(--space-component)', marginBottom: 'var(--space-layout)'}}>
                            {category.name}
                        </h2>
                        <div className="menu-grid">
                            {category.items.map((item, index) => (
                                <MenuCard key={index} index={index} title={item.title} imageSrc={item.imageSrc} badge={item.badge as 'special' | 'spicy' | null} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
        </>
    );
}
