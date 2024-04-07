import {createRouteHandlerClient} from '@supabase/auth-helpers-nextjs'
import {coockies} from 'next/headers';
import { NextResponse } from 'next/server';

export async function Get(request){
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    if(code){
        const coockieStore = coockies();
        const supabase = createRouteHandlerClient({cookies: ()=> coockieStore})
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(requestUrl.origin)
}