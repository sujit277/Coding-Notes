package com.springboot.Fourth.Helper;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {

	// public final String Upload_Dir =
	// "E:\\Coding\\SpringBoot\\21to30\\src\\main\\resources\\static\\Image";
	public final String Upload_Dir = new ClassPathResource("static/image/").getFile().getAbsolutePath();

	public FileUploadHelper() throws IOException {

	}

	public boolean uploadFile(MultipartFile multipartFile) {

		boolean f = false;
		try {
			// Reading the Image
			InputStream is = multipartFile.getInputStream();
			byte data[] = new byte[is.available()];
			is.read(data);

			// Writing the Image into The Folder
			FileOutputStream fos = new FileOutputStream(
					Upload_Dir + File.separator + multipartFile.getOriginalFilename());
			fos.write(data);
			fos.flush();
			fos.close();
			f = true;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return f;
	}

}
