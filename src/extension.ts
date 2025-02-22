import { commands, ExtensionContext } from "vscode";
import { RoutesPanel } from "./panels/RoutesPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showFlowCommand = commands.registerCommand("modulens.showFlow", () => {
    RoutesPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(showFlowCommand);
}
