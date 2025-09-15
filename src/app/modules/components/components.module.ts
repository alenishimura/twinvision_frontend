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

// Shared modules
import { DataVisualizationModule } from '../../shared/data-visualization/data-visualization.module';

// Components
import { ComponentsComponent } from './components.component';
import { ModelsComponent } from './models/models.component';

const routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'models', pathMatch: 'full' as const },
      { path: 'models', component: ModelsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ComponentsComponent,
    ModelsComponent
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
    
    // Shared modules
    DataVisualizationModule
  ]
})
export class ComponentsModule { }
