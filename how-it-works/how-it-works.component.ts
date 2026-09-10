import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { HOW_IT_WORKS_STEPS } from '../../data/how-it-works.data';

@Component({
  selector: 'app-how-it-works',
  imports: [SectionTitleComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {
  protected readonly steps = HOW_IT_WORKS_STEPS;
}
