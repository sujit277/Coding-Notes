import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Post } from 'src/app/Models/post';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the post title in the anchor element', () => {
    const post: Post = { id: 1, body: 'body1', title: 'title1' };
    component.post = post;
    fixture.detectChanges();
    const postElement:HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  })

  it('should render the post title in the anchor element using debug Element',()=>{
    const post: Post = { id: 1, body: 'body1', title: 'title1' };
    component.post = post;
    fixture.detectChanges();
    const postDebugElement:any = fixture.debugElement;
    const aElement:HTMLElement = postDebugElement.query(By.css('a')).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  })
  
});
