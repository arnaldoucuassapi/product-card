'use client'

import Image from "next/image";
import productImage from '@/assets/product.svg'
import vector360 from '@/assets/vector-360.svg'
import vectorStroke from '@/assets/vector-stroke.svg'
import { useState } from "react";

export default function Home() {

  const [isRotate, setIsRotate] = useState(false)

  return (
    <main className="h-screen flex flex-wrap content-center justify-center items-center text-violet">
      <section className="flex flex-col items-end">
        <button 
          className="absolute mr-16"
          onClick={() => setIsRotate(!isRotate)}
        >
          {!(isRotate) && (<Image 
            src={vector360}
            alt="Vector 360 icon rotation"
          />)
          }

          {(isRotate) && (<Image 
            src={vectorStroke}
            alt="Vector stroke icon rotation"
          />)
          }
          {/*
          <Image 
          src={!(isRotate) ? vector360 : vectorStroke}
          alt="Vector stroke icon rotation"
          />
          */}
        
        </button>

        <picture>
          <Image
            src={productImage}
            alt="Sofa product image"
          />
        </picture>
      </section>

      <section className="px-3">
        <span className="text-sm font-light">CÓDIGO: 42404</span>
        <h1 className="font-title text-4xl my-3">Sofá Margot II - Rosé</h1>
        <p className="text-base font-normal">R$ 4.000</p>
        <button
          className="px-4 py-2 mt-7 rounded-full border border-violet"
        >
          ADICIONAR À CESTA
        </button>
      </section>
    </main>
  )
}
