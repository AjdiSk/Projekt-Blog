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
    name: "Hiking në Malin me ",
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

  {
    name: "Liqeni i Kollagjeshit, “kurora” e Shëngjergjit",
    category: "natyra",
    pershkrimi: `Për këtë udhëtim bëni mirë të mblidhni mirë forcat për dy arsye: Në radh
    të parë do ngjitemi në maj të fshatit në radhë të dytë më besoni ky vend
    është një përrall që të le pa mend. Liqeni i Kollagjeshit, gjelbërimi e
    rrethon si një kurore qe e kurorëzon perëndeshë bukurie te kësaj zone,
    uji ka një ngjyrë të smeraldë që të ngjall idenë sikur je ne përralla.`,
    fotoja: "FOTO/kollagjeshi.png",
    href: "lajmi4.html",
  },
  {
    name: "Shkatërrimi i mushkërive",
    category: "infrastruktura",
    pershkrimi: `Shkojmë në Shëngjergj për shumë arsye por më kryesorja për shkak të
    ajrit të pastër që ka. Por kur e vizitojmë më hollësisht kuptojmë që
    mushkuritë e Shëngjergjit janë dëmtuar sadopak dhe vazhdojnë të
    dëmtohen.`,
    fotoja: "FOTO/pyjet.png",
    href: "lajmi5.html",
  },
  {
    name: "“Shën Mëri”, fshat me emër katolik, por me besim fetar mysliman",
    category: "kulture",
    pershkrimi: `Emri “Shën Mëri” mund të ketë një origjinë të lidhur me kulturën katolike apo të krishterë të kaluar në zonën e Shëngjergjit, por në kontekstin e përdorimit të tij aktual, ky emër përdoret edhe për të përshkruar një zonë që është e rëndësishme për komunitetin mysliman. Besimi mysliman ka një histori të gjatë dhe të ndjeshme në Shqipëri, me një numër të konsiderueshëm të besimtarëve që jetojnë dhe praktikojnë fesën e tyre në këtë vend. Nga informacionet e marra nga banorët e kësaj zone, lidhet një histori mjaft e veçantë. se besimi fetar para shumë kohësh ishte katolik, pra në kohën e Perandorisë Romake.
    Duket qartë qe nga vetë emri, Shën Mëri, një emër tipik me prejardhje nga besimi fetar katolik. Por me ardhjen e sulmimit turk, besimi fetar ka ndryshuar. Po ashtu janë ndërtuar edhe xhami, dhe pothuajse banorët janë të besimit fetar mysliman. Zona e Shën Mërisë në Shëngjergj është një pjesë e rëndësishme e peizazhit fetar mysliman, duke përfaqësuar një qendër të rëndësishme për praktikat dhe traditat islame. Kështu, edhe pse emri mund të ketë origjinë të krishterë, aktualisht përdoret për të përshkruar një zonë që është e rëndësishme për besimtarët myslimanë për shkak të objekteve fetare dhe aktiviteteve të tyre të rëndësishme kulturore dhe fetare.`,
    fotoja: "FOTO/img1.png",
    href: "lajmi7.html",
  },
  {
    name: "“Shtëpiza frymëzuse e Bizës”",
    category: "natyra",
    pershkrimi: `Bizë e Martaneshit është një fshat me vlera historike, i harruar nga
    banorët. Biza është zonë e vogël që ndodhet pak kilometra nga qendra e
    Shëngjergjit. Tanimë ska asnjë banorë të qëndrueshëm, të vetmit janë
    fshatarët që kanë stane, ushtarët që bëjnë stërvitje dhe vizitorët e
    ndryshëm. Por natyra është e mahnitshme dhe ka një bukuri të vecantë.`,
    fotoja: "FOTO/biza1.png",
    href: "lajmi8.html",
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
const kategoria1 = document.getElementById("kategoria1");

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
kategoria1.innerText =
  selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
lajmet.innerHTML = finalHtml;
