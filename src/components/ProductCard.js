import { AddShoppingCartOutlined } from "@mui/icons-material";
import {useState} from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";


const ProductCard = ({ product, handleAddToCart }) => {
  // const [value, setValue]= useState(product.rating);
  return (
    <Card className="card">
       <CardMedia
        // sx={{ height: 300, width: "fit-content"}}
        component="img"
        image={product.image}
        title="product"
      />
       <CardContent>
       <Typography variant="h6">{product.name}</Typography>
       <Typography variant="h6" sx={{fontWeight: 'bold'}}>${product.cost}</Typography>
       <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button onClick={handleAddToCart} className="card-button" variant="contained"> <AddShoppingCartOutlined/> ADD TO CART</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
