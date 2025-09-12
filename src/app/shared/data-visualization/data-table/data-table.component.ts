import { Component, Input } from '@angular/core';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  type?: 'text' | 'number' | 'date' | 'status' | 'action';
}

export interface TableRow {
  [key: string]: any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() title = 'Data Table';
  @Input() columns: TableColumn[] = [];
  @Input() data: TableRow[] = [];
  @Input() showActions = true;
  @Input() showSearch = true;
  @Input() showPagination = true;
  @Input() pageSize = 10;

  searchTerm = '';
  currentPage = 1;
  sortColumn = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  get filteredData(): TableRow[] {
    let filtered = this.data;
    
    if (this.searchTerm) {
      filtered = filtered.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    }
    
    if (this.sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[this.sortColumn];
        const bVal = b[this.sortColumn];
        
        if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    
    return filtered;
  }

  get paginatedData(): TableRow[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredData.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  onSort(column: TableColumn): void {
    if (!column.sortable) return;
    
    if (this.sortColumn === column.key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.key;
      this.sortDirection = 'asc';
    }
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getStatusClass(status: string): string {
    switch (status?.toLowerCase()) {
      case 'ativo':
      case 'active':
        return 'status-active';
      case 'arquivado':
      case 'archived':
        return 'status-archived';
      case 'warning':
        return 'status-warning';
      case 'error':
        return 'status-error';
      default:
        return 'status-normal';
    }
  }

  // Generate sample data for demonstration
  generateSampleData(): void {
    this.columns = [
      { key: 'name', label: 'Nome', sortable: true, type: 'text' },
      { key: 'description', label: 'Descrição', sortable: false, type: 'text' },
      { key: 'status', label: 'Status', sortable: true, type: 'status' }
    ];

    this.data = [
      {
        name: 'Linha de produção X',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        status: 'Ativo'
      },
      {
        name: 'Linha de produção Y',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        status: 'Arquivado'
      },
      {
        name: 'Linha de produção Z',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        status: 'Ativo'
      },
      {
        name: 'Linha de produção W',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        status: 'Arquivado'
      }
    ];
  }
}
