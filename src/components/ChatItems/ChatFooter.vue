<template>
  <div style="display: flex; flex: nowrap">
    <ion-input placeholder="Messsage... ">
      <ion-icon class="emoji" :icon="happyOutline"></ion-icon>
      <ion-icon class="attach" :icon="attachOutline"></ion-icon>
    </ion-input>
    <ion-icon
      class="dash_button"
      :src="require('/public/assets/icons/userSent.svg')"
    ></ion-icon>
  </div>
</template>

<script>
import { IonInput, IonIcon } from "@ionic/vue";
import { happyOutline, attachOutline } from "ionicons/icons";

export default {
  components: {
    IonInput,
    IonIcon,
  },
  setup() {
    return {
      happyOutline,
      attachOutline,
    };
  },
};
</script>
<style scoped>
ion-input {
  --background: #f3f3f5;
  border-radius: 100px;
}
.emoji {
  padding: 10px 10px 10px 15px;
  /* increased width and height compared to figma */
  width: 20px;
  height: 20px;
  color: #929292;
  /* font-weight: 100px; */
}
.attach {
  padding: 8px 12px 8px 8px;
  /* increased width and height compared to figma */
  width: 23px;
  height: 23px;
  color: #929292;
  order: 3;
}
.dash_button {
  width: 36px;
  height: 36px;
  margin-left: 11px;
  padding-right: 16px;
}
</style>