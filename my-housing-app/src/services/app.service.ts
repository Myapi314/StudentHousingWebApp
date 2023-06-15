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

export class AppService {
    public getAll() {
        return http.get<Array<IResidentData>>("/residents");
    }

    public async fetchAll() {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/residents/');
            const data = await response.json();
            // console.log({ data });
            return data;
        }
        catch (e) {
            console.log(e);
        }
        
    }
}