<template>
  <h2>KB - 27회차 훈련생들</h2>
  <div class="col p-3">
    <router-link class="btn btn-primary" to="/members/add">
      멤버 추가
    </router-link>
  </div>
  <div v-for="member in members" :key="member.id">
    <MemberCard :member="member"></MemberCard>
  </div>
</template>

<script setup>
import { useMember } from '@/api/Members';
import { onMounted } from 'vue';
import MemberCard from '@/components/MemberCard.vue';

const { members, fetchAllMembers } = useMember();

onMounted(() => {
  fetchAllMembers();
});
</script>

<style scoped></style>
