import { Options } from './dynamic-renderer-view.model';

export class BaseControl<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  optionsList: Options[] | undefined;
  placeHolder: string;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      controlType?: string;
      optionsList?: Options[];
      placeHolder?: string;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.optionsList = options.optionsList;
    this.placeHolder = options.placeHolder || '';
  }
}
