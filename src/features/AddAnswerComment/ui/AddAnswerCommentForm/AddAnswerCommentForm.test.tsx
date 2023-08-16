import { testingRender } from 'shared/config/testingConfig/testingConfig';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';
import { StateSchema } from 'app/providers/store';
import { AnswerCommentType } from 'features/AddAnswerComment';
import AddAnswerCommentForm from './AddAnswerCommentForm';
import { addAnswerComment } from '../../model/api/addAnswerComment';

describe('Add answer form', () => {
  let response: any;

  beforeEach(() => {
    response = {
      result: 'answer comment',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Input change', async () => {
    testingRender(<AddAnswerCommentForm id={1} onSuccess={() => false} />, { route: '/' });
    const textAnswerInput = await screen.findByTestId('text-input') as HTMLInputElement;
    await userEvent.type(textAnswerInput, 'd');
    expect(textAnswerInput.value).toBe('d');
  });

  test('Post request', async () => {
    const dispatch = jest.fn();
    testingRender(<AddAnswerCommentForm id={1} onSuccess={() => false} />, { route: '/' });
    const textAnswerInput = await screen.findByTestId('text-input') as HTMLInputElement;
    const btnRequest = await screen.findByTestId('btn-request');

    await userEvent.type(textAnswerInput, 'd');
    await userEvent.click(btnRequest);

    const answerCommentData: AnswerCommentType = {
      id: 1,
      text: 'text',
    };

    const state: StateSchema = {
      addAnswerCommentForm: {
        isSuccess: false,
        error: '',
        isLoading: false,
      },
    };
    const thunk = addAnswerComment(answerCommentData);
    await thunk(dispatch, () => state, undefined);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    expect(calls[0][0].type).toEqual('comment/addAnswerComment/pending');
    expect(calls[1][0].type).toEqual('comment/addAnswerComment/fulfilled');
  });
});
