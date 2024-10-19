import { Button } from "../../../../components";
import { ImgLoader } from "./img-loader-popup";

const submitButton = new Button({
  text: "Сохранить",
  type: "submit",
});

export const createImgPopup = () => {
  return new ImgLoader({
    submitButton,
  });
};
