import React, { useEffect, useState } from "react";
import { Button, DragDrop, Input, Typography } from "shared/ui";
import cls from "./styles.module.scss";

const Component = () => {
  const [files, setFiles] = useState();
  const [error, setError] = useState<boolean>();
  const [titleResourse, setTitleResource] = useState<string>();
  const [nameResource, setNameResource] = useState<string>();
  const [typeResource, setTypeResource] = useState<string>();

  const dataResource = {
    titleResourse,
    nameResource,
    typeResource,
  };

  useEffect(() => {
    if (titleResourse == "" || nameResource == "" || typeResource == "") {
      setError(true);
    } else {
      setError(false);
    }
  }, [titleResourse, nameResource, typeResource]);

  return (
    <div className={cls.upload_course__wrapper}>
      <Input value={titleResourse} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleResource(e.target.value)} placeholder="Название вашего ресурса" />
      <div className={cls.select__wrapper}>
        <select className={cls.select} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNameResource(e.target.value)}>
          <option className={cls.select_option} disabled defaultValue="course" selected>
            Курс куда вы хотите загрузить ресурс
          </option>
          <option className={cls.select_option} value={"Программирование"}>
            Программирование
          </option>
          <option className={cls.select_option} value="Веб-дизайн">
            Веб-дизайн
          </option>
          <option className={cls.select_option} value="Средства защиты информации">
            Средства защиты информации
          </option>
          <option className={cls.select_option} value="3Д моделирование">
            3Д моделирование
          </option>
        </select>
      </div>
      <div className={cls.select__wrapper}>
        <select className={cls.select} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTypeResource(e.target.value)}>
          <option className={cls.select_option} disabled defaultValue="course" selected>
            Вид вашего ресурса
          </option>
          <option className={cls.select_option} value="presentation">
            Презентация
          </option>
          <option className={cls.select_option} value="lecture">
            Лекция
          </option>
          <option className={cls.select_option} value="video">
            Видео
          </option>
        </select>
      </div>
      <DragDrop multiple={false} labelText="Загрузите ресурс" type={["PDF", "MP4"]} />
      <Button variant="xs" background="violet-primary">
        <Typography variant="h3">Загрузить ресурс</Typography>
      </Button>
    </div>
  );
};

export const UploadCourse = React.memo(Component);
