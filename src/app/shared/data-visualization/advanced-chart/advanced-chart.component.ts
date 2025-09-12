import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

export interface AdvancedChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

@Component({
  selector: 'app-advanced-chart',
  templateUrl: './advanced-chart.component.html',
  styleUrls: ['./advanced-chart.component.scss']
})
export class AdvancedChartComponent implements OnInit {
  @Input() title = 'Advanced Chart';
  @Input() type: 'line' | 'bar' | 'doughnut' | 'radar' = 'line';
  @Input() data: AdvancedChartData = { labels: [], datasets: [] };
  @Input() height = 300;
  @Input() showLegend = true;

  public chartOptions: ChartConfiguration['options'] = {};
  public chartData: ChartData = { datasets: [] };
  public chartType: ChartType = 'line';

  ngOnInit(): void {
    this.updateChart();
  }

  private updateChart(): void {
    this.chartType = this.type as ChartType;
    
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: this.showLegend,
          labels: {
            color: '#ffffff',
            font: {
              family: 'Inter, sans-serif'
            }
          }
        },
        title: {
          display: true,
          text: this.title,
          color: '#ffffff',
          font: {
            size: 16,
            weight: '500',
            family: 'Inter, sans-serif'
          }
        }
      },
      scales: this.type !== 'doughnut' ? {
        x: {
          display: true,
          grid: {
            display: true,
            color: '#404040'
          },
          ticks: {
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            }
          }
        },
        y: {
          display: true,
          grid: {
            display: true,
            color: '#404040'
          },
          ticks: {
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            }
          }
        }
      } : undefined
    };

    this.chartData = this.data;
  }

  // Generate sample data for demonstration
  generateSampleData(): void {
    const colors = ['#2196f3', '#9c27b0', '#4caf50', '#ff9800', '#f44336'];
    
    this.data = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Vendas',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: colors[0] + '20',
          borderColor: colors[0],
          borderWidth: 2
        },
        {
          label: 'Produção',
          data: [2, 3, 20, 5, 1, 4],
          backgroundColor: colors[1] + '20',
          borderColor: colors[1],
          borderWidth: 2
        }
      ]
    };
    
    this.updateChart();
  }
}
