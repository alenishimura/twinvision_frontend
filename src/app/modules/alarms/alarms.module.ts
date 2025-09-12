import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Angular Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';

// Shared modules
import { DataVisualizationModule } from '../../shared/data-visualization/data-visualization.module';

// Components
import { AlarmsComponent } from './alarms.component';
import { ThresholdsComponent } from './thresholds/thresholds.component';
import { PredictiveModelsComponent } from './predictive-models/predictive-models.component';
import { GenerativeAiComponent } from './generative-ai/generative-ai.component';

const routes = [
  {
    path: '',
    component: AlarmsComponent,
    children: [
      { path: '', redirectTo: 'thresholds', pathMatch: 'full' },
      { path: 'thresholds', component: ThresholdsComponent },
      { path: 'predictive-models', component: PredictiveModelsComponent },
      { path: 'generative-ai', component: GenerativeAiComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AlarmsComponent,
    ThresholdsComponent,
    PredictiveModelsComponent,
    GenerativeAiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    
    // Angular Material
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatExpansionModule,
    
    // Shared modules
    DataVisualizationModule
  ]
})
export class AlarmsModule { }
