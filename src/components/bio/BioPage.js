import React from "react";
import PageTitle from "../general/titles/PageTitle";

export default function BioPage() {
  return (
    <div className="min-h-screen p-5 content mb-12 ">
      <div
        className="mt-14 flex flex-col items-center justify-center pt-2"
        id="about_me_section"
      >
        <PageTitle title="Hi, my name is Seth" />
        <span className="mt-0">
          <img
            className="rounded-full w-48 h-48 lg:w-56 lg:h-56 z-0"
            src="Profile_Pic.jpg"
            alt="Seth Bradshaw"
          />
        </span>
        <div className="mt-10 flex flex-col items-center text-center p-5 sm:p-8">
          <p className="text-white text-lg mb-10 w-full lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            egestas, est sed convallis lacinia, tortor mi sagittis nulla, et
            sagittis purus quam tincidunt odio. Donec vitae sodales arcu. Donec
            in ex quis magna efficitur condimentum vel eu magna. Donec eu ipsum
            nibh. Donec augue massa, porttitor sit amet dolor sit amet, tempor
            interdum nunc. Quisque scelerisque consequat ante, sagittis
            malesuada lectus facilisis id. Donec eget dolor diam. Praesent nec
            condimentum lectus. Nam gravida felis id ex accumsan, eget venenatis
            tortor sodales. Nullam vestibulum mauris lectus. Mauris et purus at
            metus dapibus cursus id quis ex. Vivamus vitae augue vel libero
            congue cursus. In cursus libero eu elit mattis scelerisque.
          </p>
          <p className="text-white text-lg mb-10 w-full lg:w-2/3">
            Etiam mauris nulla, interdum vel lorem a, finibus imperdiet dui.
            Nulla bibendum est nisi, id condimentum arcu ultrices ac. Mauris sed
            condimentum libero. Suspendisse eget lectus fringilla, molestie
            massa vel, porttitor est. Aenean lobortis varius quam, eget lobortis
            felis dictum sed. Etiam et augue vel dolor vestibulum rutrum. Nulla
            eu viverra magna, ut porttitor felis. Vivamus maximus dui aliquet
            efficitur convallis. Vivamus id bibendum orci, nec pretium ante.
          </p>
          <p className="text-white text-lg w-full lg:w-2/3">
            Aenean semper, turpis a aliquet ultricies, augue enim fermentum
            eros, ut euismod quam libero nec libero. Mauris laoreet lorem et
            urna elementum consequat. Pellentesque elementum, elit vitae
            placerat rutrum, ante mauris cursus nunc, sit amet ornare leo ipsum
            nec metus. Aenean gravida, quam quis rutrum mollis, sem dui
            malesuada ex, id sollicitudin ex dui nec mauris. In at cursus odio,
            ut scelerisque massa. Nullam vitae est condimentum, ullamcorper sem
            eu, egestas mauris. Nunc vitae venenatis nunc. In hac habitasse
            platea dictumst. Duis pretium, massa at accumsan ullamcorper, mi
            massa placerat risus, vel porttitor massa neque et ligula.
          </p>
        </div>
      </div>
    </div>
  );
}
