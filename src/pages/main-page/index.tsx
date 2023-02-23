import { Icon } from 'shared/libs/icons';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets';

function Component() {
  const { t } = useTranslation('main');

  return (
     <div>
        <LangSwitcher />
        {t('Главная страница')}
        <Icon name='steam' color='greyscale-primary' />
     </div>
  );
}

export default Component;
