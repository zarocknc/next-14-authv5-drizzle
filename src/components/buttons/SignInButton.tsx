import { signIn, signOut } from "@/auth";

async function login() {
    "use server"
    await signIn();
}
async function logout() {
    "use server"
    await signOut();
}



export default function SignInButton() {
    return (
        <>
            <form action={login}>
                <button type='submit'>SignIn</button>
            </form>

            <form action={logout}>
                <button type='submit'>SignOut</button>
            </form>
        </>
    )
}