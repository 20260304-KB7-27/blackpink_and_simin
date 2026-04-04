<template>
  <div class="container d-flex flex-column gap-5 mt-5">
    <h1 class="text-center">🎀 우리팀을 소개합니다~! 🎀</h1>
    <div class="d-flex flex-column gap-4">
      <img :src="teamInfo.teamImage" :alt="teamInfo.name" />
      <div>
        <h2>🏷️ 팀명: {{ teamInfo.name }}</h2>
        <h2>💭 팀명 이유: {{ teamInfo.reason }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTeamIntroduce } from '@/apis/team-introduce';
import { onMounted } from 'vue';

const { teamInfo, fetchTeamInfo } = useTeamIntroduce();

onMounted(() => {
  fetchTeamInfo();
});

console.log(teamInfo);
</script>

<style scoped></style>
