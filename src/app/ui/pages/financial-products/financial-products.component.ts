import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinancialProductCardComponent } from '../../components/financial-product-card/financial-product-card.component';
import { FinancialProduct } from '../../../domain/financial-product/models/financial-product.model';
import { GetFinancialProductsUseCase } from '../../../domain/financial-product/usecases/get-financial-products.usecase';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateFacadeService } from '../../../state/services/state-facade.service';

@Component({
  selector: 'app-financial-products',
  standalone: true,
  imports: [FinancialProductCardComponent, FormsModule, CommonModule],
  providers: [GetFinancialProductsUseCase],
  templateUrl: './financial-products.component.html',
  styleUrl: './financial-products.component.scss',
})
export class FinancialProductsComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly stateService = inject(StateFacadeService);
  screenWidth: number = window.innerWidth;
  recordsPerPage: number = 5;
  financialProducts$ = this.stateService.financialProducts$;

  ngOnInit(): void {
    this.stateService.getAllFinancialProducts();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateScreenWidth();
  }

  updateScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

  onRecordsPerPageChange(event: any): void {
    const selectElement = event.target as HTMLSelectElement;
    this.recordsPerPage = Number(selectElement.value);
  }

  addFinancialProduct(): void {
    this.router.navigateByUrl('financial-product-form');
  }

  editFinancialProduct(id: string): void {
    this.router.navigate(['financial-product-form'], { queryParams: { id } });
  }
}
