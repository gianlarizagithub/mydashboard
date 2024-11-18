import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu.model';
import { MENU } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() mobileMenuButtonClicked = new EventEmitter();
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = MENU;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initActiveMenu();
    }, 0);
  }

  initActiveMenu() {
    const pathName = window.location.pathname;
    const ul = document.getElementById('navbar-nav');
    if (ul) {
      const items = Array.from(ul.querySelectorAll('a.nav-link'));
      let activeItems = items.filter((x: any) =>
        x.classList.contains('active')
      );
      this.removeActivation(activeItems);

      let matchingMenuItem = items.find((x: any) => {
        return x.pathname === pathName;
      });

      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
  toggleMobileMenu(event: any) {
    document.querySelector('.mennu-button')?.classList.toggle('open');
    this.mobileMenuButtonClicked.emit();
  }
  tog() {
    document.body.classList.remove('vertical-sidebar-enable');
  }

  toggleItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    if (isMenu.classList.contains('show')) {
      isMenu.classList.remove('show');
      isCurrentMenuId.setAttribute('aria-expanded', 'false');
    } else {
      let dropDowns = Array.from(
        document.querySelectorAll('#navbar-nav .show')
      );
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });
      isMenu ? isMenu.classList.add('show') : null;
      const ul = document.getElementById('navbar-nav');

      const pathName = window.location.pathname;
      if (ul) {
        const items = Array.from(ul.querySelectorAll('a.nav-link'));
        let activeItems = items.filter((x: any) =>
          x.classList.contains('active')
        );
        this.removeActivation(activeItems);

        let matchingMenuItem = items.find((x: any) => {
          return x.pathname === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        }
      }

      isCurrentMenuId.setAttribute('aria-expanded', 'true');
      if (isCurrentMenuId) {
        this.activateParentDropdown(isCurrentMenuId);
      }
    }
  }

  removeActivation(items: any) {
    items.forEach((item: any) => {
      if (item.classList.contains('menu-link')) {
        if (!item.classList.contains('active')) {
          item.setAttribute('aria-expanded', false);
        }
        item.nextElementSibling
          ? item.nextElementSibling.classList.remove('show')
          : null;
      }
      if (item.classList.contains('nav-link')) {
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove('show');
        }
        item.setAttribute('aria-expanded', false);
      }
      item.classList.remove('active');
    });
  }

  activateParentDropdown(item: any) {
    item.classList.add('active');
    let parentCollapseDiv = item.closest('.collapse.menu-dropdown');
    if (parentCollapseDiv) {
      // to set aria expand true remaining
      parentCollapseDiv.classList.add('show');
      parentCollapseDiv.parentElement.children[0].classList.add('active');
      parentCollapseDiv.parentElement.children[0].setAttribute(
        'aria-expanded',
        'true'
      );
      if (parentCollapseDiv.parentElement.closest('.collapse.menu-dropdown')) {
        parentCollapseDiv.parentElement
          .closest('.collapse')
          .classList.add('show');
        if (
          parentCollapseDiv.parentElement.closest('.collapse')
            .previousElementSibling
        )
          parentCollapseDiv.parentElement
            .closest('.collapse')
            .previousElementSibling.classList.add('active');
        if (
          parentCollapseDiv.parentElement
            .closest('.collapse')
            .previousElementSibling.closest('.collapse')
        ) {
          parentCollapseDiv.parentElement
            .closest('.collapse')
            .previousElementSibling.closest('.collapse')
            .classList.add('show');
          parentCollapseDiv.parentElement
            .closest('.collapse')
            .previousElementSibling.closest('.collapse')
            .previousElementSibling.classList.add('active');
        }
      }
      return false;
    }
    return false;
  }

  toggleSubItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;

    if (isMenu.classList.contains('show')) {
      isMenu.classList.remove('show');
      isCurrentMenuId.setAttribute('aria-expanded', 'false');
    } else {
      let dropDowns = Array.from(document.querySelectorAll('.sub-menu'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });
      let subDropDowns = Array.from(
        document.querySelectorAll('.menu-dropdown .nav-link')
      );
      subDropDowns.forEach((submenu: any) => {
        submenu.setAttribute('aria-expanded', 'false');
      });

      if (event.target && event.target.nextElementSibling) {
        isCurrentMenuId.setAttribute('aria-expanded', 'true');
        event.target.nextElementSibling.classList.toggle('show');
      }
    }
  }

  updateActive(event: any) {
    const ul = document.getElementById('navbar-nav');
    if (ul) {
      const items = Array.from(ul.querySelectorAll('a.nav-link'));
      this.removeActivation(items);
    }

    this.activateParentDropdown(event.target);
  }
  toggleParentItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
    dropDowns.forEach((node: any) => {
      node.classList.remove('show');
    });
    const ul = document.getElementById('navbar-nav');
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName('a'));
      let activeIconItems = iconItems.filter((x: any) =>
        x.classList.contains('active')
      );
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', 'false');
        item.classList.remove('active');
      });
    }
    isCurrentMenuId.setAttribute('aria-expanded', 'true');
    if (isCurrentMenuId) {
      this.activateParentDropdown(isCurrentMenuId);
    }
  }

  toggleExtraSubItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    if (isMenu.classList.contains('show')) {
      isMenu.classList.remove('show');
      isCurrentMenuId.setAttribute('aria-expanded', 'false');
    } else {
      let dropDowns = Array.from(document.querySelectorAll('.extra-sub-menu'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });

      let subDropDowns = Array.from(
        document.querySelectorAll('.menu-dropdown .nav-link')
      );
      subDropDowns.forEach((submenu: any) => {
        submenu.setAttribute('aria-expanded', 'false');
      });

      if (event.target && event.target.nextElementSibling) {
        isCurrentMenuId.setAttribute('aria-expanded', 'true');
        event.target.nextElementSibling.classList.toggle('show');
      }
    }
  }
}
