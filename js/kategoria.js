//const selectedCategory = window.location.search.split("=")[1];

//const selectedCategory = "natyra";

//const lista = [
//  {
//    name: "shtepia",
//    category: "natyra",
// },
//  {
//    name: "shenmeria",
//   category: "kulture",
// },
// {
//    name: "ujvara",
//    category: "natyra",
//  },
//];

//const lestaere = [];

//lista.forEach(njoni);

//function njoni(fotoja) {
//  if (fotoja.category === selectedCategory) {
//   lestaere.push(fotoja);
// }
//}

//   if (fotoja.category === select) {
//     listaere.push(fotoja);
//   }
// const listaere = [];

// lista.forEach(njoni2);

// function njoni2(fotoja) {
//   if (fotoja.category === select) {
//     listaere.push(fotoja);
//   }
// }
// const selectedCategory = window.location.search.split("=")[1];

// const selectedCategory = "natyre";
// const selectedCategory = "kulture";
// const selectedCategory = "infrastrukture";
// const selectedCategory = "arsim";
// const selectedCategory = "shendet";

// const lista = [
//   { classname: "“Ujvara e Shëngjergjit”" },
//   { name: "shenmeri" },
//   { name: "kollagjeshi" },
// ];

// const listnew = [];

// lista.forEach(first);

// function first(faqja1) {
//   if (faqja1.name === selectedCategory) {
//     listnew.push(faqja1);
//   }
// }

// const element = document.getElementById("titulli-ujvara");
// console.log(element);

// element.innerText = "Ckemi";

//////////////////////

// const lajmi1 = lista[0];

// const lajmi1Html = lajmtTemplate(lajmi1.name, lajmi1.pershkrimi, lajmi1.fotoja);

// finalHtml = lajmi1Html;

// const lajmi2 = lista[1];

// const lajmi2Htnml = lajmtTemplate(
//   lajmi2.name,
//   lajmi2.pershkrimi,
//   lajmi2.fotoja
// );
// finalHtml += lajmi2Htnml;

const selectedCategory = window.location.search.split("=")[1];

const lista = [
  {
    name: "Ujvara e Shëngjergit",
    pershkrimi: `Një sekret i mbajtur i paprekur për një kohë të gjatë, një vend
  magjepsës qëndronte i fshehur në fshatin Shëngjergj të Tiranës.
  Bëhet fjalë për Ujvarën e Shëngjergjit. Përpara 6 vitesh ekzistencën
  e kësaj ujëvarë e dinin vetëm banorët e zonës. Por pasi u eksplorua
  nga fotografët dhe fotot e ujëvarës filluan të bëhen të njohura,
  menjëherë filluan vizitat nga guidat e shumta dhe tani ajo është një
  dëstinacion shumë i frekuentuar nga turistët, ku më të shumtë janë
  banorët e Tiranës...`,
    fotoja: "FOTO/ujvara.png",
    category: "natyra",
    href: "lajmi.html",
  },
  {
    name: "Ujvara e Shëngjergit",
    pershkrimi: `Një sekret i mbajtur i paprekur për një kohë të gjatë, një vend
  magjepsës qëndronte i fshehur në fshatin Shëngjergj të Tiranës.
  Bëhet fjalë për Ujvarën e Shëngjergjit. Përpara 6 vitesh ekzistencën
  e kësaj ujëvarë e dinin vetëm banorët e zonës. Por pasi u eksplorua
  nga fotografët dhe fotot e ujëvarës filluan të bëhen të njohura,
  menjëherë filluan vizitat nga guidat e shumta dhe tani ajo është një
  dëstinacion shumë i frekuentuar nga turistët, ku më të shumtë janë
  banorët e Tiranës...`,
    fotoja: "FOTO/ujvara.png",
    category: "natyra",
    href: "lajmi.html",
  },
  {
    name: "Shkolla e parë shqipe në Qarkun e Tiranës",
    category: "arsimi",
    pershkrimi: `Një sekret i mbajtur i paprekur për një kohë të gjatë, një vend
    magjepsës qëndronte i fshehur në fshatin Shëngjergj të Tiranës.
    Bëhet fjalë për Ujvarën e Shëngjergjit. Përpara 6 vitesh ekzistencën
    e kësaj ujëvarë e dinin vetëm banorët e zonës. Por pasi u eksplorua
    nga fotografët dhe fotot e ujëvarës filluan të bëhen të njohura,
    menjëherë filluan vizitat nga guidat e shumta dhe tani ajo është një
    dëstinacion shumë i frekuentuar nga turistët, ku më të shumtë janë
    banorët e Tiranës...`,
    fotoja: "FOTO/shkolla.png",
    href: "lajmi2.html",
  },
  {
    name: "Hiking në Malin me Gropa",
    category: "infrastruktura",
    pershkrimi: `Një sekret i mbajtur i paprekur për një kohë të gjatë, një vend
    magjepsës qëndronte i fshehur në fshatin Shëngjergj të Tiranës.
    Bëhet fjalë për Ujvarën e Shëngjergjit. Përpara 6 vitesh ekzistencën
    e kësaj ujëvarë e dinin vetëm banorët e zonës. Por pasi u eksplorua
    nga fotografët dhe fotot e ujëvarës filluan të bëhen të njohura,
    menjëherë filluan vizitat nga guidat e shumta dhe tani ajo është një
    dëstinacion shumë i frekuentuar nga turistët, ku më të shumtë janë
    banorët e Tiranës...`,
    fotoja: "FOTO/hiking.png",
    href: "lajmi3.html",
  },
];

const listaeRe = [];

lista.forEach(each);

function each(fotoja) {
  if (fotoja.category === selectedCategory) {
    listaeRe.push(fotoja);
  }
}

console.log("listaeRe", listaeRe);

const lajmtTemplate = (emri, pershkrimi, fotoja, href) => `
<div class="card col-sm m-5" style="width: 500px">
  <img
    id="foto1"
    class="card-img-top img-fluid"
    src=${fotoja}
    alt=""
  />
  <div class="card-body">
    <h5 class="card-title">${emri}</h5>
    <p class="card-text">
    ${pershkrimi}
      <a href=${href} class="btn btn-primary">Lexo lajmin</a>
    </p>
  </div>
</div>
`;

let finalHtml = "";
const lajmet = document.getElementById("lajmet");

listaeRe.forEach(each1);

function each1(lajmi) {
  const lajmiHtml = lajmtTemplate(
    lajmi.name,
    lajmi.pershkrimi,
    lajmi.fotoja,
    lajmi.href
  );
  console.log(lajmiHtml);
  finalHtml += lajmiHtml;
}

lajmet.innerHTML = finalHtml;
