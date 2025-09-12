import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generative-ai',
  templateUrl: './generative-ai.component.html',
  styleUrls: ['./generative-ai.component.scss']
})
export class GenerativeAiComponent implements OnInit {
  title = 'IA Generativa';
  subtitle = 'Inteligência artificial generativa para insights';

  ngOnInit(): void {
    // Component initialization
  }

  onCreateAiModel(): void {
    console.log('Create generative AI model clicked');
    // Implement create generative AI model logic
  }
}
