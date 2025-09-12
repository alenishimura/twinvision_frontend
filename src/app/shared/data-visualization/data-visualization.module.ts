import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TimeSeriesChartComponent } from './time-series-chart/time-series-chart.component';
import { BigNumbersComponent } from './big-numbers/big-numbers.component';
import { AdvancedChartComponent } from './advanced-chart/advanced-chart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MetricCardComponent } from './metric-card/metric-card.component';

@NgModule({
  declarations: [
    TimeSeriesChartComponent,
    BigNumbersComponent,
    AdvancedChartComponent,
    DataTableComponent,
    MetricCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    
    // Angular Material
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TimeSeriesChartComponent,
    BigNumbersComponent,
    AdvancedChartComponent,
    DataTableComponent,
    MetricCardComponent
  ]
})
export class DataVisualizationModule { }
