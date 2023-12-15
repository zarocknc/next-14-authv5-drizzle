import Image from 'next/image'
import { signIn, signOut, auth } from "@/auth"
import SignInButton from '@/components/buttons/SignInButton'


export default async function Home() {
  const session = await auth()
  return (
    <main className="">
      <h1>Hola</h1>
      <p>Este es un parrafo</p>
      <SignInButton />
      <br />
      {session ? <>
        <span>Estas logeado</span>
        <p>{JSON.stringify(session)}</p>
      </> : <p>no estas logueado</p>}
    </main>
  )
}
