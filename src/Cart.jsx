 

 
 
 const Cart = ({carts}) => {
  
  return (
    <div className="card w-full bg-base-100 shadow-xl mt-2 border p-4 font-semibold ">
      <div className="text-center text-lg p-2">
        <h2 >Credit Hour Remaining  {carts.length} </h2>
      </div>
       <hr />
       <div className="text-center text-lg p-2">
        <h2>Name</h2>
      </div>
      <hr />
      <div className="text-center text-lg p-2">
        <h2>Total Price</h2>
      </div>
    <div className="card-body">
      
    </div>
  </div>
  );
 };
 
 export default Cart;