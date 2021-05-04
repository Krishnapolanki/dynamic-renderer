import { ControlType } from './control-types.enum';
import { BaseControl } from './base-control.model';
export class CheckBoxControl extends BaseControl<boolean> {
  controlType = ControlType.CheckBox;
  constructor(options: any = {}) {
    super(options);
  }
}
