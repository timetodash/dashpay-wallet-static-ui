<template>
  <ion-buttons slot="start"
    ><ion-back-button
      style="color: rgba(0, 0, 0, 0.5); font-weight: 50"
      default-href="/home"
      :icon="arrowBack"
    ></ion-back-button
  ></ion-buttons>
  <ion-avatar slot="start" class="user-avatar"
    ><img src="/assets/avatars/H.png"
  /></ion-avatar>
  <div class="username">HoneyBadger</div>
  <ion-buttons slot="end">
    <ion-button
      ><ion-icon :icon="ellipsisVertical" class="ellipsis-color"></ion-icon
    ></ion-button>
  </ion-buttons>
</template>

<script>
import {
  IonAvatar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { arrowBack, ellipsisVertical } from "ionicons/icons";

export default {
  components: {
    IonAvatar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
  },

  setup() {
    return {
      arrowBack,
      ellipsisVertical,
    };
  },
};
</script>

<style>
/* ion-back-button {
  font-weight: 100;
  --icon-font-weight: 100;
} */
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: left;
}
.user-avatar > img {
  height: 30px;
  width: 30px;
}
.username {
  /* font-family: Inter; */
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #000000;
  margin-left: -21px;
}
.ellipsis-color {
  color: rgba(0, 0, 0, 0.61);
}
</style>