import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBoxSelectAllComponent } from './myComponent/check-box-select-all/check-box-select-all.component';

const routes: Routes = [
  {path:'checkboxselectall',component:CheckBoxSelectAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
