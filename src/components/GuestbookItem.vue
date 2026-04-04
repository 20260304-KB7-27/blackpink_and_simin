<template>
  <div class="postit p-3" :class="colorClass">
    <p class="message">{{ guestbook.message }}</p>
    <div class="mt-auto small text-muted">
      <div>— {{ guestbook.name }}</div>
      <div>{{ formattedDate }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  guestbook: Object,
  index: Number,
});

// 나머지 0=노랑, 1=파랑, 2=초록
const colorClass = computed(() => {
  const r = props.index % 3;
  return r === 0 ? 'bg-warning-subtle'
      : r === 1 ? 'bg-info-subtle'
          :           'bg-success-subtle';
});

// 날짜까지만 나오도록.
const formattedDate = computed(() => {
  const d = new Date(props.guestbook.createdAt);
  return isNaN(d) ? props.guestbook.createdAt
      : `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`;
});
</script>

<style scoped>
.postit {
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
}

.message {
  flex: 1;
  margin: 0;
  word-break: break-word;
}
</style>