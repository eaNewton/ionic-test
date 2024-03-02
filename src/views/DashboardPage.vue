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
          <ion-card-title>Insights</ion-card-title>
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

        <Bar class="chart" />
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
import { ref, watch } from "vue"

const user = {
  firstName: "Jimmy",
}

const selectedTimePeriod = ref(dashboardGraphTimePeriods.TODAY.value)

watch(selectedTimePeriod, (newValue, oldValue) => {
  console.log(`Selected value changed from '${oldValue}' to '${newValue}'`)
  console.log('selectedTimePeriod? ', selectedTimePeriod.value)
})

const setSelectedTimePeriod = (event: CustomEvent) => {
  console.log(event)
  selectedTimePeriod.value = event.detail.value
}

const getData = () => {
  switch (selectedTimePeriod) {
    case dashboardGraphTimePeriods.TODAY.value:
      console.log('today!')
      break
    case dashboardGraphTimePeriods.THIS_WEEK.value:
      console.log('this week!')
      break
    case dashboardGraphTimePeriods.THIS_MONTH.value:
      console.log('this month!')
      break
    case dashboardGraphTimePeriods.THIS_YEAR.value:
      console.log('this year!')
      break
  }
}

console.log(dashboardGraphTimePeriods)

const handleSearch = (event: CustomEvent) => {
  console.log(event)
  console.log("event.target.value: ", event.detail.value)
  return
}
</script>
