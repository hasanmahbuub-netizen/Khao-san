import PageHero from '@/components/ui/page-hero';
import SectionOverlay from '@/components/ui/section-overlay';
import LocationCard from '@/components/ui/location-card';

export default function Locations() {
    return (
        <>
        <PageHero 
            overline="The Spaces"
            title="Our Locations."
            description="Three distinct destinations in Dhaka. One uncompromising Thai dining experience."
            align="center"
        />

        {/* Locations Grid Spread */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Landing Page Section/Lotus background.webp" overlayOpacity={0.6}>
            
            <div style={{position: 'relative', zIndex: 2, maxWidth: '1440px', margin: '0 auto', padding: '0 4vw'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '100px'}}>
                    
                    <LocationCard 
                        type="Flagship"
                        name="Gulshan 1"
                        address="Level 1, Progress Tower, House 1, Road 23, Gulshan 1, Dhaka 1212"
                        phone="+88 01600-068193"
                        hours="Everyday: 12:00 PM - 10:15 PM"
                        imageSrc="/assets/Location Image 1_1/Gulshan Outlet 2.webp"
                        mapQuery="Level 1, Progress Tower, House 1, Road 23, Gulshan 1, Dhaka"
                    />

                    <LocationCard 
                        type="Original"
                        name="Dhanmondi"
                        address="Ahmad & Kazi Tower, Level-5, House-35, Road-2, Dhanmondi, Dhaka"
                        phone="+88 01603-523731"
                        hours="Everyday: 12:00 PM - 10:15 PM"
                        imageSrc="/assets/Location Image 1_1/Dhanmondi Outlet 1.webp"
                        mapQuery="Ahmad & Kazi Tower, Level-5, House-35, Road-2, Dhanmondi, Dhaka"
                        reverse={true}
                    />

                    <LocationCard 
                        type="New"
                        name="Uttara"
                        address="House 30, Tropical Sormi Center, Sector 13, Garib-E-Newaz Ave, Uttara, Dhaka"
                        phone="+88 01627-167758"
                        hours="Everyday: 12:00 PM - 10:15 PM"
                        imageSrc="/assets/Location Image 1_1/Uttara Outlet 3.webp"
                        mapQuery="House 30, Tropical Sormi Center, Sector 13, Garib-E-Newaz Ave, Uttara, Dhaka"
                    />
                    
                </div>
            </div>
        </SectionOverlay>
        </>
    );
}
