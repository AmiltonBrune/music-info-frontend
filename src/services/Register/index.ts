import api from 'services';

export const register = (body: Object) => api.post('/user', body);
