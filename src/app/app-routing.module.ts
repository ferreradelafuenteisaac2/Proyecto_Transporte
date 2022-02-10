import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarTrenesComponent } from './components/listar-trenes/listar-trenes.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  { path: 'aaa', component: ListarProductoComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '', component: ListarVehiculosComponent },
  { path: 'listar-producto', component: ListarTrenesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
