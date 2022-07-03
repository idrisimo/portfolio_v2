import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'apexcharts'
import Chart from 'react-apexcharts'
export const RedditCalendar = ({ data }) => {
  // chart setup
  const [seriesState, setSeriesSate] = useState([])

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
      background: '#ffffx`x``'
    },
    xaxis: {
      type: 'category',
      tickAmount: 'dataPoints',
      tickPlacement: 'between',
    },
    dataLabels: {
      enabled: true
    },
    colors: ["#FF5700"],
    title: {
      text: 'HeatMap of Sub r/test'
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      position: 'front',

    }
  }

  const seriesFormatter = () => { // formats the xy axis
    let series = []
    const DoW = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    for (let i = 0; i < data.length; i++) {
      let weekData = []
      for (let j = 0; j < data[i].length; j++) {
        weekData.push({ x: j, y: data[i][j] })
      }
      series.push({ name: DoW[i], data: weekData })
    }

    setSeriesSate(series)
  }

  useEffect(() => {
    seriesFormatter()
  }, [data])
  return (
    <>

      <div id="chart">

        <Chart
          options={options}
          series={seriesState}
          type='heatmap'
        />
      </div>
    </>
  )
}
