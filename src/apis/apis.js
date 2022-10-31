import instance from './instance';

const apis = {
  getIssues: (page) => {
    return instance('/issues', {
      params: {
        sort: 'comments',
        per_page: 20,
        page,
      },
    });
  },
  getIssue: (issueNumber) => {
    return instance(`/issues/${issueNumber}`);
  },
};

export default apis;
