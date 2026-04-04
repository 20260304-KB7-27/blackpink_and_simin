import axios from 'axios';
import { ref } from 'vue';

export const useTeamIntroduce = () => {
  const teamInfo = ref({});

  // 전체 조회
  const fetchTeamInfo = async () => {
    const response = await axios.get('/api/team');

    teamInfo.value = response.data[0];
  };

  return { fetchTeamInfo, teamInfo };
};
