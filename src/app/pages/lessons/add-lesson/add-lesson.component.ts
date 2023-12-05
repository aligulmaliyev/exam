import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ILesson } from '../../../models/lesson';

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.scss',
  imports: [MatDialogModule, MatButtonModule,FormsModule,MatFormFieldModule, MatInputModule],
})

export class AddLessonComponent {
  onSubmit(formData:any) {
    console.log(formData);
  }
}
