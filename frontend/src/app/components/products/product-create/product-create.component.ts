import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Product = {
    nome: '',
    preco: null
  }

  constructor(private produtctService: ProductService,
    private router: Router) { }

  ngOnInit() {

  }

  criarProduto(): void {
    this.produtctService.create(this.produto).subscribe(() => {
      this.cancelar()
    })
    this.produtctService.mostrarMensagem('Produto cadastrado!')
  }

  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
