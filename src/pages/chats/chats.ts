import { Button } from "../../components";
import {  Block, render, TPropsObj } from "../../modules";
import "./chats.scss";

// const root = document.querySelector<HTMLDivElement>("#root");
// addTemplate("#entry-template", root);
type IDiv = {
  button: Button;
  button1: Button;
};

export class Div extends Block<IDiv> {
  constructor(props: TPropsObj<IDiv>) {
    super(props);
  }
  render() {
    return `<div>
              <p>Test</p>
              {{{button1}}}
              {{{button}}}
            </div>`;
  }
}

const button = new Button({
  text: "Click me",
  events: {
    click: () => console.log("click"),
  },
});

const button1 = new Button({
  text: "Click me1",
  events: {
    click: () => console.log("click"),
  },
});

const div = new Div({
  button,
  button1,
});


// app — это class дива в корне DOM
render("#root", div);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
  button.setProps({
    text: "Click me, please",
    events: {
      click: () => console.log("click111111")
    }
  });
}, 10000);
