import axios from '@/utils/axios';
import { ref } from 'vue';

export const useTeamRule = () => {
  const teamrules = ref([]);

  const fetchTeamRules = async () => {
    const response = await axios.get('/rules');
    teamrules.value = response.data;
  };
  return { fetchTeamRules, teamrules };
};
