import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hexashop - Products",
  description: "Discover a world of endless shopping possibilities at our online store.",
};

async function getData() {
  const res = await fetch('https://dummyjson.com/products') 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function Blog() {
  const data = await getData()
  const products = data.products
  
  return(
    <div className={styles.mainContainer}>
      {
        products.map((product:any) => (
          <Link href={`/blog/${product.id}`} className={styles.post} key={product.id}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.image} 
                src={product.thumbnail}
                fill={true}
                alt="Post image"/>
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.text}>{product.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
  
export default Blog;