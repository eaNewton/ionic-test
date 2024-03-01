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
          <ion-select placeholder="today">
            <div slot="label">Showing results from </div>
            <ion-select-option v-for="option in timePeriods" :value="option.value">
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
import Bar from "@/components/charts/BarChart.vue";

const timePeriods = [
  {
    id: 0,
    value: 'today',
  },
  {
    id: 1,
    value: 'this week',
  },
  {
    id: 2,
    value: 'this month',
  },
  {
    id: 3,
    value: 'this year',
  }
]

const user = {
  firstName: "Jimmy",
}

const interval = "last week"

const handleSearch = (event: any) => {
  console.log("event.target.value: ", event.target.value)
  return
}
</script>

<style>
  .chart {
    max-height: 400px;
  }
</style>
