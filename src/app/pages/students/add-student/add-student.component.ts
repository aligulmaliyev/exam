import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ILesson } from '../../../models/lesson';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss',
  imports: [MatDialogModule, MatButtonModule,FormsModule,MatFormFieldModule, MatInputModule],
})

export class AddStudentComponent {
  onSubmit(formData:any) {
    console.log(formData);
  }
}
