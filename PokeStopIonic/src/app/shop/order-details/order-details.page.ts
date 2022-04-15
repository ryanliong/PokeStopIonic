import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  orderItems = [];
  orderItem = null;
  order = null;
  productQty = 1;
  payment = null;

  memberId = 1;
  selectedValue = "";

  constructor(private cartService: CartService, private orderService: OrderService, private modalController: ModalController, private alertController: AlertController, private navParams: NavParams, private router: Router) { }

  ngOnInit() {
    this.order = this.navParams.get('Order');
    console.log(this.order);
    if (this.order.paymentEntity.paymentStatus === "COMPLETED") {
      this.selectedValue = "paypal";
    }
    else {
      this.selectedValue = "cash";
    }
  }

  close() {
    this.modalController.dismiss();
  }

  async received(orderId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'Confirm Order Received?',
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
          text: 'Confirm',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm');
            console.log(orderId);
            // change orderStatus to DELIVERED and paymentStatus to COMPLETED
            if (!(orderId === undefined)) {
              var requestJson =
              {
                "orderId": orderId
              };

              const request = JSON.stringify(requestJson);
              console.log(request);
              this.orderService.updateOrderReceived(request).subscribe({
                next: (response) => {
                  console.log(response);
                  this.close();
                },
                error: (error) => {
                  console.log('***** order-details' + error);
                }
              })
            }
          }
        }
      ]
    });

    await alert.present();
  }

  getImagePath(variable2) {
    return "http:///192.168.50.69:8080/PokeStopJsf-war/resources/images/productUploadedImages/" + variable2;
  }

}
