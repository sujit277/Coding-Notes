import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Post } from "src/app/Models/post";
import { PostService } from "./post.service";

describe('PostService (HttpClientTestingModule)', () => {

    let postService: PostService;
    let httpTestingController: HttpTestingController;
    let POSTS: Post[];

    beforeEach(() => {
        POSTS = [
            { id: 1, body: 'Body 1', title: 'Title 1' },
            { id: 2, body: 'Body 2', title: 'Title 2' }];

        TestBed.configureTestingModule({
            providers: [PostService],
            imports: [HttpClientTestingModule]
        });

        postService = TestBed.inject(PostService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    describe('getPosts()', () => {

        it('should return posts when getPost() is called using HttpTestingController', (done: DoneFn) => {
            postService.getPosts().subscribe((data) => {
                expect(data).toEqual(POSTS);
                done();
            });
            const request = httpTestingController.expectOne('/posts');
            request.flush(POSTS);
            expect(request.request.method).toBe('GET');
        })

    })
})