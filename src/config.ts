import * as vscode from 'vscode';
import * as path from 'path';

const filename = 'sql-config.json';

export function getConfigPath() {
  return path.join(getConfigDir(), filename);
}

export function getConfigDir() {
  return path.join(vscode.workspace.rootPath, '.vscode');
}

export interface Config {
  host: string;
  port: string;
  username: string;
  password: string;
  dbname: string;
  dialect: string;
}

export const defaultConfig: Config = {
  host: "localhost",
  port: "",
  username: "username",
  password: "password",
  dbname: "dbname",
  dialect: "postgresql"
}