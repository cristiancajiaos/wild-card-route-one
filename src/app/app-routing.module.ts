import { NotFoundComponent } from './not-found/not-found.component';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FooComponent },
  { path: 'foo', component: FooComponent },
  { path: 'bar', component: BarComponent },
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
