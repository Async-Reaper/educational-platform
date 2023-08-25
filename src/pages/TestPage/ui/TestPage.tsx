import React, { useCallback, useState } from 'react';
import { Button, Typography } from 'shared/ui';
import { IQuestions, questionsList } from '../model/listQuestions';

import cls from './TestPage.module.scss';
import { ValidateBrains } from './ValidateBrains/ValidateBrains';

const TestPage = () => {
   const [questions, setQuestions] = useState<IQuestions[]>(questionsList);
   const [typeBrains, setTypeBrains] = useState<'humanitarian' | 'technical' | 'mixed'>('technical');
   const [result, setResult] = useState<boolean>(false);

   const onSetVariant = useCallback((question: IQuestions) => {
      setQuestions(
         (prevState) => prevState.map((item) => (item.id === question.id
            ? { ...item, active: !item.active }
            : { ...item, active: item.active }
         )),
      );
   }, [questions]);

   const onCounting = useCallback(() => {
      let technical = 0;
      let humanitarian = 0;
      questions.map((question) => {
         question.active
            ? technical++
            : humanitarian++;
      });

      if (technical > humanitarian) {
         setTypeBrains('technical');
      } else if (technical === humanitarian) {
         setTypeBrains('mixed');
      } else {
         setTypeBrains('humanitarian');
      }

      setResult(true);
   }, [questions, setResult]);

   return (
      <div data-testid='test-page'>
         <div className={cls.question__wrapper}>
            <div className={cls.test__title}>
               <Typography color='violet-primary' variant='h3' tag='span'>
                  Тест на определение профориентации
               </Typography>
            </div>
            <div className={cls.questions__list}>
               {
                  questions.map((question) => (
                     <div key={question.id}>
                        <Typography color='violet-primary'>
                           {question.id}
                           )
                           {question.questions}
                        </Typography>
                        <div className={cls.question__content}>
                           <div className={cls.question__variant}>
                              <input
                                 id={question.variant_one}
                                 type='radio'
                                 checked={question.active}
                                 onChange={() => onSetVariant(question)}
                              />
                              <label className={cls.question__label} htmlFor={question.variant_one}>
                                 a) 
                                 {' '}
                                 {question.variant_one}
                              </label>
                           </div>
                           <div className={cls.question__variant}>
                              <input
                                 id={question.variant_two}
                                 type='radio'
                                 checked={!question.active}
                                 onChange={() => onSetVariant(question)}
                              />
                              <label className={cls.question__label} htmlFor={question.variant_two}>
                                 b) 
                                 {' '}
                                 {question.variant_two}
                              </label>
                           </div>
                        </div>
                     </div>
                  ))
               }
               <Button
                  onClick={onCounting}
               >
                  Узнать результат
               </Button>
            </div>
            {
               result
                    && <ValidateBrains typeBrains={typeBrains} />
            }
         </div>
      </div>
   );
};

export default TestPage;
