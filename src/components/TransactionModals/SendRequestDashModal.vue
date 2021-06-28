<template>
  <ion-content class="ion-padding">
    <div class="flex ion-nowrap ion-padding-bottom">
      <ion-icon :icon="closeOutline" class="close" @click="cancel"></ion-icon>
      <div
        v-if="sendRequestDirection === 'send'"
        class="title purple flex ion-nowrap"
      >
        <ion-icon
          class="header-icon"
          :src="require('/public/assets/icons/sendHeader.svg')"
        />
        {{ sendRequestDirection }} Dash
      </div>

      <div
        v-if="sendRequestDirection === 'request'"
        class="title green flex ion-nowrap"
      >
        <ion-icon
          class="header-icon"
          :src="require('/public/assets/icons/requestHeader.svg')"
        />
        {{ sendRequestDirection }} Dash
      </div>
    </div>
    <div
      class="transaction"
      @click="switchSendRequest"
      :class="{
        req: sendRequestDirection === 'request',
        sendit: sendRequestDirection === 'send',
      }"
    >
      <sender
        v-if="sendRequestDirection === 'send'"
        :amount="amount"
        :sendRequestDirection="sendRequestDirection"
      ></sender>
      <receiver v-if="sendRequestDirection === 'request'"></receiver>
      <div class="line" />
      <ion-icon
        v-if="sendRequestDirection === 'send'"
        class="switch"
        :src="require('/public/assets/icons/switch.svg')"
      ></ion-icon>
      <ion-icon
        v-if="sendRequestDirection === 'request'"
        class="switch"
        :src="require('/public/assets/icons/request.svg')"
      ></ion-icon>
      <ion-icon
        class="arrow"
        :src="require('/public/assets/icons/arrow_down.svg')"
      ></ion-icon>
      <sender
        v-if="sendRequestDirection === 'request'"
        :amount="amount"
        :sendRequestDirection="sendRequestDirection"
      ></sender>
      <receiver v-if="sendRequestDirection === 'send'"></receiver>
    </div>

    <div class="swap-container">
      <dash-currency
        v-if="currency === 'dash'"
        v-model:amount="amount"
        :amount="amount"
        :fiat="fiat"
      >
      </dash-currency>
      <fiat-currency
        v-if="currency === 'fiat'"
        v-model:fiat="fiat"
        :fiat="fiat"
        :amount="amount"
      ></fiat-currency>

      <ion-icon
        v-if="sendRequestDirection === 'send'"
        class="swap"
        @click="swapCurrency"
        :src="require('/public/assets/icons/swap_currency.svg')"
      ></ion-icon>
      <ion-icon
        v-if="sendRequestDirection === 'request'"
        class="swap"
        @click="swapCurrency"
        :src="require('/public/assets/icons/switch_receive.svg')"
      ></ion-icon>
    </div>

    <div class="message-text">Message</div>
    <ion-textarea
      :autoGrow="true"
      rows="1"
      class="message-input"
      v-model="message"
    ></ion-textarea>
  </ion-content>
  <ion-footer class="ion-no-border ion-padding">
    <!-- TODO disable button if the balance is too low -->
    <ion-chip expand="block" shape="round" class="next" :disabled="amount === 0"
      ><span class="next-text"> Send</span></ion-chip
    >
    <!-- @click="handleSendRequest" -->
  </ion-footer>
</template>

<script>
// import useContacts from "@/composables/contacts";
// import useWallet from "@/composables/wallet";

import Sender from "@/components/TransactionModals/Sender.vue";
import Receiver from "@/components/TransactionModals/Receiver.vue";
import DashCurrency from "@/components/TransactionModals/DashCurrency.vue";
import FiatCurrency from "@/components/TransactionModals/FiatCurrency.vue";

import {
  IonContent,
  IonIcon,
  IonFooter,
  IonTextarea,
  modalController,
} from "@ionic/vue";
import { defineComponent, ref, watchEffect } from "vue";

import {
  chevronDownOutline,
  arrowDownOutline,
  closeOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "SendReceiveDashModal",
  //   props: ["initSendRequestDirection", "friendOwnerId"],
  components: {
    IonContent,
    IonIcon,
    IonFooter,
    IonTextarea,
    Sender,
    Receiver,
    DashCurrency,
    FiatCurrency,
  },
  setup() {
    const amount = ref(1);
    const fiat = ref(0);

    const sendRequestDirection = ref("send");

    // eslint-disable-next-line vue/no-setup-props-destructure
    // sendRequestDirection.value = props.initSendRequestDirection;

    const message = ref("");

    // const {
    //   getUserLabel,
    //   getUserAvatar,
    //   getUserDisplayName,
    //   getUserPublicMessage,
    //   myLabel,
    //   myAvatar,
    //   myOwnerId,
    // } = useContacts();

    // const { myBalance } = useWallet();

    const switchSendRequest = () => {
      sendRequestDirection.value =
        sendRequestDirection.value === "send"
          ? (sendRequestDirection.value = "request")
          : (sendRequestDirection.value = "send");
    };

    const currency = ref("dash");
    const swapCurrency = () => {
      currency.value =
        currency.value === "dash"
          ? (currency.value = "fiat")
          : (currency.value = "dash");
      console.log("show currency", currency.value);
    };

    watchEffect(() => {
      if (currency.value === "dash") {
        return (fiat.value = amount.value * 100);
      }
      if (currency.value === "fiat") {
        return (amount.value = fiat.value / 100);
      }
    });

    // const handleSendRequest = () => {
    //   console.log("sendDash inside modal :>> ", amount.value, message.value);
    //   emit("handleSendRequest", {
    //     amount: parseInt(amount.value),
    //     message: message.value,
    //     sendRequestDirection: sendRequestDirection.value,
    //   });
    //   modalController.dismiss();
    // };

    const cancel = () => {
      modalController.dismiss();
    };

    return {
      // getUserLabel,
      // getUserAvatar,
      // getUserDisplayName,
      // getUserPublicMessage,
      // myLabel,
      // myAvatar,
      // myOwnerId,
      // myBalance,
      // handleSendRequest,
      cancel,
      switchSendRequest,
      swapCurrency,
      amount,
      message,
      fiat,
      currency,
      sendRequestDirection,
      chevronDownOutline,
      arrowDownOutline,
      closeOutline,
    };
  },
});
</script>

<style scoped>
.close {
  width: 25px;
  height: 25px;
  color: #6c69fc;
}
.title {
  /* font-family: Inter; */
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
}
.header-icon {
  /* order: 0; */
  width: 28px;
  height: 28px;
  display: flex;
  align-items: flex-start;
  margin-right: 8px;
}
.transaction {
  border-radius: 10px;
  position: relative;
}
.req {
  background: linear-gradient(266.73deg, #f2f8fd 0%, #ebfff8 98.09%);
}
.sendit {
  background: linear-gradient(
    266.51deg,
    #f3f3ff 0%,
    #e9f0ff 100%,
    #e9f0ff 100%
  );
}
ion-item {
  --background: none;
  --min-height: 70px;
}
.switch {
  width: 35px;
  height: 35px;
  color: #6c69fc;
  position: absolute;
  top: 50%;
  right: 33.5px;
  transform: translate(50%, -50%);
  z-index: 1;
}
.arrow {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(27px, -50%);
  height: 15px;
}
.swap {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translate(0%, -50%);
}
.message-text {
  margin: 13px 0px 8px 0px;

  /* font-family: Inter; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #a3a3a3;
}
.message-input {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 44px;

  background: #f5f5f7;

  border: 0.5px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 10px;
}
.input-format {
  color: #000000;
}
.swap-container {
  position: relative;
  margin-top: 36px;
}
.next {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 148px;

  width: 328px;
  height: 44px;

  background: linear-gradient(40.37deg, #6a67fb 0.15%, #8d71ff 100%);
  border-radius: 10px;
}
.next-text {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  color: #ffffff;
}
.line {
  position: absolute;
  width: 256px;
  border-bottom: 1px solid #e6e6e6;
  left: 72px;
}
</style>