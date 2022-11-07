import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  postData!: any;

  details = {
    name: "Sujit Kumar Verma",
    company: "EPAM Systems",
    city: "Bokaro Steel City"
  }

  constructor(private postService: PostServiceService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
    this.ref.detach();
    //this.ref.markForCheck();
  }

  getData() {
    this.postService.getPostData().subscribe((data: any) => {
      this.postData = data;
      //this.ref.detectChanges();
      this.ref.reattach();
      //this.ref.checkNoChanges();
      //this.ref.markForCheck();
    })
  }


  changeObjectValue() {
   /*  this.details.name = "Chirs Hemtworth",
    this.details.company = "God of Thunder",
    this.details.city = "Australia" */
    this.details = {
      name: "Priyanka Suman",
      company: "ADP",
      city: "Bokaro Steel City"
    }
  }

  /* Input output event handler ,Async Pipe */

}
