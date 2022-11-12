import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;
  let posts: any;

  beforeEach(() => {

    posts = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }];

    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return posts when getPost() is called using HttpTestingController', (done: DoneFn) => {
    service.getPosts().subscribe((data) => {
      expect(data).toEqual(posts);
      done();
    });
    const request = httpTestingController.expectOne('/posts');
    request.flush(posts);
    expect(request.request.method).toBe('GET');
  })

})
