import React from "react";

const products={
    "product1": {
        "id": 1,
        "name": "Product 1",
        "price": 10.99,
        "rating":'3'
    },
    "product2": {
        "id": 2,
        "name": "Product 2",
        "price": 9.99,
        "rating":'4'
        },
        "product3": {
            "id": 3,
            "name": "Product 3",
            "price": 12.99,
            "rating":'5'
            }
}

const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
//   const [products, setProducts] = React.useState(products);
  
  const handleRating = (index) => {
    const ratingValue = index + 1;
    setRating(ratingValue);
  };
  function handleHover(index){
    setHoverRating(index+1);
  }
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRating(index)}
          onMouseEnter={()=>handleHover(index)}
          onMouseLeave={()=>setHoverRating(0)}
          style={{ 
            color: index < (hoverRating||rating) ? "gold" : "gray", 
            // color:(index < hoverRating || (index + 1 === hoverRating && hoverRating % 1 !== 0)) ||
            // (index < rating || (index + 1 === rating && rating % 1 !== 0))
            //   ? 'gold'
            //   : 'grey',

          cursor: "pointer" }}
        >
          &#x2605;
        </span>
      ))}
      <p>You Rated: {rating}</p>
    </div>
  );
};

export default StarRating;
