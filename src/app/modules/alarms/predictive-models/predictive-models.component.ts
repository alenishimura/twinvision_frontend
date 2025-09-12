import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predictive-models',
  templateUrl: './predictive-models.component.html',
  styleUrls: ['./predictive-models.component.scss']
})
export class PredictiveModelsComponent implements OnInit {
  title = 'Modelos Preditivos';
  subtitle = 'Análise preditiva e machine learning';

  ngOnInit(): void {
    // Component initialization
  }

  onCreateModel(): void {
    console.log('Create predictive model clicked');
    // Implement create predictive model logic
  }
}
