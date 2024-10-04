import "./register.scss";
import Handlebars from "handlebars";

const source =
  document.querySelector<HTMLScriptElement>("#entry-template")!.innerHTML;
const root = document.querySelector<HTMLDivElement>("#root");
const template = Handlebars.compile(source)({});
if (root) {
  root.innerHTML = template;
}

const elements = document.querySelector<HTMLFormElement>(
  ".registerPage__formWrapper"
)?.elements;
if (elements) {
  const lastInputPassword = Array.from(elements).find(
    (el): el is HTMLInputElement => el.getAttribute("name") === "password-copy"
  );
  lastInputPassword?.setAttribute("value", "111111111");
  lastInputPassword?.classList.add(`${lastInputPassword.className}_isError`);
  const parent = lastInputPassword?.closest("div");
  const errorClass = `${parent?.className}__error`;
  const error = parent?.querySelector(`.${errorClass}`);
  console.log(error);
  error?.classList.add(`${errorClass}_visible`);
  console.log();
}
