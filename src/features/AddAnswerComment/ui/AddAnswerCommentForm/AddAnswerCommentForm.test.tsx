import { testingRender } from 'shared/config/testingConfig/testingConfig';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddAnswerCommentForm from './AddAnswerCommentForm';

describe('Add answer form', () => {
   afterEach(() => {
      jest.clearAllMocks();
   });

   test('Input change', async () => {
      testingRender(<AddAnswerCommentForm id={1} onSuccess={() => false} />, { route: '/' });
      const textAnswerInput = await screen.findByTestId('text-input') as HTMLInputElement;
      await userEvent.type(textAnswerInput, 'd');
      expect(textAnswerInput.value).toBe('d');
   });
});
