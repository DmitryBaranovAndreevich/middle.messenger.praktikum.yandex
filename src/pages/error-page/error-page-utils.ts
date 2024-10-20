import { Link } from "../../components";
import { CenterPageLayout } from "../../layouts";
import { render } from "../../modules";
import { ErrorPageTemplate } from "./error-page";
import styles from "./error-page.module.scss";

export function createErrorPage({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const link = new Link({
    content: "На страницу чатов",
    url: "../chats/chats.html",
    className: styles.errorPage__link,
  });

  const errorPageTemplate = new ErrorPageTemplate({
    title,
    content,
    link,
  });

  return new CenterPageLayout({
    className: "loginPage",
    content: errorPageTemplate,
  });
}

render("#root", createErrorPage({ title: "404", content: "Не туда попали" }));
