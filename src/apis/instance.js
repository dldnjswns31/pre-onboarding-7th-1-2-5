import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default instance;
