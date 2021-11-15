export interface GuestRequest{
    first_name: string;
    last_name: string;
    phone_number: string;
    message: string;
}

export interface Guest extends GuestRequest{
    id: number;
}
