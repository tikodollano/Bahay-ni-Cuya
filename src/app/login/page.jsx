'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(){
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const supabase = createClientComponentClient();

    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh();
        setemail('');
        setPassword('');
    }

    const handleSignIn = async () => {
        await supabase.auth.signInWithPassword({
            email,password
        })
        router.refresh();
        setemail('');
        setPassword('');
    }

    return (
        <main>
            <input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            />
    
            <input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
    
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleSignIn}>Sign In</button>
        </main>
    );

    
    
}