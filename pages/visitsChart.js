import {MainLayout} from "../components/MainLayout";
import s from './styles/styleChart.module.css'

/*const initialState = [
    {
        gender: "male",
        age: {"0-10": 10, "11-20": 3, "21-30": 0, "31-80": 15}
    },
    {
        gender: "female",
        age: {"0-10": 2, "11-20": 6, "21-30": 3, "31-80": 8}
    }
]*/


export default function VisitsChart({ charts }){
    console.log(charts)
    /*function canvas () {
        // Получаем canvas элемент
        let canvas = document.getElementById('canvas');
        // Указываем элемент для 2D рисования
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "black"; // Задаём чёрный цвет для линий
        ctx.lineWidth = 2.0; // Ширина линии
        ctx.beginPath(); // Запускает путь
        ctx.moveTo(30, 10); // Указываем начальный путь
        ctx.lineTo(30, 460); // Перемешаем указатель
        ctx.lineTo(500, 460); // Ещё раз перемешаем указатель
        ctx.stroke(); // Делаем контур

        // Цвет для рисования
        ctx.fillStyle = "black";
        // Цикл для отображения значений по Y
        for(let i = 0; i < 6; i++) {
            ctx.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
            ctx.beginPath();
            ctx.moveTo(25, i * 80 + 60);
            ctx.lineTo(30, i * 80 + 60);
            ctx.stroke();
        }

        // Массив с меткам месяцев
        let labels = ["JAN", "FEB", "MAR", "APR", "MAY"];

        // Выводим меток
        for(var i=0; i<5; i++) {
            ctx.fillText(labels[i], 50+ i*100, 475);
        }

        // Объявляем массив данных графика
        let data = [ 10, 53, 39, 54, 21 ];

        // Назначаем зелёный цвет для графика
        ctx.fillStyle = "green";
        // Цикл для от рисовки графиков
        for(var i=0; i<data.length; i++) {
            var dp = data[i];
            ctx.fillRect(40 + i*100, 460-dp*5 , 50, dp*5);
        }
    }*/

    return (
        <MainLayout title={"Activity"}>
            <img src="https://roszdravnadzor.gov.ru/i/upload/files/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/%D0%A4%D0%BE%D1%82%D0%BE/30.03.2018/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA.png" alt=""/>
            {/*<canvas className={s.canvas} width="500" height="500" id="canvas" > </canvas>
            {canvas()}*/}
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