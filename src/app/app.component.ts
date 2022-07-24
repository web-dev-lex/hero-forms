import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-Based Contact Form Example';

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
