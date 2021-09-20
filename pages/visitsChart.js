import {MainLayout} from "../components/MainLayout";

export default function VisitsChart({ charts }){
    console.log(charts)

    return (
        <MainLayout title={"Activity"}>
            <img src="https://roszdravnadzor.gov.ru/i/upload/files/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%A4%D0%BE%D1%82%D0%BE/30.03.2018/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA.png" alt=""/>

        </MainLayout>
    )
}
VisitsChart.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/charts')
    const charts = await response.json()
    return {
        charts
    }
}