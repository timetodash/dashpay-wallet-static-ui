<template>
  <div class="flex ion-nowrap wrapper">
    <ion-input
      class="enter-dash"
      v-on:input="$emit('update:fiat', $event.target.value)"
      type="number"
      min="0"
      :value="fiat"
      autofocus
    ></ion-input>
    <div class="dash-label" style="width: 160px">
      USD
      <ion-icon
        :icon="chevronDownOutline"
        style="order: 1; margin-left: 5px; margin-top: 3px; font-size: 20px"
      ></ion-icon>
    </div>
  </div>
  <div class="flex ion-justify-content-center convert">{{ amount }} Dash</div>
</template>

<script>
import { IonInput, IonIcon } from "@ionic/vue";
import { chevronDownOutline } from "ionicons/icons";

export default {
  props: ["fiat", "amount"],
  emits: ["update:fiat"],
  components: {
    IonInput,
    IonIcon,
  },
  setup(_, { emit }) {
    return {
      chevronDownOutline,
      emit,
    };
  },
};
</script>
