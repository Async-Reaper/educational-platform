import React, { useEffect } from 'react';
import cls from 'features/change-email/ui/styles.module.scss';
import { Button, ErrorText, Input } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInput } from 'shared/hooks/useValidation/useInput';
import { fetchAddLink } from 'features/add-link/model/api';
import { AddLinkType } from 'features/add-link/model/types';
import { getStatusAddLinkSelector } from 'features/add-link';

interface Props {
  setVisible?: (arg: boolean) => void;
  id: number | undefined
}

const Component: React.FC<Props> = ({ setVisible, id }) => {
  const { isSuccess, error } = getStatusAddLinkSelector();
  const dispatch = useAppDispatch();
  const link = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });

  const dataAddLink: AddLinkType = {
    id,
    link: link.value,
    description: description.value,
  };

  useEffect(() => {
    if (setVisible) {
      isSuccess && setVisible(false);
    }
  }, [isSuccess]);

  const handleChangeEmail = () => {
    link.onBlur();
    description.onBlur();
    if (!link.isEmpty
            && !description.isEmpty
    ) {
      dispatch(fetchAddLink(dataAddLink));
    }
  };

  return (
     <div className={cls.change_email__wrapper}>
        <div>
           <Input
             type='text'
             value={link.value}
             onChange={link.onChange}
             label='Ссылка на тренажер'
           />
           {(link.isDirty && link.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>
        <div>
           <Input
             type='text'
             value={description.value}
             onChange={description.onChange}
             label='Описание'
           />
           {(description.isDirty && description.isEmpty) && <ErrorText>Поле не должно быть пустым</ErrorText>}
        </div>
        <Button full variant='xs' background='violet-primary' onClick={handleChangeEmail}>
           Добавить тренажер
        </Button>
        {
                error
                && (
                <ErrorText>Произошла ошибка, повторите попытку позже</ErrorText>
                )
            }
     </div>
  );
};

export const AddLink = React.memo(Component);
