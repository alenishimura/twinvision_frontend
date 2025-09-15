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
import { DigitalTwinsComponent } from './digital-twins.component';
import { ProjectsComponent } from './projects/projects.component';
import { EntitiesComponent } from './entities/entities.component';
import { MetricsComponent } from './metrics/metrics.component';

const routes = [
  {
    path: '',
    component: DigitalTwinsComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' as const },
      { path: 'projects', component: ProjectsComponent },
      { path: 'entities', component: EntitiesComponent },
      { path: 'metrics', component: MetricsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DigitalTwinsComponent,
    ProjectsComponent,
    EntitiesComponent,
    MetricsComponent
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
export class DigitalTwinsModule { }
