import React from 'react'
import {MainLayout} from "../components/MainLayout";

// этот JSON деструктурирован вручную
const initialState = {
    visitsChart: {
        date: ["1.10", "2.10", "3.10", "4.10", "5.10"],
        values: [
            [2, 4, 5, 0, 7],
            [1, 0, 12, 6, 2],
            [8, 2, 2, 3, 7],
            [1, 1, 0, 9, 1],
            [1, 2, 3, 4, 5]
        ]
    }
}

export default class VisitChartClass extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        const ctx = this.myRef.current.getContext('2d')
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
            ctx.fillText((5 - i) * 2 + "", 4, i * 80 + 60);
            ctx.beginPath();
            ctx.moveTo(25, i * 80 + 60);
            ctx.lineTo(30, i * 80 + 60);
            ctx.stroke();
        }

        // Массив с меткам месяцев
        let labels = initialState.visitsChart.date;

        // Выводим меток
        for(var i=0; i<5; i++) {
            ctx.fillText(labels[i], 50+ i*100, 475);
        }
        // Объявляем массив данных графика
        let data = [
            [2, 4, 5, 0, 7],
            [1, 0, 12, 6, 2],
            [8, 2, 2, 3, 7],
            [1, 1, 0, 9, 1],
            [1, 2, 3, 4, 5]
        ]
// Назначаем зелёный цвет для графика
        ctx.fillStyle = "green";
// Цикл для от рисовки графиков
        for(let j = 0; j < data.length; j++){
            for(let i = 0; i < 5; i++){
                let dp = data[j][i] * 8;
                ctx.fillRect(40 + j*8 + i*100, 460-dp*5, 5, dp*5 )
            }
        }
    }
    render(){
        return (
            <MainLayout title={"Activity"}>
                <div>
                    <canvas ref={this.myRef}
                            id="myChart"
                            aria-label="Hello ARIA World"
                            role="img"
                            width="500"
                            height="500">

                    </canvas>
                </div>
            </MainLayout>
        )
    }
}
