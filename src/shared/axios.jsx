import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const apis = {
  getIssues: (page) => {
    return api('/issues', {
      params: {
        sort: 'comments',
        per_page: 20,
        page,
      },
    });
  },
};
