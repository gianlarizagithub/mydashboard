import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrl: './vertical-layout.component.scss',
})
export class VerticalLayoutComponent {
  ngOnInit(): void {
    document.documentElement.setAttribute('data-layout', 'vertical');
    document.documentElement.setAttribute('data-sidebar', 'dark');
    document.documentElement.setAttribute('data-theme', 'default');
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.documentElement.setAttribute('topbar-mode', 'light');
    document.documentElement.setAttribute('data-layout-width', 'fluid');
    document.documentElement.setAttribute('data-sidebar-image', 'none');
    document.documentElement.setAttribute('data-layout-position', 'fixed');
    document.documentElement.setAttribute('data-layout-style', 'default');
    document.documentElement.setAttribute('data-preloader', 'disable');

    window.addEventListener('resize', function () {
      if (document.documentElement.clientWidth < 767) {
        document.documentElement.setAttribute('data-sidebar-size', '');
        document.body.classList.add('vertical-sidebar-enable');

        document.querySelector('.hamburger-icon')?.classList.add('open');
      } else if (document.documentElement.clientWidth <= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
        document.querySelector('.hamburger-icon')?.classList.add('open');
        document.body.classList.remove('vertical-sidebar-enable');
      } else if (document.documentElement.clientWidth >= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        document.querySelector('.hamburger-icon')?.classList.remove('open');
        document.body.classList.remove('vertical-sidebar-enable');
      }
    });
  }

  onToggleMobileMenu() {
    console.log('clicked');
    const currentSIdebarSize =
      document.documentElement.getAttribute('data-sidebar-size');
    if (document.documentElement.clientWidth >= 767) {
      if (currentSIdebarSize == null) {
        document.documentElement.getAttribute('data-sidebar-size') == null ||
        document.documentElement.getAttribute('data-sidebar-size') == 'lg'
          ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
          : document.documentElement.setAttribute('data-sidebar-size', 'lg');
      } else if (currentSIdebarSize == 'md') {
        document.documentElement.getAttribute('data-sidebar-size') == 'md'
          ? document.documentElement.setAttribute('data-sidebar-size', 'sm')
          : document.documentElement.setAttribute('data-sidebar-size', 'md');
      } else {
        document.documentElement.getAttribute('data-sidebar-size') == 'sm'
          ? document.documentElement.setAttribute('data-sidebar-size', 'lg')
          : document.documentElement.setAttribute('data-sidebar-size', 'sm');
      }
    }

    if (document.documentElement.clientWidth <= 767) {
      document.body.classList.add('vertical-sidebar-enable');
    }
  }
}
