import React, { useEffect, useState } from 'react'
import '../../styles/App.css'
// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'apexcharts'
import Chart from 'react-apexcharts'
export const RedditCalendar = ({ data }) => {
  const [seriesState, setSeriesSate] = useState([])

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
      background: '#fff'
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
  const dummyData = [{
    name: 'Metric1',
    data: [2, 0, 2, 4, 1, 0, 2, 0, 2, 2, 3, 0, 1, 2, 3, 3, 5, 2, 2, 1, 3, 4, 3, 3]
  },
  {
    name: 'Metric2',
    data: [2, 0, 2, 4, 1, 0, 2, 0, 2, 2, 3, 0, 1, 2, 3, 3, 5, 2, 2, 1, 3, 4, 3, 3]
  },
  {
    name: 'Metric3',
    data: [2, 0, 2, 4, 1, 0, 2, 0, 2, 2, 3, 0, 1, 2, 3, 3, 5, 2, 2, 1, 3, 4, 3, 3]
  },
  {
    name: 'Metric4',
    data: [2, 0, 2, 4, 1, 0, 2, 0, 2, 2, 3, 0, 1, 2, 3, 3, 5, 2, 2, 1, 3, 4, 3, 3]
  }
  ]

  const seriesFormatter = () => {
    let series = []
    const DoW = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    for (let i = 0; i < data.length; i++) {
      let weekData = []
      for (let j = 0; j < data[i].length; j++) {
        weekData.push({ x: j, y: data[i][j] })
      }
      series.push({ name: DoW[i], data: weekData })
      // series.push({name:DoW[i], data:data[i]})
    }
    console.log(series)
    setSeriesSate(series)
  }

  useEffect(() => {
    seriesFormatter()
  }, [data])
  return (
    <>

      <div id="chart">
        {/* <ReactApexChart type="heatmap" /> */}
        <Chart
          options={options}
          series={seriesState}
          type='heatmap'
        />
      </div>
    </>
  )
}
