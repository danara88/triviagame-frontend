import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private utilsService: UtilsService,
    private messageService: MessageService
  ) {
    
    this.categories = [];

   }

  ngOnInit(): void {
    this.getCategories();
    if (history.state.categoryCreated === true) {
      setTimeout(() => {
        this.utilsService.showToastMessage('categoriesPage', 'success', 'Create game', 'The game was created with success.', this.messageService);
      }, 1000);
    }
  }

  /**
   * Get all categories
   */
  getCategories() {
    this.spinner.show();
    this.categoryService.getCategories().subscribe(resp => {
      this.categories = resp.categories;
      this.spinner.hide();
      
    }, error => {
      this.spinner.hide();
      this.utilsService.showToastMessage('categoriesPage', 'error', 'Error getting the categories', 'Something went wrong getting the categories data.', this.messageService);
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
