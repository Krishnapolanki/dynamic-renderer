import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { CreateComponent } from './create/create.component';
import { DynamicRendererRoutingModule } from './dynamic-renderer-routing.module';
import { DynamicRendererShellComponent } from './dynamic-renderer-shell/dynamic-renderer-shell.component';
import { RenderComponent } from './render/render.component';

@NgModule({
  declarations: [
    DynamicRendererShellComponent,
    CreateComponent,
    RenderComponent,
  ],
  imports: [CommonModule, DynamicRendererRoutingModule, CoreModule],
})
export class DynamicRendererModule {}
