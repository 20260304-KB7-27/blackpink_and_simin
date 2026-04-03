<template>
  <div class="container mt-5" v-if="member">
    <div class="card mx-auto shadow" style="max-width: 400px">
      <div class="card-body text-center">
        <h1 class="card-title">{{ member.name }}</h1>
        <h5 class="text-muted mb-3">({{ member.role }})</h5>
        <span class="badge bg-primary mb-3">{{ member.mbti }}</span>
        <p class="card-text">{{ member.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMemberProfile } from '@/api/MembersProfile';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const { fetchMemberById } = useMemberProfile();

const route = useRoute();
const member = ref(null);

onMounted(async () => {
  const id = route.params.id;
  member.value = await fetchMemberById(id);
});
</script>

<style scoped></style>
