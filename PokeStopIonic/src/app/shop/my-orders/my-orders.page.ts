import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { OrderDetailsPage } from '../order-details/order-details.page';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {


  orderStatuses = ["Pending", "Out for delivery", "Delivered"]
  orders = [];
  filteredOrders = new Array();

  memberId = 1;

  constructor(private orderService: OrderService, private modalController: ModalController) {
    this.filteredOrders = new Array();
  }

  ngOnInit() {
    this.getOrderListByMemberId(this.memberId);
  }

  getOrderListByMemberId(memberId) {
    this.orderService.getOrderListByMemberId(memberId).subscribe({
      next: (response) => {
        this.orders = response;
        this.filteredOrders = response;
        console.log(this.orders);
      },
      error: (error) => {
        console.log('***** my-orders' + error);
      }
    })
  }

  async openOrderDetails(Order) {
    console.log(Order);
    const modal = await this.modalController.create({
      component: OrderDetailsPage,
      componentProps: {
        Order: Order
      }
    });
    modal.onDidDismiss().then(data => this.getOrderListByMemberId(this.memberId));
    await modal.present();
  }

  filterOrder(event) {
    var orderStatus = (event.detail.value).toUpperCase().trim();
    console.log(orderStatus);

    if (orderStatus == 0) {
      // loadAllProducts
      this.getOrderListByMemberId(this.memberId);
    }
    else {
      this.orderService.getOrderListByMemberId(this.memberId).subscribe({
        next: (response) => {
          this.orders = response;
          this.filteredOrders = response;
          console.log(this.orders);
          var allOrders = this.orders;
          var filtered = [];

          Object.keys(allOrders).forEach(function (k) {
            if (allOrders[k].orderStatus == orderStatus) {
              filtered.push(allOrders[k])
            }
          });
          console.log(filtered);
          this.orders = filtered;
        },
        error: (error) => {
          console.log('***** my-orders' + error);
        }
      })
    }
  }

}
