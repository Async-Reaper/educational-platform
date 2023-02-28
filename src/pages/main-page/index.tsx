import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets';

function Component() {
  const { t } = useTranslation('main');
  return (
     <div>
        <LangSwitcher />
        {t('Главная страница')}

     </div>
  );
}

export default Component;
