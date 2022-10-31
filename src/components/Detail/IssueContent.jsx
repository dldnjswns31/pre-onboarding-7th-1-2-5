import MDEditor from '@uiw/react-md-editor';

const IssueContent = ({ issue }) => {
  return <MDEditor.Markdown source={issue.body} style={{ padding: 32, backgroundColor: '#FAFAFA' }} />;
};

export default IssueContent;
