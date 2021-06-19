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
  <!-- <ion-buttons
    ><ion-button shape="round" class="decline"></ion-button
    ><ion-button class="accept"></ion-button>
  </ion-buttons> -->
  <ion-row v-if="chat.type === 'request'" class="ion-no-wrap">
    <ion-chip class="decline"
      ><ion-label class="decline_text">Decline</ion-label
      ><ion-icon
        :icon="closeOutline"
        class="decline_icon"
        style="width: 14px; height: 14px"
      ></ion-icon
    ></ion-chip>
    <ion-chip class="accept"
      ><ion-label class="accept_text">Accept</ion-label>
      <ion-icon
        class="accept_icon"
        :src="require('/public/assets/icons/accept.svg')"
      >
      </ion-icon>
    </ion-chip>
  </ion-row>
</template>

<script>
import { IonIcon } from "@ionic/vue";
import { checkmarkDoneOutline, closeOutline } from "ionicons/icons";
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
      closeOutline,
    };
  },
};
</script>

<style scoped>
.chatbubble_txn_big {
  min-height: 76px;
  width: 222px;
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
ion-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 36px;
  margin-top: 8px;
  margin-bottom: 8px;
}
ion-chip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 36px;
  margin: 8px 12px 8px 0px;
  border-radius: 10px;
}
.decline {
  --background: #f2f4ff;
  margin-right: 12px;
}
.decline_text {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #6a67fb;
}
.decline_icon {
  --ionicon-stroke-width: 55px;
  color: #6a67fb;
}
.accept {
  --background: linear-gradient(40.37deg, #6a67fb 0.15%, #8d71ff 100%);
  /* border: f2f4ff solid 1px; */
}
.accept_text {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}
.accept_icon {
  height: 11px;
  width: 11px;
}
</style>