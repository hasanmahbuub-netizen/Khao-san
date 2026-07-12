import Link from 'next/link';
import PageHero from '@/components/ui/page-hero';
import SectionOverlay from '@/components/ui/section-overlay';
import EditorialBlock from '@/components/ui/editorial-block';

export default function About() {
    return (
        <>
        <PageHero 
            overline="The Thai Way"
            title="Bringing authentic Thai flavours to Dhaka."
            description="We believe that true hospitality is an art form. Every dish, every interaction, and every shadow in our dining room is designed to transport you."
        />

        {/* Editorial Block 01: Thoughtful Interiors */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Landing Page Section/Lotus background.webp" overlayOpacity={0.6}>
            <EditorialBlock 
                overline="Atmosphere"
                title="Thoughtful interiors."
                description="Our spaces are designed with intention. We blend raw concrete textures with warm, ambient lighting to create an atmosphere that feels both modern and timeless."
                mediaType="image"
                mediaSrc="/assets/Location Image 1_1/Dhanmondi Outlet 1.webp"
                mediaAlt="Dhanmondi Outlet Interior"
            />
        </SectionOverlay>

        {/* Editorial Block 02: Food as Experience */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Elephant 16 by 9 Ratio Landscape.webp" overlayOpacity={0.6}>
            <EditorialBlock 
                overline="Craft"
                title="Food is fuel, but it's an experience."
                description="From our rich coconut curry broth to the wok-charred edges of our noodles, every bite is a testament to the uncompromising quality of our ingredients."
                mediaType="video"
                mediaSrc="/assets/Brand asset/Khao San_Rich coconut curry broth_1321748130161536_1440p_20260706.mp4"
                reverse={true}
            />
        </SectionOverlay>

        {/* Editorial Block 03: The Invitation */}
        <SectionOverlay backgroundImage="/assets/Background-20260709T183540Z-2-001/Background/Footer/Footer.webp" overlayOpacity={0.6}>
            <EditorialBlock 
                overline="The Invitation"
                title="The wait is finally over."
                description="Experience the authentic taste of Thailand in the heart of Dhaka. We are ready to serve you."
                mediaType="video"
                mediaSrc="/assets/Brand asset/Khao San_The wait is finally over_986585447487584_1080p_20260706.mp4"
            >
                <Link href="/reserve" className="btn btn-primary">Reserve Your Table</Link>
            </EditorialBlock>
        </SectionOverlay>
        </>
    );
}
