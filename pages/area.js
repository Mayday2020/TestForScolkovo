import Link from 'next/link';
import {MainLayout} from "../components/MainLayout";
import s from './styles/area.module.css'
export default function Area( { charts } ) {
    return (
        <MainLayout title={"Personal area"}>
            <div>
                <h1>Statistics</h1>
                <p><Link href="/gendersChart"><a className={s.a}>Registered</a></Link></p>
                <p><Link href="/visitsChart"><a className={s.a}>Activity</a></Link></p>
            </div>
        </MainLayout>
    )
}
Area.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/charts')
    const charts = await response.json()
    return {
        charts
    }
}