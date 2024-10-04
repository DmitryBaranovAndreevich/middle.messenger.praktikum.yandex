import Handlebars from "handlebars";
import "./main.scss";

const source =
  document.querySelector<HTMLScriptElement>("#entry-template")!.innerHTML;
const root = document.querySelector<HTMLDivElement>("#root");
const template = Handlebars.compile(source)({});
if (root) {
  root.innerHTML = template;
}