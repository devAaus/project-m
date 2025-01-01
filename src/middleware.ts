import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse | undefined {
   const url = request.nextUrl.clone();

   if (url.pathname === '/docs/components') {
      url.pathname = '/docs/components/buttons';
      return NextResponse.redirect(url);
   }
}
