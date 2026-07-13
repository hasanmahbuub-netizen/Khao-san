import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    
    // Only protect /admin routes
    if (pathname.startsWith('/admin')) {
        // Allow access to login route
        if (pathname === '/admin/login') {
            return NextResponse.next();
        }
        
        // Check for session cookie
        const session = request.cookies.get('khao_san_admin_session');
        
        if (!session || session.value !== 'authenticated') {
            // Redirect to login if not authenticated
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
