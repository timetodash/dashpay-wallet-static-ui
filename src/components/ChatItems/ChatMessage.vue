<template>
  <div
    class="chatbubble"
    :class="{
      user: chat.direction === 'sent',
      chat_partner: chat.direction === 'received',
    }"
  >
    {{ chat.message }}
    <div class="nowrap">
      <div class="chat_timestamp chat_timestamp_message">
        {{ chat.timestamp }}
      </div>
      <ion-icon v-if="chat.direction === 'sent'" :icon="checkmarkDoneOutline">
      </ion-icon>
    </div>
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";
import { checkmarkDoneOutline } from "ionicons/icons";
// import { reactive } from "vue";

export default {
  props: ["chat"],
  components: {
    IonIcon,
  },
  setup() {
    return {
      checkmarkDoneOutline,
    };
  },
};
</script>

<style scoped>
.chat_timestamp_message {
  margin: 5px 4px 0px 13px; /* need to adjust margins to figure out exact positioning of timestamp relative to message text */
}
.nowrap {
  display: flex;
  wrap: nowrap;
  float: right;
}
ion-icon {
  color: rgba(0, 0, 0, 0.4);
}
</style>