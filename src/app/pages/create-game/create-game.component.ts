import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public formCustom: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 

    this.formCustom = new FormGroup({});
    this.createForm();

  }

  ngOnInit() {

  }

  /**
   * Creates the form to create new game
   */
  createForm() {
    this.formCustom = this.fb.group({
      categoryName:         ['',  [Validators.required]],
      categoryDescription:  ['',  [Validators.required]],
      question1:  ['',  [Validators.required]],
    });
  }

  /**
   * This method will publish and save the complete category
   */
  onSubmit() {
    console.log(this.formCustom.value);
  }



}
