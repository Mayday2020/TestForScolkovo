import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function ChartId() {
    const router = useRouter()
    console.log(router)
    return (
        <MainLayout title={`Chart ${router.query.chartId}`}>
            <h1>Chart {router.query.chartId}</h1>
            <p></p>
        </MainLayout>
    )
}