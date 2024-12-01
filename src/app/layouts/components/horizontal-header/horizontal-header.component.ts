import { Component } from '@angular/core';
import { MenuItem } from '../sidebar/menu.model';
import { MENU } from '../sidebar/menu';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrl: './horizontal-header.component.scss',
})
export class HorizontalHeaderComponent {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = MENU;
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * remove active and mm-active class
   */
  _removeAllClass(className: any) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  // toggleItem(event: any) {
  //   let isCurrentMenuId = event.target.closest('a.nav-link');
  //   let isMenu = isCurrentMenuId.nextElementSibling as any;
  //   let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
  //   dropDowns.forEach((node: any) => {
  //     node.classList.remove('show');
  //   });
  //   isMenu ? isMenu.classList.add('show') : null;

  //   const ul = document.getElementById('navbar-nav');
  //   if (ul) {
  //     const items = Array.from(ul.getElementsByTagName('a'));
  //     let activeItems = items.filter((x: any) => {
  //       x.classList.contains('active');
  //     });

  //     activeItems.forEach((x: any) => {
  //       x.setAttribute('aria-expanded', 'false');
  //       x.classList.remove('active');
  //     });
  //   }

  //   if (isCurrentMenuId) {
  //     this.activateParent(isCurrentMenuId);
  //   }
  // }

  toggleItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;

    let dropdowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
    dropdowns.forEach((item: any) => {
      item.classList.remove('show');
    });

    isMenu ? isMenu.classList.add('show') : null;

    // console.log(isMenu);
    // console.log(dropdowns);
    // console.log(isCurrentMenuId);

    const ul = document.getElementById('navbar-nav');

    if (ul) {
      const items = Array.from(ul.getElementsByTagName('a'));

      let activeitems = items.filter((x: any) => {
        x.classList.contains('active');
      });

      activeitems.forEach((x: any) => {
        x.setAttribute('aria-expanded', 'false');
        x.classList.remove('active');
      });
    }

    if (isCurrentMenuId) {
      this.activateParent(isCurrentMenuId);
    }
  }

  activateParent(item: any) {
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
        parentCollapseDiv.parentElement
          .closest('.collapse')
          .previousElementSibling.setAttribute('aria-expanded', 'true');
      }
      return false;
    }
    return false;
  }

  toggleSubItem(event: any) {
    if (event.target && event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.toggle('show');
    }
  }
  updateActive(event: any) {
    const ul = document.getElementById('navbar-nav');

    if (ul) {
      const items = Array.from(ul.querySelectorAll('a.nav-link'));
      this.removeActivation(items);
    }
    this.activateParent(event.target);
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
}
