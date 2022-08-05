import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3002/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(produto: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, produto);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }

}
