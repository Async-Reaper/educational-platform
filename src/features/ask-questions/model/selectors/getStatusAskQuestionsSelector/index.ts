import { useAppSelector } from 'shared/hooks/useAppSelector';

export const getStatusAskQuestionsSelector = () => useAppSelector((state) => state.askQuestions);
