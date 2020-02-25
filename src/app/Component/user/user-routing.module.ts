import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMasterTableComponent } from './user-master-table/user-master-table.component';


const routes: Routes = [
  { path: '', component: UserMasterTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
