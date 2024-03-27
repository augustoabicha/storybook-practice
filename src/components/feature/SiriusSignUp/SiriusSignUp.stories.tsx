// Replace your-framework with the name of your framework
import { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/test';

import { SiriusSignUp } from './SiriusSignUp';

const meta: Meta<typeof SiriusSignUp> = {
  component: SiriusSignUp,
};

export default meta;
type Story = StoryObj<typeof SiriusSignUp>;

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameInput = canvas.getByPlaceholderText('Full name');
    const emailInput = canvas.getByPlaceholderText('Email');
    const passwordInput = canvas.getByPlaceholderText('Password');
    const confirmPasswordInput = canvas.getByPlaceholderText('Confirm password');

    await userEvent.type(nameInput, 'Augusto Abichacra', {
      delay: 100,
    });
    await userEvent.type(emailInput, 'augustoabichacra@sirius.com.ar', {
      delay: 100,
    });
    await userEvent.type(passwordInput, 'password', {
      delay: 100,
    });
    await userEvent.type(confirmPasswordInput, 'password', {
      delay: 100,
    });
     // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
     const submitButton = canvas.getByRole('button');

     await userEvent.click(submitButton);
  },
};