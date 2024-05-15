import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sanitization';
  constructor(private sanitizer: DomSanitizer) {
    this.desanitizeHtml();
  }
  unsafeHtml: string = '<script>alert("Hello!");</script>'; // Unsafe HTML content

  safeHtml!: SafeHtml;

  desanitizeHtml() {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.unsafeHtml);
  }
}
