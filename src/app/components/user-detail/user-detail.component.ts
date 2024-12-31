import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, FormsModule, ExperienceComponent, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, FormsModule, MatChipsModule, MatProgressSpinnerModule, MatTooltipModule, MatBadgeModule, SkillsComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.less'
})
export class UserDetailComponent implements OnInit {
getUserValue() {

return this.export ? JSON.stringify(this.user || "") : "";
}
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @ViewChild("editBGMenu") editBGMenu!: MatMenuTrigger;
  public username!: string | null;
  editmode = true;
  user: any;
  imagesURLs!: any[];
  newSkill!: string;
  newUrl!: string;
  newScore!: number;
export: any;

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService,
    private title: Title,  
    private meta: Meta) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    if (this.username) {
      this.userService.getUserByusername(this.username).subscribe(user => {
        this.user = user;
        this.title.setTitle(`${this.user.name}'s Profile`); 
        this.meta.updateTag({ name: 'title', content: `${this.user.name}'s Profile` });
        this.meta.updateTag({ name: 'description', content: `${this.user.presentation[2].value}` });

        this.saveData();
      });
    }
  }

    drop(event: CdkDragDrop<any[]> | any, skill: any) {
      moveItemInArray(skill.content, event.previousIndex, event.currentIndex);
    }
  

  saveData() {
    localStorage.setItem('user-data', JSON.stringify(this.user));
  }

  dismiss() {
    this.editMenu.closeMenu();
  }

  clearField() {

  }

  currentUrl() {
    return window.location.origin;
  }

  saveChanges(attribute: any) {
    this.saveData();
    this.dismiss();
  }

  captureEvent(event: any) {
    event.stopPropagation();
  }

  deleteSkill(element: any, skill: any) {
    skill.content = this.arrayRemove(skill.content, element);
    //this.save();
    //this.addMenu.closeMenu();
  }

  arrayRemove(arr: any[], value: any) {

    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  addSkill(skill: any) {
    if (skill.type === "score") {
      skill.content.push({ name: this.newSkill, score: this.newScore });
    } else {
      skill.content.push({ name: this.newSkill, logoUrl: this.newUrl });
    }
    this.newSkill = '';
    this.newUrl = '';
    //this.save();
    //this.addMenu.closeMenu();
  }
}
