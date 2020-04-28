import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://my-json-server.typicode.com/yasintz/biges-todo-app',
});

const login = async (username, password) => {
  const { data: users } = await axios.get('user');

  if (!Array.isArray(users)) {
    throw new Error('something went wrong.');
  }

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

export default {
  login,
};
