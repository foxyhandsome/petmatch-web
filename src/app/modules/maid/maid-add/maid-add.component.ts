import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-maid-add',
  templateUrl: './maid-add.component.html',
  styleUrls: ['./maid-add.component.css']
})
export class MaidAddComponent {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phoneNumberPrefix: ['+66'],
      phoneNumber: [null, [Validators.required]],
      roomnumber: [null, [Validators.required]],
      roomsize: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      this.markAsDirtyAndValidate(this.validateForm);
    }
  }

  updateConfirmValidator(): void {
    setTimeout(() => {
      this.validateForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormGroup): { [s: string]: boolean } => {
    if (!control.value || control.value !== control.get('password')?.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  markAsDirtyAndValidate(group: FormGroup): void {
    Object.values(group.controls).forEach((control) => {
      control.markAsDirty();
      control.updateValueAndValidity();
      if (control instanceof FormGroup) {
        this.markAsDirtyAndValidate(control);
      }
    });
  }

}

