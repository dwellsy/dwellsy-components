import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Subheading } from '../../components/text/Subheading';

export default {
  title: 'Text/Subheading',
  component: Subheading,
} as ComponentMeta<typeof Subheading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Subheading> = (args) => <Subheading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Subheading",
};
