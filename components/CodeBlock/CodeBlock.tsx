import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  codeString: string;
};

const CodeBlock = ({ codeString }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={oneDark}
      showLineNumbers={true}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
