import React from 'react';
import { classNames } from 'shared/libs/helpers/classNames';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.loader__wrapper}>
      <div className={cls.sk_cube_grid}>
         <div className={classNames(cls.sk_cube, [cls.sk_cube1], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube2], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube3], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube4], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube5], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube6], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube7], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube8], {})} />
         <div className={classNames(cls.sk_cube, [cls.sk_cube9], {})} />
      </div>
   </div>
);

export const Loader = React.memo(Component);
