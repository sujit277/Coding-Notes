package com.order_service.service;

import com.order_service.dto.InventoryResponse;
import com.order_service.dto.OrderLineItemsDto;
import com.order_service.dto.OrderRequest;
import com.order_service.model.Order;
import com.order_service.model.OrderLineItems;
import com.order_service.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.UUID;
import java.util.List;

@Service
@Transactional
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private WebClient.Builder webClientBuilder;

    public void placeOrder(OrderRequest orderRequest){
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        List<OrderLineItems> orderLineItems = orderRequest.getOrderLineItemsDtoList().stream().map(this :: mapToOrderLineItems).toList();
        order.setOrderLineItemsList(orderLineItems);

        List<String> skuCodes = order.getOrderLineItemsList().stream()
                .map(OrderLineItems:: getSkuCode)
                .toList();

        // Call Inventory service and place order if product is in stock
        InventoryResponse[] inventoryResponses  = webClientBuilder.build().get()
                 .uri("http://inventory-service/api/inventory",
                         uriBuilder -> uriBuilder.queryParam("skuCode",skuCodes).build())
                 .retrieve()
                 .bodyToMono(InventoryResponse[].class)
                 .block();

        Boolean allProductsInStock = Arrays.stream(inventoryResponses).allMatch(InventoryResponse:: getIsInStock);

        if(allProductsInStock){
            orderRepository.save(order);
        }else {
            throw new IllegalArgumentException("Product is not in the stock please try again later");
        }

    }

    public OrderLineItems mapToOrderLineItems(OrderLineItemsDto orderLineItemsDto){
        OrderLineItems orderLineItems = new OrderLineItems();
        orderLineItems.setPrice(orderLineItemsDto.getPrice());
        orderLineItems.setSkuCode(orderLineItemsDto.getSkuCode());
        orderLineItems.setQuantity(orderLineItems.getQuantity());
        return orderLineItems;
    }
}
