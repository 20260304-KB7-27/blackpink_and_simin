import axios from 'axios';
import { ref } from 'vue';

export const useMemberProfile = () => {
  const members = ref([]);

  const API_URL = '/api/members';

  const fetchMemberById = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  };

  return { members, fetchMemberById };
};
