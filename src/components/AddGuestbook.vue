<template>
  <div style="width: 400px">
    <div class="form-group mb-2">
      <label>이름</label>
      <input type="text" class="form-control" v-model="form.name" />
    </div>
    <div class="form-group mb-2">
      <label>내용</label>
      <textarea class="form-control" rows="3" v-model="form.message"></textarea>
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-primary" @click="submit">추가</button>
      <button class="btn btn-secondary" @click="emit('close')">취소</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, inject } from 'vue';

const addGuestbook = inject('addGuestbook');
const emit = defineEmits(['close']);

// 방명록 추가용
const form = reactive({ name: '', message: '' });

const submit = () => {
  if (!form.name.trim() || !form.message.trim()) {
    alert('이름과 내용을 입력해주세요.');
    return;
  }

  // 값만 복사해서 전달
  addGuestbook({ ...form, createdAt: new Date().toISOString() });
  emit('close');
};
</script>