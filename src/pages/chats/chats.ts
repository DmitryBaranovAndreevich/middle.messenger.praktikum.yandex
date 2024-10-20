import { Button, InputWithItem } from "../../components";
import { getInputWithItem } from "../../components/input-with-item/input-with-item";
import { Block, render, TPropsObj } from "../../modules";
import { userParamsConfig } from "../profile/profile-constants";
import "./chats.scss";

// const root = document.querySelector<HTMLDivElement>("#root");
// addTemplate("#entry-template", root);
type IDiv = {
  button: Button;
  button1: Button;
  input: InputWithItem;
};

export class Div extends Block<IDiv> {
  constructor(props: TPropsObj<IDiv>) {
    super(props);
  }
  render() {
    return `<div>
              <p>Test</p>
              {{{phone}}}
              {{{display_name}}}
              {{{second_name}}}
              {{{first_name}}}
              {{{login}}}
              {{{email}}}
            </div>`;
  }
}

// const button = new Button({
//   text: "Click me",
//   events: {
//     click: () => console.log("click"),
//   },
// });

// const button1 = new Button({
//   text: "Click me1",
//   events: {
//     click: () => console.log("click"),
//   },
// });

const input = getInputWithItem({
  type: "text",
  name: "test",
  item: "item",
  error: "error",
});

// label: "Почта",
// value: "pochta@yandex.ru",
// disabled: true,
// name: "email",
// type: "text",

const inputs = userParamsConfig.map((el) =>
  getInputWithItem({
    type: el.type,
    name: el.name,
    item: el.label,
    error: "error",
  })
);

const htmlElements = inputs.reduce((acc, el) => ({
  ...acc,
  [el.name]: el.inputWithItem,
}));

const div = new Div({
  // button,
  // button1,
  ...htmlElements,
});

// app — это class дива в корне DOM
render("#root", div);

// Через секунду контент изменится сам, достаточно обновить пропсы
// setTimeout(() => {
//   button.setProps({
//     text: "Click me, please",
//     events: {
//       click: () => console.log("click111111"),
//     },
//   });
// }, 10000);
