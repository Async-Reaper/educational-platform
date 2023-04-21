import { classNames } from 'shared/libs/helpers/classNames';

type ErrorPageProps = {
  className?: string;
};

function Component({ className }: ErrorPageProps) {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
     <div className={classNames('', [className], {})}>
        <p>Произошла непредвиденная ошибка</p>
        <button onClick={reloadPage}>
           Обновить страницу
        </button>
     </div>
  );
}

export const ErrorPage = Component;
