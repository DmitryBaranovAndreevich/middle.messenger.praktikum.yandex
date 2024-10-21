export type TChatsTitle = {
  chats: {
    title: string;
    url: string;
    comment: { text: string; owner: boolean };
    time: string;
    count: number;
  }[];
};
