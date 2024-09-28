import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, CommonModule, RouterLink],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.scss'
})
export class ItemDescriptionComponent {

}
