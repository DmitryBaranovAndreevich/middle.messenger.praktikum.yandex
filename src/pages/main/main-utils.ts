import { render } from "../../modules";
import { createErrorPage } from "../error-page";
import { createLoginPage } from "../login";
import { createProfile } from "../profile";
import { createRegister } from "../register";
import { MainTemplate } from "./main";

function createMainPage() {
  const layout = new MainTemplate({
    events: {
      click: (e: Event) => {
        e.preventDefault();
        const a = e.target as HTMLLinkElement;
        history.pushState({}, "", a.href);
        render("#root", createLayout());
      },
    },
  });

  return layout;
}

function createLayout() {
  const location = window.location.pathname;
 
  switch (location) {
    case "/400": {
      return createErrorPage({ content: "Не туда попали", title: "404" });
    }

    case "/500": {
      return createErrorPage({ content: "Мы уже фиксим", title: "500" });
    }

    case "/login": {
      return createLoginPage();
    }

    case "/register": {
      return createRegister();
    }

    case "/profile": {
      return createProfile();
    }

    case "/":
    default: {
      return createMainPage();
    }
  }
}

window.addEventListener("popstate", function (e) {
  render("#root", createLayout());
});

render("#root", createLayout());
