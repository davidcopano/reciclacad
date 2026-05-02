import { Component } from '@angular/core';

import { SideNavbarFilterChipItem } from './side-navbar-filter-chip-item/side-navbar-filter-chip-item';

@Component({
  selector: 'side-navbar-filter-chips',
  imports: [SideNavbarFilterChipItem],
  templateUrl: './side-navbar-filter-chips.html',
})
export class SideNavbarFilterChips {
  filterChips = [
    {
      type: 'vidrio',
      icon: 'recycling',
      name: 'Vidrio',
    },
    {
      type: 'papel',
      icon: 'description',
      name: 'Papel',
    },
    {
      type: 'envases',
      icon: 'inventory_2',
      name: 'Envases',
    },
    {
      type: 'pilas',
      icon: 'battery_charging_full',
      name: 'Pilas',
    },
    {
      type: 'ropa',
      icon: 'checkroom',
      name: 'Ropa',
    },
  ];
}
