import { addAnswerCommentIsLoading } from 'features/AddAnswerComment';

describe('Add answer comment loading (selector)', () => {
  test('Start loading', () => {
    expect(addAnswerCommentIsLoading(
      {
        addAnswerCommentForm: { isLoading: true },
      },
    )).toBe(true);
  });

  test('End loading', () => {
    expect(addAnswerCommentIsLoading(
      {
        addAnswerCommentForm: { isLoading: false },
      },
    )).toBe(false);
  });
});
