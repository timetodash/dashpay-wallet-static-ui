<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <legacy-header></legacy-header>
      </ion-toolbar>
    </ion-header>

    <ion-content><legacy-payment-items></legacy-payment-items> </ion-content>

    <ion-footer class="ion-no-border"
      ><ion-toolbar> <legacy-footer></legacy-footer></ion-toolbar
    ></ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonFooter,
} from "@ionic/vue";

import LegacyHeader from "@/components/ChatItems/LegacyPayments/LegacyHeader.vue";
import LegacyFooter from "@/components/ChatItems/LegacyPayments/LegacyFooter.vue";
import LegacyPaymentItems from "@/components/ChatItems/LegacyPayments/LegacyPaymentItems.vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonFooter,
    LegacyHeader,
    LegacyFooter,
    LegacyPaymentItems,
  },
};
</script>


