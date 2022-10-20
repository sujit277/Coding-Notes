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
  name = "Iron Man";
  details = {
    name: "Sujit Kumar Verma",
    company: "EPAM Systems",
    city: "Bokaro Steel City"
  }

  constructor(private postService: PostServiceService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.postService.getPostData().subscribe((data: any) => {
      this.postData = data;
      this.ref.detectChanges();
    })
  }

  changeObjectValue(){
    this.details.name = "Chirs Hemtworth",
    this.details.company = "God of Thunder",
    this.details.city = "Australia"
  }

}
