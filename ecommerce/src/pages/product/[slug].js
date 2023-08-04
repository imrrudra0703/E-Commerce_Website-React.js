import Breadcrumb from "@/components/layout/Breadcrumb";
import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { addToCart } from "@/utils/cartitems";
import { toast } from "react-hot-toast";

function SingleProduct({product}){
    const [quantity,setQuantity] = useState(1);
    return (
        <>
        <Head>
            <title>Product name</title>
        </Head>
        <Breadcrumb title={'Product'}/>
        <main>
            <div className="row g-3">
                <div className="col-lg-6">
                    <div className="p-2">
                        <Image src={product?.thumbnail} className="border" width={350} height={300} alt={product?.title}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h2>{product?.title}</h2>
                    <h4 className="card-title d-flex align-items-center"><BiRupee size={21}/>{product?.price}</h4>
                    <h5 className="mt-2">Description</h5>
                    <p>{product?.description}</p>
                    <div className="d-flex gap-3">
                        <b>Qty:</b>
                        <div className="input-group input-group-sm w-25 mb-3 border">
                           <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => setQuantity((quantity>1)?quantity-1:1)}>-</button>
                            <input type="tel" className="form-control" value={quantity}/>
                           <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => setQuantity(quantity + 1)}>+</button>                         
                        </div> 
                    </div>
                    <div className="d-flex gap-3 mt-4">
                        <button type="button" className="btn btn-sm btn-warning" onClick={(e)=>{addToCart(product,quantity),toast.success("Added in cart !")}}>Add to Cart</button>
                        <button type="button" className="btn btn-sm btn-success"><a href="/Buy" class="nav-link font-italic">Buy Now</a></button>
                    </div>
                </div>
            </div> 

        </main>
        </>
    )
}

export default SingleProduct

export async function getServerSideProps(context){
    
    const productId = context.params.slug;
    let product = [];
    try{
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        product = await response.json();
    }catch(error){
        console.error(error)
        return {notFound:true}
    }
    return {
        props:{
            product
        }
    }
}