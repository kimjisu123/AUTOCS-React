import { useNavigate } from 'react-router-dom';
import StockCSS from "../../stock/Stock.module.css";

function Product({ product : {productNo, name, stock, price, etc, registDate, unusedDate, status}}) {

    const navigate = useNavigate();


    return (
        <>
            <tr>
                <td>{productNo}</td>
                <td>식품</td>
                <td>{ name }</td>
                <td>10kg</td>
                <td>EA</td>
                <td>{stock}</td>
                <td>{ price }</td>
                <td>{etc}</td>
                <td>{registDate}</td>
                <td>{unusedDate}</td>
                <td>{status}</td>
            </tr>
        </>

    );
}

export default Product;