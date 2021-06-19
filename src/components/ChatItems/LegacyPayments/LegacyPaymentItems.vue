<template>
  <div class="scroll_container">
    <div>
      <div class="flex ion-justify-content-center">
        <ion-chip><ion-label>Aug 12</ion-label></ion-chip>
      </div>

      <ion-grid class="ion-no-padding">
        <ion-row v-for="(transaction, idx) in transactionHistory" :key="idx">
          <ion-col class="ion-padding-horizontal">
            <legacy-payment-content
              :transaction="transaction"
            ></legacy-payment-content>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script>
import { IonChip, IonLabel, IonGrid, IonRow, IonCol } from "@ionic/vue";
import LegacyPaymentContent from "@/components/ChatItems/LegacyPayments/LegacyPaymentContent.vue";

export default {
  components: {
    IonChip,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    LegacyPaymentContent,
  },
  setup() {
    const transactionHistory = [
      {
        transferDirection: "received",
        transferSatoshis: "0.02e8",
        remoteAddress: "yaN3DmnZdZpCruqJvhPoePVJGoiQF6AWAk",
        timestamp: "10:50",
      },
      {
        transferDirection: "sent",
        transferSatoshis: "0.03298e8",
        remoteAddress: "yZWqM3e5oVQxcu69gX4AGEfgmBinVjPYGX",
        timestamp: "11:59",
      },
      {
        transferDirection: "moved",
        internal: "0.0128e8",
        remoteAddress: "false",
        timestamp: "15:28",
      },
      {
        transferDirection: "sent",
        internal: "0.123e8",
        remoteAddress: "false",
        timestamp: "16:32",
      },
      {
        transferDirection: "sent",
        transferSatoshis: "0.4e8",
        remoteAddress: "1HmyKqEQYkx4xYGPPtvKaAFQmEd1GDb7Hj",
        timestamp: "16:59",
      },
      {
        transferDirection: "received",
        transferSatoshis: "0.62e8",
        remoteAddress: "1FUCYgrYnq8yfz38LUbjDH88Adj2Qj9N8f",
        timestamp: "18:50",
      },
      {
        transferDirection: "sent",
        transferSatoshis: "1.8e8",
        remoteAddress: "yZWqM3e5oVQxcu69gX4AGEfgmBinVjPYGX",
        timestamp: "19:59",
      },
      {
        transferDirection: "moved",
        internal: "1e8",
        remoteAddress: "false",
        timestamp: "20:28",
      },
      {
        transferDirection: "received",
        transferSatoshis: "0.903e8",
        remoteAddress: "1LsvyVTidAzasGUTGtozX3BnmhHkQUYaFN",
        timestamp: "22:50",
      },
      {
        transferDirection: "sent",
        internal: "1.39e8",
        remoteAddress: "false",
        timestamp: "23:11",
      },
    ];

    return {
      transactionHistory,
      //   transactionDisplay,
    };
  },
};
</script>

<style scoped>
.scroll_container {
  height: 100%;
  display: flex;
  overflow-y: scroll;
  flex-direction: column-reverse;
}
ion-chip {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  margin-top: 6px;
  margin-bottom: 0px;

  width: 46px;
  height: 17px;
  background: #6a67fb;
  /* backdrop-filter: blur(10px); */ /* not currently supported in most browsers */
  border-radius: 11px;
}
ion-label {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: #ffffff;
}
</style>

