<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div style="height: 100%">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="chatbubble">sent</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col class="ion-float-right ion-text-end">
              <div class="chatbubble">received</div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCol, IonGrid, IonRow } from "@ionic/vue";
// import { reactive } from "vue";

export default {
  name: "Tab1",
  components: {
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
  },

  setup() {
    // const transactionHistory = ref([]);

    const transactionHistory = [
      {
        direction: "sent",
        note: "John's transfer",
        amount: 1 + "Dash",
        usdAmount: 200,
        message: "You are welcome",
      },
    ];

    return {
      transactionHistory,
    };
  },
};
</script>

<style scoped>
.chatbubble {
  display: inline-block;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 13px;

  /* position: absolute; */
  left: 44.44%;
  right: 4.44%;
  top: 38.75%;
  bottom: 55.31%;

  /* background: linear-gradient(180deg, #f2edfd 0%, #eeedff 100%); */
  border-radius: 10px;
  clip-path: content-box;
  background: linear-gradient(180deg, #f2edfd 0%, #eeedff 100%);
}
.backgroundgradient {
  background: linear-gradient(180deg, #f2edfd 0%, #b863a6 100%);
}
</style>
