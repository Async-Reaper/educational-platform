import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared/ui';
import { Sidebar } from 'widgets/sidebar';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getTopicSelector } from 'entities/topic/model/selector';
import { getTopic } from 'entities/topic/model/api';
import { VariantLearning } from 'widgets';
import { NavigateBack } from 'pages/topic-page/ui/navigate-back';
import {
  getStatusCreateTopicSelector,
} from 'features/create-topic/';
import { getStatusDeleteTopicSelector } from 'features/delete-topic';
import { getStatusUploadResourceSelector } from 'features/upload-resource';
import { getStatusDeleteResource } from 'features/delete-resource/model/selectors';
import cls from './styles.module.scss';

const Component = memo(() => {
  const { id } = useParams();
  const dataTopic = getTopicSelector();

  const statusUploadResource = getStatusUploadResourceSelector();
  const statusDeleteResource = getStatusDeleteResource();

  const statusCreateDataTopic = getStatusCreateTopicSelector();
  const statusDeleteDataTopic = getStatusDeleteTopicSelector();

  const dispatch = useAppDispatch();

  const [typeLearn, setTypeLearn] = useState<string>();

  const getAllTopicHandler = useCallback(() => {
    dispatch(getTopic(id));
  }, [dispatch, id, statusCreateDataTopic.isSuccess, statusDeleteDataTopic.isSuccess]);

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
    statusCreateDataTopic.isSuccess,
    statusDeleteDataTopic.isSuccess,
    statusUploadResource.isSuccess,
    statusDeleteResource.isSuccess,
  ]);

  const setTypeLearnHandler = useCallback((params: string) => {
    setTypeLearn(params);
    localStorage.setItem('type_learn', JSON.stringify(params));
  }, []);

  return (
     <div className='page_platform'>
        <Sidebar />
        <div className='page_platform__content'>
           <NavigateBack typeLearn={typeLearn} setTypeLearnHandler={setTypeLearnHandler} />
           <div className={cls.topic__name}>
              <Typography variant='h3' color='violet-primary'>
                 {dataTopic?.data?.name}
              </Typography>
           </div>
           {
                !typeLearn
                && (
                <div className={cls.topic__description}>
                   <Typography tag='span' variant='small' color='gray-primary'>
                      {dataTopic?.data?.description}
                   </Typography>
                </div>
                )
            }
           <VariantLearning typeLearn={typeLearn} setTypeLearnHandler={setTypeLearnHandler} />
        </div>
     </div>
  );
});

export default Component;
