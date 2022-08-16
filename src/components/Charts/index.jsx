import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        // display: true,
        text: "",
      },
    },
	scales: {
		x: {
		  grid: {
			display: false
		  }
		},
		y: {
		  grid: {
			display: false
		  }
		}
	}
  };

  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //   ];

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'Sales',
        data: props.data,
        backgroundColor: "#00732f",
      }
    ]
  };
  console.log({data});
  return (
      <div className="w-10/12 mx-auto h-full " > 
	  {/* </>style={{ width: "1200px", margin: "auto auto" }}> */}
	  	{props.children}
        <Bar options={options} data={data} className="border"/>
      </div>
  );
}

export default BarChart;