<template>
  <div class="row">
    <div class="col p-3">
      <h2>방명록 작성</h2>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="guestbookItem.name"
        />
      </div>
      <div class="form-group">
        <label htmlFor="message">내용:</label>
        <textarea
          class="form-control"
          rows="3"
          id="message"
          v-model="guestbookItem.message"
        ></textarea>
      </div>
      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="addGuestbookHandler"
        >
          추가
        </button>
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="emit('close')"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, inject } from 'vue';

const addGuestbook = inject('addGuestbook');

const emit = defineEmits(['close']);

// 방명록 추가용
const guestbookItem = reactive({
  name: '',
  message: '',
});

// 방명록 추가 버튼 핸들러
const addGuestbookHandler = () => {
  // guestbookItem 값만 복사해서 전달
  addGuestbook({ ...guestbookItem, createdAt: new Date().toISOString() });

  // 닫기
  emit('close');
};
</script>

<style lang="scss" scoped></style>
