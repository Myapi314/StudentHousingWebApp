import http from "../http-common";

export interface IResidentData {
    resident_id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    birthdate?: string;
    gender?: string;
}

export interface ILeaseData {
    rowid?: number;
    resident?: number;
    unit?: number;
    lease_start?: string;
    lease_end?: string;
    created_date?: string;
}

export interface IComplexData {
    rowid: number;
    complex_name: string;
    street_address: string;
    type: string;
}

export interface IUnitData {
    rowid: number;
    complex_id: number;
    unit_number: string;
    gender: string;
    room: string;
    bed: string;
    room_type: string;
    rent_price: number;
    resident_id?: number;
    unit_id?: number;
    lease_start?: string;
    lease_end?: string;
    created_date?: string;
    first_name?: string;
}

export class AppService {
    domain = "http://127.0.0.1:8000";

    public getAll() {
        return http.get<Array<IResidentData>>("/residents");
    }

    public async fetchAll() {
        try{
            const response = await fetch(this.domain + '/api/residents/');
            const data = await response.json();
            // console.log({ data });
            return data;
        }
        catch (e) {
            console.log(e);
        }
    }

    public async getAllComplexes() {
        try {
            const response = await fetch(this.domain + '/api/complexes/');
            const data = await response.json();
            return data;
        } 
        catch (e) {
            console.log(e);
        }
    }

    public async getUnitsByComplex(complexId: number, leaseStart?: string, leaseEnd?: string) {
        let query = this.domain + leaseStart ? `/api/units-by-complex?complex_id=${complexId}&lease_start=${leaseStart}&lease_end=${leaseEnd}` : `/api/units-by-complex?complex_id=${complexId}`;
        try {
            const response = await fetch(`${this.domain}/api/units-by-complex?complex_id=${complexId}&lease_start=${leaseStart}&lease_end=${leaseEnd}`)
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log("Error in fetching data: ", e);
        }
    }

    public async getLeases() {
        try {
            const response = await fetch(this.domain + '/api/leases/')
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log(e);
        }
    }
}