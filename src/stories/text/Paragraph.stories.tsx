import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from '../../components/text/Paragraph';

export default {
  title: 'Text/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a paragraph of stuff that you might put into a paragraph",
};
