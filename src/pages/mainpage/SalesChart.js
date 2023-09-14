import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const SalesChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: "밀가루",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "우유",
                data: [12, 4, 15, 41, 69, 32, 39, 31, 48]
            },
            {
                name: "설탕",
                data: [2, 4, 45, 41, 69, 32, 39, 31, 48]
            },
            {
                name: "견과쿠키",
                data: [1, 4, 55, 41, 69, 32, 39, 31, 48]
            },
            {
                name: "초코쿠키칩",
                data: [40, 42, 15, 41, 69, 32, 69, 31, 100]
            },
            {
                name: "초코아이스크림",
                data: [10, 14, 15, 41, 69, 32,11, 31, 10]
            },
            {
                name: "스푼",
                data: [15, 14, 15, 41, 69, 32, 39, 32, 23]
            }
        ],
        options: {
            chart: {
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '발주 통계 그래프',
                align: 'center'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        }
    });

    return (
        <>
            {/*<ApexCharts*/}
            {/*    options={chartData.options}*/}
            {/*    series={chartData.series}*/}
            {/*    type='line' // 오타 수정: 'typs' -> 'type'*/}
            {/*    width={700}*/}
            {/*    height={400}*/}
            {/*/>*/}
            <ApexCharts
                options={chartData.options}
                series={chartData.series}
                type='bar' // 오타 수정: 'typs' -> 'type'
                width={600}
                height={500}
                style={{margin:"auto"}}
            />
        </>
    );
};

export default SalesChart;