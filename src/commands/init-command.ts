import * as vscode from 'vscode';
import * as fs from 'fs';
import * as config from '../config';

export default function () {
  if (!vscode.workspace.rootPath) {
    vscode.window.showErrorMessage("SQL-Tools: Cannot init config file without opened folder");
    return;
  }

  if (!fs.existsSync(config.getConfigDir())) {
    fs.mkdirSync(config.getConfigDir());
  }

  if (fs.existsSync(config.getConfigPath())) {
    vscode.window.showErrorMessage("SQL-Tools: Config file is exists.");
  } else {
    fs.writeFileSync(config.getConfigPath(), JSON.stringify(config.defaultConfig, null, 2));
  }

  let configFile = vscode.workspace.openTextDocument(config.getConfigPath());
  configFile.then(document => {
    vscode.window.showTextDocument(document);
  })
}