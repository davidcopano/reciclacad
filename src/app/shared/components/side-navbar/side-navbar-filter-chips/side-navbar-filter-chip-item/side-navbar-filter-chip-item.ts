import { Component, input } from '@angular/core';

@Component({
  selector: 'side-navbar-filter-chip-item',
  imports: [],
  templateUrl: './side-navbar-filter-chip-item.html',
})
export class SideNavbarFilterChipItem {
  readonly type = input.required<string>();
  readonly icon = input.required<string>();
  readonly name = input.required<string>();
}
