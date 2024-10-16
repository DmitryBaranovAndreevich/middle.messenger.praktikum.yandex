import { Input } from "../input";
import { Label } from "../label";
import { InputWithItem } from "./input-with-item";
import styles from "./input-with-item.module.scss";

export function getInputWithItem({
  item,
  error,
  type,
  name,
  disabled
}: {
  item: string;
  error: string;
  type: string;
  name: string;
  disabled: boolean
}) {
  let isError = false;
  const input = new Input({
    type,
    className: styles.inputWithItem__input,
    name,
    disabled,
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        if (input.value.length > 5) {
          setError(true);
        }
      },
      input: () => {
        setError(false);
      },
    },
  });

  const itemLabel = new Label({
    content: item,
    className: styles.inputWithItem__item,
  });

  const errorLabel = new Label({
    content: error,
    className: styles.inputWithItem__error,
  });

  errorLabel.hide();

  const inputWithItem = new InputWithItem({
    input,
    error,
    item,
    itemLabel,
    errorLabel,
  });

  function setError(key: boolean) {
    isError = key;
    if (isError) {
      errorLabel.show();
    } else {
      errorLabel.hide();
    }
  }

  return { inputWithItem, input, setError, name };
}
