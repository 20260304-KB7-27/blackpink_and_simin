<template>
  <div class="px-4 mt-4">

    <div class="d-flex justify-content-center align-items-center gap-5 mb-4">
      <h4 class="m-0">방명록</h4>
      <button class="btn btn-primary btn-sm" v-if="!showForm" @click="showForm = true">
        글 남기기
      </button>
    </div>

    <!-- 글 남기기 폼 -->
    <div class="d-flex justify-content-center mb-4">
      <AddGuestbook v-if="showForm" @close="showForm = false" />
    </div>

    <!-- 포스트잇 목록 -->
    <div class="d-flex flex-wrap gap-3">
      <GuestbookItem
          v-for="(item, index) in guestbookList"
          :key="item.id"
          :guestbook="item"
          :index="index"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
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