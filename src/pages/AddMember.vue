<template>
  <div class="row">
    <div class="col p-3">
      <h2>멤버 추가</h2>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <div class="form-group mb-3">
        <label for="name">이름:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="memberItem.name"
        />
      </div>

      <div class="form-group mb-3">
        <label for="role">역할:</label>
        <input
          type="text"
          class="form-control"
          id="role"
          v-model="memberItem.role"
        />
      </div>

      <div class="form-group mb-3">
        <label for="mbti">MBTI:</label>
        <input
          type="text"
          class="form-control"
          id="mbti"
          v-model="memberItem.mbti"
        />
      </div>

      <div class="form-group mb-3">
        <label for="desc">설명:</label>
        <textarea
          class="form-control"
          rows="3"
          id="desc"
          v-model="memberItem.desc"
        ></textarea>
      </div>

      <div class="form-group">
        <button
          type="button"
          class="btn btn-primary m-1"
          @click="addMemberHandler"
        >
          추가
        </button>

        <button
          type="button"
          class="btn btn-secondary m-1"
          @click="router.push('/members')"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useMember } from '@/api/Members';

const router = useRouter();
const { addMember } = useMember();

const memberItem = reactive({
  name: '',
  role: '',
  mbti: '',
  desc: '',
});

const addMemberHandler = async () => {
  if (!memberItem.name.trim()) {
    alert('이름을 입력해주세요.');
    return;
  }

  if (!memberItem.role.trim()) {
    alert('역할을 입력해주세요.');
    return;
  }

  if (!memberItem.mbti.trim()) {
    alert('MBTI를 입력해주세요.');
    return;
  }

  if (!memberItem.desc.trim()) {
    alert('설명을 입력해주세요.');
    return;
  }

  try {
    await addMember({ ...memberItem });
    router.push('/members');
  } catch (error) {
    console.error('멤버 추가 중 오류:', error);
    alert('멤버 추가 중 오류가 발생했습니다.');
  }
};
</script>

<style scoped></style>
