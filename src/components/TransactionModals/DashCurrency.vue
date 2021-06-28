<template>
  <div class="flex ion-nowrap wrapper">
    <ion-input
      class="enter-dash"
      v-on:input="$emit('update:amount', $event.target.value)"
      :value="amount"
      type="number"
      min="0"
      autofocus
      ref="inputRef"
    ></ion-input>
    <span class="dash-label"> Dash</span>
  </div>
  <div class="flex ion-justify-content-center convert">
    {{ fiat.toFixed(0) }} USD
    <ion-icon :icon="chevronDownOutline" class="fiat-icon"></ion-icon>
  </div>
</template>

<script>
import { IonInput, IonIcon } from "@ionic/vue";
import { chevronDownOutline } from "ionicons/icons";

export default {
  props: ["amount", "fiat"],
  emits: ["update:amount"],
  components: {
    IonInput,
    IonIcon,
  },
  setup(_, { emit }) {
    // $refs.inputRef.$el.setFocus();
    return {
      chevronDownOutline,
      emit,
      crypto,
    };
  },
};
</script>

<style scoped>
.fiat-icon {
  order: 1;
  margin-left: 2px;
}
</style>