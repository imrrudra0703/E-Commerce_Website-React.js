import React from "react";
import Link from "next/link";
import { BiCartAdd, BiRupee } from "react-icons/bi";
import Image from "next/image";
import { addToCart, getCartItem } from "@/utils/cartitems";
import { toast } from "react-hot-toast";

function ProductCart({product}){     
    return(
        <div className="card">
            <Link href={`/product/${product?.id}`}>
                <div className="object-fit-cover">
                    <Image src={product?.thumbnail} width={200} height={200} alt="{product.title}" className="card-img-top"/>
                </div>
            </Link> 
            <div className="card-body">
                <Link href={`/product/${product?.id}`} className="text-decoration-none ">
                    <h5 className="card-title text-black">{product?.title}</h5>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title d-flex align-items-center">
                        <BiRupee size={21}/>
                        {product?.price}
                    </h6>
                <div className=""> 
                    <button className="btn btn-warning btn-sm mx-2" onClick={()=> {addToCart(product,1),toast.success("Added in cart !")}}><BiCartAdd size={22}/></button>
                    <button className="btn btn-success bt-sm"><a href="/Buy" class="nav-link font-italic">Buy</a></button>
                </div>    
                </div>
            </div>
        </div> 
    )
}
export default ProductCart