<template>
  <div class="container py-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      
      <h3 class="text-center fw-bold mb-4 p-3 rounded-pill text-white bg-blackpink" >📋 우리 팀 규칙!</h3>

      <div class="list-group shadow">
        <div
          class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3"
          v-for="teamrule in teamrules"
          :key="teamrule.id"
        >
          <span class="badge bg-blackpink rounded-pill fs-6">{{ teamrule.id }}</span>
          <span>{{ teamrule.rule }}</span>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>
import { useTeamRule } from '@/api/TeamRule';
import { onMounted } from 'vue';

const { fetchTeamRules, teamrules } = useTeamRule();

onMounted(() => {
  fetchTeamRules();
});
</script>

<style scoped>
.bg-blackpink {
  background-color: #ffb6c1;
}</style>
