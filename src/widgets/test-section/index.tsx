import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import { Button, Container, Typography } from 'shared/ui';

const Component = () => (
   <div className='test__sectionWrapper'>
      <Container>
         <div className='test__sectionInner'>
            <div className='test__iconsWrapper'>
               <div className='test__iconsTitle'>
                  <Typography tag='h1' variant='h3'>Тест нашего эксперта</Typography>
               </div>
               <div className='test__iconsInner'>
                  <ColoredIcon name='test_left' />
                  <ColoredIcon name='test_top' />
                  <ColoredIcon name='test_arrow_left' />
                  <ColoredIcon name='test_arrow_right' />
                  <ColoredIcon name='test_bottom' />
                  <ColoredIcon name='test_right' />
               </div>
            </div>
            <div className='test__contentWrapper'>
               <div className='test__contentTitle'>
                  <Typography tag='h1' variant='h2'>Попробуйте реальные тесты</Typography>
               </div>
               <div className='test__contentDescription'>
                  <Typography tag='span' variant='h3'>
                     Наши и реальные тесты идентичны по сложности, тематике и формату вопросов.
                  </Typography>
               </div>
               <div className='test__contentBtn'>
                  <Button variant='l'>
                     <Typography tag='span' variant='h3'>
                        Пройти тест
                     </Typography>
                     <ColoredIcon name='test_checked' />
                  </Button>
               </div>
            </div>
         </div>
      </Container>
   </div>
);

export const TestSection = React.memo(Component);
