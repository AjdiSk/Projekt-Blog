const vendi = document.getElementById("vendi");
const lexo = document.getElementById("lexo");

const lista = [
  {
    titulli: "“Ujvara e Shëngjergjit”",
    shkrimi: `"Ujvara e Shëngjergjit një tjetër pasuri natyrore e Tiranës. Një sekret i
    mbajtur i paprekur për një kohë të gjatë, një vend magjepsës qëndronte i
    fshehur në fshatin Shëngjergj të Tiranës. Bëhet fjalë për Ujvarën e
    Shëngjergjit. Përpara 6 vitesh ekzistencën e kësaj ujëvarë e dinin vetëm
    banorët e zonës. Por pasi u eksplorua nga fotografët dhe fotot e
    ujëvarës filluan të bëhen të njohura, menjëherë filluan vizitat nga
    guidat e shumta dhe tani ajo është një dëstinacion shumë i frekuentuar
    nga turistët, ku më të shumtë janë banorët e Tiranës.`,
    foto: "FOTO/ujvara.png",
    lexo1: "lajmi.html",
  },
  {
    titulli: "Shkolla e parë shqipe në Qarkun e Tiranës",
    shkrimi: `Shkolla e parë shqipe në qarkun e Tiranës, në fshatin Shëngjergj. Kjo
    ngjarje shënon një hap të madh për edukimin në gjuhën amtare dhe për
    ruajtjen e identitetit kombëtar. Shkolla u themelua me përpjekjet e
    intelektualëve dhe patriotëve të kohës, të cilët u angazhuan për të
    përhapur dijen dhe kulturën shqiptare. Për herë të parë, fëmijët e zonës
    patën mundësinë të mësojnë në gjuhën e tyre amtare, një arritje që
    kontribuoi në forcimin e vetëdijes kombëtare dhe në ruajtjen e gjuhës
    dhe kulturës shqiptare. Hapja e kësaj shkolle në Shëngjergj përfaqësonte
    jo vetëm një arritje të rëndësishme për zonën, por edhe një simbol të
    përpjekjeve të shqiptarëve për arsim dhe zhvillim kombëtar.`,
    foto: "FOTO/shkolla.png",
    lexo1: "lajmi2.html",
  },
  {
    titulli: "Hiking në Malin me Gropa",
    shkrimi: `Hiking në malin me gropa është një eksperiencë e mahnitshme dhe sfiduese
    për aventurierët natyrore. Ky mal, i njohur për reliev të vështirë dhe
    peizazhe të mrekullueshme, është shtëpi për shumë gropa natyrore që
    ofrojnë një panoramë të mrekullueshme dhe ndjesinë e aventurës. Gropat e
    malit janë të shkaktuara nga proceset natyrore si erozioni dhe
    aktiviteti tektonik, duke krijuar vrima të thella dhe impresionuese në
    terrenin malor. Kjo eksperiencë e mrekullueshme të jep mundësinë për të
    ndenjur në kontakt të ngushtë me natyrën, për të frymëzuar dhe për të
    shijuar emocionet e natyrës së egër.`,
    foto: "FOTO/hiking1.png",
    lexo1: "lajmi3.html",
  },
  {
    titulli: "Liqeni i Kollagjeshit, “kurora” e Shëngjergjit",
    shkrimi: `Për këtë udhëtim bëni mirë të mblidhni mirë forcat për dy arsye: Në radh
    të parë do ngjitemi në maj të fshatit në radhë të dytë më besoni ky vend
    është një përrall që të le pa mend. Liqeni i Kollagjeshit, gjelbërimi e
    rrethon si një kurore qe e kurorëzon perëndeshë bukurie te kësaj zone,
    uji ka një ngjyrë të smeraldë që të ngjall idenë sikur je ne përralla.`,
    foto: "FOTO/kollagjeshi.png",
    lexo1: "lajmi4.html",
  },
  {
    titulli: "Shkatërrimi i mushkërive",
    shkrimi: `Shkojmë në Shëngjergj për shumë arsye por më kryesorja për shkak të
    ajrit të pastër që ka. Por kur e vizitojmë më hollësisht kuptojmë që
    mushkuritë e Shëngjergjit janë dëmtuar sadopak dhe vazhdojnë të
    dëmtohen.`,
    foto: "FOTO/pyjet.png",
    lexo1: "lajmi5.html",
  },
];

const template = (titulli, shkrimi, foto, lexo1) =>
  `<div id="lajmi" class="card" style="max-width: 1400px">
  <div class="row">
    <div class="col-md-4">
      <img
        src=${foto}
        style="width: 400px"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style="font-size: x-large">
          ${titulli}
        </h5>
        <p class="card-text">
          ${shkrimi}
        </p>
        <a href=${lexo1} class="btn btn-primary">Lexo lajmin</a>
      </div>
    </div>
  </div>
</div>
  `;

const each = (e) => {
  const lajmi1 = lista[0];
  const lajmet = lista
    .map((lajmi) =>
      template(lajmi.titulli, lajmi.shkrimi, lajmi.foto, lajmi.lexo1)
    )
    .join("");

  vendi.innerHTML = lajmet;
};
lexo.addEventListener("click", each);
