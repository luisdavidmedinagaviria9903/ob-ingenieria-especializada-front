import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module')
      .then((m) => m.AdminModule),
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
