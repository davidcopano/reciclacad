import { Component, input } from '@angular/core';

import { SideNavbarPointListItem } from './side-navbar-point-list-item/side-navbar-point-list-item';

@Component({
  selector: 'side-navbar-point-list',
  imports: [SideNavbarPointListItem],
  templateUrl: './side-navbar-point-list.html',
})
export class SideNavbarPointList {
  readonly title = input.required<string>();
  readonly items = [
    {
      type: 'glass',
      name: 'Av. Ana de Viya, 12',
      proximityMeters: 250,
      selected: true,
    },
    {
      type: 'paper',
      name: 'Plaza de las Flores, 3',
      proximityMeters: 400,
      selected: false,
    },
    {
      type: 'containers',
      name: 'Calle Columela, 18',
      proximityMeters: 600,
      selected: false,
    },
    {
      type: 'glass',
      name: 'Paseo Marítimo, 45',
      proximityMeters: 850,
      selected: false,
    },
  ];
}
