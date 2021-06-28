<template>
  <ion-content class="ion-padding">
    <div class="flex ion-nowrap ion-padding-bottom">
      <ion-icon :icon="closeOutline" class="close" @click="cancel"></ion-icon>
      <div class="title purple flex ion-nowrap">
        <ion-icon
          class="header-icon"
          :src="require('/public/assets/icons/sendHeader.svg')"
        />
        Accept request
      </div>
    </div>
    <div class="transaction sendit">
      <sender :amount="1" :sendRequestDirection="'send'"></sender>
      <!-- <sender :amount="amount" :sendRequestDirection="'send'"></sender> -->
      <div class="line" />
      <receiver></receiver>
      <ion-icon
        class="arrow"
        :src="require('/public/assets/icons/arrow_down.svg')"
      ></ion-icon>
    </div>

    <div class="swap-container">
      <!-- <accept :amount="amount" :fiat="fiat"> </accept> -->
      <accept :amount="1" :fiat="100"> </accept>
    </div>

    <div class="show-message">"This is for the bananas from last week."</div>
    <!-- TODO pass in message as prop -->
  </ion-content>
  <ion-footer class="ion-no-border ion-padding">
    <ion-toolbar>
      <!-- TODO disable button if the balance is too low -->
      <div class="flex ion-nowrap">
        <ion-chip class="decline"
          ><span class="next-text purple"> Decline</span></ion-chip
        >
        <ion-chip class="send"
          ><span class="send-text next-text"> Send</span></ion-chip
        >
      </div>
      <!-- @click="handleSendRequest" -->
    </ion-toolbar>
  </ion-footer>
</template>

<script>
// import useContacts from "@/composables/contacts";
// import useWallet from "@/composables/wallet";

import Sender from "@/components/TransactionModals/Sender.vue";
import Receiver from "@/components/TransactionModals/Receiver.vue";
import Accept from "@/components/TransactionModals/Accept.vue";

import {
  IonContent,
  IonIcon,
  IonFooter,
  IonToolbar,
  modalController,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";

import { arrowDownOutline, closeOutline } from "ionicons/icons";

export default defineComponent({
  name: "SendReceiveDashModal",
  //   props: ["initSendRequestDirection", "friendOwnerId"],
  // props: ["amount", "fiat"], TODO: pass amount from where the request is sent; calculate fiat here or in parent component
  components: {
    IonContent,
    IonIcon,
    IonFooter,
    IonToolbar,
    Sender,
    Receiver,
    Accept,
  },
  setup() {
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
      message,
      // amount,
      // fiat,
      // sendRequestDirection,
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
  margin-top: 36px;
}
ion-chip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center;
  /* padding: 13px 148px; */
  border-radius: 10px;

  width: 158px;
  height: 44px;
}
.send {
  width: 158px;
  height: 44px;
  background: linear-gradient(40.37deg, #6a67fb 0.15%, #8d71ff 100%);
}
.decline {
  width: 158px;
  height: 44px;
  background: #f2f4ff;
}
.next-text {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
}
.send-text {
  color: #ffffff;
}
.line {
  position: absolute;
  width: 256px;
  border-bottom: 1px solid #e6e6e6;
  left: 72px;
}
.show-message {
  /* font-family: Inter; */
  width: 194px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  margin: 34px auto 0 auto;
}
</style>