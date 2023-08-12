import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from 'shared/ui';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { topicData, getTopic } from 'entities/Topic';
import { deleteTopicIsSuccess } from 'features/DeleteTopic';
import { uploadResourceIsSuccess } from 'features/UploadResource';
import { deleteResourceIsSuccess } from 'features/DeleteResource';
import { createTopicIsSuccess } from 'features/CreateTopic';
import { VariantLearning } from 'widgets/VariantLearning';

import { NavigateBack } from './NavigateBack/NavigateBack';
import cls from './styles.module.scss';

const Component = memo(() => {
  const { id } = useParams();
  const dataTopic = useSelector(topicData);

  const statusUploadResource = useSelector(uploadResourceIsSuccess);
  const statusDeleteResource = useSelector(deleteResourceIsSuccess);

  const statusCreateDataTopic = useSelector(createTopicIsSuccess);
  const statusDeleteDataTopic = useSelector(deleteTopicIsSuccess);

  const dispatch = useAppDispatch();

  const [typeLearn, setTypeLearn] = useState<string>();

  const getAllTopicHandler = useCallback(() => {
    dispatch(getTopic(id));
  }, [dispatch, id, statusCreateDataTopic, statusDeleteDataTopic]);

  useEffect(() => {
    getAllTopicHandler();
    if (localStorage.getItem('type_learn')) {
      setTypeLearn(JSON.parse(localStorage.getItem('type_learn') || ''));
    }
  }, [
    dispatch,
    getAllTopicHandler,
    id,
    typeLearn,
    statusCreateDataTopic,
    statusDeleteDataTopic,
    statusUploadResource,
    statusDeleteResource,
  ]);

  const setTypeLearnHandler = useCallback((params: string) => {
    setTypeLearn(params);
    localStorage.setItem('type_learn', JSON.stringify(params));
  }, []);

  return (
     <div data-testid='topic-id-page'>
        <NavigateBack typeLearn={typeLearn} setTypeLearnHandler={setTypeLearnHandler} />
        <div className={cls.topic__name}>
           <Typography variant='h3' color='violet-primary'>
              {dataTopic?.name}
           </Typography>
        </div>
        {
                !typeLearn
                && (
                <div className={cls.topic__description}>
                   <Typography tag='span' variant='body' color='gray-primary'>
                      {dataTopic?.description}
                   </Typography>
                </div>
                )
            }
        <VariantLearning typeLearn={typeLearn} setTypeLearnHandler={setTypeLearnHandler} />
     </div>
  );
});

export default Component;
