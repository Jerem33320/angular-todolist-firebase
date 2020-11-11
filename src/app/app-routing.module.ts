import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    component: TodoFormComponent
  },
  {
    path:'',
    component: ListComponent
  },
  
  // {'path':'add','component':AddComponent},
  // {'path':'list','component':ListComponent},
  // {'path':'edit/:id','component':EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
