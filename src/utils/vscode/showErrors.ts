import * as vscode from "vscode";
export function noLinesSelected() {
  return vscode.window.showErrorMessage("Please select some lines to search");
}

export function exceededPlan() {
  return vscode.window.showErrorMessage(
    "You have exceeded the number of search queries your 🍉 plan allows you to execute. Please go to our website to upgrade your plan."
  );
}
export function noSearchResults() {
  return vscode.window.showErrorMessage(
    "No search results. Try selecting a bigger piece of code or another file."
  );
}
