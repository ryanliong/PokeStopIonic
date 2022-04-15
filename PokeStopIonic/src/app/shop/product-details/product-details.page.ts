import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { AlertController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product = null;
  orderItems = [];
  orderItem = null;
  productQty = 1;

  memberId = 1;

  constructor(private cartService: CartService, private orderItemService: OrderItemService, private modalController: ModalController, private alertController: AlertController, private navParams: NavParams) { }

  ngOnInit() {
    this.product = this.navParams.get('Product');
    this.getCartByMember();
  }

  filter() {
    // return this.orderItems.filter(orderItem => orderItems[orderItem.orderItemId] {
    //   return object['productId'] == this.product.productId;
    // });
    // this.orderItems.filter(orderItem => )
    this.orderItem = this.orderItems.find(item => item.productEntity.productId === this.product.productId);
    console.log(this.orderItems);
    console.log(this.product.productId);
    console.log(this.orderItem);
    console.log("qty" + this.orderItem.qty);
  }

  getCartByMember() {
    this.cartService.getCartByMemberId(this.memberId).subscribe({
      next: (response) => {
        console.log(response);
        this.orderItems = response.orderItemEntities;
        console.log(this.orderItems)
        this.filter();
      },
      error: (error) => {
        console.log('***** product-details' + error);
      }
    })
  }

  close() {
    this.modalController.dismiss();
  }

  increaseQty() {
    this.productQty++;
  }

  decreaseQty() {
    if (this.productQty != 1) {
      this.productQty--;
    }
  }

  async addToCart() {
    console.log(this.orderItems);

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
          console.log('***** product-details' + error);
        }
      })
    }
    else {
      // createNewOrderItem
      var createNewOrderItemJson =
      {
        "memberId": this.memberId,
        "qty": this.productQty,
        "productId": this.product.productId
      };

      const request = JSON.stringify(createNewOrderItemJson);
      this.orderItemService.createNewOrderItem(request).subscribe({
        next: (response) => {
          console.log(response);
          this.getCartByMember();
        },
        error: (error) => {
          console.log('***** product-details' + error);
        }
      })
    }

    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Added to cart!',
      buttons: ['Continue shopping']
    })
    await alert.present();
    this.getCartByMember();
    this.close();
  }

  // async checkout() {


  //   // this.cartService.checkoutCart();
  //   this.modalController.dismiss();
  // }

  getImagePath(variable2) {
    return "http:///192.168.50.69:8080/PokeStopJsf-war/resources/images/productUploadedImages/" + variable2;
  }

}
