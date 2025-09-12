import { Component, OnInit } from '@angular/core';
import { TableColumn, TableRow } from '../../../shared/data-visualization/data-table/data-table.component';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  title = 'Modelos';
  subtitle = 'Lista de modelos';
  
  columns: TableColumn[] = [
    { key: 'name', label: 'Nome', sortable: true, type: 'text' },
    { key: 'description', label: 'Descrição', sortable: false, type: 'text' }
  ];
  
  data: TableRow[] = [
    {
      name: 'Modelo X',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Modelo Y',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Modelo Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Modelo W',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  onCreateModel(): void {
    console.log('Create model clicked');
    // Implement create model logic
  }
}
