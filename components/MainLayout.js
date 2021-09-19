import Link from 'next/link'
import Head from 'next/head'


export default function MainLayout({children, title = 'App'}) {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name={"keywords"} content={"some Content"}/>
                <meta name={"description"} content={"some Description"}/>
                <meta charSet={"utf-8"}/>
            </Head>
            <nav>
                <Link href={"/"}><a>Home</a></Link>
                <Link href={"/about"}><a>About</a></Link>
                <Link href={"/posts"}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}