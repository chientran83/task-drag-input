import { Form, InputProps } from "antd";
import { FC, ReactElement } from "react";
import { Button, Upload } from "antd";
import { Controller } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";

type FileInputType = InputProps & {
  label?: string;
  name: string;
  control?: any;
};

const FileInput: FC<FileInputType> = ({
  label,
  name,
  control,
  ...prop
}): ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field }) => (
          <Upload {...field}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        )}
        control={control}
      />
    </Form.Item>
  );
};

export default FileInput;
