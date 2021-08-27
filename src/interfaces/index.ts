export interface ICityInfo {
    city: string;
    state: string;
    state_code: string;
    country: string;
    country_code: string;
    continent: string;
    drive_on: string;
    speed_in: string;
    currency_name: string;
    currency_symbol: string;
}

export interface ICityInfoList {
    cityInfoList: ICityInfo[];
}

export interface ILocation {
    longitude?: number;
    latitude?: number;
    errorMessage?: string;
}
