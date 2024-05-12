import { Controller, Get } from "@nestjs/common";
import { CatsService } from "./cats.service";

type Customer = {
    id: number;
    name: string;
}
type Product = {
    productCode: string;
    productName: string;
}

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}




    @Get()
    async findAll(): Promise<string> {
        const products = await this.catsService.fetchProducts();
        const formedProducts = products['data'].map((product) => {
            return {
                productCode: product.productCode,
                productName: product.productName,
            } as Product;
        });
        const customers = await this.catsService.fetchCustomers();
        const formedCustomers = customers['data'].map((customer) => {
            return {
                id: customer.id,
                name: customer.fullName,
            } as Customer;
        });
        return JSON.stringify({ products: formedProducts, customers: formedCustomers });

    }
}
