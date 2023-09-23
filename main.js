import "./style.css";
const projects = document.getElementById("projects");
const data = [
  {
    number: 1,
    name: "CRYPTO TRACKER",
    Link: "https://main--lucent-sunflower-dfc486.netlify.app",
  },

  {
    number: 2,
    name: "SPOTIFY CLONE",
    Link: "https://main--sweet-moxie-f5c56f.netlify.app",
  },
  {
    number: 3,
    name: "REAL ESTATE",
    Link: "https://main--resilient-starship-fa7e96.netlify.app",
  },
  {
    number: 4,
    name: "NETFLIX CLONE",
    Link: "https://main--celadon-beijinho-a24a83.netlify.app",
  },
];
let cur = "";

data.forEach((Element, i) => {
  //   cur += projects.innerHTML;
  cur += `<div class="flex  justify-center  items-center">
  <card class="rounded-xl group duration-1000 ease-in-out  max-w-[320px] overflow-hidden hover:scale-105 hover:duration-1000 hover:ease-in-out max-[400px]:w-[200px] ">
  <img
    class=" hover:opacity-80 duration-1000 ease-in-out  group-hover:scale-105 hover:duration-1000 hover:ease-in-out"
    src="../images/project${Element.number}.jpg"
    alt=""
  />
  <div
    class=" mt-[-4.2rem] translate-y-40 duration-1000 ease-in-out p-4 bg-white group-hover:translate-y-0 group-hover:duration-1000 group-hover:ease-in-out group-hover:bg-white"
  >
    <h1 class="text-center text-xl text-[#0089b7]">
      <a href="${Element.Link}">${Element.name}</a>
    </h1>
  </div>
</card>
</div>`;
});
projects.innerHTML = cur;

//

const drawer = document.getElementById("drawer");
const place = document.getElementById("place");

drawer.addEventListener("click", () => {
  place.classList.toggle("hidden");
});

function collapse() {
  console.log("clicked");
  place.classList.toggle("hidden");
}
