package com.springboot.Fourth.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.springboot.Fourth.Helper.FileUploadHelper;

@RestController
public class FileUploadController {
	
	@Autowired
	private FileUploadHelper fileUploadHelper;

	@PostMapping("/upload-file")
	public ResponseEntity<String> uploadFile(@RequestParam("File") MultipartFile file) {
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());

		if (file.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Request Body Must Contain a File");
		}

		if (!file.getContentType().equals("image/jpeg")) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Only JPEG Content Type");
		}

		// File Upload Code
		boolean f = fileUploadHelper.uploadFile(file);
		if (f) {
			return ResponseEntity.ok("File is Successfully Uploaded");
		}

		return ResponseEntity.ok("Working");
	}
}
