import { addAnswerComment } from '../api/addAnswerComment';
import { AnswerCommentSchema } from '../types';
import { addAnswerCommentReducer } from './addAnswerCommentSlice';

describe('Add answer comment slice', () => {
  const initialState: AnswerCommentSchema = {
    isSuccess: false,
    isLoading: false,
    error: undefined,
  };

  test('Set fetching when add answer comment pending', () => {
    const action = { type: addAnswerComment.pending.type };
    const state = addAnswerCommentReducer(initialState, action);
    expect(state).toEqual({ isSuccess: false, isLoading: true });
  });

  test('Set fetching when add answer comment fulfilled', () => {
    const action = { type: addAnswerComment.fulfilled.type };
    const state = addAnswerCommentReducer(initialState, action);
    expect(state).toEqual({ isSuccess: true, isLoading: false });
  });

  test('Set fetching when add answer comment rejected', () => {
    const action = { type: addAnswerComment.rejected.type, payload: 'error' };
    const state = addAnswerCommentReducer(initialState, action);
    expect(state).toEqual({ isSuccess: false, isLoading: false, error: 'error' });
  });
});
