import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1><center>Home page</center></h1>
    <br />
    <center>
    <Link href="/">Home</Link> |
    <Link href="/about">About</Link> |
    <Link href="/service">service</Link> |
    <Link href="/contact">contact</Link> |
    </center>
    </>
  )
}