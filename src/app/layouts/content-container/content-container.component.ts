import { Component } from '@angular/core';
import { LAYOUT_HORIZONTAL, LAYOUT_VERTICAL } from './content.model';
import { EventService } from '../../shared/services/event.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss',
})
export class ContentContainerComponent {
  layoutType!: string;
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.layoutType = LAYOUT_VERTICAL;

    // listen to event and change the layout, theme, etc
    this.eventService.subscribe('changeLayout', (layout) => {
      this.layoutType = layout;
    });
  }

  verticalLayout() {
    return this.layoutType === LAYOUT_VERTICAL;
  }

  horizontalLayout() {
    return this.layoutType === LAYOUT_HORIZONTAL;
  }
}
