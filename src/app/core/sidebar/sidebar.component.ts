import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  route: string;
  children?: NavigationItem[];
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentRoute = '';
  
  navigationSections: NavigationSection[] = [
    {
      title: 'Digital Twins',
      items: [
        {
          id: 'projects',
          label: 'Projetos',
          icon: 'folder',
          route: '/digital-twins/projects'
        },
        {
          id: 'entities',
          label: 'Entidades',
          icon: 'view_module',
          route: '/digital-twins/entities'
        },
        {
          id: 'metrics',
          label: 'Métricas',
          icon: 'show_chart',
          route: '/digital-twins/metrics'
        }
      ]
    },
    {
      title: 'Componentes',
      items: [
        {
          id: 'models',
          label: 'Modelos',
          icon: 'settings',
          route: '/components/models'
        }
      ]
    },
    {
      title: 'Alarmes',
      items: [
        {
          id: 'thresholds',
          label: 'Thresholds',
          icon: 'flag',
          route: '/alarms/thresholds'
        },
        {
          id: 'predictive-models',
          label: 'Modelos Preditivos',
          icon: 'psychology',
          route: '/alarms/predictive-models'
        },
        {
          id: 'generative-ai',
          label: 'IA Generativa',
          icon: 'auto_awesome',
          route: '/alarms/generative-ai'
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track current route
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentRoute = event.url;
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route || this.currentRoute.startsWith(route + '/');
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
