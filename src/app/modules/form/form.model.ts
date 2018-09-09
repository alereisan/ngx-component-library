export class Fieldset   {
  legend: string;
  sortIndex: number;
  flex: number;
  fields: Array<Field>;
}

export class Field   {
    key?: string;
    value?: string;
    type?: string;
    sortIndex?: number;
    flex?: number;
    label?: string;
    placeholder?: string;
    required?: boolean;
    bufferField?: boolean;
}