import { Component } from '@angular/core';
import { EventService } from '../../../shared/services/event.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(private event: EventService) {}

  changeSidebar(sidebar: string) {
    document.documentElement.setAttribute('data-layout-style', sidebar);
  }

  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
  changeLayout(val: string) {
    this.event.broadcast('changeLayout', val);
    document.documentElement.setAttribute('data-layout', val);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

  closecanvas() {
    document.documentElement
      .querySelector('.customcanvas')
      ?.classList.remove('show');
  }

  opensettings() {
    document.documentElement
      .querySelector('.customcanvas')
      ?.classList.add('show');
    document.documentElement
      .querySelector('.offcanvasbody')
      ?.classList.add('show');
  }
}
