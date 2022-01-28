import {Bar, Line, Pie, Doughnut} from "react-chartjs-2";
//import { Bar } from "react-chartjs-2";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    ArcElement,
} from 'chart.js';
import './charts.css'


export const BarChart = ({chartData}) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
    );

    console.log('InBC', chartData)
    ;
    return (
        <div>
            <div className={'bardiv'}>

                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Cryptocurrency prices"
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    }}
                />
            </div>
            <div className={'linediv'}>
                <Line
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Cryptocurrency prices"
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    }}
                />
            </div>
            <div className={'dondiv'}>

                <Doughnut
                    data={chartData}
                    //     {/*width={"30%"}*/}

                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: "Cryptocurrency prices"
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    }}
                />

            </div>

        </div>


    );
};

