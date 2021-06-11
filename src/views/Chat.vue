<template>
  <ion-page>
    <ion-header>
      <ion-toolbar><chat-header></chat-header> </ion-toolbar>
    </ion-header>
    <ion-content>
      <div style="height: 100%">
        <ion-grid class="ion-no-padding">
          <ion-row
            v-for="(chat, idx) in chatHistory"
            :key="idx"
            style="padding-top: 4px; padding-bottom: 4px"
          >
            <ion-col class="ion-padding-horizontal">
              <chat-message v-if="chat.message && !chat.amount" :chat="chat">
              </chat-message>
              <chat-txn
                v-if="(chat.amount && chat.message) || chat.type === 'request'"
                :chat="chat"
              >
              </chat-txn>
              <chat-small-txn
                v-if="chat.type != 'request' && chat.amount && !chat.message"
                :chat="chat"
              >
              </chat-small-txn>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-toolbar> <chat-footer></chat-footer> </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCol, IonGrid, IonRow } from "@ionic/vue";
import {
  checkmarkDoneOutline,
  happyOutline,
  attachOutline,
} from "ionicons/icons";
// import { reactive } from "vue";
import ChatHeader from "@/components/ChatItems/ChatHeader.vue";
import ChatMessage from "@/components/ChatItems/ChatMessage.vue";
import ChatTxn from "@/components/ChatItems/ChatTxn.vue";
import ChatSmallTxn from "@/components/ChatItems/ChatSmallTxn.vue";
import ChatFooter from "@/components/ChatItems/ChatFooter.vue";

export default {
  name: "Tab1",
  components: {
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
    ChatHeader,
    ChatMessage,
    ChatTxn,
    ChatSmallTxn,
    ChatFooter,
  },

  setup() {
    // const transactionHistory = ref([]);

    const chatHistory = [
      {
        type: "message",
        direction: "received",
        note: "",
        amount: "",
        usdAmount: "",
        message:
          "Hey, could you send me some more dash? you sent me 2 dash too few",
        timestamp: "10:08",
      },
      {
        type: "request",
        direction: "received",
        note: "Requested",
        amount: 2,
        usdAmount: 400,
        message: "",
        timestamp: "10:10",
      },
      {
        type: "transfer",
        direction: "sent",
        note: "You sent",
        amount: 1,
        usdAmount: 200,
        message: "Sorry mate, here it is",
        timestamp: "10:30",
      },
      {
        type: "transfer",
        direction: "sent",
        note: "",
        amount: 1,
        usdAmount: 200,
        message: "",
        timestamp: "10:31",
      },
      {
        type: "transfer",
        direction: "received",
        note: "Honey Badger sent",
        amount: 1,
        usdAmount: 200,
        message: "oh wait, I owed you 2 dash for last week",
        timestamp: "10:35",
      },
      {
        type: "transfer",
        direction: "received",
        note: "",
        amount: 1,
        usdAmount: 200,
        message: "",
        timestamp: "10:36",
      },
      {
        type: "message",
        direction: "sent",
        note: "",
        amount: "",
        usdAmount: "",
        message: "ok, thanks. love how easy it is to send dash",
        timestamp: "10:33",
      },
      {
        type: "message",
        direction: "received",
        note: "",
        amount: "",
        usdAmount: "",
        message: "yeah I know! incredible app",
        timestamp: "10:33",
      },
      {
        type: "message",
        direction: "sent",
        note: "",
        amount: "",
        usdAmount: "",
        message:
          "btw, let me know if you want to go to the thirsty camel again sometime",
        timestamp: "10:33",
      },
      {
        type: "message",
        direction: "received",
        note: "",
        amount: "",
        usdAmount: "",
        message: "yes, sounds great, would love to",
        timestamp: "10:33",
      },
    ];

    return {
      chatHistory,
      checkmarkDoneOutline,
      happyOutline,
      attachOutline,
    };
  },
};
</script>

<style scoped>
ion-item {
  background: #f1f1f3;
  padding: 0px;
}
.item-native::after {
  background: #f1f1f3;
}
ion-header {
  padding-top: 16px;
  background-color: #f7f7f7;
  border: 1px solid #e3e3e3;
}

/* removes the shadow below the header */
.header-md::after {
  height: 0px;
  border-style: solid 2px;
}
ion-toolbar {
  --background: primary;
}
.chatbubble_txn_small {
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  width: 174px;
  box-shadow: 0px 2px 4px rgba(106, 103, 251, 0.3);
  border-radius: 100px;
}

/* TODO: set background gradient and mask/clip chat messages */
/* .backgroundgradient {
  background: linear-gradient(180deg, #f2edfd 0%, #b863a6 100%);
} */

.transfer-amount-small {
  /* font-family: Inter; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: -0.003em;

  color: #000000;
}

.transfer-usdamount-small {
  /* font-family: Inter; */
  display: flex;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  /* identical to box height */

  letter-spacing: -0.004em;

  color: rgba(0, 0, 0, 0.4);
}

ion-footer {
  padding-left: 16px;
}

.message-box {
  padding: 0px 11px 8px 16px;
}
/* input-label { */
</style>
