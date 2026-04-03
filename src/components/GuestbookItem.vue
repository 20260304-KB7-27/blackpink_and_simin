<template>
  <div class="card mb-2 p-2">
    <!-- 내용 -->
    <p class="mb-1">{{ guestbook.message }}</p>

    <!-- 이름, 시간 -->
    <div class="d-flex justify-content-between small text-muted">
      <span><i class="bi bi-person-fill"></i> {{ guestbook.name }}</span>
      <span>{{ new Date(guestbook.createdAt).toLocaleString() }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  guestbook: {
    id: [String, Number],
    name: String,
    message: String,
    createdAt: String,
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: default;
  transition: background-color 0.2s;
}
.card:hover {
  background-color: #f9f9f9;
}
.name {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #666;
}
.createdAt {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #666;
}
</style>
