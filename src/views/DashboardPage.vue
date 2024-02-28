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

      <ion-searchbar inputmode="email" @ion-input="handleSearch($event)" :debounce="300" :search-icon="searchCircle"></ion-searchbar>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Welcome, {{ user.firstName }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>Your Dashboard screen will provide you with the abiliy to manage your profile, track your progress, explore exciting features, and much more!</ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Insights</ion-card-title>
        </ion-card-header>
        <ion-card-content>Showing results from {{ interval }}</ion-card-content>
      </ion-card>

      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { searchCircle } from 'ionicons/icons';

const user = {
  firstName: 'Jimmy'
}

const interval = 'last week'

const handleSearch = (event: any) => {
  console.log('event.target.value: ', event.target.value)
  return
}
</script>
