<template>
  <ion-page>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-buttons>
          <ion-button>
            <ion-back-button></ion-back-button>
          </ion-button>
        </ion-buttons>
        <ion-title size="large">Update Username</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card class="ion-padding">
        <ion-input
          class="input ion-padding-horizontal"
          disabled
          label="Current Username"
          label-placement="stacked"
          max-length="20"
          :value="currentUsername"></ion-input>
      </ion-card>

      <ion-card class="ion-padding">
        <ion-input
          class="input ion-padding-horizontal"
          label="New Username"
          label-placement="stacked"
          max-length="20"
        ></ion-input>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonContent,
    IonHeader,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/vue"
  import { ref } from "vue"

  const currentUsername = ref('eaNewton')
</script>

<style scoped>
  .input {
    background-color: white;
    border-radius: 5px;
    padding: 0 20px;
  }
  ion-input {
    color: black;
  }
</style>
