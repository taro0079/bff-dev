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

type DeliveryStop = {
    id: number;
    prefectureCode: string;
    notes: string;
}

type Admin = {
    id: number;
    name: string;
    compony: string;
    email: string;
}

type Calendar = {
    id: number;
    typeCalendar: string;
    calendarPattern: string;
    calendarDateYmd: string;
    typeWorkHoliday: string;
    typePublicHoliday: string;
    createdBy: number;
    updatedBy: number;
    createdAt: string;
    updatedAt: string;
}

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}




    @Get()
    async findAll(): Promise<string> {

        const [products, customers, DeliveryStop, admins, calendars] = await Promise.all([
            this.catsService.fetchProducts(),
            this.catsService.fetchCustomers(),
            this.catsService.fetchDeliveryStop(),
            this.catsService.fetchAdmins(),
            this.catsService.fetchCalendars()
        ]);
        // const products = await this.catsService.fetchProducts();
        const formedProducts = products['data'].map((product) => {
            return {
                productCode: product.productCode,
                productName: product.productName,
            } as Product;
        });
        // const customers = await this.catsService.fetchCustomers();
        const formedCustomers = customers['data'].map((customer) => {
            return {
                id: customer.id,
                name: customer.fullName,
            } as Customer;
        });

        const formedDeliveryStop = DeliveryStop['data'].map((deliveryStop) => {
            return {
                id: deliveryStop.id,
                prefectureCode: deliveryStop.prefectureCode,
                notes: deliveryStop.notes,
            } as DeliveryStop;
        });

        const formedAdmin = admins['data'].map((admin) => {
            return {
                id: admin.id,
                name: admin.name,
                compony: admin.compony,
                email: admin.email,
            } as Admin;
        });

        const formedCalendars = calendars['data'].map((calendar) => {
            return {
                id: calendar.id,
                typeCalendar: calendar.typeCalendar,
                calendarPattern: calendar.calendarPattern,
                calendarDateYmd: calendar.calendarDateYmd,
                typeWorkHoliday: calendar.typeWorkHoliday,
                typePublicHoliday: calendar.typePublicHoliday,
                createdBy: calendar.createdBy,
                updatedBy: calendar.updatedBy,
                createdAt: calendar.createdAt,
                updatedAt: calendar.updatedAt,
            } as Calendar;
        });

        return JSON.stringify({ products: formedProducts, customers: formedCustomers, deliveryStop: formedDeliveryStop, admin: formedAdmin, calendars: formedCalendars});

    }
}
