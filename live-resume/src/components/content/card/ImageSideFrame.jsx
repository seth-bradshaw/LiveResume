import Image from "next/image"


export default function ImageSideFrame({ src, alt = '' }) {
  return (
    <div className="sm:col-span-2">
    <Image 
      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
        src={src}
        width="200"
        height="48"
        alt={alt}
    />
    </div>
  )
}
