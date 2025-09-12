import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  title = 'Entidades';
  subtitle = 'Lista de entidades';

  ngOnInit(): void {
    // Component initialization
  }

  onCreateEntity(): void {
    console.log('Create entity clicked');
    // Implement create entity logic
  }
}
