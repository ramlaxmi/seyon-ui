import { environment } from "../environments/environment";

const URLS = {
    local: "",
    prod: ""
}

export class Urls {
    public static getDomain() {
        if (environment.production) {
            return URLS.prod;
        }
        return URLS.local;
    }
}

export const APIURLS = {
    client: "/api/client",
    invoice: "/api/invoice",
    manInvoice: "/api/manuFacturingInvoice",
    user: "/api/user",
    userrole: "/api/userrole",
    adduserrole: "/api/userrole/adduserrole",
    getcompany: "/api/company/getCompany",
    updatecompany: "/api/company/updateCompany",
    savevoucher : "/api/voucher/saveVoucher",
    voucher : "/api/voucher",
    printIInvoiceUrl:"/api/invoice/IhtmlReport?performaId=",
    printPInvoiceUrl:"/api/invoice/PhtmlReport?performaId=",
    printManIInvoiceUrl:"/api/manuFacturingInvoice/IhtmlReport?performaId=",
    printManPInvoiceUrl:"/api/manuFacturingInvoice/PhtmlReport?performaId=",
    vendor : "/api/vendor",
}
