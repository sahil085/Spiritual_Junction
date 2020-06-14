import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CollegeList, Gender} from '../../constants/app-const';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  filteredCollege: string[];
  genders = [
    {label: 'Gender', value: null},
    ...Object.keys(Gender).map(gender => ({label: gender, value: gender}))
  ];
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      contact: ['', Validators.required],
      gender: ['', Validators.required],
      college: ['', [Validators.required]],
      profession: ['', Validators.required],
      areaOfResidence: ['', Validators.required],
    });
  }

  signUpPerson() {
    const {
      confirmPassword,
      ...signUpData
    } = this.registerForm.value;
    console.log(signUpData);
  }

  searchCollege(event) {
    const defaultColleges = Object.values(CollegeList);
    this.filteredCollege = defaultColleges.filter(college => college.toUpperCase().startsWith(event.query.toUpperCase()));
  }

}
