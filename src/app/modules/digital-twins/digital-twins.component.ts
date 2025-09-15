import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-digital-twins',
  templateUrl: './digital-twins.component.html',
  styleUrls: ['./digital-twins.component.scss']
})
export class DigitalTwinsComponent implements OnInit {
  currentTab = 'projects';
  
  tabs = [
    { id: 'projects', label: 'Projetos', route: '/digital-twins/projects' },
    { id: 'entities', label: 'Entidades', route: '/digital-twins/entities' },
    { id: 'metrics', label: 'Métricas', route: '/digital-twins/metrics' }
  ];

  get selectedIndex(): number {
    return this.tabs.findIndex(tab => tab.id === this.currentTab);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track current route to set active tab
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = event.url;
        if (url.includes('/projects')) {
          this.currentTab = 'projects';
        } else if (url.includes('/entities')) {
          this.currentTab = 'entities';
        } else if (url.includes('/metrics')) {
          this.currentTab = 'metrics';
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
