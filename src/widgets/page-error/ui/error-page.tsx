import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/helpers/classNames';

type ErrorPageProps = {
  className?: string;
};

function Component({ className }: ErrorPageProps) {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
     <div className={classNames('', [className], {})}>
        <p>{t('Произошла непредвиденная ошибка')}</p>
        <button onClick={reloadPage}>
           {t('Обновить страницу')}
        </button>
     </div>
  );
}

export const ErrorPage = Component;
