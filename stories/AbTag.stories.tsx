import React from "react";
import { ComponentMeta} from "@storybook/react"
import { AbTag } from "../src/components/AbTag"

export default {
  title: 'components/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const story = (args) => <AbTag {...args} />

export const Primary = story.bind({})

Primary.args = {
  text: "TAG"
}