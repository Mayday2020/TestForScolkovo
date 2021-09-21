import {MainLayout} from "../components/MainLayout";
import React from "react";
    // этот JSON деструктурирован вручную
const initialStateGender = {
    gendersChart: [
        {
            gender: "male",
            age: {"0-10": 10, "11-20": 3, "21-30": 0, "31-80": 15}
        },
        {
            gender: "female",
            age: {"0-10": 2, "11-20": 6, "21-30": 3, "31-80": 8}
        }
    ]
}
export default class GendersChartClass extends React.Component {
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
            ctx.fillText((5 - i) * 3 + "", 4, i * 80 + 60);
            ctx.beginPath();
            ctx.moveTo(25, i * 80 + 60);
            ctx.lineTo(30, i * 80 + 60);
            ctx.stroke();
        }

        // Массив с меткам месяцев
        let labels = ['0-10', "11-20", "21-30", "31-80"];

        // Выводим меток
        for(var i=0; i<4; i++) {
            ctx.fillText(labels[i], 50+ i*100, 475);
        }
        // Объявляем массив данных графика
        let dataGenderX = [
            [10, 3, 0, 15],
            [2, 6, 3, 8]
        ]
// Цикл для от рисовки графиков
        for(let j = 0; j < dataGenderX.length; j++){
            for(let i = 0; i < 5; i++){
                let dp = dataGenderX[j][i] * 5.5;
                if(j === 1){
                    ctx.fillStyle = "red";
                } else{
                    ctx.fillStyle = "blue";
                }
                ctx.fillRect(55 + j*10 + i*100, 460-dp*5, 5, dp*5 )
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