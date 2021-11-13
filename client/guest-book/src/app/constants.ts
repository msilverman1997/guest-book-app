import { DeleteComponentComponent } from "./delete-component/delete-component.component";

export abstract class Constants {
    static readonly GUEST_BOOK_COLUMN_DEFS = [
        {field: "first_name", headerName: "First Name"},
        {field: "last_name", headerName: "Last Name"},
        {field: "phone_number", headerName: "Phone Number"},
        {field: "message", headerName: "Message"},
        {field: '', headerName: 'Delete', cellRendererFramework: DeleteComponentComponent}
    ];
}