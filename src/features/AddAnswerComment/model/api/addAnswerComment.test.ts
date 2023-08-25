import { AnswerCommentType } from 'features/AddAnswerComment';
import { StateSchema } from 'app/providers/store';
import { addAnswerComment } from './addAnswerComment';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Add answer comment request', () => {
   test('Request', async () => {
      const dispatch = jest.fn();
      const answerCommentData: AnswerCommentType = {
         id: 1,
         text: 'text',
      };

      // @ts-ignore
      const state: StateSchema = {
         addAnswerCommentForm: {
            isSuccess: false,
            error: '',
            isLoading: false,
         },
      };
      const thunk = addAnswerComment(answerCommentData);
      // @ts-ignore
      await thunk(dispatch, () => state, undefined);
      const { calls } = dispatch.mock;
      expect(calls).toHaveLength(2);
      expect(calls[0][0].type).toEqual('comment/addAnswerComment/pending');
      expect(calls[1][0].type).toEqual('comment/addAnswerComment/fulfilled');
   });
});
