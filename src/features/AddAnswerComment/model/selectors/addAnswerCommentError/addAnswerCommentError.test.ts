import { addAnswerCommentError } from './addAnswerCommentError';

describe('Add answer comment error (selector)', () => {
  test('No error', () => {
    expect(addAnswerCommentError({ addAnswerCommentForm: { error: '' } })).toBe('');
  });

  test('Show error', () => {
    expect(addAnswerCommentError({ addAnswerCommentForm: { error: 'error' } })).toBe('error');
  });
});
