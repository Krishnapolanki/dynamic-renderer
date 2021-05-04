import { ControlType } from './control-types.enum';
import { BaseControl } from './base-control.model';
export class TextBoxControl extends BaseControl<string | number> {
  controlType = ControlType.String;
  type: string;
  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || 'text';
  }
}
