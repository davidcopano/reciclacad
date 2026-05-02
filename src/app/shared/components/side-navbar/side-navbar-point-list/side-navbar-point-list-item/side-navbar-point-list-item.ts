import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'side-navbar-point-list-item',
  imports: [NgClass],
  templateUrl: './side-navbar-point-list-item.html',
})
export class SideNavbarPointListItem {
  readonly type = input.required<string>();
  readonly name = input.required<string>();
  readonly proximityMeters = input.required<number>();
  readonly selected = input<boolean>(false);

  readonly typesMap = computed(() => ({
    'bg-primary-container': this.type() === 'glass',
    'bg-secondary-container': this.type() === 'paper',
    'bg-tertiary-container': this.type() === 'containers',
  }));
}
