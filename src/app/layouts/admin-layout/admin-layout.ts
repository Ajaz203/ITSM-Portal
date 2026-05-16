import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import {Header} from "../../shared/components/header/header";
import { CommonModule } from '@angular/common';
import { Layout } from '../../core/services/layout';
@Component({
  selector: 'app-admin-layout',
    standalone: true,
  imports: [RouterOutlet, Sidebar, Header,CommonModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout {
   constructor(
    public layoutService: Layout
  ) {}

}

