import Link from 'next/link'
import MainLayout from "../components/MainLayout";
export default function ErrorPage() {
    return (
        <MainLayout title={"404 Page not found"}>
        <h1>Error 404</h1>
            <p>Please <Link href={"/"}><a>go back</a></Link> to safety</p>
        </MainLayout>
    )
}