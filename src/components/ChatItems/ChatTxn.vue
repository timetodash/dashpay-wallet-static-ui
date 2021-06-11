<template>
  <div
    class="chatbubble chatbubble_txn_big"
    :class="{
      user: chat.direction === 'sent',
      chat_partner_txn: chat.direction === 'received' && chat.type != 'request',
      request: chat.type === 'request',
    }"
  >
    <div
      class="title"
      :class="{
        transfer_title: chat.type != 'request',
        request_title: chat.type === 'request',
      }"
    >
      {{ chat.note }}
    </div>
    <div class="amount">{{ chat.amount }} Dash</div>
    <div class="usd_amount">~{{ chat.usdAmount }} USD</div>
    <div class="text">{{ chat.message }}</div>
    <div class="justify">
      <ion-icon
        v-if="chat.type === 'request'"
        class="dash_icon"
        :src="require('/public/assets/icons/dashRequest.svg')"
      ></ion-icon>
      <ion-icon
        v-else-if="chat.direction === 'sent'"
        class="dash_icon"
        :src="require('/public/assets/icons/userSent.svg')"
      ></ion-icon>
      <ion-icon
        v-else-if="chat.direction === 'received'"
        class="dash_icon"
        :src="require('/public/assets/icons/partnerSent.svg')"
      ></ion-icon>
      <div class="align_checkmark">
        <div class="chat_timestamp">
          {{ chat.timestamp }}
        </div>
        <ion-icon :icon="checkmarkDoneOutline" class="checkmark_color">
        </ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { IonIcon } from "@ionic/vue";
import { checkmarkDoneOutline } from "ionicons/icons";
// import { reactive } from "vue";

export default {
  name: "Tab1",
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
.chatbubble_txn_big {
  min-height: 77px;
  width: 174px;
  box-shadow: 0px 2px 4px rgba(106, 103, 251, 0.3);
}
.title {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
}
.transfer_title {
  color: #6a67fb;
}
.request_title {
  color: #999999;
}
.amount {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  letter-spacing: -0.003em;

  color: #000000;
  margin-top: 3px;
}
.usd_amount {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: normal;

  line-height: 12px;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  display: flex;
  justify-content: center;
  letter-spacing: -0.002em;

  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
}

.text {
  /* font-family: Inter; */
  display: flex;
  wrap: wrap;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 4px;
}
.justify {
  display: flex;
  justify-content: space-between;
}
.dash_icon {
  width: 27px;
  height: 27px;
  margin-bottom: -6px;
  margin-left: -10px;
}
</style>