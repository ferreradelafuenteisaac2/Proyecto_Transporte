import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {}

  agregarProducto() {
    const PRODUCTO: Producto = {
      _nombre: this.productoForm.get('producto').value,
      _categoria: this.productoForm.get('categoria').value,
      _ubicacion: this.productoForm.get('ubicacion').value,
      _precio: this.productoForm.get('precio').value,
    };
    console.log(PRODUCTO);
    this.toastr.success('Producto añadido');
    this.router.navigate(['/']);
  }
}
