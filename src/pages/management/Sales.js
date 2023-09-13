import SalesDepartment from "./SalesDepartment";
import ManagementMenu from './ManagementMenu'

function Sales(){
    return (
        <div style={{display: 'flex'}}>
            <ManagementMenu />
            <SalesDepartment />
        </div>
    )
}
export default Sales;