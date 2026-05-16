import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Layout {
    sidebarCollapsed = signal(false);

  toggleSidebar() {
    this.sidebarCollapsed.update(value => !value);
  }

}
