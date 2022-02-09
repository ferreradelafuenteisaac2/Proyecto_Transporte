import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/Vehiculos/Vehiculo';
import { TransporteService } from 'src/app/services/transporte.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  vehiculosApi = null;
  vehiculotmp: any;
  constructor(private vehiculoService: TransporteService) {}

  getVehiculosApi() {
    this.vehiculoService.getVehiculosApi().subscribe((vehiculos) => {
      this.vehiculosApi = vehiculos;
      for (let _vehiculo of this.getVehiculosApi) {}
    }
    let e = new Vehiculo(
      vehiculo.matricula,
      vehiculo.numPlazas,
      vehiculo.fechaInicio,
      vehiculo.pagoTarjeta,
      vehiculo.Trabajador,
      Vehiculo.vehiculo
    );
    this.vehiculos.push(e)
    });
  }

  ngOnInit() {}
}
