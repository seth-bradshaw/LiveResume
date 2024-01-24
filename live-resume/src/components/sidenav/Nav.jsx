export default function Nav({label, href, active}) {
  return (
    <a className='group flex items-center py-3' href={`#${href}`}>
        <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200' />
        <span className='text-xs font-bold uppercase text-slate-500 group-hover:text-slate-200 group-hover-visible:text-slate-200'>{label}</span>
    </a>
  )
}
