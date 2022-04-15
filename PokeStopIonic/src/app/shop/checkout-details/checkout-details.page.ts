import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-shop-search',
  templateUrl: './checkout-details.page.html',
  styleUrls: ['./checkout-details.page.scss'],
})
export class CheckoutDetailsPage implements OnInit {
  orderItems = null;
  subTotal = 0;

  memberId = 1;
  selectedValue = "paypal";

  constructor(private modalController: ModalController, private alertController: AlertController, private navParams: NavParams, private orderService: OrderService, private router: Router, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.orderItems = this.navParams.get('OrderItems');
    this.subTotal = this.navParams.get('SubTotal');
  }

  close() {
    this.modalController.dismiss();
  }


  print(event) {
    console.log('Selected value: ', this.selectedValue);
  }

  async checkout() {
    var requestJson =
    {
      "deliveryAddr": null,
      "memberId": this.memberId,
      "orderItemList": this.orderItems
    };

    const request = JSON.stringify(requestJson);
    console.log(request);
    this.orderService.checkout(request).subscribe({
      next: (response) => {
        console.log(response);
        if (this.selectedValue == "paypal") {
          // set paymentStatus = COMPLETED
          this.inAppBrowser.create("https://www.sandbox.paypal.com/EN_SG/cgi-bin/webscr?cmd=_xclick&business=pokestop@business.com&currency_code=SGD&amount=" + this.subTotal);
        }
        else {
          // set paymentStatus = PENDING & redirect to order page
          this.router.navigate(['/tabs/tab1/my-orders'])
        }
      },
      error: (error) => {
        console.log('***** checkout-details' + error);
      }
    })




    // const alert = await this.alertController.create({
    //   header: 'Success',
    //   message: 'Checkout Successful! Thank you for your order.',
    //   buttons: ['Continue shopping']
    // })
    // await alert.present();


    // this.modalController.dismiss();
  }

  getImagePath(variable2) {
    return "http:///192.168.50.69:8080/PokeStopJsf-war/resources/images/productUploadedImages/" + variable2;
  }

}