import { ControlType } from './control-types.enum';
import { BaseControl } from './base-control.model';
export class RadioControl extends BaseControl<string> {
  controlType = ControlType.RadioButton;
  constructor(options: any = {}) {
    super(options);
  }
}
