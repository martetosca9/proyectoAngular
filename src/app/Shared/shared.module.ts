import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatTableModule } from '@angular/material/table';
import { FormErrorPipe } from './pipes/form-error.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FullnamePipe,
    MatTableModule,
    FormErrorPipe,
    MatSelectModule,
    NgFor,
    MatDatepickerModule
  ]
})
export class SharedModule { }
