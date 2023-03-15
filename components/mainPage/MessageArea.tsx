"use client";

import { MessageArea } from "~/components/share/MessageArea/MessageArea";

export const MainPageMessageArea = () => {
  const test = `Main page has information as follows:
  - aaa
  - bbb
  `;

  return <MessageArea title="This is main page" message={test} />;
};
