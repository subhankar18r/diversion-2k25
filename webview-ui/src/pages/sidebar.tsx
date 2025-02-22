import { vscode } from "../utilities/vscode";
import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import "./App.css";

function Sidebar() {
//   function handleHowdyClick() {
//     vscode.postMessage({
//       command: "hello",
//       text: "Hey there partner! 🤠",
//     });
//   }

  return (
    <main>
      <VSCodeButton onClick={() => vscode.postMessage({ command: "fetchRoutes" })}>
        Fetch Routes
      </VSCodeButton>
    </main>
  );
}

export default Sidebar;
