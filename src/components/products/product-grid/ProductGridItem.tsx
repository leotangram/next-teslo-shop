'use client'

import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ProductGridItemProps {
  product: Product
}

export const ProductGridItem = ({ product }: ProductGridItemProps) => {
  const {
    description,
    gender,
    images,
    inStock,
    price,
    sizes,
    slug,
    tags,
    title,
    type
  } = product

  const [displayImage, setDisplayImage] = useState(images[0])

  return (
    <div className="rounded-md  overflow-hidden fade-in">
      <Link href={`/product/${slug}`}>
        <Image
          className="w-full object-cover rounded"
          src={`/products/${displayImage}`}
          alt={title}
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(images[1])}
          onMouseLeave={() => setDisplayImage(images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${slug}`}>
          {title}
        </Link>
        <span className="font-bold">${price}</span>
      </div>
    </div>
  )
}
