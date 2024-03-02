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
              <div slot="label">Showing results from </div>
              <ion-select-option v-for="option in dashboardGraphTimePeriods" :value="option.value">
                {{ option.value }}
              </ion-select-option>
            </ion-select>
        </ion-card-content>

        <Bar class="chart" v-if="chartConfig" :data="chartConfig?.data" :options="chartConfig?.options" />
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"
import { searchCircle } from "ionicons/icons"
import Bar from "@/components/charts/BarChart.vue"
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
