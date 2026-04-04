import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// 방명록 전체 조회
export const getGuestbook = async () => {
  try {
    const res = await api.get('/guestbook');
    return res.data;
  } catch (err) {
    console.error('방명록 조회 API 에러:', err);
    throw err;
  }
};

// 방명록 추가
export const createGuestbook = async (data) => {
  try {
    const res = await api.post('/guestbook', data);
    return res.data;
  } catch (err) {
    console.error('방명록 추가 API 에러:', err);
    throw err;
  }
};