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
        <div id="avatar-container">
          <ion-img alt="user profile photo" class="avatar" v-bind:src="profileImage" v-if="profileImage"></ion-img>
        </div>
        <ion-button @click="fetchProfileImage" id="avatar-button">
          <div v-if="!loading">Get avatar image</div>
          <div v-else>Fetching image...</div>
        </ion-button>
      </ion-card>

      <ion-list>
        <ion-item>
          <ion-button class="button" fill="clear" router-link="/settings/update_username">Change Username</ion-button>
        </ion-item>
        <ion-item>
          <ion-button class="button" fill="clear" router-link="/settings/update_password">Change Password</ion-button>
        </ion-item>
        <ion-item>
          <ion-toggle class="toggle" :checked="receivePNs">Receive Push Notifications</ion-toggle>
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
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/vue"
import { ref } from "vue"

const receivePNs = true

const profileImage = ref('/placeholder-avatar.png')
const loading = ref(false)

const handleLogout = () => {
  console.log("Logging out!")
}

const fetchProfileImage = async () => {
  try {
    loading.value = true
    const response = await fetch('https://picsum.photos/400/400')
    profileImage.value = response.url
    loading.value = false
  } catch (error) {
    console.error('Error fetching new avatar image: ', error)
  }
}
</script>

<style scoped>
  #avatar-button {
    margin-bottom: 15px;
  }
  #avatar-container {
    margin: 15px;
    max-height: 200px;
    max-width: 200px;
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .button {
    color: white;
    font-size: 16px;;
  }
  #profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .toggle {
    padding-left: 8px;
  }
</style>
