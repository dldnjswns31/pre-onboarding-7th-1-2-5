import MDEditor from '@uiw/react-md-editor';

const IssueContent = ({ issue }) => {
  return <MDEditor.Markdown source={issue.body} />;
};

export default IssueContent;
