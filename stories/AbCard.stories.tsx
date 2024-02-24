import React from "react";
import { ComponentMeta} from "@storybook/react"
import { AbCard } from "../src/components/AbCard"

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const story = (args) => <AbCard {...args} />

export const Primary = story.bind({})

Primary.args = {
  children: <h1>Conteúdo do card</h1>
}