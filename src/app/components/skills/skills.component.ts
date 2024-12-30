import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, FormsModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatBadgeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.less'
})
export class SkillsComponent implements OnInit {
  @ViewChild("addMenu") addMenu!: MatMenuTrigger;
  @Input() skill: any;
  @Input() editmode!: boolean;
  @Output() triggerSave: EventEmitter<any> = new EventEmitter<any>();


  newSkill!: string;
  newUrl!: string;
  newScore!: number;
  selectedData: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {

  }

  drop(event: CdkDragDrop<any[]> | any) {
    moveItemInArray(this.skill.content, event.previousIndex, event.currentIndex);
  }

  addSkill() {
    if (this.skill.type === "score") {
      this.skill.content.push({ name: this.newSkill, score: this.newScore });
    } else {
      this.skill.content.push({ name: this.newSkill, logoUrl: this.newUrl });
    }
    this.newSkill = '';
    this.newUrl = '';
    this.save();
    this.addMenu.closeMenu();
  }
  captureEvent(event: any) {
    event.stopPropagation();
  }

  triggerMenu(element: any) {
    console.log(element)
  }
  dismiss() {
    this.addMenu.closeMenu();
  }

  deleteSkill(element: any) {
    this.skill.content = this.arrayRemove(this.skill.content, element);
    this.save();
    this.addMenu.closeMenu();
  }

  arrayRemove(arr: any[], value: any) {

    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  save() {
    this.triggerSave.emit(true);
  }

}
