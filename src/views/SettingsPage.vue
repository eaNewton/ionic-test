<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Settings</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card id="profile">
        <ion-thumbnail>
          <img alt="user profile photo" src="" />
        </ion-thumbnail>
      </ion-card>

      <ion-list>
        <ion-item>
          <ion-label>Change Username</ion-label>
        </ion-item>
        <ion-item>
          <ion-label @click="changePassword">Change Password</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-button expand="full" @click="handleLogout">Log out</ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"

const handleLogout = () => {
  console.log("Logging out!")
}

const changePassword = () => {
  console.log("change password")
}
</script>
