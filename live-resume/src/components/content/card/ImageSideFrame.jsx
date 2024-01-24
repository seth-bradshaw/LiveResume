import Image from "next/image"


export default function ImageSideFrame({ src, alt = '' }) {
  return (
    <Image 
        src={src}
        width={200}
        height={48}
        alt={alt}
    />
  )
}
