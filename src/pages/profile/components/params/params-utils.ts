import { Label } from "../../../../components";
import { Input } from "../input";
import { Params } from "./params";
import styles from "./params.module.scss";

export function creteParams({
  errorMessage,
  type,
  name,
  disabled,
  label,
  value,
}: {
  errorMessage: string;
  type: string;
  name: string;
  label: string;
  disabled: string;
  value?: string;
}) {
  const state = {
    value: value || "",
    isError: false
  }
  const input = new Input({
    type,
    value: state.value,
    name,
    disabled,
    events: {
      input: (e) => {
        const input = e.target as HTMLInputElement;
        state.value = input.value;
      },
      blur: () => {
        validateInput();
      },
    },
  });

  const errorLabel = new Label({
    content: errorMessage,
    className: styles.params__error,
  });

  errorLabel.hide();

  function validateInput() {
    if (state.value.length < 2) {
      errorLabel.show();
      state.isError = true;
    } else {
      errorLabel.hide();
      state.isError = false;
    }
  }

  return {
    component: new Params({
      errorLabel,
      input,
      label,
    }),
    state,
    validateInput,
  };
}