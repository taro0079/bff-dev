import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {
    async fetchProducts() {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json()
        return data;
    }

    async fetchCustomers() {
        const response = await fetch('http://localhost:8000/api/customers');
        const data = await response.json()
        return data;
    }


}
