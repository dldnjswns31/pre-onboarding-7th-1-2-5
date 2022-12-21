import MDEditor from '@uiw/react-md-editor';

const IssueContent = ({ issue }) => {
  return (
    <div data-color-mode="light">
      <MDEditor.Markdown source={issue.body} style={{ padding: 32, backgroundColor: '#FAFAFA' }} />;
    </div>
  );
};

export default IssueContent;
