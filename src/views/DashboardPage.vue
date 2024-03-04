<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-searchbar inputmode="email" @ion-input="handleSearch($event)" :debounce="300"
        :search-icon="searchCircle"></ion-searchbar>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Welcome, {{ user.firstName }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>Your Dashboard screen will provide you with the abiliy to manage your
          profile, track your progress, explore exciting features, and much
          more!</ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Energy Insights</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-select
              aria-lebel="time period"
              justify="end"
              :value="selectedTimePeriod"
              @ionChange="setSelectedTimePeriod($event)"
            >
              <div slot="label">Show results from </div>
              <ion-select-option v-for="option in dashboardGraphTimePeriods" :value="option.value">
                {{ option.value }}
              </ion-select-option>
            </ion-select>
        </ion-card-content>

        <div id="bar-chart-container" class="chart-container">
          <BarChart class="chart" v-if="chartConfig" :data="chartConfig?.bar.data" :options="chartConfig?.bar.options" />
        </div>

        <div id="doughnut-chart-container" class="chart-container">
          <DoughnutChart class="chart" :data="chartConfig?.doughnut.data" :options="chartConfig?.doughnut.options" />
        </div>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Tips & FAQs</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-accordion-group>
            <ion-accordion value="first">
              <ion-item slot="header" color="light">
                <ion-label>How can I reduce my energy consumption at home?</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                You can reduce your energy consumption at home by:
                <ul>
                  <li>Turning off lights and appliances when not in use.</li>
                  <li>Using energy-efficient appliances and lighting.</li>
                  <li>Adjusting your thermostat to save energy.</li>
                  <li>Improving insulation and sealing air leaks in your home.</li>
                  <li>Using programmable thermostats to regulate heating and cooling.</li>
                </ul>
              </div>
            </ion-accordion>
            <ion-accordion value="second">
              <ion-item slot="header" color="light">
                <ion-label>What are some common energy-saving tips for everyday life?</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                Some common energy-saving tips include:
                <ul>
                  <li>Unplugging electronics when not in use.</li>
                  <li>Using natural light whenever possible.</li>
                  <li>Washing clothes in cold water.</li>
                  <li>Air drying clothes instead of using a dryer.</li>
                  <li>Using energy-efficient light bulbs.</li>
                  <li>Carpooling or using public transportation.</li>
                </ul>
              </div>
            </ion-accordion>
            <ion-accordion value="third">
              <ion-item slot="header" color="light">
                <ion-label>How can I make my home more energy-efficient?</ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                You can make your home more energy-efficient by:
                <ul>
                  <li>Adding insulation to walls, floors, and attics.</li>
                  <li>Sealing air leaks around windows, doors, and ducts.</li>
                  <li>Upgrading to energy-efficient windows and doors.</li>
                  <li>Installing energy-efficient appliances and HVAC systems.</li>
                  <li>Using programmable thermostats and smart home technology.</li>
                </ul>
              </div>
            </ion-accordion>
          </ion-accordion-group>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"
import { searchCircle } from "ionicons/icons"
import BarChart from "@/components/charts/BarChart.vue"
import DoughnutChart from "@/components/charts/DoughnutChart.vue"
import { dashboardGraphTimePeriods } from "@/data/const"
import { ref } from "vue"
import { getChartConfig } from "@/utils/getChartConfig"

const user = {
  firstName: "Jimmy",
}

const selectedTimePeriod = ref(dashboardGraphTimePeriods.TODAY.value)
const chartConfig = ref(getChartConfig(dashboardGraphTimePeriods.TODAY.value))

const setSelectedTimePeriod = (event: CustomEvent) => {
  console.log(event)
  selectedTimePeriod.value = event.detail.value
  chartConfig.value = getChartConfig(selectedTimePeriod.value)
}

const handleSearch = (event: CustomEvent) => {
  console.log(event)
  console.log("event.target.value: ", event.detail.value)
  return
}
</script>

<style scoped>
  #bar-chart-container {
    margin: 0px 15px 15px;
    min-height: 250px;
  }
  .chart-container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 100%;
    margin: 15px;
    padding: 15px;
  }
  #doughnut-chart-container {
    min-height: 250px;
  }
</style>
