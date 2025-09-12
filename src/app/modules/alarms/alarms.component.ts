import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent implements OnInit {
  currentTab = 'thresholds';
  
  tabs = [
    { id: 'thresholds', label: 'Thresholds', route: '/alarms/thresholds' },
    { id: 'predictive-models', label: 'Modelos Preditivos', route: '/alarms/predictive-models' },
    { id: 'generative-ai', label: 'IA Generativa', route: '/alarms/generative-ai' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track current route to set active tab
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.url;
        if (url.includes('/thresholds')) {
          this.currentTab = 'thresholds';
        } else if (url.includes('/predictive-models')) {
          this.currentTab = 'predictive-models';
        } else if (url.includes('/generative-ai')) {
          this.currentTab = 'generative-ai';
        }
      });
  }

  onTabChange(tabId: string): void {
    this.currentTab = tabId;
    const tab = this.tabs.find(t => t.id === tabId);
    if (tab) {
      this.router.navigate([tab.route]);
    }
  }
}
