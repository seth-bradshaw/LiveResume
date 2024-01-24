import Content from "@/components/content/Content";
import Header from "@/components/sidenav/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-400">
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: "radial-gradient(600px at 1288px 131px, rgba(29, 78, 216, 0.15), transparent 80%);"}}></div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
          <Content />
        </div>
      </div>
    </div>
  );
}
