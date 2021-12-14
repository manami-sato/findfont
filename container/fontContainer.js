import { Container } from "unstated";
// import Seeder from "../models/seeder/Seeder.js";

export default class InvoiceContainer extends Container {

  constructor(props = {}) {
    super();
    this.state = {
      data: [10, 1, 4, 3, 9],
      fontList: {
        
      }
    };
  }

  clear() {
    this.setState({ data: [] });
  }

  getEmptyData() {
    return {
      customers: [],
      products: [],
      invoices: []
    };
  }
}