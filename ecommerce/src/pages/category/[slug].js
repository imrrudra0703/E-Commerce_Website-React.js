import ProductCart from "@/components/cards/ProductCart";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function CategoryProducts({products}){
    
    const router = useRouter();
    const categoryName = router?.query?.slug;
 
    return (
        <>
            <Head>
                <title>{categoryName}</title>
            </Head>
            <main className="mb-4">
                <Breadcrumb title={`${categoryName?.toLocaleUpperCase()} - Products`}/>
                <div className="row">
                    {
                        products && products.map((item)=>{
                            return (
                                <div key={item.id} className="col-md-4">
                                    <div className="mt-4">
                                      <ProductCart product = {item}/>
                                    </div>   
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default CategoryProducts

export async function getServerSideProps(context){
    
    const category = context.params.slug;

    let products = [];  
      try{
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const result = await response.json();
        products = result.products;
    
      } catch(error){
        return {notFound:true} 
      }
    
      return {
        props : {
           products
        }
      }
    }
    