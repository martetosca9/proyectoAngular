import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<UsersDialogComponent>
    ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  OnSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
