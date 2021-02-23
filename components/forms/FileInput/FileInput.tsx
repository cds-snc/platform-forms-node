import React, { useState } from "react";
import classnames from "classnames";
import { useField } from "formik";

interface FileInputProps {
  id: string;
  name: string;
  className?: string;
  error?: boolean;
  hint?: React.ReactNode;
  fileType?: string | undefined;
}

export const FileInput = (props: FileInputProps): React.ReactElement => {
  const [file, setFile] = useState<ArrayBuffer | string | null>();
  const { id, className, fileType } = props;

  const classes = classnames("gc-file-input", className);
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.files) {
      const reader = new FileReader();

      reader.onload = function () {
        let fileObject = reader.result;
        if (fileObject) {
          // Before sending to Notify, remove the "data..." from the result as per
          // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

          fileObject =
            typeof fileObject === "string"
              ? fileObject.replace(/^data:(.)*base64,/, "")
              : fileObject;
        }
        setFile(fileObject);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <input
        type="file"
        data-testid="file"
        className={classes}
        id={id}
        accept={fileType}
        {...field}
        onChange={handleFileChange}
      />
      <input
        type="hidden"
        name={`${id}.attachment`}
        value={file ? file.toString() : ""}
      />
    </>
  );
};

export default FileInput;
