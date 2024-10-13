import { Block, TPropsObj } from "../../modules";
import styles from "./button.module.scss";

type TButton = {
  text: string;
};

export class Button extends Block<TButton> {
  constructor(props: TPropsObj<TButton>) {
    super(props);
  }
  render() {
    return `<button class=${styles.button} type="submit">{{text}}</button>`;
  }
}
