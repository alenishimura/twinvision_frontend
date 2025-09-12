import { Component, OnInit } from '@angular/core';
import { TableColumn, TableRow } from '../../../shared/data-visualization/data-table/data-table.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  title = 'Projetos';
  subtitle = 'Lista de projetos';
  
  columns: TableColumn[] = [
    { key: 'name', label: 'Nome', sortable: true, type: 'text' },
    { key: 'description', label: 'Descrição', sortable: false, type: 'text' },
    { key: 'status', label: 'Status', sortable: true, type: 'status' }
  ];
  
  data: TableRow[] = [
    {
      name: 'Linha de produção X',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Ativo'
    },
    {
      name: 'Linha de produção Y',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Arquivado'
    },
    {
      name: 'Linha de produção Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Arquivado'
    },
    {
      name: 'Linha de produção W',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Ativo'
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  onCreateProject(): void {
    console.log('Create project clicked');
    // Implement create project logic
  }
}
