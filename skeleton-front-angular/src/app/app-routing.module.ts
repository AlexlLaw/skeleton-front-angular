import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '**',
    loadChildren: () =>
        import('./features/pagina-nao-encontrada/components/pagina-nao-encontrada/pagina-nao-encontrada.module').then(
            (m) => m.PaginaNaoEncontradaModule
        )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
