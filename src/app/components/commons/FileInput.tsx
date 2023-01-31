import { Form, UploadProps } from "antd";
import { FC, ReactElement } from "react";
import { Button, Upload } from "antd";
import { Controller } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";

type FileInputType = UploadProps & {
  label?: string;
  name: string;
  control: any;
  disabled?: boolean;
};

const FileInput: FC<FileInputType> = ({
  label,
  name,
  control,
  disabled,
  ...prop
}): ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field }) => (
          <Upload {...field} {...prop}>
            <Button disabled={disabled} icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        )}
        control={control}
      />
    </Form.Item>
  );
};

export default FileInput;
