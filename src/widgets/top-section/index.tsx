import React, { type FC } from 'react';
import { Container } from 'shared/ui';
import cls from './styles.module.scss';
import {
  BottomIcon, ButtonsGroup, ImageBG, TextContent,
} from './ui';

interface Props {

}

const Component: FC<Props> = () => (
   <div className={cls.top__section}>
      <Container>
         <div className={cls.top__sectionWrapper}>
            <div className={cls.content}>
               <TextContent />
               <ButtonsGroup />
            </div>
            <ImageBG />
         </div>
      </Container>
      <BottomIcon />
   </div>
);

export const TopSection = React.memo(Component);
