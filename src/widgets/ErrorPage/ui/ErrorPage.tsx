import { classNames } from 'shared/libs/helpers/classNames';
import { Button, Typography } from 'shared/ui';
import cls from './styles.module.scss';

type ErrorPageProps = {
  className?: string;
};

function Component({ className }: ErrorPageProps) {
  const reloadPage = () => {
    location.reload();
  };

  return (
     <div className={classNames(cls.error_page, [], {})}>
        <div className={cls.error__wrapper}>
           <div className={cls.error__text}>
              <Typography tag='span' variant='h1'>
                 Упс :((
              </Typography>
              <p>произошла непредвиденная ошибка</p>
           </div>
           <div className={cls.reload_button}>
              <Button variant='l' onClick={reloadPage}>
                 Обновить страницу
              </Button>
           </div>
        </div>
     </div>
  );
}

export const ErrorPage = Component;
