import { ControlType } from '.';

export interface Options {
  option: string;
}

export interface DynamicControl {
  label: string;
  placeHolder?: string;
  isRequired: boolean;
  options?: Options[];
}

export interface DynamicRenderViewModel {
  noOfFields: number;
  typeOfField: ControlType;
  dynamic: DynamicControl;
}
