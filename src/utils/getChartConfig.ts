import {
  dashboardGraphTimePeriods,
  thisMonthChartConfig,
  thisWeekChartConfig,
  thisYearChartConfig,
  todayChartConfig
} from "@/data/const"

export const getChartConfig = (timePeriod: string) => {
  // This next portion should be replaced with an actual API call
  switch (timePeriod) {
    case dashboardGraphTimePeriods.TODAY.value:
      return todayChartConfig
    case dashboardGraphTimePeriods.THIS_WEEK.value:
      return thisWeekChartConfig
    case dashboardGraphTimePeriods.THIS_MONTH.value:
      return thisMonthChartConfig
    case dashboardGraphTimePeriods.THIS_YEAR.value:
      return thisYearChartConfig
    default:
      return
  }
}
