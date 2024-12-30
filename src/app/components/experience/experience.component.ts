import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.less'
})
export class ExperienceComponent implements OnInit {
  splittedExperience: any;
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @Input() experience: any;
  @Input() editmode!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.splittedExperience = this.experience[4].value.split('.')
  }

  captureEvent(event: any) {
    event.stopPropagation();
  }

  dismiss() {
    this.editMenu.closeMenu();
  }

  saveChanges(att: any) {
    this.dismiss()
  }

}
