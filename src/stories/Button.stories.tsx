import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/buttons';

export default {
  title: 'Input/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

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
