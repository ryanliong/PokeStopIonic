import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { AlertController, ModalController } from '@ionic/angular';
import { CheckoutDetailsPage } from '../checkout-details/checkout-details.page';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { URLConstants } from 'src/app/global/url-constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  IP = URLConstants.IPAddress;
  orderItems = [];
  products: Product | null;
  cart: Cart | null;

  memberId = 0;

  product = null;
  orderItem = null;
  productQty = 1;

  subTotal = 0;

  constructor(private cartService: CartService, private orderItemService: OrderItemService, private orderService: OrderService, private modalController: ModalController, private alertController: AlertController, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    this.memberId = this.sessionService.getMemberId();
    this.getCartByMember();
  }

  getCartByMember() {
    this.cartService.getCartByMemberId(this.memberId).subscribe({
      next: (response) => {
        console.log(response);
        this.cart = response;
        this.subTotal = response.cartAmt;
        console.log(this.subTotal);
        this.orderItems = response.orderItemEntities;
        console.log(this.orderItems)
        this.filter();
      },
      error: (error) => {
        console.log('***** cartPage_getCartByMemeber' + error);
      }
    })
  }

  deleteOrderItem(orderItemId) {
    this.orderItemService.deleteOrderItem(orderItemId).subscribe({
      next: (response) => {
        console.log(response);
        this.getCartByMember();
      },
      error: (error) => {
        console.log('***** cartPage_deleteOrderItem' + error);
      }
    })
  }

  filter() {
    if (this.product != null) {
      this.orderItem = this.orderItems.find(item => item.productEntity.productId === this.product.productId);
      console.log(this.orderItems);
      console.log(this.product.productId);
      console.log(this.orderItem);
      console.log("qty" + this.orderItem.qty);
    }
  }

  close() {
    this.modalController.dismiss();
  }

  addToCart(product) {
    this.orderItem = this.orderItems.find(item => item.productEntity.productId === product.productId);
    console.log(this.orderItem);
    console.log("qty" + this.orderItem.qty);

    if (!(this.orderItem === undefined)) {
      this.orderItem.qty++;
      var requestJson =
      {
        "orderItemId": this.orderItem.orderItemId,
        "qty": this.orderItem.qty
      };

      const request = JSON.stringify(requestJson);
      console.log(request);
      this.orderItemService.updateOrderItemQty(request).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log('***** product-details' + error);
        }
      })
    }
    this.getUpdatedTotal();
  }

  getUpdatedTotal() {
    console.log(this.orderItems);
    this.subTotal = 0;
    this.orderItems.forEach(obj => {
      var qty = obj.qty;
      var price = obj.productEntity.productPrice
      console.log("QTY " + qty);
      console.log("PRICE " + price);
      this.subTotal += qty * price;
    });
    console.log(this.subTotal);
  }

  removeFromCart(product) {
    this.orderItem = this.orderItems.find(item => item.productEntity.productId === product.productId);
    console.log(this.orderItem);
    console.log("qty" + this.orderItem.qty);

    if (this.orderItem != null) {
      if (this.orderItem.qty != 1) {
        this.orderItem.qty--;
        var requestJson =
        {
          "orderItemId": this.orderItem.orderItemId,
          "qty": this.orderItem.qty
        };

        const request = JSON.stringify(requestJson);
        console.log(request);
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
        // popup and remove orderItem
        this.presentAlertConfirm(this.orderItem.orderItemId);
      }
    }
    else {
      // createNewOrderItem
    }
    this.getUpdatedTotal();

  }

  async presentAlertConfirm(orderItemId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'Do you want to remove this product?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteOrderItem(orderItemId);
          }
        }
      ]
    });

    await alert.present();
  }

  async openCheckout(OrderItems, SubTotal) {
    const modal = await this.modalController.create({
      component: CheckoutDetailsPage,
      componentProps: {
        OrderItems: OrderItems,
        SubTotal: SubTotal
      }
      // enterAnimation: ,
    });
    await modal.present();
  }

  getImagePath(variable2) {
    return this.IP + "/PokeStopJsf-war/resources/images/productUploadedImages/" + variable2;
  }

}
