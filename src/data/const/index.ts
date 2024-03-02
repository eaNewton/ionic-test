export const dashboardGraphTimePeriods = {
  TODAY: {
    id: 0,
    value: 'today',
  },
  THIS_WEEK: {
    id: 1,
    value: 'this week',
  },
  THIS_MONTH: {
    id: 2,
    value: 'this month',
  },
  THIS_YEAR: {
    id: 3,
    value: 'this year',
  }
}

const consumptionLabel = "Energy Consumption (kWh)"

export const todayChartConfig = {
  data: {
    labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
    datasets: [
      {
        label: consumptionLabel,
        backgroundColor: "#BAD455",
        data: [0.5, 0.3, 0.2, 0.2, 0.3, 0.5, 1.2, 2.0, 1.5, 1.0, 0.8, 0.7, 0.8, 0.9, 1.0, 1.5, 2.0, 2.5, 3.0, 2.8, 2.2, 1.8, 1.5, 1.0],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
}

export const thisMonthChartConfig = {
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: consumptionLabel,
        backgroundColor: "#FACADE",
        data: [25, 28, 26, 30, 32, 29, 27, 26, 28, 29, 31, 27, 30, 28, 25, 26, 29, 27, 31, 28, 30, 26, 27, 28, 29, 32, 28, 30, 31, 26],

      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
}

export const thisWeekChartConfig = {
  data: {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: consumptionLabel,
        backgroundColor: "#DE1E7E",
        data: [25, 28, 26, 30, 32, 29, 27],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
}

export const thisYearChartConfig = {
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: consumptionLabel,
        backgroundColor: "#C0FFEE",
        data: [1500, 1450, 1600, 1550, 1700, 1800, 1850, 1900, 1750, 1650, 1600, 1550],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
}
