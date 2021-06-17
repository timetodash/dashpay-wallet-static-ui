<template>
  <ion-buttons class="ion-justify-content-center">
    <ion-button class="receive"
      ><ion-icon
        class="send_receive_icon"
        :src="require('/public/assets/icons/receive.svg')"
      ></ion-icon>
      <ion-label class="ion-text-capitalize send_receive">
        Receive</ion-label
      ></ion-button
    >
    <ion-button class="send"
      ><ion-icon
        class="send_receive_icon"
        :src="require('/public/assets/icons/send.svg')"
      ></ion-icon
      ><ion-label class="ion-text-capitalize send_receive">
        Send</ion-label
      ></ion-button
    >
  </ion-buttons>
</template>


<style scoped>
ion-button {
  width: 158px;
  height: 39px;
}
.receive {
  background: linear-gradient(266.73deg, #f2f8fd 0%, #ebfff8 98.09%);
  border-radius: 10px;
}
.send {
  background: linear-gradient(
    266.51deg,
    #f3f3ff 0%,
    #e9f0ff 100%,
    #e9f0ff 100%
  );
  border-radius: 10px;
}
.send_receive {
  /* font-family: Inter; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
}
.send_receive_icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
</style>