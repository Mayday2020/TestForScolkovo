import Head from 'next/head'
import s from '../pages/styles/mainLayout.module.css'
export function MainLayout( {children, title} ){
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={s.main}>
                { children }
            </main>
        </>
    )
}