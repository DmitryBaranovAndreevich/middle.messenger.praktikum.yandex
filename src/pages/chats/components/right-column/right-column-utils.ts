import { Chat, NoChatsTitle } from "./components";
import { RightColumnTemplate } from "./right-column";

export function createRightColumn(
  chatContent?: Record<string, string | number | boolean>[]
) {
  const noChatsTitle = new NoChatsTitle({});

  const rightColumn = new RightColumnTemplate({
    content: chatContent ? new Chat({ chats: chatContent }) : noChatsTitle,
  });

  return rightColumn;
}
