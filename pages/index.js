import Link from 'next/link'
import Head from 'next/head'
import MainLayout from "../components/MainLayout";

export default function Index(){
    return (
        <MainLayout title={"Home Page"}>

            <h1>Hello NEXT.js</h1>
            <p><Link href="/about"><a>About</a></Link></p>
            <p><Link href="/posts"><a>Posts</a></Link></p>
            <p>Some text, like a Lorem ipsum dolor sit amet</p>
        </MainLayout>
    )
}