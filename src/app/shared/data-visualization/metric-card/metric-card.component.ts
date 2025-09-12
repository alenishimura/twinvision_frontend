import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.scss']
})
export class MetricCardComponent {
  @Input() title = '';
  @Input() value: string | number = '';
  @Input() unit = '';
  @Input() icon = '';
  @Input() status: 'normal' | 'warning' | 'error' | 'success' = 'normal';
  @Input() trend?: 'up' | 'down' | 'stable';
  @Input() trendValue?: string;
  @Input() description = '';
  @Input() clickable = false;

  getStatusClass(): string {
    switch (this.status) {
      case 'warning':
        return 'status-warning';
      case 'error':
        return 'status-error';
      case 'success':
        return 'status-success';
      default:
        return 'status-normal';
    }
  }

  getTrendIcon(): string {
    switch (this.trend) {
      case 'up':
        return 'trending_up';
      case 'down':
        return 'trending_down';
      default:
        return 'trending_flat';
    }
  }

  getTrendClass(): string {
    switch (this.trend) {
      case 'up':
        return 'trend-up';
      case 'down':
        return 'trend-down';
      default:
        return 'trend-stable';
    }
  }

  onCardClick(): void {
    if (this.clickable) {
      // Emit event or handle click
      console.log('Card clicked:', this.title);
    }
  }
}
