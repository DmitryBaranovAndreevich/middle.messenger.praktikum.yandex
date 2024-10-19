import { Block, TPropsObj } from "../../../../modules";
import { TImgLoader } from "./img-loader-popup-types";
import styles from "./img-loader-popup.module.scss";

export class ImgLoader extends Block<TImgLoader> {
  constructor(props: TPropsObj<TImgLoader>) {
    super(props);
  }
  render() {
    return `<div class="${styles.imgLoader}">
              <p class="${styles.imgLoader__title}">Загрузите файл</p>
              <form class="${styles.imgLoader__form}">
                <label class="${styles.imgLoader__inputLabel}" for="${styles.imgLoader__input}">Выбрать файл на компьютере</label>
                <input id="${styles.imgLoader__input}" name="photo" type="file" />
                {{{submitButton}}}
              </form>
            </div>`;
  }
}
