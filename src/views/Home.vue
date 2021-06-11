<template>
  <ion-page>
    <ion-header>
      <ion-toolbar><home-header></home-header> </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-toolbar class="searchbar">
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>

      <contact-list></contact-list>

      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button class="compose">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <ion-fab
        horizontal="end"
        vertical="bottom"
        slot="fixed"
        style="margin-bottom: 74px"
      >
        <ion-fab-button class="capture">
          <ion-icon :icon="scan" color="tertiary"> </ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/vue";
import { ellipse, add, scan } from "ionicons/icons";

import ContactList from "@/components/ContactList.vue";
import HomeHeader from "@/components/HomeHeader.vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    IonFab,
    IonFabButton,
    IonIcon,
    ContactList,
    HomeHeader,
  },

  setup() {
    return {
      ellipse,
      add,
      scan,
    };
  },
};
</script>

<style scoped>
ion-header {
  padding-top: 16px;
  background-color: #f7f7f7;
  border: 1px solid #e3e3e3;
}

.searchbar {
  padding-left: 16px;
  padding-right: 16px;
}

.compose {
  --background: linear-gradient(38.82deg, #6a67fb 13.64%, #8d71ff 86.36%);
}
.capture {
  --background: #ffffff;
}
ion-searchbar {
  --background: #f3f3f3;
  --border-radius: 8px;
  --box-shadow: 0;
  --icon-color: #9c9c9c;
  --placeholder-color: #9c9c9c;
  width: 100%;
  /* width: 334px; width in mobile with padding */
  height: 25px;
  padding-left: 0px;
  padding-right: 0px;
}

/* removes the shadow below the header */
.header-md::after {
  height: 0px;
  border-style: solid 2px;
}

ion-toolbar {
  --background: primary;
}
</style>