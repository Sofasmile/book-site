import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPreviewComponent } from "./book-preview/book-preview.component";
import { BookCreateFormComponent } from "./book-create-form/book-create-form.component";

const routes: Routes = [
  {
    path: "book/list",
    component: BookPreviewComponent
  },
  {
    path: "book/create",
    component: BookCreateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
