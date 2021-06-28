<template>
  <ion-item lines="none">
    <ion-avatar slot="start">
      <img src="/assets/avatars/H.png" />
    </ion-avatar>
    <ion-label class="ion-align-items-center">
      <h2 class="name">
        HoneyBadger
        <!-- {{ myLabel }} -->
      </h2>
      <!-- <h3>New balance: {{ myBalance - parseInt(amount) }}</h3> -->
      <h3 class="new-balance">
        New balance:
        <span
          :class="{
            purple: sendRequestDirection === 'send',
            green: sendRequestDirection === 'request',
          }"
        >
          {{ 5 - parseInt(amount) }} Dash
        </span>
      </h3>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonAvatar, IonLabel } from "@ionic/vue";

export default {
  props: ["amount", "sendRequestDirection"],
  components: {
    IonItem,
    IonAvatar,
    IonLabel,
  },
  setup() {},
};
</script>


<style scoped>
.name {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
}
.new-balance {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #a3a3a3;
}
</style>