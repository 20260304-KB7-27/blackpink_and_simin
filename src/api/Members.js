import axios from '@/utils/axios.js';
import { ref } from 'vue';

export const useMember = () => {
  const members = ref([]);

  const fetchAllMembers = async () => {
    const response = await axios.get('/members');
    members.value = response.data;
  };

  const addMember = async ({ name, role, mbti, desc }) => {
    const payload = { name, role, mbti, desc };

    const response = await axios.post('/members', payload);

    if (response.status === 201) {
      members.value.push(response.data);
    } else {
      alert('멤버 추가 실패');
    }
  };

  return { fetchAllMembers, addMember, members };
};
