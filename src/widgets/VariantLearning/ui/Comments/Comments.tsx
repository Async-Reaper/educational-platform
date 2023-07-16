import React from 'react';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Typography } from 'shared/ui';
import { useModal } from 'shared/hooks/useModal/useModal';
import { AddCommentModal } from 'features/AddComment';
import { CommentsList } from 'widgets/CommentList';
import cls from './styles.module.scss';

interface Props {
  id: number;
}

const Component = ({ id }: Props) => {
  const { isOpen, open, close } = useModal();

  return (
     <>
        <div className={cls.add_comment__btn} onClick={open}>
           <AddCommentIcon />
           <Typography variant='small' tag='span'>Оставить комментарий</Typography>
        </div>
        <CommentsList id={id} />

        {
             isOpen
                 && <AddCommentModal isOpen={isOpen} onClose={close} id={id} />
         }
     </>
  );
};

export const Comments = React.memo(Component);
