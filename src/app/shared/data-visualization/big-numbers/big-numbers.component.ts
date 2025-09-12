import { Component, Input } from '@angular/core';

export interface BigNumberMetric {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  status?: 'normal' | 'warning' | 'error';
  icon?: string;
  description?: string;
}

@Component({
  selector: 'app-big-numbers',
  templateUrl: './big-numbers.component.html',
  styleUrls: ['./big-numbers.component.scss']
})
export class BigNumbersComponent {
  @Input() title = 'Big Numbers';
  @Input() metrics: BigNumberMetric[] = [];
  @Input() showTrends = true;
  @Input() showIcons = true;

  getStatusClass(status?: string): string {
    switch (status) {
      case 'warning':
        return 'status-warning';
      case 'error':
        return 'status-error';
      default:
        return 'status-normal';
    }
  }

  getTrendIcon(trend?: string): string {
    switch (trend) {
      case 'up':
        return 'trending_up';
      case 'down':
        return 'trending_down';
      default:
        return 'trending_flat';
    }
  }

  getTrendClass(trend?: string): string {
    switch (trend) {
      case 'up':
        return 'trend-up';
      case 'down':
        return 'trend-down';
      default:
        return 'trend-stable';
    }
  }

  // Generate sample metrics for demonstration
  generateSampleMetrics(): void {
    this.metrics = [
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
}
