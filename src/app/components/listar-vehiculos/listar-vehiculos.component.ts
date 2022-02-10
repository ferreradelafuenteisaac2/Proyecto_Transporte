import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/Vehiculos/Vehiculo';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
})
export class ListarVehiculosComponent implements OnInit {
  listVehiculos: Vehiculo[] = [];
  constructor(private TransporteService: TransporteService) {}
  /*
  ObtenerVehiculos() {
    this.TransporteService.getVehiculosApi().subscribe(
      (data) => {
        console.log(data);
        this.listVehiculos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }*/

  ObtenerVehiculos() {
    this.TransporteService.getTrenes().subscribe((data) => {
      this.listVehiculos = data;
    });
  }

  ngOnInit(): void {
    this.ObtenerVehiculos();
  }
}
