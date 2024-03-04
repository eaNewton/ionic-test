import {
  dashboardGraphTimePeriods,
  thisMonthBarChartConfig,
  thisMonthDoughnutChartConfig,
  thisWeekBarChartConfig,
  thisWeekDoughnutChartConfig,
  thisYearBarChartConfig,
  thisYearDoughnutChartConfig,
  todayBarChartConfig,
  todayDoughnutChartConfig,
} from "@/data/const"

export const getChartConfig = (timePeriod: string) => {
  // This next portion should be replaced with an actual API call
  switch (timePeriod) {
    case dashboardGraphTimePeriods.TODAY.value:
      return {
        bar: todayBarChartConfig,
        doughnut: todayDoughnutChartConfig,
      }
    case dashboardGraphTimePeriods.THIS_WEEK.value:
      return {
        bar: thisWeekBarChartConfig,
        doughnut: thisWeekDoughnutChartConfig,
      }
    case dashboardGraphTimePeriods.THIS_MONTH.value:
      return {
        bar: thisMonthBarChartConfig,
        doughnut: thisMonthDoughnutChartConfig,
      }
    case dashboardGraphTimePeriods.THIS_YEAR.value:
      return {
        bar: thisYearBarChartConfig,
        doughnut: thisYearDoughnutChartConfig,
      }
    default:
      return
  }
}
