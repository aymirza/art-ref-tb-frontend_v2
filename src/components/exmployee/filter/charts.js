import {useState} from 'react';
import 'C:/ayka/safety_project/full/tb-ref-frontend/src/App.css';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend, plugins} from 'chart.js';
import {Doughnut, Pie} from 'react-chartjs-2';
import React from "react";
import 'chartjs-plugin-datalabels';

//ayka tb ref

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);


function ExmChart() {
    const [yy, setYy] = useState('');
    const handleChange1 = (event) => {
        setYy(event.target.value);
        console.log(yy)
    };
    const [updated, setUpdated] = useState(`${yy}`);
    const handleClick = () => {
        setUpdated(`${yy}`);
        console.log(updated)
        console.log(yy)
        const fetchData1 = () => {
            fetch(`http://localhost:4041/api/uchastka/${yy}`).then((data) => {
                const res = data.json();
                return res
            }).then((res) => {
                console.log("resss", res)
                const label = [];
                const data = [];
                for (var i of res) {
                    label.push([i.uchastka]);
                    data.push(i.resultcount);
                }
                setData(
                    {
                        datasets: [{
                            data: data,
                            backgroundColor: [
                                '#FF0000',
                                '#0000FF',
                                '#006400',
                                '#FF6600',
                                '#000000',
                                '#FFFF00',
                                '#A020F0',
                                '#C0C0C0',
                                '#964B00',
                                '#FFC0CB',
                                '#808000',
                                '#8F00FF',
                                '#FFD700',
                                '#008080'
                            ]
                        }],
                        labels: label,


                    },
                )

            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData1();

        const fetchData2 = () => {
            fetch(`http://localhost:4041/api/tsex/${yy}`).then((data2) => {
                const res = data2.json();
                return res
            }).then((res) => {
                console.log("resss", res)
                const label = [];
                const data2 = [];
                for (var i of res) {
                    label.push(i.tsex_uchastka);
                    data2.push(i.resultcount2)
                }
                setData2(
                    {
                        datasets: [{
                            data: data2,
                            backgroundColor: [
                                '#FF0000',
                                '#0000FF',
                                '#006400',
                                '#FF6600',
                                '#000000',
                                '#FFFF00',
                                '#A020F0',
                                '#C0C0C0',
                                '#964B00',
                                '#FFC0CB',
                                '#808000',
                                '#8F00FF',
                                '#FFD700',
                                '#008080'
                            ]
                        },
                        ],
                        labels: label,
                        options: {
                            plugins: {
                                labels: {
                                    display: true,
                                    align: 'right',
                                    backgroundColor: '#ccc',
                                    borderRadius: 3,
                                    font: {
                                        size: 18,
                                    },
                                }
                            }
                        },
                    }
                )

            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData2();

        const fetchData3 = () => {
            fetch(`http://localhost:4041/api/pravila/${yy}`).then((data3) => {
                const res = data3.json();
                return res
            }).then((res) => {
                console.log("resss", res)
                const label = [];
                const data3 = [];
                for (var i of res) {
                    label.push(i.pravila);
                    data3.push(i.resultcount3)
                }
                setData3(
                    {
                        datasets: [{
                            data: data3,
                            backgroundColor: [
                                '#FF0000',
                                '#0000FF',
                                '#006400',
                                '#FF6600',
                                '#000000',
                                '#FFFF00',
                                '#A020F0',
                                '#C0C0C0',
                                '#964B00',
                                '#FFC0CB',
                                '#808000',
                                '#8F00FF',
                                '#FFD700',
                                '#008080'
                            ]
                        },
                        ],
                        labels: label,
                    },
                )

            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData3();

        const fetchData4 = () => {
            fetch(`http://localhost:4041/api/narushenie/${yy}`).then((data4) => {
                const res = data4.json();
                return res
            }).then((res) => {
                console.log("resss", res)
                const label = [];
                const data4 = [];
                for (var i of res) {
                    label.push(i.narushenie);
                    data4.push(i.resultcount4)
                }
                setData4(
                    {
                        datasets: [{
                            data: data4,
                            backgroundColor: [
                                '#FF0000',
                                '#0000FF',
                                '#006400',
                                '#FF6600',
                                '#000000',
                                '#FFFF00',
                                '#A020F0',
                                '#C0C0C0',
                                '#964B00',
                                '#FFC0CB',
                                '#808000',
                                '#8F00FF',
                                '#FFD700',
                                '#008080'
                            ]
                        },
                        ],
                        labels: label,
                    },
                )

            }).catch(e => {
                console.log("error", e)
            })
        }
        fetchData4();
    };

    const [data, setData] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#FF0000',
                '#0000FF',
                '#006400',
                '#FF6600',
                '#000000',
                '#FFFF00',
                '#A020F0',
                '#C0C0C0',
                '#964B00',
                '#FFC0CB',
                '#808000',
                '#8F00FF',
                '#FFD700',
                '#008080'
            ]
        },
        ],
        labels: [
            'red',
            'blue',
            'yellow',
            'pink',
            'orange',
            'black',
            'brown',
            'grey',
            'Purple',
            'Charcoal',
            'Gold',
            'Mauve',
            'Amber'
        ],
    });
    const [data2, setData2] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#FF0000',
                '#0000FF',
                '#006400',
                '#FF6600',
                '#000000',
                '#FFFF00',
                '#A020F0',
                '#C0C0C0',
                '#964B00',
                '#FFC0CB',
                '#808000',
                '#8F00FF',
                '#FFD700',
                '#008080'
            ]
        },
        ],
        labels: [
            'red',
            'blue',
            'yellow',
            'pink',
            'orange',
            'black',
            'brown',
            'grey',
            'Purple',
            'Charcoal',
            'Gold',
            'Mauve',
            'Amber'
        ],

    });
    const [data3, setData3] = useState({
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#FF0000',
                '#0000FF',
                '#006400',
                '#FF6600',
                '#000000',
                '#FFFF00',
                '#A020F0',
                '#C0C0C0',
                '#964B00',
                '#FFC0CB',
                '#808000',
                '#8F00FF',
                '#FFD700',
                '#008080'
            ]
        },
        ],

        labels: [
            'red',
            'blue',
            'yellow',
            'pink',
            'orange',
            'black',
            'brown',
            'grey',
            'Purple',
            'Charcoal',
            'Gold',
            'Mauve',
            'Amber'
        ],
    });
    const [data4, setData4] = useState({
        datasets: [
            {
            data: [10, 20, 30],
            backgroundColor: [
                '#FF0000',
                '#0000FF',
                '#006400',
                '#FF6600',
                '#000000',
                '#FFFF00',
                '#A020F0',
                '#C0C0C0',
                '#964B00',
                '#FFC0CB',
                '#808000',
                '#8F00FF',
                '#FFD700',
                '#008080'
            ],
        },
        ],
        labels: [
            'red',
            'blue',
            'yellow',
            'pink',
            'orange',
            'black',
            'brown',
            'grey',
            'Purple',
            'Charcoal',
            'Gold',
            'Mauve',
            'Amber'
        ],
    });


    return (
        <div style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div>
                <div style={{
                    height: "10%",
                    width: "50%",
                    padding: '10px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <input
                        style={{width: '50%', marginRight: '10px', marginLeft: '17%'}}
                        type="text"
                        onChange={handleChange1}
                        value={yy}
                        placeholder="yil va oyni kiriting, misol: 2022/12 "
                    />
                    <button onClick={handleClick}>Qidirish</button>
                </div>
                <div style={{
                    height: "35%",
                    width: "50%",
                    padding: '10px',
                    display: 'grid',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h5 style={{textAlign: "center"}}> Ой давомида коида бузарликлар содир булган цех, булималар хисобида </h5>
                    <Doughnut data={data}
                              options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: "right",
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                    fontsize: 5,
                                },
                            },


                        },
                    }}
                    />
                </div>
                <div style={{
                    height: "30%",
                    width: "45%",
                    padding: '10px',
                    display: 'grid',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h5 style={{textAlign: "center"}}>Oy davomida takrorlanayotgan qoyda buzarliklar hisobida</h5>
                    <Pie data={data3} options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: "bottom",
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                    fontsize: 5,
                                },
                            },
                        },
                    }}
                         style={{
                             height: "100%",
                             width: "100%"
                         }
                         }/>
                </div>

                <div style={{
                    height: "35%",
                    width: "45%",
                    padding: '10px',
                    display: 'grid',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h5 style={{textAlign: "center"}}>Ой давомида коида бузарликлар содир булган цех, булималар хисобида</h5>
                    <Doughnut data={data2} options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: "right",
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                    fontsize: 5,
                                },
                            },
                        },
                    }}/>
                </div>
                <div style={{
                    height: "50%",
                    width: "50%",
                    padding: '10px',
                    display: 'grid',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h5 style={{textAlign: "center"}}>Oy davomida uchastkalarda qoyda buzarliklar hisobida</h5>
                    <Doughnut data={data4} options={{
                        responsive: true,
                        plugins: {

                            legend: {
                                display: true,
                                position: "right",
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle'

                                },
                            },
                        },
                    }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ExmChart;