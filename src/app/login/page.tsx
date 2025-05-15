import Link from "next/link";
import { supabase } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default async function LoginPage() {
    const { data: session } = await supabase.auth.getSession();

    if (session.session) {
        return (
            <div className="login-page">
                <h1>You are already logged in</h1>
                <Link href="/">Go to Home</Link>
            </div>
        );
    }

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
        });
        if (error) {
            console.error("Error logging in:", error.message);
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <Button onClick={handleLogin} variant="default" size="lg">
                Sign in with Google
            </Button>
        </div>
    );
}
