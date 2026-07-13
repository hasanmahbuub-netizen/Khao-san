"use client";

import { useEffect } from 'react';

/**
 * The opening ritual. On a visitor's first arrival at the homepage, the whole
 * page — header included — holds in near-darkness while a single ember
 * catches at the flagship's own mark and blooms outward, lighting the room
 * into view. Once per browser session; instantly skipped under reduced
 * motion or on any page but the homepage (see the inline script in
 * app/layout.tsx, which sets the `data-ignition` attribute before first
 * paint so this never flashes unstyled).
 *
 * This component renders identical markup regardless of state — only the
 * `data-ignition` attribute (set synchronously, pre-hydration) drives the
 * CSS. That keeps SSR/hydration mismatch-free; this effect's only job is to
 * mark the ritual as seen once the sequence finishes playing.
 */
export default function IgnitionVeil() {
    useEffect(() => {
        if (document.documentElement.getAttribute('data-ignition') !== 'igniting') return;
        const timer = setTimeout(() => {
            sessionStorage.setItem('khaosan-ignited', '1');
            document.documentElement.setAttribute('data-ignition', 'lit');
        }, 1750);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="ignition-veil" aria-hidden="true">
            <div className="ignition-ember" />
        </div>
    );
}
