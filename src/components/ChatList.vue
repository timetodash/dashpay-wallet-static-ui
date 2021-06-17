<template>
  <div v-for="(contact, idx) in contactList" :key="idx">
    <chat-list-item-legacy
      v-if="contact.id === 'legacy'"
      href="/ChatLegacyPayment"
      :contact="contact"
    >
    </chat-list-item-legacy>
    <chat-list-item v-else href="/chat" :contact="contact"> </chat-list-item>
  </div>
</template>

<script>
import ChatListItem from "@/components/ChatListItem.vue";
import ChatListItemLegacy from "@/components/ChatListItemLegacy.vue";
// import Chat from "@/views/Chat.vue";

export default {
  components: { ChatListItem, ChatListItemLegacy },
  setup() {
    const contactList = [
      {
        name: "Matt",
        avatar: "/assets/avatars/Matt.png",
        lastMessage: "Received",
        amount: 3,
        direction: "Received",
        viewed: false,
        unreadMessages: 3,
        createdAt: "Now",
      },
      {
        name: "John",
        avatar: "/assets/avatars/clove.png",
        lastMessage: "Received",
        amount: 10,
        direction: "Received",
        viewed: false,
        unreadMessages: 1,
        createdAt: "9:41 PM",
      },
      {
        name: "Sam",
        avatar: "/assets/avatars/sam.png",
        lastMessage: "ok",
        amount: "",
        direction: "",
        viewed: false,
        unreadMessages: 2,
        createdAt: "May 20",
      },
      {
        id: "legacy",
        name: "Legacy Payments",
        avatar: "/assets/avatars/dash.png",
        lastMessage: "Sent",
        amount: 4,
        direction: "Sent",
        viewed: true,
        createdAt: "Yesterday",
      },
      {
        name: "Anna",
        avatar: "/assets/avatars/A.png",
        lastMessage: "Thank you!",
        amount: "",
        direction: "",
        viewed: true,
        createdAt: "May 24",
      },
      {
        name: "D.",
        avatar: "/assets/avatars/D.png",
        lastMessage: "Sent",
        amount: 1,
        direction: "Sent",
        viewed: true,
        createdAt: "April 25",
      },
      {
        name: "Chen",
        avatar: "/assets/avatars/Chen.png",
        lastMessage: "Hi, HoneyBadger",
        amount: "",
        direction: "",
        viewed: false,
        createdAt: "Feb 29",
      },
      {
        name: "Matt",
        avatar: "/assets/avatars/Matt.png",
        lastMessage: "Received",
        amount: 3,
        direction: "Received",
        viewed: false,
        unreadMessages: 3,
        createdAt: "Now",
      },
      {
        name: "John",
        avatar: "/assets/avatars/clove.png",
        lastMessage: "Received",
        amount: 10,
        direction: "Received",
        viewed: false,
        unreadMessages: 1,
        createdAt: "9:41 PM",
      },
    ];
    return {
      contactList,
    };
  },
};
</script>
