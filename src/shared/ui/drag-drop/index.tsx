import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { classNames } from "shared/libs/helpers/classNames";
import { Typography } from "shared/ui";
import cls from "./styles.module.scss";

const fileTypes = ["JPG", "PNG", "GIF"];

interface Props {
  multiple?: boolean;
  labelText?: string;
  type?: string[];
}

const Component: React.FC<Props> = (props) => {
  const { multiple = false, labelText, type = fileTypes } = props;

  const [file, setFile] = useState(null);
  const handleChange = (files: any) => {
    setFile(files);
  };
  return (
    <div className={cls.drop__wrapper}>
      {labelText ? <label htmlFor={labelText}>{labelText}</label> : null}
      <form class={cls.form__container} en enctype="multipart/form-data">
        <div class={cls.upload_files__container}>
          <div class={cls.drag_file__area}>
            <span class={classNames(cls.material__icons-outlined, [cls.upload-icon])}> file_upload </span>
            <h3 class={cls.dynamic__message}> Drag & drop any file here </h3>
            <label class="label">
              {" "}
              or{" "}
              <span class={cls.browse__files}>
                {" "}
                <input type="file" class={cls.default-file-input} /> <span class={cls.browse-files-text}>browse file</span> <span>from device</span>{" "}
              </span>{" "}
            </label>
          </div>
          <span class={cls.cannot-upload-message}>
            {" "}
            <span class={cls.material-icons-outlined}>error</span> Please select a file first <span class={cls.material-icons-outlined.cancel-alert-button}>cancel</span>{" "}
          </span>
          <div class={cls.file-block">
            <div class={cls.file-info">
              {" "}
              <span class={cls.material-icons-outlined file-icon}>description</span> <span class={cls.file-name}> </span> | <span class={cls.file-size}> </span>{" "}
            </div>
            <span class={cls.material-icons remove-file-icon}>delete</span>
            <div class={cls.progress-bar}> </div>
          </div>
          <button type="button" class={cls.upload-button}>
            {" "}
            Upload{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export const DragDrop = React.memo(Component);
