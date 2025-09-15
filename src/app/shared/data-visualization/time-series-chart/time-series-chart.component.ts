import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

export interface TimeSeriesDataPoint {
  timestamp: Date;
  value: number;
  label?: string;
}

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrls: ['./time-series-chart.component.scss']
})
export class TimeSeriesChartComponent implements OnInit, OnChanges {
  @Input() title = 'Time Series Chart';
  @Input() data: TimeSeriesDataPoint[] = [];
  @Input() variableName = 'Variable';
  @Input() height = 300;
  @Input() showLegend = true;
  @Input() showGrid = true;
  @Input() color = '#9c27b0';

  public chartOptions: ChartConfiguration['options'] = {};
  public chartData: ChartData<'line'> = { datasets: [] };
  public chartType: ChartType = 'line';

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['color'] || changes['variableName']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
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
          text: `Séries Temporais (Variável "${this.variableName}")`,
          color: '#ffffff',
          font: {
            size: 16,
            weight: 500,
            family: 'Inter, sans-serif'
          }
        }
      },
      scales: {
        x: {
          display: true,
          grid: {
            display: this.showGrid,
            color: '#404040'
          },
          ticks: {
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            },
            maxTicksLimit: 8
          },
          title: {
            display: true,
            text: 'Tempo',
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            }
          }
        },
        y: {
          display: true,
          grid: {
            display: this.showGrid,
            color: '#404040'
          },
          ticks: {
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            }
          },
          title: {
            display: true,
            text: 'Valor',
            color: '#b3b3b3',
            font: {
              family: 'Inter, sans-serif'
            }
          },
          min: 0,
          max: 1
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      elements: {
        point: {
          radius: 0,
          hoverRadius: 6
        },
        line: {
          tension: 0.4
        }
      }
    };

    this.chartData = {
      labels: this.data.map(point => this.formatTime(point.timestamp)),
      datasets: [
        {
          data: this.data.map(point => point.value),
          label: this.variableName,
          borderColor: this.color,
          backgroundColor: this.color + '20',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: this.color,
          pointBorderColor: this.color,
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: this.color,
          pointHoverBorderWidth: 2
        }
      ]
    };
  }

  private formatTime(timestamp: Date): string {
    return timestamp.toLocaleTimeString('pt-BR', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  // Generate sample data for demonstration
  generateSampleData(): void {
    const now = new Date();
    const sampleData: TimeSeriesDataPoint[] = [];
    
    for (let i = 0; i < 50; i++) {
      const timestamp = new Date(now.getTime() - (49 - i) * 1000); // 1 second intervals
      const value = Math.sin(i * 0.3) * 0.5 + 0.5; // Bell curve pattern
      sampleData.push({ timestamp, value });
    }
    
    this.data = sampleData;
    this.updateChart();
  }
}
