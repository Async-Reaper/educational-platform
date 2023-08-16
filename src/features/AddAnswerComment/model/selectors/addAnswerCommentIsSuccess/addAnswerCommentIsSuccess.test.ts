import { addAnswerCommentIsSuccess } from 'features/AddAnswerComment';

describe('Add answer comment success (selector)', () => {
  test('Yes success', () => {
    expect(addAnswerCommentIsSuccess(
      {
        addAnswerCommentForm: { isSuccess: true },
      },
    )).toBe(true);
  });

  test('No success', () => {
    expect(addAnswerCommentIsSuccess(
      {
        addAnswerCommentForm: { isSuccess: false },
      },
    )).toBe(false);
  });
});
