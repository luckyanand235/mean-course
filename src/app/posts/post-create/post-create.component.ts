import { Component } from "@angular/core";
// Decorator to make it angular component

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
})

export class PostCreateComponent {
  enteredValue = '';
	newPost = 'NO Content';

	onAddPost() {
		this.newPost = this.enteredValue;
	}
}