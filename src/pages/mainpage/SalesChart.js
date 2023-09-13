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
                data: [1, 4, 15, 41, 69, 32, 39, 31, 48]
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
                text: '재고관리 매출 통계',
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
            <ApexCharts
                options={chartData.options}
                series={chartData.series}
                type='line' // 오타 수정: 'typs' -> 'type'
                width={700}
                height={400}
            />
            <ApexCharts
                options={chartData.options}
                series={chartData.series}
                type='bar' // 오타 수정: 'typs' -> 'type'
                width={600}
                height={400}
            />
        </>
    );
};

export default SalesChart;