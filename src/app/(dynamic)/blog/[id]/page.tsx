import Image from "next/image";
import styles from "./page.module.css"
import { Metadata, ResolvingMetadata } from 'next'

async function getData(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await getData(params.id)
 
  return {
    title: product.title,
    description: product.description
  }
}

type postParams = {
  id: string
}

async function Post({params}:any) {
  const product = await getData(params.id)

  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image} 
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image:string) => (
            <Image 
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam nesciunt sit corrupti dolorum repellat voluptatum quod asperiores expedita corporis dignissimos iure esse perspiciatis, eos beatae. Dolor rerum corporis sapiente perferendis quis itaque quaerat commodi soluta dolorum? Vitae facere ullam consequuntur voluptatum doloribus necessitatibus odit ipsa. Commodi suscipit totam ipsam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam nesciunt sit corrupti dolorum repellat voluptatum quod asperiores expedita corporis dignissimos iure esse perspiciatis, eos beatae. Dolor rerum corporis sapiente perferendis quis itaque quaerat commodi soluta dolorum? Vitae facere ullam consequuntur voluptatum doloribus necessitatibus odit ipsa. Commodi suscipit totam ipsam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam nesciunt sit corrupti dolorum repellat voluptatum quod asperiores expedita corporis dignissimos iure esse perspiciatis, eos beatae. Dolor rerum corporis sapiente perferendis quis itaque quaerat commodi soluta dolorum? Vitae facere ullam consequuntur voluptatum doloribus necessitatibus odit ipsa. Commodi suscipit totam ipsam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam nesciunt sit corrupti dolorum repellat voluptatum quod asperiores expedita corporis dignissimos iure esse perspiciatis, eos beatae. Dolor rerum corporis sapiente perferendis quis itaque quaerat commodi soluta dolorum? Vitae facere ullam consequuntur voluptatum doloribus necessitatibus odit ipsa. Commodi suscipit totam ipsam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam nesciunt sit corrupti dolorum repellat voluptatum quod asperiores expedita corporis dignissimos iure esse perspiciatis, eos beatae. Dolor rerum corporis sapiente perferendis quis itaque quaerat commodi soluta dolorum? Vitae facere ullam consequuntur voluptatum doloribus necessitatibus odit ipsa. Commodi suscipit totam ipsam.
        </p>
      </div>
      
    </div>
  )
}
  
export default Post;