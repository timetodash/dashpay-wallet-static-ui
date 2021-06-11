<template>
  <ion-avatar slot="start" class="user-avatar"
    ><img src="/assets/avatars/H.png"
  /></ion-avatar>
  <ion-buttons slot="end">
    <ion-button
      ><ion-icon :icon="ellipsisVertical" class="ellipsis-color"></ion-icon
    ></ion-button>
  </ion-buttons>
  <div class="username">
    HoneyBadger
    <ion-icon :icon="eyeOutline" style="margin-bottom: -2px"></ion-icon>
    <div class="dash-balance">
      13.20323 Dash
      <span class="usd-balance">(2600 USD) </span>
    </div>
  </div>
</template>

<script>
import { IonAvatar, IonButtons, IonButton, IonIcon } from "@ionic/vue";
import { ellipsisVertical, eyeOutline } from "ionicons/icons";

export default {
  components: {
    IonAvatar,
    IonButtons,
    IonButton,
    IonIcon,
  },

  setup() {
    return {
      ellipsisVertical,
      eyeOutline,
    };
  },
};
</script>

<style>
.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
}
.user-avatar > img {
  height: 37px;
  width: 37px;
}
.username {
  /* font-family: Inter; */
  font-size: 16px;
  font-weight: 600;
}
.dash-balance {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  color: #000000;
}
.usd-balance {
  font-weight: 100;
  font-size: 13px;
  color: gray;
}
.ellipsis-color {
  color: rgba(0, 0, 0, 0.61);
}
</style>