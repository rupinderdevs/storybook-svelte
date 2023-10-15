import type { Meta, StoryObj } from '@storybook/svelte';
import Image from './Image.svelte';

const meta = {
	title: 'Image Component',
	component: Image,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['square', 'rectangular']
		}
	}
} satisfies Meta<Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageComponent: Story = {
	args: {
		imageUrl:
			'https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_1280.jpg',
		title: 'Title',
		type: 'rectangular'
	}
};