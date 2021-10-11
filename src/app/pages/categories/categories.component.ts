import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private sponner: NgxSpinnerService,
    private router: Router,
  ) {
    
    this.categories = [];

   }

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * Get all categories
   */
  getCategories() {
    this.sponner.show();
    this.categoryService.getCategories().subscribe(resp => {
      this.categories = resp.categories;
      this.sponner.hide();
      
    }, error => {
      this.sponner.hide();
      console.log(error);
    });
  }

  /**
   * Redirects to the game screen
   * @param categoryID 
   */
  startGame(categoryID: string) {
    this.router.navigate(['/game', categoryID]);
  }


  showModal(categoryId: string) {
    document.getElementById(categoryId)!.style.display='block';
  }

  dismissModal(categoryId: string) {
    document.getElementById(categoryId)!.style.display='none';
  }

  

}
