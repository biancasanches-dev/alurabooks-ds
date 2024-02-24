import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AbButton, AbButtonProps } from "../src"

export default {
    title: 'Components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>

const story = (args) => <AbButton {...args} />

export const Primary = story.bind({})

Primary.args = {
    text: "Primary Button",
    layout: "primary"
} as AbButtonProps

export const Secondary = story.bind({})

Secondary.args = {
    text: "Secondary Button",
    layout: "secondary"
} as AbButtonProps