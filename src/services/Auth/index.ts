import api from 'services';

export const login = (body: Object) => api.post('/authenticate', body);
