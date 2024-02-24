import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";

type Props = {
  defaultValue?: string;
  language: "html" | "json";
  onChange: (val: string | undefined) => void;
};

function App({ language, defaultValue, onChange }: Props) {
  function handleEditorChange(value?: string) {
    console.log(value);
    onChange(value);
  }

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
    setTimeout(function () {
      editor.getAction("editor.action.formatDocument")?.run();
    }, 300);
  }

  return (
    <Editor
      height="200px"
      width="500px"
      language={language}
      theme="vs-dark"
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      defaultValue={defaultValue}
      options={{
        fontSize: 14,
        folding: false,
        lineNumbersMinChars: 2,
        wordWrap: "on",
        minimap: { enabled: false },
        contextmenu: false,
        formatOnPaste: true,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}

export default App;
