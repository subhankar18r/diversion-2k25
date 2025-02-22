import * as vscode from "vscode";
import { getNonce } from "../utilities/getNonce";

export class SidebarPanel implements vscode.WebviewViewProvider {
  public static readonly viewType = "modulens-sidebarview";
  private _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      console.log("Received message:", data);
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Modulens Sidebar</title>
        </head>
        <body>s
          <h2>Modulens Explorer</h2>
          <div id="content">
            Loading...
          </div>
          <script>
            (function() {
              const vscode = acquireVsCodeApi();
              console.log('Webview initialized');
            }())
          </script>
        </body>
      </html>
    `;
  }
}