import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private produtctService: ProductService,
    private router: Router) { }

  ngOnInit() {

  }

  criarProduto(): void {
    this.produtctService.mostrarMensagem("Produto OK!");
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }

}
