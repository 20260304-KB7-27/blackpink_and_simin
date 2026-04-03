import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// 방명록 전체 조회
export const getGuestbook = async () => {
  const res = await api.get('/guestbook');
  return res.data;
};

// 방명록 추가
export const createGuestbook = async (data) => {
  const res = await api.post('/guestbook', data);
  return res.data;
};
