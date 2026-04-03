<template>
  <div class="container mt-4" style="max-width: 600px">
    <!-- 제목 + 버튼 -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4 class="m-0">방명록</h4>
      <button
        class="btn btn-primary btn-sm"
        v-if="!showForm"
        @click="showForm = true"
      >
        추가
      </button>
    </div>

    <!-- 작성 폼 -->
    <AddGuestbook v-if="showForm" @close="showForm = false" />

    <!-- 방명록 리스트 -->
    <div>
      <div
        v-for="guestbook in guestbookList"
        :key="guestbook.id"
        class="list-group-item"
      >
        <GuestbookItem :guestbook="guestbook" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue';
import { getGuestbook, createGuestbook } from '@/utils/guestbook';
import GuestbookItem from '@/components/GuestbookItem.vue';
import AddGuestbook from '@/components/AddGuestbook.vue';

const guestbookList = ref([]);
const showForm = ref(false);

// 방명록 조회
const fetchGuestbook = async () => {
  try {
    guestbookList.value = await getGuestbook();
  } catch (err) {
    console.error(err);
  }
};

// 방명록 추가
const addGuestbook = async ({ name, message, createdAt }) => {
  try {
    const newItem = await createGuestbook({ name, message, createdAt });
    guestbookList.value.push(newItem);
  } catch (err) {
    alert('방명록 추가 실패');
    console.error(err);
  }
};

provide('addGuestbook', addGuestbook);

onMounted(() => {
  fetchGuestbook();
});
</script>

<style lang="scss" scoped></style>
