import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicRendererShellComponent } from './dynamic-renderer-shell/dynamic-renderer-shell.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicRendererShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicRendererRoutingModule {}
