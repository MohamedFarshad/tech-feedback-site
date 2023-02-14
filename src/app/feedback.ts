import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

/**
 * @title Stepper header position
 */
@Component({
  selector: 'feedback',
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.scss'],
})
export class Feedback {
  constructor(private _formBuilder: FormBuilder) {}
  rating?: string;
  chooseDepartment: string;
  currentIndex: number = 1;
  departments: any[] = [
    {
      name: 'Criminal',
      src: '../assets/images/departments/criminal.png',
    },
    {
      name: 'Traffic',
      src: '../assets/images/departments/traffic.png',
    },
    {
      name: 'Civil',
      src: '../assets/images/departments/civil.png',
    },
    {
      name: 'Family',
      src: '../assets/images/departments/family.png',
    },
    {
      name: 'Other',
      src: '../assets/images/departments/other.png',
    },
  ];

  features: any[] = [
    {
      name: 'Audio Quality',
      src: '../assets/images/features/audio.png',
    },
    {
      name: 'Video Quality',
      src: '../assets/images/features/video.png',
    },
    {
      name: 'Interactions',
      src: '../assets/images/features/interactions.png',
    },
    {
      name: 'Others',
      src: '../assets/images/features/plus.png',
    },
    {
      name: 'None',
      src: '../assets/images/features/minus.png',
    },
  ];

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  goBack(stepper: MatStepper) {
    stepper.previous();
    this.currentIndex -= 1;
  }

  goForward(stepper: MatStepper) {
    stepper.next();
    this.currentIndex += 1;
  }
}
