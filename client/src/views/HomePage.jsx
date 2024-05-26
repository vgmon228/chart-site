import axios from "axios";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';
import '../App.css'
import Nav from "../components/Navbar";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function App() {
    let [chartData, setChartData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios({
                url: 'http://localhost:3000/revenue',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setChartData({
                labels: data.map(item => item.year),
                datasets: [
                    {
                        label: 'Revenue',
                        data: data.map((item) => item.revenue),
                        fill: true,
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    },
                ],
            })
        }
        fetchData()
    }, [])
    return (
        <div>
            <Nav />
            <div className="container mt-4 d-flex justify-content-center">
                <div className='chart'>
                    {
                        chartData && chartData?.datasets && (
                            <Line
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                        },
                                        title: {
                                            display: true,
                                            text: 'Revenue',
                                        },
                                    },
                                }}
                                data={chartData}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App;