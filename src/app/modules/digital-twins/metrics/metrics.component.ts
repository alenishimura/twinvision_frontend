import { Component, OnInit } from '@angular/core';
import { TimeSeriesDataPoint, BigNumberMetric } from '../../../shared/data-visualization';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  title = 'Métricas';
  subtitle = 'Análise de dados em tempo real';

  // Time series data
  timeSeriesData: TimeSeriesDataPoint[] = [];
  variableName = 'Avançado';

  // Big numbers data
  bigNumbersData: BigNumberMetric[] = [];

  // Advanced charts data
  performanceData = {
    labels: ['CPU', 'Memória', 'Rede', 'Disco', 'GPU'],
    datasets: [{
      label: 'Utilização (%)',
      data: [65, 78, 45, 32, 89],
      backgroundColor: [
        'rgba(33, 150, 243, 0.8)',
        'rgba(156, 39, 176, 0.8)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(255, 152, 0, 0.8)',
        'rgba(244, 67, 54, 0.8)'
      ],
      borderColor: [
        'rgba(33, 150, 243, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(255, 152, 0, 1)',
        'rgba(244, 67, 54, 1)'
      ],
      borderWidth: 2
    }]
  };

  efficiencyData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Eficiência (%)',
        data: [85, 92, 78, 95, 88, 91],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'Meta (%)',
        data: [90, 90, 90, 90, 90, 90],
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        borderColor: 'rgba(156, 39, 176, 1)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  ngOnInit(): void {
    this.generateTimeSeriesData();
    this.generateBigNumbersData();
  }

  private generateTimeSeriesData(): void {
    const now = new Date();
    const data: TimeSeriesDataPoint[] = [];
    
    // Generate bell curve pattern similar to the image
    for (let i = 0; i < 50; i++) {
      const timestamp = new Date(now.getTime() - (49 - i) * 1000); // 1 second intervals
      const value = Math.sin(i * 0.3) * 0.5 + 0.5; // Bell curve pattern
      data.push({ timestamp, value });
    }
    
    this.timeSeriesData = data;
  }

  private generateBigNumbersData(): void {
    this.bigNumbersData = [
      {
        title: 'Acionamentos',
        value: 100,
        unit: '',
        trend: 'up',
        trendValue: '+5%',
        status: 'normal',
        icon: 'flash_on',
        description: 'Total de acionamentos do sistema'
      },
      {
        title: 'Δt Avanço*',
        value: '1,5',
        unit: 's',
        trend: 'stable',
        trendValue: '0%',
        status: 'normal',
        icon: 'timer',
        description: 'Tempo médio de avanço'
      },
      {
        title: 'Δt Recuo*',
        value: '3',
        unit: 's',
        trend: 'down',
        trendValue: '-2%',
        status: 'warning',
        icon: 'timer_off',
        description: 'Tempo médio de recuo'
      }
    ];
  }

  onRefreshData(): void {
    this.generateTimeSeriesData();
    this.generateBigNumbersData();
    
    // Update performance data with random values
    this.performanceData.datasets[0].data = this.performanceData.datasets[0].data.map(() => 
      Math.floor(Math.random() * 100)
    );
    
    // Update efficiency data
    this.efficiencyData.datasets[0].data = this.efficiencyData.datasets[0].data.map(() => 
      Math.floor(Math.random() * 20) + 80
    );
  }
}
