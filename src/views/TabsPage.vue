<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/dashboard">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="gallery" href="/gallery">
          <ion-icon aria-hidden="true" :icon="images" />
          <ion-label>Gallery</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="settings" href="/settings">
          <ion-icon aria-hidden="true" :icon="cog" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue"
import { cog, home, images } from "ionicons/icons"
</script>
