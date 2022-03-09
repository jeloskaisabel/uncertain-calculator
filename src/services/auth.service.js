import { api } from '@/config/site.config';
import { storageGet, storageSave, storageDelete } from '@/services/storage';

class AuthService {
  login(user) {
    return api
      .post('auth/login', {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.success) {
          storageSave('user', response.data);
        }
        return response.data;
      });
  }

  getCurrentUser() {
    return storageGet('user');
  }

  logout() {
    storageDelete('user');
  }

  register(user) {
    return api.post('auth/register', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
