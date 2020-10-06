import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { ExperienceComponent } from './experience/experience.component';
import { GithubComponent } from './github/github.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    GithubComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
