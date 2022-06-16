import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from '../../components/text/Heading';

export default {
  title: 'Text/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Heading",
};
