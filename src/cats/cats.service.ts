import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
    async fetchProducts() {
        const response = await fetch('http://localhost/api/products');
        const data = await response.json()
        return data;
    }

    async fetchCustomers() {
        const response = await fetch('http://localhost/api/customers');
        const data = await response.json()
        return data;
    }

    async fetchDeliveryStop() {
        const response = await fetch('http://localhost/api/shipping/delivery-stop');
        const data = await response.json()
        return data;
    }

    async fetchAdmins() {
        const response = await fetch('http://localhost/api/admin');
        const data = await response.json()
        return data;
    }

    async fetchCalendars() {
        const response = await fetch('http://localhost/api/shipping/calendar');
        const data = await response.json()
        return data;
    }


}
