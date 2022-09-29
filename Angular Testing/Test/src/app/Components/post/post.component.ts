import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: any;
  @Output() delete  = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDeletePost(){
    this.delete.emit();
  }

}
