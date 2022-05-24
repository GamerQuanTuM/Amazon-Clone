import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "../redux/StateProvider"
import { getBasketTotal } from "../redux/Reducer";
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    return <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button onClick={e=> navigate('/payment')}> <strong> Proceed to Checkout</strong></button>
    </div>;

}

export default Subtotal
