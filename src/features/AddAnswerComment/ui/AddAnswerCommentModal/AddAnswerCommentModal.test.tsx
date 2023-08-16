import { testingRender } from 'shared/config/testingConfig/testingConfig';
import { screen } from '@testing-library/react';
import { AddAnswerCommentModal } from './AddAnswerCommentModal';
import '@testing-library/jest-dom';

describe('Add answer comment modal', () => {
  test('Show form', async () => {
    testingRender(
       <AddAnswerCommentModal
         isOpen
         commentId={1}
         onClose={() => false}
       />,
       { route: '/' },
    );
    const formAddAnswerComment = await screen.findByTestId('add-answer-comment-form');
    expect(formAddAnswerComment).toBeInTheDocument();
  });
});
