import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavbarHeader } from '@shared/components/side-navbar/side-navbar-header/side-navbar-header';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, SideNavbarHeader],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Favorites {}
