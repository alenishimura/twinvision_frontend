import { Component, OnInit } from '@angular/core';
import { TableColumn, TableRow } from '../../../shared/data-visualization/data-table/data-table.component';

@Component({
  selector: 'app-thresholds',
  templateUrl: './thresholds.component.html',
  styleUrls: ['./thresholds.component.scss']
})
export class ThresholdsComponent implements OnInit {
  title = 'Threshold';
  subtitle = 'Lista de Threshold';
  
  columns: TableColumn[] = [
    { key: 'name', label: 'Nome', sortable: true, type: 'text' },
    { key: 'description', label: 'Descrição', sortable: false, type: 'text' }
  ];
  
  data: TableRow[] = [
    {
      name: 'Threshold 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Threshold 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Threshold 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Threshold 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  onCreateThreshold(): void {
    console.log('Create threshold clicked');
    // Implement create threshold logic
  }
}
