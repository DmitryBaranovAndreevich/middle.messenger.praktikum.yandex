import { ChatsTemplate } from "./chats";
import { createRightColumn, createLeftColumn } from "./components";

export function createChatsPage() {
  const contentColumn = createRightColumn();
  const chatsColumn = createLeftColumn();
  const chatsTemplate = new ChatsTemplate({
    chatsColumn,
    contentColumn,
  });

  return chatsTemplate;
}
