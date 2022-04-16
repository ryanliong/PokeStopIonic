import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { Animation, AnimationController, ModalController } from '@ionic/angular';
import { CartPage } from '../cart/cart.page';
import { ProductDetailsPage } from '../product-details/product-details.page';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.page.html',
  styleUrls: ['./shop-home.page.scss'],
})
export class ShopHomePage implements OnInit {

  products: Product[] | null;
  categories: Category[] | null;
  searchQuery: string;
  category: string;
  cart: Cart;

  product = null;
  orderItems = [];
  orderItem = null;
  productQty = 1;

  memberId = 0;

  filteredProducts = new Array();

  @ViewChild('cartfab', { read: ElementRef }) cartBtn: ElementRef;
  cartAnimation: Animation;

  constructor(private productService: ProductService, private categoryService: CategoryService, private orderItemService: OrderItemService, private cartService: CartService, private sessionService: SessionService, private animationController: AnimationController, private modalController: ModalController) {
    this.products = new Array();
    this.categories = new Array();
    this.cart = new Cart();
    this.filteredProducts = new Array();
  }

  ngOnInit() {
    this.memberId = this.sessionService.getMemberId();
    console.log("memberId");
    console.log(this.memberId);

    this.getAllProducts();

    this.categoryService.getCategories().subscribe({
      next: (response) => {
        console.log('RESPONSE: ' + response);
        this.categories = response;
      },
      error: (error) => {
        console.log('***** shop-home' + error);
      }
    })

    this.getCartByMember();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log('RESPONSE: ' + response);
        this.products = response;
        this.filteredProducts = response;
      },
      error: (error) => {
        console.log('***** shop-home' + error);
      }
    })
  }

  getCartByMember() {
    console.log("getCardByMember()");
    this.cartService.getCartByMemberId(this.memberId).subscribe({
      next: (response) => {
        if (response.cartId === undefined) {
          this.cartService.createCart(this.memberId).subscribe({
            next: (response1) => {
              this.cart = response1;
              console.log(response1);
              this.orderItems = response1.orderItemEntities;
              console.log(this.orderItems)
              this.filter();
            },
            error: (error) => {
              console.log('***** shop-home' + error);
            }
          })
        }
        else {
          this.cart = response;
          console.log(response);
          this.orderItems = response.orderItemEntities;
          console.log(this.orderItems)
          this.filter();
        }
      },
      error: (error) => {
        console.log('***** shop-home' + error);
      }
    })
  }


  filter() {
    // return this.orderItems.filter(orderItem => orderItems[orderItem.orderItemId] {
    //   return object['productId'] == this.product.productId;
    // });
    // this.orderItems.filter(orderItem => )
    if (this.product != null) {
      this.orderItem = this.orderItems.find(item => item.productEntity.productId === this.product.productId);
      console.log(this.orderItems);
      console.log(this.product.productId);
      console.log(this.orderItem);
      console.log("qty" + this.orderItem.qty);
    }
  }

  filterCategory(event) {
    var categoryId = event.detail.value;
    console.log(categoryId);

    if (categoryId == 0) {
      // loadAllProducts
      this.getAllProducts();
    }
    else {
      this.productService.getProducts().subscribe({
        next: (response) => {
          console.log('RESPONSE: ' + response);
          this.products = response;
          this.filteredProducts = response;
          var allProduct = this.products;
          var filtered = [];

          Object.keys(allProduct).forEach(function (k) {
            if (allProduct[k].categoryEntity.categoryId == categoryId)
              filtered.push(allProduct[k])
          });
          console.log(filtered);
          this.products = filtered;
        },
        error: (error) => {
          console.log('***** shop-home' + error);
        }
      })
    }
  }

  ngAfterViewInit() {
    this.cartAnimation = this.animationController.create('cart-animation');
    this.cartAnimation
      .addElement(this.cartBtn.nativeElement)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 0.8, transform: 'scale(0.9)' },
        { offset: 1, transform: 'scale(1)' }
      ])
      .duration(300)
      .easing('ease-out');
  }

  getImagePath(variable2) {
    return "http://192.168.50.69:8080/PokeStopJsf-war/resources/images/productUploadedImages/" + variable2;
  }

  async openCart() {
    const modal = await this.modalController.create({
      component: CartPage,
      id: 'cartModal'
    });
    await modal.present();
  }

  async openProductDetails(Product) {
    const modal = await this.modalController.create({
      component: ProductDetailsPage,
      componentProps: {
        Product: Product
      }
      // enterAnimation: ,
    });
    await modal.present();
  }

  async addToCart(product) {
    console.log(product);
    console.log(this.orderItems);
    this.orderItem = this.orderItems.find(item => item.productEntity.productId === product.productId);
    console.log(this.orderItem);
    // console.log("qty" + this.orderItem.qty);

    if (!(this.orderItem === undefined)) {
      var requestJson =
      {
        "orderItemId": this.orderItem.orderItemId,
        "qty": this.orderItem.qty + this.productQty
      };

      const request = JSON.stringify(requestJson);
      this.orderItemService.updateOrderItemQty(request).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log('***** shop-home_addToCart' + error);
        }
      })
    }
    else {
      // createNewOrderItem
      var createNewOrderItemJson =
      {
        "memberId": this.memberId,
        "qty": 1,
        "productId": product.productId
      };

      const request = JSON.stringify(createNewOrderItemJson);
      this.orderItemService.createNewOrderItem(request).subscribe({
        next: (response) => {
          console.log(response);
          this.getCartByMember();
        },
        error: (error) => {
          console.log('***** shop-home_addToCart' + error);
        }
      })
    }
    this.cartAnimation.play();
  }

}
