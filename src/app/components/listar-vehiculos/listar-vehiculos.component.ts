import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/Vehiculos/Vehiculo';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  vehiculosApi = null;
  vehiculotmp: any;
  constructor(private TransporteService: TransporteService) {}

  getVehiculosApi() {
    this.TransporteService.getVehiculosApi().subscribe((vehiculos) => {
      this.vehiculosApi = vehiculos;
      for (let _vehiculo of this.getVehiculosApi) {
        let e = new Vehiculo(
          vehiculos.matricula,
          vehiculos.numPlazas,
          vehiculos.fechaInicio,
          vehiculos.pagoTarjeta,
          vehiculos.Trabajador
        );
        vehiculos.push(e);
      }
    });
  }

  ngOnInit() {
    this.getVehiculosApi();
  }
}
