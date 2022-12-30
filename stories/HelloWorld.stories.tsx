import React from "react";

import { StoryFn, Meta } from "@storybook/react";

const HelloWorld = () => {
  return <div className="text-3xl">Hello, world!</div>;
};

export default { component: HelloWorld } as Meta<typeof HelloWorld>;

export const Default: StoryFn<typeof HelloWorld> = () => <HelloWorld />;
