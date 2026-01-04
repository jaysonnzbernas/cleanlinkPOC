import { Page } from "@playwright/test";
import { get } from "node:http";

export class UserAPI {
   
   constructor(protected page: Page) {
       this.page = page;
     }

   async getUserResp(urlPart: string){  
       const userResp = this.page.waitForResponse(response =>
            response.url().includes(urlPart) 
            && response.request().method() === 'GET'
        );

        return userResp;
   }

   async getCustomerUserResp(){
       const customerResponse = await this.getUserResp('/api/Customers/');
       return customerResponse;
   }

   async getClientUserResp() {
       const customerResponse = this.page.waitForResponse(response =>
            response.url().includes('/api/Clients/') 
            && response.request().method() === 'GET'
        );
       
        return customerResponse;
   }
}