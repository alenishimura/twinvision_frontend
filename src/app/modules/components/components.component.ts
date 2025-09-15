import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  currentTab = 'models';
  
  tabs = [
    { id: 'models', label: 'Modelos', route: '/components/models' }
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
        if (url.includes('/models')) {
          this.currentTab = 'models';
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
