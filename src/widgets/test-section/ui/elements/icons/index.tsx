import React from 'react';
import { ColoredIcon } from 'shared/libs/icons';
import cls from './styles.module.scss';

const Component = () => (
   <>
      <ColoredIcon className={cls.test__left} name='test_left' size={340} />
      <ColoredIcon className={cls.test__top} name='test_top' width={229} height={60} />
      <ColoredIcon className={cls.test__arrowLeft} name='test_arrow_left' width={46} height={25} />
      <ColoredIcon className={cls.test__arrowRight} name='test_arrow_right' width={46} height={25} />
      <ColoredIcon className={cls.test__bottom} name='test_bottom' width={229} height={60} />
      <ColoredIcon className={cls.test__right} name='test_right' size={340} />
      <ColoredIcon className={cls.test__border} name='border_test' width={764} height={459} />
   </>
);

export const Icons = React.memo(Component);
