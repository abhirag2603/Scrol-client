import { atom } from 'recoil';

export const registerState = atom({
  key: 'registerState',
  default: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
});