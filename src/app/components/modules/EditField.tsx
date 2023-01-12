import { FC, ReactElement, useState } from "react";
import { Segmented } from 'antd';

const optionsSegmented:Array<string> = ['Attribute', 'Validate']

const EditField:FC = ():ReactElement => {
  const [segmented, setSegmented] = useState('Attribute')

  return(
    <div className="edit-field">
      <Segmented
        options={optionsSegmented}
        value={segmented}
        onChange={(value: any)=>setSegmented(value)}
      />
    </div>
  )
}

export default EditField;