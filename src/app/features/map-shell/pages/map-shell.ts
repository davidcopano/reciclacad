import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointCard } from '@shared/components/point-card/point-card';
import { TopNavbar } from '@shared/components/top-navbar/top-navbar';

@Component({
  selector: 'map-shell',
  imports: [RouterOutlet, TopNavbar, PointCard],
  templateUrl: './map-shell.html',
  styleUrl: './map-shell.css',
})
export default class MapShell {
  pointDetails = {
    name: 'Av. Ana de Viya, 12',
    type: 'glass',
    schedule: 'L-V 08-20H',
    proximityMeters: 250,
  };
}
