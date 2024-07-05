package com.product_service.service;
import com.product_service.dto.ProductRequest;
import com.product_service.dto.ProductResponse;
import com.product_service.model.Product;
import com.product_service.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    public void createProduct(ProductRequest productRequest){
        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .build();
        this.productRepository.save(product);
        log.info("Product " + product.getId() +" is saved");
    }

    public List<ProductResponse> getAllProducts(){
        List<Product> products = this.productRepository.findAll();
        return products.stream().map(this::mapToProductResponse).toList();
    }

    public ProductResponse mapToProductResponse(Product product){
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .build();
    }
}
