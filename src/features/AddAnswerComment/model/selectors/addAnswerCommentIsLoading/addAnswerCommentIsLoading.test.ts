import { addAnswerCommentIsLoading } from './addAnswerCommentIsLoading';

describe('Add answer comment loading (selector)', () => {
   test('Start loading', () => {
      const isLoading = addAnswerCommentIsLoading({
         addAnswerCommentForm: { 
            isLoading: true,
         },
      } as any);
      expect(isLoading).toBe(true);
   });

   test('End loading', () => {
      const isLoading = addAnswerCommentIsLoading({
         addAnswerCommentForm: {
            isLoading: false,
         },
      } as any);
      expect(isLoading).toBe(false);
   });
});
