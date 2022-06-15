import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/buttons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary", 
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type:"secondary",
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: 'Button',
};
