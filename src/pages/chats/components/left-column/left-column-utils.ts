import { Link } from "../../../../components";
import { ChatsTitle, Input } from "./components";
import { LeftColumnTemplate } from "./left-column";
import logo from "../../../../icons/imgLoader.svg";
import styles from "./left-column.module.scss";

function getDataStr(d = Date.now()) {
  const date = new Date(d);
  const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const m =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${h} : ${m}`;
}

const CHATS_LIST = [
  {
    title: "Поиграть",
    url: logo,
    comment: { text: "Мой коммент", owner: true },
    time: getDataStr(),
    count: 2,
  },
  {
    title: "Поиграть",
    url: logo,
    comment: { text: "Надоела эта верстка", owner: false },
    time: getDataStr(),
    count: 2,
  },
  {
    title: "Поиграть",
    url: logo,
    comment: {
      text: "Мой коммент очень очень много раз коммент коммент коммент коммент",
      owner: true,
    },
    time: getDataStr(),
    count: 2,
  },
];

export function createLeftColumn() {
  const chatsList = new ChatsTitle({ chats: CHATS_LIST });

  const linkButton = new Link({
    content: "В профиль >",
    url: `${window.location.origin}/profile`,
    className: styles.leftColumn__link,
    events: {
      click: (e: Event) => {
        e.preventDefault();
        const a = e.target as HTMLLinkElement;
        history.pushState({}, "", a.href);
      },
    },
  });

  const searchInput = new Input({ name: "message" });
  const leftColumn = new LeftColumnTemplate({
    linkButton,
    searchInput,
    chatsList,
  });

  return leftColumn;
}
