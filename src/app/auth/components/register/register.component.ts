import { IRegisterData } from './../../types/register';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _fb: FormBuilder, private _store: Store) {}

  form = this._fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    username: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.form.getRawValue());
    const request: IRegisterData = {
      user: this.form.getRawValue(),
    };
    this._store.dispatch(register({ request }));
  }
}
