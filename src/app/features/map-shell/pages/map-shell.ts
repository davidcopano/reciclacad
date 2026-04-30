import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbar } from '@shared/components/top-navbar/top-navbar';

@Component({
  selector: 'map-shell',
  imports: [RouterOutlet, TopNavbar],
  templateUrl: './map-shell.html',
  styleUrl: './map-shell.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class MapShell {}
