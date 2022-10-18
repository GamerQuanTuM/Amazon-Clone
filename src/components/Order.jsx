import Currency from "react-currency-formatter";
import moment from "moment";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-500">
        <div className="">
          <p className="font-bold font-Roboto text-xs">ORDER PLACED</p>
          <p className=" font-Roboto">{moment.unix(timestamp).format("DD/MM/YYYY")}</p>
        </div>
        <div className="">
          <p className="text-xs font-Roboto font-bold">TOTAL</p>
          <p className=" font-Roboto">
            <Currency quantity={amount * 82.368} currency="INR" /> - Next Day
            Delivery <Currency quantity={amountShipping} currency="INR" />
          </p>
        </div>
        <p className="text-sm font-Roboto whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute font-Roboto top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
          ORDER # {id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image,index) => (
            <img key={index} src={image} alt="" className="h-28 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
