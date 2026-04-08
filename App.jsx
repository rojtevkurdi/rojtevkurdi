import { useState, useEffect, useRef } from "react";

const C={red:"#C8102E",green:"#006633",gold:"#F5A623",goldD:"#c47d0a",ink:"#e8e4dc",ink2:"#c8c4bc",muted:"#8a8880",bg:"#111118",card:"rgba(28,28,38,.92)",border:"rgba(255,255,255,.09)"};

const T={
  ku:{
    nav:["Destpêk","Projeyên RTK","Proje","Beşdar Bibe","Karta Kurdî","Qonax","Rêgez","Pêwendî","Bankkarîya Dîjîtal","Gotar"],
    icons:["⌂","🌐","◈","✦","⊞","◉","◎","✉","💳","✍"],
    badge:"Projeya Nasnameya Kurdî ya Dîjîtal · 2025",
    sub:"Ziman Avakirina Xwebûnê Yê · Delîla Xwebûnê Nasnameya Yê",
    desc:"Ji bo her kesên kurdî li seranserê dinyayê, nasnameyeke dîjîtal a bi bingeha çandî û bi taybetmendiya neteweyî. Gaveke aştîyane, li jora polîtîkayê û serbixwe.",
    btn1:"☀  Beşdar Bibe",btn2:"Zêdetir Bizane",
    statL:["Beşdar","Parçeyên Kurdistanê","Zaravayên Kurdî","Qonax"],
    quickT:"Seksiyonên Bilez",
    howLabel:"Çawa Dixebite?",howT:"Ji bo Beşdariyê 4 Gav",
    steps:[
      ["01","Hesabê Duyemîn Veke","Ji hesabê xwe yê şexsî cuda, hesabeke nû ya X'ê veke. Ev hesab nasnameya te ya dîjîtal a sembolîk a kurdî ye. Tenê 10 deqe bes e.","Îro dikare bê kirin"],
      ["02","Nasnameya Sembolîk Sêwirîne","Nav û paşnavekî kurdî hilbijêre. Logoya civakê weke wêneya profîlê bi kar bîne. Parvekirinên xwe bi zaravayên kurdî bike.","Hemû zarava têne qebûlkirin"],
      ["03","@rojtevkurdi û @torakurdakurdi Bişopîne","Bi hesabê xwe yê duyemîn, van du hesabên koordînasyonê yên fermî bişopîne.","Gaveke mecbûrî"],
      ["04","Nasnameya Xwe ya Dîjîtal Bistîne","Navê bikarhênerê xwe yê X'ê binivîse. Piştî verîfîkasyonê, karteke nasnameya dîjîtal a kurdî tê dayîn.","Belaş · Ji bo hemûyan"],
    ],
    phLabel:"Nexşerêya Projeyê",phT:"Modela Sêqonaxî ya Pêşveçûnê",
    ph:[
      ["🐦","Qonaxa 1 · Niha","X / Twitter · Mastodon","Nasnameyên dîjîtal ên sembolîk, zimanê hevpar, xuyabûna kolektîf.","Çalak","#006633"],
      ["🌐","Qonaxa 2 · Nêzîk","Web + Sepana Mobîl","Sîstematîzekirin, ewlekariya daneyan, rêxistinkirin û gihîştina teknîkî.","Di Pêşveçûnê de","#c47d0a"],
      ["⛓","Qonaxa 3 · Pêşeroj","Blockchain · Web3 · SBT","SoulBound Token: naguhere, nayê veguheztin, nayê jêbirin.","Vîzyon","#C8102E"],
    ],
    prLabel:"Prensîbên Beşdariyê",prT:"Rêgezên Bingehîn",
    pr:[
      ["☮","Aştîyane û Li Jora Polîtîkayê","Bi tu partiyeke siyasî ve girêdayî nine. Bi tevahî çandî û civakî ye."],
      ["🌍","Ji bo Hemûyan Vekirî","Ne hewce ye kurd bî an jî kurdî bizanî. Her kesê piştgiriyê bike dikare beşdar bibe."],
      ["🔒","Nepenîtî û Ewlekarî","Navê sembolîk tê bikaranîn. Agahiyên kesane nayêne parve kirin."],
      ["⚖","Ragihandina Etîkî","Rêzdarî, nezaket û kapsayîtî prensîbên bingehîn in."],
      ["🗣","Hemû Zaravayên Kurdî","Kurmancî · Soranî · Zazakî · Goranî · Lekî · Kelhûrî · Lorî"],
      ["⏱","Hewldana Herî Kêm","Her roj çalak bûn mecbûrî nine. Parvekirineke salê carekê jî bi qîmet e."],
    ],
    fLabel:"Beşdar Bibe",fT:"Nasnameya Xwe Bistîne",
    fSub:"Navê bikarhênerê hesabê xwe yê duyemîn ê X'ê binivîse. Piştî verîfîkasyonê nasnameya te tê amadekirin.",
    checks:["Hesabek duyemîn ê X/Twitter vekir û navekî kurdî bi kar anî","@rojtevkurdi û @torakurdakurdi şopand","Rêgezên projeyê xwendin û qebûl kirin"],
    fn:"Nav (Kurdî)",fs:"Paşnav (Kurdî)",ft:"Navê Bikarhênerê X",fr:"Herêm / Diyaspora",
    frs:["Hilbijêre...","Bakur","Başûr","Rojava","Rojhilat","Diyaspora — Ewropa","Diyaspora — Amerîka","Diyaspora — Din","Ne kurd im, piştgir im"],
    fbtn:"☀  Nasnameya Xwe Bistîne",
    fok:"Tomarkirin bi serfirazî bû! Nasnameya te tê amadekirin. Hesabê @rojtevkurdi bişopîne.",
    fnote:"Ji bo pirsan:",
    qt:'"Ziman Avakirina Xwebûnê Yê"',qs:'"Language is the Construction of Selfhood"',
    qa:"Welat Rodî · Roj Tev Kurdî · 2017",
    exLabel:"Nasnameya Nimûne",founder:"Damezrîner",
    contactT:"Pêwendî",contactDesc:"Ji bo pirsên xwe, pêşniyar û hevkariyê bi me re têkilî daynin.",
    contactLinks:"Hesabên Fermî yên Proje",
    copy:"© 2017–2025 WR · Hemû mafên parastî ne.",
    copyNote:"Roj Tev Kurdî · KurDîjîtal Welat · Tora Kurda-Kurdî · Nasnameya Dîjîtal nasKURD · RojaMe Credit · Xwediyê lisans, patentê û hemû mafên telîfê WR e · Kopîkirin, teqlîdkirin û bikaranîna bê destûr qedexeye.",
    alert:"Nav û navê bikarhêner binivîse!",langLabel:"Kurmancî",
  },
  so:{
    nav:["دەستپێک","پڕۆژەکانی RTK","پڕۆژە","بەشدار بە","کارتی کوردی","قۆناغ","ڕێسا","پەیوەندی","بانككارتی دیجیتاڵ","گوتار"],
    icons:["⌂","🌐","◈","✦","⊞","◉","◎","✉","💳","✍"],
    badge:"پڕۆژەی ناسنامەی دیجیتاڵی کوردی · ٢٠٢٥",
    sub:"زمان بنیادنانی خۆیە · بەڵگەی ناسنامە",
    desc:"بۆ هەموو کوردەکان لە سەرانسەری جیهان، ناسنامەیەکی دیجیتاڵی بنەمای کولتووری و نیشتمانی.",
    btn1:"☀  بەشدار بە",btn2:"زیاتر بزانە",
    statL:["بەشدار","بەشەکانی کوردستان","زارەکانی کوردی","قۆناغ"],
    quickT:"بەشە خێراکان",
    howLabel:"چۆن کار دەکات؟",howT:"٤ هەنگاو بۆ بەشداری",
    steps:[
      ["01","ئەکاونتی دووەم بکرەوە","لەگەڵ ئەکاونتی کەسیت جیا، ئەکاونتێکی نوێی X بکرەوە. تەنها ١٠ خولەک پێویستە.","ئەمڕۆ دەتوانیت"],
      ["02","ناسنامەی سیمبۆڵییەکەت دیزاین بکە","ناو و ناوبانگێکی کوردی هەڵبژێرە. لۆگۆی کۆمەڵگا بە وێنەی پرۆفایل بەکار بهێنە.","هەموو زارەکان قبووڵن"],
      ["03","@rojtevkurdi و @torakurdakurdi دوابکەوە","بە ئەکاونتی دووەمت، ئەم دوو ئەکاونتی هاماهەنگییە بدواکەوە.","هەنگاوێکی پێویست"],
      ["04","ناسنامەی دیجیتاڵییەکەت وەربگرە","ناوی بەکارهێنەری X تایپ بکە. دوای پشتڕاستکردنەوە کارتی ناسنامە دەدرێتێ.","خۆڕایی · بۆ هەمووان"],
    ],
    phLabel:"نەخشەی ڕێی پڕۆژە",phT:"مۆدێلی سێ قۆناغی پێشکەوتن",
    ph:[
      ["🐦","قۆناغی ١","X / Twitter · Mastodon","ناسنامەی سیمبۆڵی، زمانی هاوبەش.","چالاک","#006633"],
      ["🌐","قۆناغی ٢","ماڵپەڕ + ئەپی مۆبایل","سیستەماتیزەکردن، پاراستنی داتا.","لە پێشکەوتندایە","#c47d0a"],
      ["⛓","قۆناغی ٣","Blockchain · Web3 · SBT","SoulBound Token: ناگۆڕێت، ناسڕێتەوە.","ڤیزیۆن","#C8102E"],
    ],
    prLabel:"ڕێسای بەشداری",prT:"ڕێنماییەکانی بنەڕەتی",
    pr:[
      ["☮","ئاشتیخوازانە · لە سەرەوەی پۆلیتیکا","پەیوەندی بە هیچ پارتییەکی سیاسی نییە."],
      ["🌍","کراوەیە بۆ هەمووان","پێویست نییە کورد بیت. هەرکەسێک دەتوانێت بەشدار بێت."],
      ["🔒","نهێنی و ئارامگیری","ناوی سیمبۆڵی بەکاردێت."],
      ["⚖","پەیوەندی ئەخلاقی","ڕێزلێنان، نەرمی و گشتگیری ڕێسای بنەڕەتین."],
      ["🗣","هەموو زارەکانی کوردی","کورمانجی · سۆرانی · زازایی · گۆرانی · لەکی · کەلهوڕی · لوری"],
      ["⏱","کەمترین هەوڵ","پێویست نییە هەموو ڕۆژ چالاک بیت."],
    ],
    fLabel:"بەشدار بە",fT:"ناسنامەکەت وەربگرە",
    fSub:"ناوی بەکارهێنەری ئەکاونتی دووەمت داخڵ بکە.",
    checks:["ئەکاونتی دووەم بکراوە و ناوی کوردی بەکارهێنراوە","@rojtevkurdi و @torakurdakurdi دواکراوەتەوە","ڕێساکانی پڕۆژە خوێندراوەتەوە و قبووڵکراون"],
    fn:"ناو (کوردی)",fs:"ناوبانگ (کوردی)",ft:"ناوی بەکارهێنەری X",fr:"ناوچە / دیاسپۆرا",
    frs:["هەڵبژێرە...","باکووری کوردستان","باشووری کوردستان","ڕۆژئاوای کوردستان","ڕۆژهەڵاتی کوردستان","دیاسپۆرا — ئەوروپا","دیاسپۆرا — ئەمریکا","دیاسپۆرا — تر","کورد نیم، پشتگیرم"],
    fbtn:"☀  ناسنامەکەت وەربگرە",
    fok:"تۆمارکردن سەرکەوتوو بوو! ناسنامەکەت ئامادە دەکرێت.",
    fnote:"بۆ پرسیار:",
    qt:'"Ziman Avakirina Xwebûnê Yê"',qs:'"Language is the Construction of Selfhood"',
    qa:"Welat Rodî · Roj Tev Kurdî · 2017",
    exLabel:"نموونەی ناسنامە",founder:"دامەزرێنەر",
    contactT:"پەیوەندی",contactDesc:"بۆ پرسیار، پێشنیار و هاوکاری پەیوەندیمان پێوە بکە.",
    contactLinks:"ئەکاونتە فەرمییەکانی پڕۆژە",
    copy:"© 2017–2025 WR · هەموو مافەکان پارێزراون.",
    copyNote:"Roj Tev Kurdî · KurDîjîtal Welat · Tora Kurda-Kurdî · nasKURD · RojaMe Credit · خاوەنی لایسەنس، پەتەنت و هەموو مافەکانی تەلیفی WR ە · کۆپیکردن، شێبازکردن و بەکارهێنانی بێ مۆڵەت قەدەغەیە.",
    alert:"ناو و ناوی بەکارهێنەر داخڵ بکە!",langLabel:"Soranî",
  },
  za:{
    nav:["Destpêk","Proyayê RTK","Proya","Beşdar Bê","Karta Kurdî","Qonax","Rêge","Têkilî","Bankkarîya Dîjîtal","Gotar"],
    icons:["⌂","🌐","◈","✦","⊞","◉","◎","✉","💳","✍"],
    badge:"Proyaya Nasnameyê Dîjîtalî yê Kurdî · 2025",
    sub:"Zıwan Avakerdışê Xwebiyayışî Yo · Delîla Nasnameyî",
    desc:"Seba heme kurdanê dınyay, nasnameyêka dîjîtalî ya bingehê ferhengî û taybetmendiya neteweyî. Gavêka aştîyane, serê polîtîkayî û serbest.",
    btn1:"☀  Beşdar Bê",btn2:"Zêdey Bızane",
    statL:["Beşdar","Parçeyê Kurdistanî","Zaravayê Kurdkî","Qonax"],
    quickT:"Bêşê Zûyî",
    howLabel:"Çıçık Kar Keno?",howT:"4 Gav Seba Beşdarî",
    steps:[
      ["01","Hesabê Dıyemên Vake","Hesabê xo yê şexsî ra ciya, hesabêko neweyê X vake. Tenê 10 deqîqe beso.","Iroye beno"],
      ["02","Nasnameyê Sembolîkî Sêwirne","Nameyêko kurdkî û soyadêko kurdkî hêl bıcnê. Logoya komelê wextê profilê bıkarbîne.","Heme zaravar qebul bênê"],
      ["03","@rojtevkurdi û @torakurdakurdi Sıpêr Kê","Bi hesabê xo yê dıyemên, hınê di hesaban rêsmîyanê koordînasyonî sıpêr kê.","Gavêka mecburî"],
      ["04","Nasnameyê Xo yê Dîjîtalî Bıgê","Nameyê karberî X-ê xo binusne. Pey verîfîkasyonî karttêka nasnameyê dîjîtalî tê dayîn.","Belaş · Seba hemeyan"],
    ],
    phLabel:"Nexşeyê Proyayî",phT:"Modela Sê Qonaxî yê Pêşveçûnî",
    ph:[
      ["🐦","Qonaxa 1","X / Twitter · Mastodon","Nasnameyê sembolîkî, zıwanê hewl, xuya biyayışê kolektîf.","Çalak","#006633"],
      ["🌐","Qonaxa 2","Web + Sepana Mobîl","Sîstematîzekerdış, ewlekerdışê daneyan.","Di Pêşveçûnê de","#c47d0a"],
      ["⛓","Qonaxa 3","Blockchain · Web3 · SBT","SoulBound Token: nagurero, nêvegurero, nêcêreno.","Vîzyon","#C8102E"],
    ],
    prLabel:"Prensîbê Beşdarî",prT:"Rêgeyê Bingehênî",
    pr:[
      ["☮","Aştîyane û Serê Polîtîkayî","Bi hîç partîyêka siyasî ra girêdayî niyo."],
      ["🌍","Seba Hemeyan","Lazım niyo kurd bê. Her kesê piştevanî keno beno beşdar."],
      ["🔒","Nepenî û Ewlekî","Nameyê sembolîkî bıkarbîyêno."],
      ["⚖","Etîkî","Rêzbiyayış, nermî û kapsayîtî prensîbê bingehênî yê."],
      ["🗣","Heme Zaravayê Kurdkî","Kurmancî · Soranî · Zazakî · Goranî · Lekî · Kelhûrî · Lorî"],
      ["⏱","Hewldana Herî Kêm","Her roje çalak biyayış mecburî niyo."],
    ],
    fLabel:"Beşdar Bê",fT:"Nasnameyê Xo Bıgê",
    fSub:"Nameyê karberyê hesabê xo yê dıyemên yê X binusne.",
    checks:["Hesabêko dıyemên viraşto û nameyêko kurdkî bıkarbiyayo","@rojtevkurdi û @torakurdakurdi sıpêr biyayo","Rêgeyê proyayî wendayo û qebul biyayo"],
    fn:"Name (Kurdkî)",fs:"Soyad (Kurdkî)",ft:"Nameyê Karberî X",fr:"Herêm / Diyaspora",
    frs:["Hêl bıcne...","Bakur","Başûr","Rojava","Rojhilat","Diyaspora — Ewropa","Diyaspora — Amerîka","Diyaspora — Bîn","Kurd niyo, piştevanî"],
    fbtn:"☀  Nasnameyê Xo Bıgê",
    fok:"Tomarkerdış serfiraz bî! Nasnameyê te amade bêno.",
    fnote:"Seba pirsî:",
    qt:'"Zıwan Avakerdışê Xwebiyayışî Yo"',qs:'"Language is the Construction of Selfhood"',
    qa:"Welat Rodî · Roj Tev Kurdî · 2017",
    exLabel:"Nasnameyê Nimûne",founder:"Damezrêner",
    contactT:"Têkilî",contactDesc:"Seba pirsî, pêşnîyarî û hevkarî bi me ra têkilî bigê.",
    contactLinks:"Hesabê Rêsmîyê Proyayî",
    copy:"© 2017–2025 WR · Heme mafî paritî yê.",
    copyNote:"Roj Tev Kurdî · KurDîjîtal Welat · Tora Kurda-Kurdî · Nasnameya Dîjîtal nasKURD · RojaMe Credit · Xawenê lisansî, patentî û heme mafanê telîfî WR ê · Kopîkerdış, teqlîdkerdış û bıkarbiyayışê bê destûr qedexe yo.",
    alert:"Name û nameyê karberî binusne!",langLabel:"Zazakî",
  },
  en:{
    nav:["Home","RTK Projects","Project","Join","Kurdish ID","Phases","Principles","Contact","Digital Banking","Articles"],
    icons:["⌂","🌐","◈","✦","⊞","◉","◎","✉","💳","✍"],
    badge:"Digital Kurdish Identity Project · 2025",
    sub:"Language is the Construction of Selfhood · Proof of Identity",
    desc:"A peaceful initiative providing every Kurdish individual worldwide with a culturally rooted, nationally recognized digital identity.",
    btn1:"☀  Join Now",btn2:"Learn More",
    statL:["Participants","Parts of Kurdistan","Kurdish Dialects","Phases"],
    quickT:"Quick Navigation",
    howLabel:"How Does It Work?",howT:"4 Steps to Participate",
    steps:[
      ["01","Open a Secondary Account","Create a second X account, separate from your personal one. This will be your symbolic Kurdish digital identity. Only 10 minutes needed.","Start today"],
      ["02","Design Your Symbolic Identity","Choose a Kurdish first and last name. Use the community logo as profile picture. Post in Kurdish dialects.","All dialects accepted"],
      ["03","Follow @rojtevkurdi & @torakurdakurdi","Follow both official coordination accounts with your secondary account.","Mandatory step"],
      ["04","Receive Your Digital Identity Card","Enter your X username. After verification you receive a numbered Kurdish digital identity card.","Free · Open to all"],
    ],
    phLabel:"Project Roadmap",phT:"Three-Stage Evolutionary Model",
    ph:[
      ["🐦","Phase 1 · Now","X / Twitter · Mastodon","Symbolic digital identities, shared language, collective visibility.","Active","#006633"],
      ["🌐","Phase 2 · Soon","Web + Mobile App","Systematization, data security, organization and technical maturity.","In Development","#c47d0a"],
      ["⛓","Phase 3 · Future","Blockchain · Web3 · SBT","Immutable, non-transferable SoulBound Token identities.","Vision","#C8102E"],
    ],
    prLabel:"Participation Principles",prT:"Core Guidelines",
    pr:[
      ["☮","Peaceful · Above Politics","Not affiliated with any political party. Entirely cultural and social."],
      ["🌍","Open to Everyone","You do not need to be Kurdish or speak Kurdish. Anyone can support."],
      ["🔒","Privacy & Security","Symbolic names only. No personal information shared."],
      ["⚖","Ethical Communication","Respect, courtesy and inclusivity are core principles."],
      ["🗣","All Kurdish Dialects","Kurmanji · Sorani · Zazaki · Gorani · Laki · Kelhuri · Lori"],
      ["⏱","Minimal Effort","No daily activity required. Even one post per year is valuable."],
    ],
    fLabel:"Join",fT:"Get Your Identity Card",
    fSub:"Enter your secondary X account username. After verification your Kurdish digital identity card will be prepared.",
    checks:["Opened a second X/Twitter account with a Kurdish name","Followed @rojtevkurdi and @torakurdakurdi","Read and accepted the project principles"],
    fn:"First Name (Kurdish)",fs:"Surname (Kurdish)",ft:"X / Twitter Username",fr:"Region / Diaspora",
    frs:["Select...","Bakur (North)","Başûr (South)","Rojava (West)","Rojhilat (East)","Diaspora — Europe","Diaspora — America","Diaspora — Other","Not Kurdish, supporter"],
    fbtn:"☀  Get My Identity Card",
    fok:"Registration successful! Your digital identity is being prepared. Follow @rojtevkurdi.",
    fnote:"Questions:",
    qt:'"Ziman Avakirina Xwebûnê Yê"',qs:'"Language is the Construction of Selfhood"',
    qa:"Welat Rodî · Roj Tev Kurdî · 2017",
    exLabel:"Sample Identity Card",founder:"Founder",
    contactT:"Contact",contactDesc:"For questions, suggestions and collaboration, get in touch with us.",
    contactLinks:"Official Project Accounts",
    copy:"© 2017–2025 WR · All rights reserved.",
    copyNote:"Roj Tev Kurdî · KurDîjîtal Welat · Tora Kurda-Kurdî · Nasnameya Dîjîtal nasKURD · RojaMe Credit · WR is the sole owner of all licenses, patents and intellectual property · Copying, imitation and unauthorized use strictly prohibited.",
    alert:"Enter name and username!",langLabel:"English",
  }
};

const KEYS=["home","projects","project","join","card","phases","principles","contact","rojame","gotar"];

function Sun({size=40,spin=false,op=1,color="#F5A623"}){
  return(
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" style={{opacity:op,animation:spin?"sp 18s linear infinite":"none",display:"block",flexShrink:0}}>
      <circle cx="40" cy="40" r="14" fill={color}/>
      <g stroke={color} strokeWidth="3" strokeLinecap="round">
        {[[40,3,40,17],[40,63,40,77],[3,40,17,40],[63,40,77,40],[12,12,22,22],[58,58,68,68],[68,12,58,22],[22,58,12,68],[24,5,27,16],[53,64,56,75],[5,24,16,27],[64,53,75,56],[56,5,53,16],[27,64,24,75],[75,24,64,27],[16,53,5,56]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>
    </svg>
  );
}

function Logo({fs=15}){
  return(
    <span style={{fontFamily:"'Playfair Display',serif",fontSize:fs,fontWeight:900,whiteSpace:"nowrap"}}>
      <span style={{color:C.red}}>Roj</span>{" "}
      <span style={{color:C.gold}}>Tev</span>{" "}
      <span style={{color:C.green}}>Kurdî</span>
    </span>
  );
}

function FlagStrip(){
  return(
    <div style={{display:"flex",width:"100%",height:18,flexShrink:0,zIndex:250,position:"fixed",top:0,left:0,right:0,border:`1px solid rgba(212,168,67,.8)`,boxShadow:`0 0 10px rgba(212,168,67,.5), inset 0 0 6px rgba(212,168,67,.12)`}}>
      <div style={{flex:1,background:C.red}}/>
      <div style={{flex:2,background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",borderLeft:"1px solid rgba(212,168,67,.4)",borderRight:"1px solid rgba(212,168,67,.4)"}}>
        <Sun size={16} color={C.gold} spin/>
      </div>
      <div style={{flex:1,background:C.green}}/>
    </div>
  );
}

function KurdFlag({size=40}){
  return(
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill="#fff" stroke="#ddd" strokeWidth="1"/>
      <clipPath id="kf"><circle cx="50" cy="50" r="49"/></clipPath>
      <g clipPath="url(#kf)">
        <rect x="0" y="0" width="100" height="33" fill={C.red}/>
        <rect x="0" y="33" width="100" height="34" fill="#fff"/>
        <rect x="0" y="67" width="100" height="33" fill={C.green}/>
      </g>
      <circle cx="50" cy="50" r="13" fill={C.gold}/>
      <g stroke={C.gold} strokeWidth="2" strokeLinecap="round">
        {[[50,21,50,32],[50,68,50,79],[21,50,32,50],[68,50,79,50],[30,30,38,38],[62,62,70,70],[70,30,62,38],[38,62,30,70]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>
    </svg>
  );
}

function NasnameLogo({size=40}){
  return(
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill="#faf5e8" stroke="#c8a84b" strokeWidth="2"/>
      <circle cx="50" cy="50" r="13" fill={C.gold}/>
      <g stroke={C.gold} strokeWidth="2" strokeLinecap="round">
        {[[50,19,50,30],[50,70,50,81],[19,50,30,50],[70,50,81,50],[28,28,36,36],[64,64,72,72],[72,28,64,36],[36,64,28,72],[34,22,37,30],[63,70,66,78],[22,34,30,37],[70,63,78,66],[66,22,63,30],[37,70,34,78],[78,34,70,37],[30,63,22,66]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
      </g>
      <text x="50" y="93" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#8B6914" fontWeight="bold">NASNAME</text>
    </svg>
  );
}

function Chip(){return(<svg width="38" height="26" viewBox="0 0 38 26"><rect x="1" y="1" width="36" height="24" rx="3" fill="#d4a843" stroke="#b8922e" strokeWidth=".7"/><rect x="4" y="4" width="30" height="18" rx="2" fill="#c49535" stroke="#a07b20" strokeWidth=".5"/><line x1="12" y1="4" x2="12" y2="22" stroke="#a07b20" strokeWidth=".5"/><line x1="19" y1="4" x2="19" y2="22" stroke="#a07b20" strokeWidth=".5"/><line x1="26" y1="4" x2="26" y2="22" stroke="#a07b20" strokeWidth=".5"/><line x1="4" y1="10" x2="34" y2="10" stroke="#a07b20" strokeWidth=".5"/><line x1="4" y1="16" x2="34" y2="16" stroke="#a07b20" strokeWidth=".5"/></svg>);}

function QR({size=40}){
  const b=[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[0,2],[2,2],[3,2],[4,2],[6,2],[0,3],[2,3],[4,3],[6,3],[0,4],[2,4],[3,4],[4,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[8,0],[10,0],[8,2],[9,3],[11,3],[8,4],[10,4],[0,8],[2,8],[3,8],[2,9],[4,9],[0,10],[3,10],[8,8],[10,8],[11,8],[9,9],[11,9],[10,10],[11,10]];
  const s=size/12;
  return(<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}><rect width={size} height={size} fill="white" rx="2"/>{b.map(([x,y],i)=><rect key={i} x={x*s+.5} y={y*s+.5} width={s-.5} height={s-.5} fill="#1a1a2e" rx=".3"/>)}</svg>);
}

function Fp({size=16}){
  return(<svg width={size} height={size} viewBox="0 0 100 100" fill="none"><g stroke="rgba(60,100,160,.4)" strokeWidth="3" strokeLinecap="round"><path d="M50 18C35 18 22 30 22 46c0 10 4 18 10 24"/><path d="M50 24c-12 0-22 10-22 22 0 8 3 15 8 20"/><path d="M50 30c-9 0-16 7-16 16 0 7 3 13 7 17"/><path d="M50 18c15 0 28 12 28 28 0 10-4 18-10 24"/><path d="M50 24c12 0 22 10 22 22 0 8-3 15-8 20"/><path d="M50 30c9 0 16 7 16 16 0 7-3 13-7 17"/></g></svg>);
}

function XI({size=14,color="#1a1a2e"}){return(<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>);}

function IDCard({name,surname,handle,date,did,cardNo}){
  return(
    <div style={{
      width:"100%",aspectRatio:"1.586",borderRadius:16,position:"relative",overflow:"hidden",
      background:"linear-gradient(145deg,#c8dff2 0%,#daedfb 25%,#b8d2ea 55%,#cce0f4 80%,#d8eaf8 100%)",
      boxShadow:"0 24px 64px rgba(60,100,160,.35),0 4px 12px rgba(0,0,0,.15),inset 0 1px 0 rgba(255,255,255,.8)",
      fontFamily:"'Lora',Georgia,serif",
    }}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.55) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <svg style={{position:"absolute",bottom:-2,right:-2,opacity:.06,pointerEvents:"none"}} width="180" height="110" viewBox="0 0 180 110">
        <g stroke="#1a4a8a" strokeWidth="1.4" fill="none">
          <line x1="20" y1="110" x2="20" y2="60"/><line x1="20" y1="60" x2="60" y2="60"/>
          <line x1="60" y1="60" x2="60" y2="38"/><line x1="60" y1="38" x2="105" y2="38"/>
          <line x1="105" y1="38" x2="105" y2="65"/><line x1="105" y1="65" x2="148" y2="65"/>
          <line x1="148" y1="65" x2="148" y2="42"/><line x1="148" y1="42" x2="180" y2="42"/>
          <circle cx="20" cy="60" r="3" fill="#1a4a8a"/><circle cx="60" cy="38" r="3" fill="#1a4a8a"/>
          <circle cx="105" cy="65" r="3" fill="#1a4a8a"/><circle cx="148" cy="42" r="3" fill="#1a4a8a"/>
        </g>
      </svg>
      <svg style={{position:"absolute",bottom:-4,left:0,right:0,opacity:.14,pointerEvents:"none"}} width="100%" height="36" viewBox="0 0 500 36" preserveAspectRatio="none">
        <path d="M0,18 Q62,4 125,18 T250,18 T375,18 T500,18 L500,36 L0,36 Z" fill="#3a70b8"/>
      </svg>

      {/* Top row */}
      <div style={{position:"absolute",top:"8%",left:"4%",right:"4%",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
        {/* Nasnameya Dîjîtal logo */}
        <svg width="56" height="56" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="47" fill="#f5f0de" stroke="#c8a84b" strokeWidth="2.5"/>
          <circle cx="50" cy="50" r="13" fill="#F5A623"/>
          <g stroke="#F5A623" strokeWidth="2" strokeLinecap="round">
            {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((deg,i)=>{
              const r=deg*Math.PI/180;
              return <line key={i} x1={50+Math.cos(r)*17} y1={50+Math.sin(r)*17} x2={50+Math.cos(r)*25} y2={50+Math.sin(r)*25}/>;
            })}
          </g>
          <text x="50" y="80" textAnchor="middle" fontSize="8.5" fontFamily="serif" fill="#8B6914" fontWeight="bold">NASNAMEYA</text>
          <text x="50" y="91" textAnchor="middle" fontSize="7.5" fontFamily="serif" fill="#8B6914">DÎJÎTAL</text>
        </svg>

        {/* Center title */}
        <div style={{flex:1,textAlign:"center",padding:"0 8px"}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(10px,1.8vw,13px)",fontWeight:700,color:"#0e2a52",letterSpacing:".1em",lineHeight:1.3}}>NASNAMEYA DÎJÎTAL</div>
          <div style={{fontSize:"clamp(7px,1.1vw,9px)",color:"#2a5080",letterSpacing:".12em",fontStyle:"italic",marginTop:2}}>DIGITAL IDENTIFICATION</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:5,marginTop:6}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#0e2a52"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(8px,1.4vw,11px)",fontWeight:700,letterSpacing:".14em",color:"#0e2a52"}}>KARTA KURDÎ</span>
            <svg width="17" height="17" viewBox="0 0 100 100" fill="none">
              <g stroke="rgba(40,80,140,.55)" strokeWidth="3.5" strokeLinecap="round">
                <path d="M50 18C34 18 20 31 20 48c0 11 5 20 12 26"/>
                <path d="M50 25C37 25 27 36 27 48c0 9 4 16 9 21"/>
                <path d="M50 32C40 32 33 39 33 48c0 7 4 13 9 17"/>
                <path d="M50 39C44 39 40 43 40 48c0 5 3 9 7 12"/>
                <path d="M50 18C66 18 80 31 80 48c0 11-5 20-12 26"/>
                <path d="M50 25C63 25 73 36 73 48c0 9-4 16-9 21"/>
                <path d="M50 32C60 32 67 39 67 48c0 7-4 13-9 17"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Kurdistan Flag */}
        <svg width="56" height="56" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="47" fill="#fff" stroke="#ddd" strokeWidth="1.5"/>
          <clipPath id="cf2"><circle cx="50" cy="50" r="47"/></clipPath>
          <g clipPath="url(#cf2)">
            <rect x="0" y="0" width="100" height="33" fill="#C8102E"/>
            <rect x="0" y="33" width="100" height="34" fill="#fff"/>
            <rect x="0" y="67" width="100" height="33" fill="#006633"/>
          </g>
          <circle cx="50" cy="50" r="14" fill="#F5A623"/>
          <g stroke="#F5A623" strokeWidth="2.2" strokeLinecap="round">
            {[0,45,90,135,180,225,270,315].map((deg,i)=>{
              const r=deg*Math.PI/180;
              return <line key={i} x1={50+Math.cos(r)*17} y1={50+Math.sin(r)*17} x2={50+Math.cos(r)*24} y2={50+Math.sin(r)*24}/>;
            })}
          </g>
        </svg>
      </div>

      {/* Divider */}
      <div style={{position:"absolute",top:"38%",left:"4%",right:"4%",height:1,background:"linear-gradient(90deg,transparent,rgba(60,100,160,.3),transparent)"}}/>

      {/* Info fields — left side */}
      <div style={{position:"absolute",top:"42%",left:"5%",right:"50%",bottom:"12%",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
        {[
          ["NAV / Name",name,13,true],
          ["PAŞNAV / Surname",surname,13,true],
          ["X / Twitter",handle,10,false],
          ["DÎROKA DAYÎNÊ / Issue Date",date,10,false],
        ].map(([label,val,fs,bold],i)=>(
          <div key={i}>
            <div style={{fontSize:"clamp(5.5px,.9vw,7.5px)",letterSpacing:".14em",textTransform:"uppercase",color:"#4a70a8",marginBottom:"1%"}}>{label}</div>
            <div style={{fontSize:`clamp(9px,${fs*.15}vw,${fs}px)`,fontWeight:bold?700:600,color:"#0a2040"}}>{val}</div>
          </div>
        ))}
        <div>
          <div style={{fontSize:"clamp(5px,.85vw,7px)",letterSpacing:".12em",textTransform:"uppercase",color:"#4a70a8",marginBottom:"1%"}}>BLOCKCHAIN MINI-HYBRID DID</div>
          <div style={{fontSize:"clamp(6px,.9vw,8px)",fontFamily:"monospace",color:"#1a3a6a",background:"rgba(255,255,255,.6)",padding:"1px 5px",borderRadius:3,display:"inline-block"}}>{did}</div>
        </div>
      </div>

      {/* Right: Chip + QR */}
      <div style={{position:"absolute",top:"42%",right:"4%",bottom:"10%",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between"}}>
        <svg width="44" height="30" viewBox="0 0 44 30">
          <rect x="1" y="1" width="42" height="28" rx="4" fill="#d4a843" stroke="#b8922e" strokeWidth=".9"/>
          <rect x="4" y="4" width="36" height="22" rx="2" fill="#c49535" stroke="#a07b20" strokeWidth=".7"/>
          {[14,22,30].map(x=><line key={x} x1={x} y1="4" x2={x} y2="26" stroke="#a07b20" strokeWidth=".7"/>)}
          {[10,19].map(y=><line key={y} x1="4" x2="40" y1={y} y2={y} stroke="#a07b20" strokeWidth=".7"/>)}
        </svg>
        <div style={{background:"#fff",padding:"3px",borderRadius:4,boxShadow:"0 2px 8px rgba(0,0,0,.12)"}}>
          <svg width="52" height="52" viewBox="0 0 52 52">
            {[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[6,1],[0,2],[2,2],[3,2],[4,2],[6,2],[0,3],[2,3],[4,3],[6,3],[0,4],[2,4],[3,4],[4,4],[6,4],[0,5],[6,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[8,0],[9,0],[11,0],[8,2],[10,2],[9,3],[11,3],[8,4],[10,4],[0,8],[2,8],[3,8],[1,9],[2,9],[4,9],[0,10],[3,10],[4,10],[8,8],[10,8],[11,8],[8,9],[9,9],[11,9],[8,10],[10,10],[11,10],[6,8],[7,9],[5,10],[7,10],[6,11],[8,11]].map(([x,y],i)=>(
              <rect key={i} x={x*4+.5} y={y*4+.5} width="3.5" height="3.5" fill="#0a2040" rx=".5"/>
            ))}
          </svg>
        </div>
      </div>

      {/* Card number */}
      <div style={{position:"absolute",bottom:"5%",left:"5%",fontSize:"clamp(7px,1vw,9px)",fontWeight:600,color:"#2a5080",letterSpacing:".1em"}}>{cardNo}</div>
    </div>
  );
}
function Reveal({children,delay=0}){
  const ref=useRef();
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const ob=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity=1;el.style.transform="none";ob.unobserve(el);}},{threshold:.06});
    ob.observe(el);return()=>ob.disconnect();
  },[]);
  return <div ref={ref} style={{opacity:0,transform:"translateY(16px)",transition:`opacity .6s ${delay}s,transform .6s ${delay}s`}}>{children}</div>;
}

export default function App(){
  const [lang,setLang]=useState("en");
  const [menuOpen,setMenuOpen]=useState(false);
  const [langOpen,setLangOpen]=useState(false);
  const [page,setPage]=useState("home");
  const [done,setDone]=useState(false);
  const [form,setForm]=useState({name:"",surname:"",twitter:"",region:""});
  const menuRef=useRef();
  const langRef=useRef();
  const t=T[lang];
  const isRTL=lang==="so";
  const isKurd=["ku","so","za"].includes(lang);

  useEffect(()=>{
    const h=(e)=>{
      if(menuRef.current&&!menuRef.current.contains(e.target))setMenuOpen(false);
      if(langRef.current&&!langRef.current.contains(e.target))setLangOpen(false);
    };
    document.addEventListener("mousedown",h);return()=>document.removeEventListener("mousedown",h);
  },[]);

  const go=(p)=>{setPage(p);setMenuOpen(false);window.scrollTo({top:0});};
  const submit=()=>{if(!form.name.trim()||!form.twitter.trim()){alert(t.alert);return;}setDone(true);};

  // Back button — shown on all pages except home
  const BackBtn=()=>(
    <button onClick={()=>go("home")} style={{
      display:"inline-flex",alignItems:"center",gap:7,
      background:"transparent",border:`1px solid ${C.border}`,
      borderRadius:6,padding:"7px 14px",
      color:C.muted,fontSize:12,fontFamily:"'Lora',serif",
      cursor:"pointer",marginBottom:24,transition:"all .18s",
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=C.green;e.currentTarget.style.color=C.green;e.currentTarget.style.background=`${C.green}08`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.muted;e.currentTarget.style.background="transparent";}}>
      ← {lang==="ku"?"Destpêk":lang==="so"?"دەستپێک":lang==="za"?"Destpêk":"Home"}
    </button>
  );

  // ── PAGE CONTENT ────────────────────────────────────────

  const HomePage=()=>(
    <div>
      {/* HERO — full width */}
      <div style={{background:`linear-gradient(160deg, rgba(0,102,51,.12) 0%, rgba(245,166,35,.08) 50%, rgba(200,16,46,.1) 100%)`,minHeight:"82vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"60px 40px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",zIndex:0}}><Sun size={320} spin op={0.04}/></div>
        <div style={{maxWidth:700,textAlign:"center",position:"relative"}}>

          {/* 1 — Main title: Roj Tev Kurdî */}
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,6vw,78px)",fontWeight:900,lineHeight:1.08,marginBottom:14}}>
            <Logo fs={null}/>
          </h1>

          {/* 2 — KurDîjîtal Welat */}
          <div style={{marginBottom:12}}>
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(16px,2.4vw,26px)",fontWeight:700,color:C.gold,letterSpacing:".04em",whiteSpace:"nowrap"}}>
              KurDîjîtal · KurDigital
            </span>
          </div>

          {/* Divider */}
          <div style={{width:48,height:1,background:`linear-gradient(90deg,transparent,${C.gold},transparent)`,margin:"0 auto 14px"}}/>

          {/* 3 — First Project */}
          <div style={{marginBottom:8}}>
            <span style={{fontSize:"clamp(11px,1.4vw,14px)",letterSpacing:".22em",textTransform:"uppercase",color:C.goldD,fontFamily:"'Lora',serif",fontWeight:600}}>
              {lang==="ku"?"Projeya Yekemîn":lang==="so"?"پڕۆژەی یەکەم":lang==="za"?"Proyaya Yekemî":"First Project"}
            </span>
          </div>

          {/* 4 — Project badge */}
          <div style={{marginBottom:16}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(13px,1.6vw,17px)",fontStyle:"italic",color:C.red,lineHeight:1.55}}>
              {t.badge}
            </p>
          </div>

          {/* 5 — Ziman quote two lines */}
          <div style={{marginBottom:28}}>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(12px,1.4vw,15px)",fontStyle:"italic",color:"rgba(240,236,228,.45)",lineHeight:1.6}}>
              {lang==="ku"||lang==="za"
                ? <>"Ziman Avakirina Xwebûnê Yê"<br/>"Delîla Xwebûnê Nasname Yê"</>
                : lang==="so"
                ? <>"زمان بنیادنانی خۆیە"<br/>"بەڵگەی ناسنامە"</>
                : <>"Language is the Construction of Selfhood"<br/>"Proof of Identity"</>
              }
            </p>
          </div>

          {/* New intro paragraph */}
          <div style={{marginBottom:20,maxWidth:560,margin:"0 auto 20px"}}>
            <p style={{fontSize:"clamp(13px,1.35vw,15px)",lineHeight:1.95,color:"rgba(240,236,228,.72)",fontFamily:"'Lora',serif",borderLeft:`2px solid ${C.green}`,paddingLeft:16,textAlign:"left"}}>
              {lang==="ku"
                ? "Li seranserê dinyayê, ji bo her mirovekî Kurd, nasnameyek dîjîtal a ku li ser bingeha çandî û taybetmendiya neteweyî hatiye ava kirin, tê pêşkêş kirin. Ev gavek aştîyane ye, ku li jorî polîtîkayê ye û serbixwe ye."
                : lang==="so"
                ? "لە سەرانسەری جیهاندا، بۆ هەر کەسێکی کورد، ناسنامەیەکی دیجیتاڵی کە لەسەر بنەمای کولتووری و نیشتمانی داڕێژراوە پێشکەش دەکرێت. ئەمە هەنگاوێکی ئاشتیخوازانەیە، کە لە سەرەوەی سیاسەتدایە و سەربەخۆیە."
                : lang==="za"
                ? "Dınyay de, seba her mirovêko kurdkî, nasnameyêka dîjîtalî ya ki ser bingehê ferhengî û taybetmendiya neteweyî viraştiyo, tê pêşkêş kerdış. Ev gavêka aştîyaney a, ki ser polîtîkayî de ya û serbest a."
                : "For every Kurdish person around the world, a digital identity built on cultural foundations and national identity is offered. This is a peaceful step, above politics and independent."
              }
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
            <button onClick={()=>go("join")} style={{background:`linear-gradient(135deg,${C.goldD},${C.gold})`,color:"#fff",padding:"14px 30px",borderRadius:4,fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,border:"none",cursor:"pointer",boxShadow:`0 4px 18px ${C.gold}44`,transition:"all .2s"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>{t.btn1}</button>
            <button onClick={()=>go("project")} style={{background:"rgba(28,28,40,.7)",color:C.ink,padding:"14px 30px",borderRadius:4,fontFamily:"'Playfair Display',serif",fontSize:15,border:`1.5px solid ${C.border}`,cursor:"pointer",backdropFilter:"blur(8px)",transition:"all .2s"}} onMouseEnter={e=>e.currentTarget.style.background="#fff"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.6)"}>{t.btn2}</button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{background:"#1c1c28",padding:"0",borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",maxWidth:900,margin:"0 auto"}}>
          {[[0,C.green],["4+",C.goldD],[7,C.green],[3,C.red]].map(([n,col],i)=>(
            <div key={i} style={{padding:"28px 20px",textAlign:"center",borderRight:i<3?`1px solid ${C.border}`:"none"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,3.5vw,44px)",fontWeight:900,color:col,lineHeight:1}}>{n}</div>
              <div style={{fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:C.muted,marginTop:6,lineHeight:1.4}}>{t.statL[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Seksiyonên Bilez */}
      <div style={{padding:"40px 40px 60px",maxWidth:900,margin:"0 auto"}}>
        <p style={{fontSize:10,letterSpacing:".22em",textTransform:"uppercase",color:C.muted,marginBottom:18}}>{t.quickT}</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12}}>
          {[
            ["projects",t.nav[1],"🌐",C.gold,"Projeyên Roj Tev Kurdî"],
            ["project",t.nav[2],"◈",C.green,"Projeya Nasnameya Kurdî ya Dîjîtal"],
            ["join",t.nav[3],"✦",C.goldD,"10 min · Free"],
            ["card",t.nav[4],"⊞",C.red,"Karta Kurdî · Digital ID"],
            ["phases",t.nav[5],"◉",C.green,"X → Web → Blockchain"],
            ["principles",t.nav[6],"◎",C.goldD,"Rêgezên Bingehîn"],
            ["contact",t.nav[7],"✉",C.red,"Pêwendî · Contact"],
            ["rojame",t.nav[8],"💳",C.goldD,"RojaMe Credit · Digital Banking"],
            ["gotar",t.nav[9],"✍",C.green,"Articles · Gotar"],
            
          ].map(([key,label,icon,col,sub])=>(
            <button key={key} onClick={()=>go(key)} style={{
              background:"#1c1c28",border:`1px solid ${C.border}`,
              borderRadius:10,padding:"18px 14px",
              cursor:"pointer",display:"flex",flexDirection:"column",
              alignItems:"flex-start",gap:8,
              transition:"all .18s",textAlign:"left",
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=col;e.currentTarget.style.boxShadow=`0 6px 20px ${col}22`;e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
              <div style={{width:34,height:34,borderRadius:8,background:`${col}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,color:col}}>
                {icon}
              </div>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:"rgba(240,236,228,.9)",fontFamily:"'Playfair Display',serif",marginBottom:3}}>{label}</div>
                <div style={{fontSize:10.5,color:C.muted,lineHeight:1.4}}>{sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );

  const ProjectPage=()=>(
    <div style={{padding:"52px 40px 64px",maxWidth:760,margin:"0 auto"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.howLabel}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>{t.howT}</h2></Reveal>
      <Reveal delay={.08}><div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:32}}/></Reveal>
      {t.steps.map(([num,title,desc,tag],i)=>(
        <Reveal key={i} delay={i*.06}>
          <div style={{display:"grid",gridTemplateColumns:"48px 1fr",gap:16,padding:"20px 0",borderBottom:i<3?`1px solid ${C.border}`:"none"}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:36,fontWeight:900,color:"rgba(0,102,51,.1)",lineHeight:1,paddingTop:2}}>{num}</div>
            <div>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:C.green,marginBottom:6}}>{title}</h3>
              <p style={{fontSize:14,lineHeight:1.8,color:C.ink2}}>{desc}</p>
              <span style={{display:"inline-block",background:"rgba(0,102,51,.07)",color:C.green,fontSize:10,letterSpacing:".07em",textTransform:"uppercase",padding:"3px 9px",borderRadius:2,marginTop:8}}>{tag}</span>
            </div>
          </div>
        </Reveal>
      ))}
      <Reveal delay={.3}>
        <div style={{marginTop:36,background:`linear-gradient(135deg,rgba(0,102,51,.15),rgba(245,166,35,.08))`,border:`1px solid ${C.border}`,borderRadius:6,padding:"28px 24px",position:"relative"}}>
          <div style={{position:"absolute",top:-10,left:20,fontFamily:"'Playfair Display',serif",fontSize:68,lineHeight:1,color:"rgba(196,125,10,.1)",pointerEvents:"none"}}>"</div>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.2vw,18px)",fontStyle:"italic",lineHeight:1.7,marginBottom:8}}>{t.qt}</p>
          <p style={{fontSize:13,color:C.muted,fontStyle:"italic",marginBottom:10}}>{t.qs}</p>
          <span style={{fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:C.goldD}}>{t.qa}</span>
        </div>
      </Reveal>
    </div>
  );

  const JoinPage=()=>(
    <div style={{padding:"52px 40px 64px",maxWidth:560,margin:"0 auto"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.fLabel}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:20}}>{t.fT}</h2></Reveal>
      <Reveal delay={.08}>
        <div style={{background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:10,padding:"28px 24px",boxShadow:"0 4px 24px rgba(0,0,0,.06)"}}>
          <p style={{fontSize:14,lineHeight:1.75,color:C.muted,marginBottom:18}}>{t.fSub}</p>
          <div style={{marginBottom:20}}>
            {t.checks.map((c,i)=>(
              <div key={i} style={{display:"flex",gap:10,padding:"10px 0",borderBottom:`1px solid ${C.border}`,fontSize:13,lineHeight:1.5,color:C.ink2,alignItems:"flex-start"}}>
                <div style={{width:20,height:20,borderRadius:"50%",background:"rgba(0,102,51,.2)",color:C.green,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,flexShrink:0}}>{i+1}</div>
                <span>{c}</span>
              </div>
            ))}
          </div>
          {!done?(
            <>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                {[[t.fn,"name"],[t.fs,"surname"]].map(([lbl,k])=>(
                  <div key={k}>
                    <label style={{display:"block",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:C.muted,marginBottom:5}}>{lbl}</label>
                    <input value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} style={{width:"100%",background:"#232330",border:`1.5px solid ${C.border}`,borderRadius:4,padding:"10px 11px",fontSize:14,color:C.ink,fontFamily:"'Lora',serif",outline:"none"}} onFocus={e=>e.target.style.borderColor=C.green} onBlur={e=>e.target.style.borderColor=C.border}/>
                  </div>
                ))}
              </div>
              <div style={{marginBottom:10}}>
                <label style={{display:"block",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:C.muted,marginBottom:5}}>{t.ft}</label>
                <input value={form.twitter} onChange={e=>setForm({...form,twitter:e.target.value})} placeholder="@username" style={{width:"100%",background:"#232330",border:`1.5px solid ${C.border}`,borderRadius:4,padding:"10px 11px",fontSize:14,color:C.ink,fontFamily:"'Lora',serif",outline:"none"}} onFocus={e=>e.target.style.borderColor=C.green} onBlur={e=>e.target.style.borderColor=C.border}/>
              </div>
              <div style={{marginBottom:18}}>
                <label style={{display:"block",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:C.muted,marginBottom:5}}>{t.fr}</label>
                <select value={form.region} onChange={e=>setForm({...form,region:e.target.value})} style={{width:"100%",background:"#232330",border:`1.5px solid ${C.border}`,borderRadius:4,padding:"10px 11px",fontSize:14,color:C.ink,fontFamily:"'Lora',serif",outline:"none"}}>
                  {t.frs.map((r,i)=><option key={i} value={i===0?"":r}>{r}</option>)}
                </select>
              </div>
              <button onClick={submit} style={{width:"100%",background:`linear-gradient(135deg,${C.green},#0a9040)`,color:"#fff",padding:"13px",borderRadius:4,fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,102,51,.22)"}}>{t.fbtn}</button>
            </>
          ):(
            <div style={{background:"rgba(0,102,51,.07)",border:"1px solid rgba(0,102,51,.15)",borderRadius:6,padding:"22px",textAlign:"center"}}>
              <div style={{fontSize:30,marginBottom:8}}>✓</div>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:C.green}}>{t.fok}</p>
            </div>
          )}
          <p style={{fontSize:12,color:C.muted,textAlign:"center",marginTop:12}}>{t.fnote} <a href="https://twitter.com/rojtevkurdi" target="_blank" style={{color:C.green,fontWeight:600}}>@rojtevkurdi</a></p>
        </div>
      </Reveal>
    </div>
  );

  const CardPage=()=>(
    <div style={{padding:"52px 40px 64px"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.exLabel}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:8}}>Karta Kurdî · Digital ID</h2></Reveal>
      <Reveal delay={.06}><p style={{fontSize:13,color:C.muted,marginBottom:28}}>Example: @nupelpayiz</p></Reveal>
      <div style={{maxWidth:520}}>
        <Reveal delay={.1}>
          <IDCard name="NÛPEL" surname="PAYÎZ" handle="@nupelpayiz" date="2025" did="did:kurd:NP1Mrv1Mnb999" cardNo="KDI · #0000001"/>
        </Reveal>
      </div>
    </div>
  );
  const PhasesPage=()=>(
    <div style={{padding:"52px 40px 64px",maxWidth:800,margin:"0 auto"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.phLabel}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>{t.phT}</h2></Reveal>
      <Reveal delay={.08}><div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:32}}/></Reveal>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:2}}>
        {t.ph.map(([icon,num,title,desc,badge,col],i)=>(
          <Reveal key={i} delay={i*.07}>
            <div style={{background:"#1c1c28",border:`1px solid ${C.border}`,padding:"24px 20px",height:"100%"}}>
              <span style={{fontSize:26,display:"block",marginBottom:10}}>{icon}</span>
              <span style={{fontSize:9,letterSpacing:".14em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:5}}>{num}</span>
              <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,marginBottom:6}}>{title}</h3>
              <p style={{fontSize:13,lineHeight:1.72,color:C.ink2}}>{desc}</p>
              <span style={{display:"inline-block",marginTop:12,padding:"3px 10px",borderRadius:2,fontSize:10,background:`${col}1a`,color:col}}>{badge}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  const PrincPage=()=>(
    <div style={{padding:"52px 40px 64px",maxWidth:800,margin:"0 auto"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.prLabel}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>{t.prT}</h2></Reveal>
      <Reveal delay={.08}><div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:30}}/></Reveal>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:12}}>
        {t.pr.map(([icon,title,desc],i)=>(
          <Reveal key={i} delay={i*.05}>
            <div style={{background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:8,padding:"18px",display:"flex",gap:12,alignItems:"flex-start"}}>
              <span style={{fontSize:18,flexShrink:0,marginTop:1}}>{icon}</span>
              <div>
                <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,marginBottom:4}}>{title}</h4>
                <p style={{fontSize:12.5,lineHeight:1.65,color:C.muted}}>{desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  const ContactPage=()=>(
    <div style={{padding:"52px 40px 64px",maxWidth:580,margin:"0 auto"}}>
      <BackBtn/>
      <Reveal><span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{t.contactT}</span></Reveal>
      <Reveal delay={.04}><h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>{t.contactT}</h2></Reveal>
      <Reveal delay={.08}><div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:28}}/></Reveal>
      <Reveal delay={.12}>
        <p style={{fontSize:15,lineHeight:1.85,color:C.ink2,marginBottom:28}}>{t.contactDesc}</p>
        <p style={{fontSize:10,letterSpacing:".18em",textTransform:"uppercase",color:C.muted,marginBottom:14}}>{t.contactLinks}</p>
        {[["@rojtevkurdi","rojtevkurdi","X · Hesabê Serekî · Main Account",C.green,"x"],
          ["@rojtevkurdi","https://mastodon.social/@rojtevkurdi","Mastodon · mastodon.social/@rojtevkurdi",C.green,"mastodon"],
          ["@torakurdakurdi","torakurdakurdi","X · Tora Kurda Kurdî",C.green,"x"],
          ["@_nasKURD","_nasKURD","X · Nasnameya Dîjîtal",C.goldD,"x"],
          ["@rojamecredit","rojamecredit","X · RojaMe Credit",C.goldD,"x"]
        ].map(([lbl,h,desc,col,type])=>(
          <a key={h+type} href={type==="mastodon"?h:`https://twitter.com/${h}`} target="_blank"
            style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",marginBottom:10,background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:8,textDecoration:"none",transition:"all .18s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=col;e.currentTarget.style.boxShadow=`0 3px 12px ${col}22`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="none";}}>
            <div style={{width:34,height:34,borderRadius:"50%",background:`${col}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:16}}>
              {type==="mastodon" ? "🐘" : <XI size={16} color={col}/>}
            </div>
            <div>
              <div style={{fontWeight:700,fontSize:14,color:col}}>{lbl}</div>
              <div style={{fontSize:12,color:C.muted}}>{desc}</div>
            </div>
          </a>
        ))}
        {/* ── Social Media ── */}
        <p style={{fontSize:10,letterSpacing:".18em",textTransform:"uppercase",color:C.muted,marginTop:28,marginBottom:14}}>
          {lang==="ku"?"Medyaya Civakî":lang==="so"?"میدیای کۆمەڵایەتی":lang==="za"?"Medyaya Komelayetî":"Social Media"}
        </p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}}>
          {[
            ["X / Twitter","@rojtevkurdi","https://twitter.com/rojtevkurdi",C.green,
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>],
            ["Instagram","@rojtevkurdi","https://instagram.com/rojtevkurdi","#E1306C",
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>],
            ["Facebook","@rojtevkurdi","https://facebook.com/rojtevkurdi","#1877F2",
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>],
            ["TikTok","@rojtevkurdi","https://tiktok.com/@rojtevkurdi","rgba(240,236,228,.85)",
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.25 8.25 0 004.83 1.55V6.78a4.85 4.85 0 01-1.06-.09z"/></svg>],
            ["YouTube","@rojtevkurdi","https://youtube.com/@rojtevkurdi","#FF0000",
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>],
          ].map(([platform,handle,url,col,icon])=>(
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
              style={{display:"flex",alignItems:"center",gap:10,padding:"12px 14px",background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:8,textDecoration:"none",transition:"all .18s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=col==="rgba(240,236,228,.85)"?"rgba(240,236,228,.4)":col;e.currentTarget.style.boxShadow=`0 3px 12px ${col==="rgba(240,236,228,.85)"?"rgba(255,255,255,.08)":col}22`;e.currentTarget.style.transform="translateY(-1px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
              <div style={{width:30,height:30,borderRadius:"50%",background:`${col==="rgba(240,236,228,.85)"?"rgba(255,255,255,.08)":col}18`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:col}}>
                {icon}
              </div>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:col==="rgba(240,236,228,.85)"?"rgba(240,236,228,.85)":col,lineHeight:1.2}}>{platform}</div>
                <div style={{fontSize:10,color:C.muted}}>{handle}</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{background:"rgba(0,102,51,.05)",border:"1px solid rgba(0,102,51,.12)",borderRadius:6,padding:"16px 18px",marginTop:4}}>
          <div style={{fontSize:14,color:C.ink2,lineHeight:1.75}}>
            <strong style={{color:C.green}}>Welat Rodî</strong> · Sores Rojger<br/>
            <span style={{fontSize:12,color:C.muted}}>Damezrîner / Founder · Roj Tev Kurdî · 2017</span>
          </div>
        </div>
      </Reveal>
    </div>
  );

  const RojamePage=()=>{
    const RAINBOW=["#9333ea","#dc2626","#f97316","#eab308","#22c55e","#006633"];
    const LOGO_IMG="data:image/png;base64,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";
    const CARD_IMGS={
      roseGold:"data:image/jpeg;base64,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",
      blueCredit:"data:image/jpeg;base64,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",
      blueDebit:"data:image/jpeg;base64,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",
    };
    const txt={
      ku:{label:"Bankkarîya Dîjîtal",tagline:"RojaMe ji bo na Me",desc:"RojaMe Credit, ayaka darayî ya Projeya Roj Tev Kurdî ye. Di pêşerojê de, xwediyên nasnameya dîjîtal a kurdî dê karibin bi vê ekosîstemê re aboriya xwe bi ewlehî bikin.",site:"Malpera RojaMe'yê Serde Bike",cards:"Kartên Nimûne",future:"Vîzyon"},
      so:{label:"بانككارتی دیجیتاڵ",tagline:"RojaMe ji bo na Me",desc:"RojaMe Credit لیژنەی دارایی پڕۆژەی Roj Tev Kurdî یە. لە داهاتوودا، خاوەنانی ناسنامەی دیجیتاڵی کوردی دەتوانن لەڕێگەی ئەم ئیکۆسیستەمەوە ئابووریاکەیان بە ئارامی بکەن.",site:"ماڵپەڕی RojaMe سەردان بکە",cards:"کارتەکان",future:"ڤیزیۆن"},
      za:{label:"Bankkarîya Dîjîtal",tagline:"RojaMe ji bo na Me",desc:"RojaMe Credit, lıqa darayî ya Proyaya Roj Tev Kurdî ya. Pêşeroy, xawendayê nasnameyê dîjîtalî yê kurdkî dê bıkaribin bi vê ekosîstemî ra aboriya xo bi ewlehî bikeriyen.",site:"Malpera RojaMe'yî Serde Ke",cards:"Kartê Nimûne",future:"Vîzyon"},
      en:{label:"Digital Banking",tagline:"RojaMe ji bo na Me",desc:"RojaMe Credit is the financial arm of the Roj Tev Kurdî Project. In the future, Kurdish digital identity holders will be able to conduct their financial transactions securely through this ecosystem.",site:"Visit RojaMe Website",cards:"Sample Cards",future:"Vision"},
    };
    const tx=txt[lang]||txt.ku;

    return(
      <div style={{padding:"52px 40px 80px",maxWidth:680,margin:"0 auto"}}>
        <BackBtn/>
        {/* Header */}
        <Reveal>
          <span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>{tx.label}</span>
        </Reveal>
        <Reveal delay={.04}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:6}}>RojaMe Credit</h2>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontStyle:"italic",color:C.muted,marginBottom:16}}>{tx.tagline}</p>
        </Reveal>
        <Reveal delay={.08}>
          <div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:36}}/>
        </Reveal>

        {/* ── PROMO CARD ── */}
        <Reveal delay={.1}>
          <div style={{
            background:"linear-gradient(160deg,#12121c 0%,#1a1a28 50%,#12121c 100%)",
            border:"1px solid rgba(212,168,67,.22)",
            borderRadius:16,
            padding:"36px 32px",
            marginBottom:28,
            position:"relative",
            overflow:"hidden",
            boxShadow:"0 20px 60px rgba(0,0,0,.25)",
          }}>
            {/* Background: rotating rainbow logo */}
            <div style={{position:"absolute",right:-60,top:-60,opacity:.06,pointerEvents:"none"}}>
              <svg width="280" height="280" viewBox="0 0 280 280">
                {RAINBOW.map((clr,i)=>(
                  <circle key={i} cx="140" cy="140" r={125-i*18} fill="none" stroke={clr} strokeWidth="2.5" strokeDasharray="8 4"/>
                ))}
              </svg>
            </div>

            <div style={{position:"relative",display:"flex",flexDirection:"column",gap:24}}>
              {/* Top row: Logo + site link */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  {/* RojaMe Credit logo — animated SVG */}
                  <svg width="90" height="90" viewBox="0 0 200 200" style={{flexShrink:0}}>
                    <defs>
                      <style>{`
                        @keyframes spinCW  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
                        @keyframes spinCCW { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
                        .r1 { transform-origin:100px 100px; animation: spinCW  8s linear infinite; }
                        .r2 { transform-origin:100px 100px; animation: spinCCW 10s linear infinite; }
                        .r3 { transform-origin:100px 100px; animation: spinCW  12s linear infinite; }
                        .r4 { transform-origin:100px 100px; animation: spinCCW 14s linear infinite; }
                        .r5 { transform-origin:100px 100px; animation: spinCW  16s linear infinite; }
                        .r6 { transform-origin:100px 100px; animation: spinCCW 18s linear infinite; }
                        .r0 { transform-origin:100px 100px; animation: spinCW  6s linear infinite; }
                      `}</style>
                    </defs>

                    {/* White background circle */}
                    <circle cx="100" cy="100" r="98" fill="white"/>

                    {/* Outer rainbow gradient border */}
                    <circle cx="100" cy="100" r="95" fill="none"
                      stroke="url(#outerRB)" strokeWidth="6"/>
                    <defs>
                      <linearGradient id="outerRB" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%"   stopColor="#9333ea"/>
                        <stop offset="17%"  stopColor="#dc2626"/>
                        <stop offset="34%"  stopColor="#f97316"/>
                        <stop offset="51%"  stopColor="#eab308"/>
                        <stop offset="68%"  stopColor="#22c55e"/>
                        <stop offset="85%"  stopColor="#006633"/>
                        <stop offset="100%" stopColor="#9333ea"/>
                      </linearGradient>
                    </defs>

                    {/* 6 animated dashed rings — purple, red, orange, yellow, green, dark-green */}
                    <g className="r0"><circle cx="100" cy="100" r="82" fill="none" stroke="#9333ea" strokeWidth="4.5" strokeDasharray="11 6" strokeLinecap="round"/></g>
                    <g className="r1"><circle cx="100" cy="100" r="68" fill="none" stroke="#dc2626" strokeWidth="4"   strokeDasharray="10 6" strokeLinecap="round"/></g>
                    <g className="r2"><circle cx="100" cy="100" r="55" fill="none" stroke="#f97316" strokeWidth="4"   strokeDasharray="9 6"  strokeLinecap="round"/></g>
                    <g className="r3"><circle cx="100" cy="100" r="43" fill="none" stroke="#eab308" strokeWidth="4"   strokeDasharray="8 6"  strokeLinecap="round"/></g>
                    <g className="r4"><circle cx="100" cy="100" r="32" fill="none" stroke="#22c55e" strokeWidth="4"   strokeDasharray="7 5"  strokeLinecap="round"/></g>
                    <g className="r5"><circle cx="100" cy="100" r="22" fill="none" stroke="#006633" strokeWidth="4"   strokeDasharray="6 4"  strokeLinecap="round"/></g>

                    {/* Kurdish sun — center */}
                    <circle cx="100" cy="100" r="13" fill="#F5C000"/>
                    <circle cx="100" cy="100" r="10" fill="#F5A623"/>
                    <g className="r6" stroke="#F5C000" strokeWidth="2.2" strokeLinecap="round">
                      {Array.from({length:24},(_,i)=>{
                        const deg=i*15, rad=deg*Math.PI/180;
                        return <line key={i}
                          x1={100+Math.cos(rad)*14} y1={100+Math.sin(rad)*14}
                          x2={100+Math.cos(rad)*22} y2={100+Math.sin(rad)*22}/>;
                      })}
                    </g>

                    {/* RojaMe text — top arc */}
                    <text x="100" y="18" textAnchor="middle"
                      fontFamily="'Playfair Display',Georgia,serif"
                      fontSize="17" fontWeight="700" fill="#006633"
                      letterSpacing="0.5">RojaMe</text>

                    {/* Credit text — bottom arc */}
                    <text x="100" y="190" textAnchor="middle"
                      fontFamily="'Playfair Display',Georgia,serif"
                      fontSize="17" fontWeight="700" fill="#006633"
                      letterSpacing="0.5">Credit</text>
                  </svg>
                </div>

                {/* Website link */}
                <a href="https://rojame.com" target="_blank" style={{
                  display:"inline-flex",alignItems:"center",gap:6,
                  background:"rgba(212,168,67,.12)",
                  border:"1px solid rgba(212,168,67,.35)",
                  borderRadius:6,padding:"9px 16px",
                  fontSize:12,fontWeight:600,
                  color:C.gold,fontFamily:"'Lora',serif",
                  textDecoration:"none",transition:"all .2s",
                  whiteSpace:"nowrap",
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(212,168,67,.2)";e.currentTarget.style.borderColor="rgba(212,168,67,.6)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(212,168,67,.12)";e.currentTarget.style.borderColor="rgba(212,168,67,.35)";}}>
                  rojame.com ↗
                </a>
              </div>

              {/* Divider */}
              <div style={{height:1,background:"linear-gradient(90deg,rgba(212,168,67,.4),transparent)"}}/>

              {/* Description */}
              <p style={{fontSize:15,lineHeight:1.85,color:"rgba(248,244,238,.72)",margin:0}}>{tx.desc}</p>
              {/* ── ROJAME CARDS ── */}
              <div style={{display:"flex",flexDirection:"column",gap:32,marginTop:12}}>

                {/* ═══ CARD 1: ROSE GOLD ═══ */}
                <div style={{perspective:"1200px"}}>
                  <div style={{
                    width:"100%",aspectRatio:"1.586",borderRadius:18,
                    position:"relative",overflow:"hidden",
                    background:"linear-gradient(135deg,#7a4a28 0%,#b87840 12%,#d4a060 22%,#f0cc88 32%,#fce0a8 40%,#e8c078 50%,#c89050 60%,#a86830 70%,#c89858 80%,#e8c880 90%,#b88040 100%)",
                    boxShadow:"0 40px 80px rgba(0,0,0,.65), 0 16px 40px rgba(120,70,20,.5), inset 0 1px 0 rgba(255,255,255,.7), inset 0 -1px 0 rgba(0,0,0,.3)",
                    transform:"rotateY(-2deg) rotateX(1deg)",
                  }}>
                    {/* Brushed horizontal micro-lines */}
                    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.14,mixBlendMode:"overlay"}} viewBox="0 0 680 428" preserveAspectRatio="none">
                      {Array.from({length:428},(_,i)=><line key={i} x1="0" y1={i} x2="680" y2={i} stroke={i%2===0?"#fff":"#a06020"} strokeWidth=".7"/>)}
                    </svg>
                    {/* Main specular sweep */}
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(115deg,transparent 15%,rgba(255,255,255,.38) 35%,rgba(255,255,255,.18) 48%,rgba(255,255,255,.05) 58%,transparent 72%)"}}/>
                    {/* Secondary shimmer */}
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(200deg,rgba(255,255,255,.12) 0%,transparent 40%,rgba(0,0,0,.1) 100%)"}}/>
                    {/* Edge vignette */}
                    <div style={{position:"absolute",inset:0,boxShadow:"inset 3px 3px 18px rgba(255,255,255,.2),inset -3px -3px 18px rgba(0,0,0,.35)"}}/>

                    {/* LOGO top-left */}
                    <div style={{position:"absolute",top:"9%",left:"6%",display:"flex",alignItems:"center",gap:8}}>
                      <svg width="28" height="28" viewBox="0 0 60 60">
                        {[["#9333ea",26],["#dc2626",21],["#f97316",16],["#eab308",12],["#22c55e",8],["#006633",5]].map(([c,r],i)=>(
                          <circle key={i} cx="30" cy="30" r={r} fill="none" stroke={c} strokeWidth="2" strokeDasharray="4 2.5"/>
                        ))}
                        <circle cx="30" cy="30" r="3.5" fill="#F5A623"/>
                      </svg>
                      <span style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:"200",fontSize:22,color:"rgba(255,255,255,.92)",letterSpacing:"2px",textShadow:"0 1px 8px rgba(0,0,0,.4)"}}>RojaMe</span>
                    </div>

                    {/* CHIP — realistic EMV */}
                    <div style={{position:"absolute",top:"42%",left:"6%"}}>
                      <svg width="58" height="44" viewBox="0 0 58 44">
                        <rect width="58" height="44" rx="6" fill="url(#chipGold)" stroke="rgba(160,120,50,.6)" strokeWidth=".8"/>
                        <defs>
                          <linearGradient id="chipGold" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c8a840"/>
                            <stop offset="30%" stopColor="#f0d870"/>
                            <stop offset="50%" stopColor="#d4b848"/>
                            <stop offset="100%" stopColor="#b89030"/>
                          </linearGradient>
                        </defs>
                        <rect x="4" y="4" width="50" height="36" rx="4" fill="url(#chipGold2)" stroke="rgba(140,100,30,.4)" strokeWidth=".6"/>
                        <defs>
                          <linearGradient id="chipGold2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d4b040"/>
                            <stop offset="50%" stopColor="#e8c858"/>
                            <stop offset="100%" stopColor="#c09030"/>
                          </linearGradient>
                        </defs>
                        {[17,29,41].map(x=><line key={x} x1={x} y1="4" x2={x} y2="40" stroke="rgba(120,88,20,.45)" strokeWidth=".8"/>)}
                        {[14,26].map(y=><line key={y} x1="4" x2="54" y1={y} y2={y} stroke="rgba(120,88,20,.45)" strokeWidth=".8"/>)}
                        {/* Contact pads */}
                        <rect x="4" y="4" width="12" height="9" rx="1.5" fill="rgba(255,235,120,.3)"/>
                        <rect x="42" y="4" width="12" height="9" rx="1.5" fill="rgba(255,235,120,.3)"/>
                        <rect x="4" y="31" width="12" height="9" rx="1.5" fill="rgba(255,235,120,.3)"/>
                        <rect x="42" y="31" width="12" height="9" rx="1.5" fill="rgba(255,235,120,.3)"/>
                      </svg>
                    </div>

                    {/* NFC waves */}
                    <div style={{position:"absolute",top:"47%",left:"calc(6% + 68px)"}}>
                      <svg width="22" height="28" viewBox="0 0 22 28">
                        {[4,9,15,21].map((r,i)=>(
                          <path key={i} d={`M1,14 Q${r*.4},${14-r*.7} ${r},14 Q${r},${14+r*.7} ${r*.4},${14+r*.7}`}
                            fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.6" opacity={1-i*.2}/>
                        ))}
                      </svg>
                    </div>

                    {/* Card number dots */}
                    <div style={{position:"absolute",bottom:"28%",left:"6%",display:"flex",gap:14}}>
                      {[0,1,2,3].map(g=>(
                        <div key={g} style={{display:"flex",gap:4}}>
                          {[0,1,2,3].map(d=>(
                            <div key={d} style={{width:5,height:5,borderRadius:"50%",background:"rgba(255,255,255,.5)"}}/>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Cardholder name */}
                    <div style={{position:"absolute",bottom:"10%",left:"6%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,.8)",letterSpacing:"2px",textTransform:"uppercase",textShadow:"0 1px 4px rgba(0,0,0,.3)"}}>
                      NÛPEL PAYÎZ
                    </div>

                    {/* Mastercard — bottom right, silver/mono */}
                    <div style={{position:"absolute",bottom:"10%",right:"6%",display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                      <div style={{display:"flex",alignItems:"center",position:"relative",width:52,height:32}}>
                        <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(190,182,165,.78)",position:"absolute",left:0}}/>
                        <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(215,205,185,.65)",position:"absolute",left:20}}/>
                        <div style={{position:"absolute",left:10,width:12,height:32,background:"linear-gradient(90deg,rgba(200,190,170,.5),rgba(220,210,190,.4))"}}/>
                      </div>
                      <span style={{fontSize:8,color:"rgba(255,255,255,.45)",fontFamily:"Arial",letterSpacing:"1px"}}>mastercard</span>
                    </div>

                    {/* Expiry */}
                    <div style={{position:"absolute",bottom:"10%",left:"50%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,.55)",letterSpacing:"1px"}}>
                      <div style={{fontSize:7,color:"rgba(255,255,255,.35)",marginBottom:2}}>VALID THRU</div>
                      12/29
                    </div>

                    {/* Top edge shine */}
                    <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent)"}}/>
                  </div>
                  <div style={{fontSize:9,color:"rgba(212,168,67,.45)",letterSpacing:".18em",textAlign:"center",textTransform:"uppercase",marginTop:10}}>Rose Gold · Premium · Mastercard</div>
                </div>

                {/* ═══ CARD 2: OBSIDIAN BLACK ═══ */}
                <div style={{perspective:"1200px"}}>
                  <div style={{
                    width:"100%",aspectRatio:"1.586",borderRadius:18,
                    position:"relative",overflow:"hidden",
                    background:"linear-gradient(135deg,#0a0a0a 0%,#1e1e1e 20%,#2c2c2c 35%,#181818 50%,#282828 65%,#121212 80%,#222222 100%)",
                    boxShadow:"0 40px 80px rgba(0,0,0,.85), 0 16px 40px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.15), inset 0 -1px 0 rgba(0,0,0,.5)",
                    transform:"rotateY(2deg) rotateX(-1deg)",
                  }}>
                    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.07}} viewBox="0 0 680 428" preserveAspectRatio="none">
                      {Array.from({length:428},(_,i)=><line key={i} x1="0" y1={i} x2="680" y2={i} stroke="#fff" strokeWidth=".6"/>)}
                    </svg>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(118deg,transparent 22%,rgba(255,255,255,.1) 40%,rgba(255,255,255,.04) 55%,transparent 68%)"}}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(200deg,rgba(255,255,255,.06) 0%,transparent 45%,rgba(0,0,0,.2) 100%)"}}/>
                    <div style={{position:"absolute",inset:0,boxShadow:"inset 2px 2px 16px rgba(255,255,255,.07),inset -2px -2px 16px rgba(0,0,0,.5)"}}/>

                    {/* Logo */}
                    <div style={{position:"absolute",top:"9%",left:"6%",display:"flex",alignItems:"center",gap:8}}>
                      <svg width="28" height="28" viewBox="0 0 60 60">
                        {[["#9333ea",26],["#dc2626",21],["#f97316",16],["#eab308",12],["#22c55e",8],["#006633",5]].map(([c,r],i)=>(
                          <circle key={i} cx="30" cy="30" r={r} fill="none" stroke={c} strokeWidth="2" strokeDasharray="4 2.5" strokeOpacity=".7"/>
                        ))}
                        <circle cx="30" cy="30" r="3.5" fill="#F5A623"/>
                      </svg>
                      <span style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:"200",fontSize:22,color:"rgba(255,255,255,.88)",letterSpacing:"2px"}}>RojaMe</span>
                    </div>

                    {/* CREDIT label */}
                    <div style={{position:"absolute",top:"9%",right:"6%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,.35)",letterSpacing:"4px"}}>CREDIT</div>

                    {/* Chip — dark platinum */}
                    <div style={{position:"absolute",top:"42%",left:"6%"}}>
                      <svg width="58" height="44" viewBox="0 0 58 44">
                        <rect width="58" height="44" rx="6" fill="url(#chipDark)" stroke="rgba(80,80,80,.6)" strokeWidth=".8"/>
                        <defs>
                          <linearGradient id="chipDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5a5a5a"/>
                            <stop offset="40%" stopColor="#888"/>
                            <stop offset="100%" stopColor="#444"/>
                          </linearGradient>
                        </defs>
                        <rect x="4" y="4" width="50" height="36" rx="4" fill="rgba(100,100,100,.6)" stroke="rgba(70,70,70,.5)" strokeWidth=".6"/>
                        {[17,29,41].map(x=><line key={x} x1={x} y1="4" x2={x} y2="40" stroke="rgba(50,50,50,.6)" strokeWidth=".8"/>)}
                        {[14,26].map(y=><line key={y} x1="4" x2="54" y1={y} y2={y} stroke="rgba(50,50,50,.6)" strokeWidth=".8"/>)}
                      </svg>
                    </div>

                    {/* NFC */}
                    <div style={{position:"absolute",top:"47%",left:"calc(6% + 68px)"}}>
                      <svg width="22" height="28" viewBox="0 0 22 28">
                        {[4,9,15,21].map((r,i)=>(
                          <path key={i} d={`M1,14 Q${r*.4},${14-r*.7} ${r},14 Q${r},${14+r*.7} ${r*.4},${14+r*.7}`}
                            fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1.6" opacity={1-i*.2}/>
                        ))}
                      </svg>
                    </div>

                    {/* Card number */}
                    <div style={{position:"absolute",bottom:"28%",left:"6%",display:"flex",gap:14}}>
                      {[0,1,2,3].map(g=>(
                        <div key={g} style={{display:"flex",gap:4}}>
                          {[0,1,2,3].map(d=>(
                            <div key={d} style={{width:5,height:5,borderRadius:"50%",background:"rgba(255,255,255,.35)"}}/>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Name */}
                    <div style={{position:"absolute",bottom:"10%",left:"6%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,.65)",letterSpacing:"2px",textTransform:"uppercase"}}>
                      NÛPEL PAYÎZ
                    </div>

                    {/* Expiry */}
                    <div style={{position:"absolute",bottom:"10%",left:"50%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,.4)",letterSpacing:"1px"}}>
                      <div style={{fontSize:7,color:"rgba(255,255,255,.25)",marginBottom:2}}>VALID THRU</div>
                      12/29
                    </div>

                    {/* Mastercard dark */}
                    <div style={{position:"absolute",bottom:"10%",right:"6%",display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                      <div style={{display:"flex",alignItems:"center",position:"relative",width:52,height:32}}>
                        <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(80,75,68,.8)",position:"absolute",left:0}}/>
                        <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(100,95,85,.7)",position:"absolute",left:20}}/>
                      </div>
                      <span style={{fontSize:8,color:"rgba(255,255,255,.25)",fontFamily:"Arial",letterSpacing:"1px"}}>mastercard</span>
                    </div>

                    <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)"}}/>
                    <div style={{position:"absolute",inset:0,border:"1px solid rgba(255,255,255,.07)",borderRadius:18,pointerEvents:"none"}}/>
                  </div>
                  <div style={{fontSize:9,color:"rgba(255,255,255,.22)",letterSpacing:".18em",textAlign:"center",textTransform:"uppercase",marginTop:10}}>Obsidian Black · Credit · Mastercard</div>
                </div>

                {/* ═══ CARD 3: DEEP OCEAN BLUE ═══ */}
                <div style={{perspective:"1200px"}}>
                  <div style={{
                    width:"100%",aspectRatio:"1.586",borderRadius:18,
                    position:"relative",overflow:"hidden",
                    background:"linear-gradient(135deg,#0d2040 0%,#163060 18%,#1e4080 30%,#163870 45%,#0f2850 60%,#1a3870 75%,#102040 100%)",
                    boxShadow:"0 40px 80px rgba(0,0,0,.75), 0 16px 40px rgba(10,40,120,.45), inset 0 1px 0 rgba(255,255,255,.4), inset 0 -1px 0 rgba(0,0,0,.4)",
                    transform:"rotateY(-1deg) rotateX(1.5deg)",
                  }}>
                    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.08}} viewBox="0 0 680 428" preserveAspectRatio="none">
                      {Array.from({length:428},(_,i)=><line key={i} x1="0" y1={i} x2="680" y2={i} stroke="#fff" strokeWidth=".6"/>)}
                    </svg>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(122deg,transparent 18%,rgba(255,255,255,.28) 36%,rgba(255,255,255,.1) 52%,transparent 65%)"}}/>
                    <div style={{position:"absolute",inset:0,background:"linear-gradient(190deg,rgba(100,180,255,.08) 0%,transparent 50%,rgba(0,0,50,.15) 100%)"}}/>
                    <div style={{position:"absolute",inset:0,boxShadow:"inset 2px 2px 16px rgba(100,160,255,.12),inset -2px -2px 16px rgba(0,0,0,.4)"}}/>

                    {/* Logo */}
                    <div style={{position:"absolute",top:"9%",left:"6%",display:"flex",alignItems:"center",gap:8}}>
                      <svg width="28" height="28" viewBox="0 0 60 60">
                        {[["#9333ea",26],["#dc2626",21],["#f97316",16],["#eab308",12],["#22c55e",8],["#006633",5]].map(([c,r],i)=>(
                          <circle key={i} cx="30" cy="30" r={r} fill="none" stroke={c} strokeWidth="2" strokeDasharray="4 2.5"/>
                        ))}
                        <circle cx="30" cy="30" r="3.5" fill="#F5A623"/>
                      </svg>
                      <span style={{fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:"200",fontSize:22,color:"rgba(255,255,255,.92)",letterSpacing:"2px",textShadow:"0 1px 8px rgba(0,50,150,.5)"}}>RojaMe</span>
                    </div>

                    {/* DEBIT label */}
                    <div style={{position:"absolute",top:"9%",right:"6%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,.4)",letterSpacing:"4px"}}>DEBIT</div>

                    {/* Gold chip */}
                    <div style={{position:"absolute",top:"42%",left:"6%"}}>
                      <svg width="58" height="44" viewBox="0 0 58 44">
                        <rect width="58" height="44" rx="6" fill="url(#chipG2)" stroke="rgba(180,140,50,.5)" strokeWidth=".8"/>
                        <defs>
                          <linearGradient id="chipG2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c8a840"/>
                            <stop offset="40%" stopColor="#f0d870"/>
                            <stop offset="100%" stopColor="#b09030"/>
                          </linearGradient>
                        </defs>
                        <rect x="4" y="4" width="50" height="36" rx="4" fill="rgba(200,170,60,.7)" stroke="rgba(150,110,20,.4)" strokeWidth=".6"/>
                        {[17,29,41].map(x=><line key={x} x1={x} y1="4" x2={x} y2="40" stroke="rgba(120,80,10,.5)" strokeWidth=".8"/>)}
                        {[14,26].map(y=><line key={y} x1="4" x2="54" y1={y} y2={y} stroke="rgba(120,80,10,.5)" strokeWidth=".8"/>)}
                        <rect x="4" y="4" width="12" height="9" rx="1.5" fill="rgba(255,225,100,.25)"/>
                        <rect x="42" y="4" width="12" height="9" rx="1.5" fill="rgba(255,225,100,.25)"/>
                        <rect x="4" y="31" width="12" height="9" rx="1.5" fill="rgba(255,225,100,.25)"/>
                        <rect x="42" y="31" width="12" height="9" rx="1.5" fill="rgba(255,225,100,.25)"/>
                      </svg>
                    </div>

                    {/* NFC */}
                    <div style={{position:"absolute",top:"47%",left:"calc(6% + 68px)"}}>
                      <svg width="22" height="28" viewBox="0 0 22 28">
                        {[4,9,15,21].map((r,i)=>(
                          <path key={i} d={`M1,14 Q${r*.4},${14-r*.7} ${r},14 Q${r},${14+r*.7} ${r*.4},${14+r*.7}`}
                            fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.6" opacity={1-i*.2}/>
                        ))}
                      </svg>
                    </div>

                    {/* Card number */}
                    <div style={{position:"absolute",bottom:"28%",left:"6%",display:"flex",gap:14}}>
                      {[0,1,2,3].map(g=>(
                        <div key={g} style={{display:"flex",gap:4}}>
                          {[0,1,2,3].map(d=>(
                            <div key={d} style={{width:5,height:5,borderRadius:"50%",background:"rgba(255,255,255,.45)"}}/>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Name */}
                    <div style={{position:"absolute",bottom:"10%",left:"6%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:13,color:"rgba(255,255,255,.78)",letterSpacing:"2px",textTransform:"uppercase",textShadow:"0 1px 6px rgba(0,30,100,.4)"}}>
                      NÛPEL PAYÎZ
                    </div>

                    {/* Expiry */}
                    <div style={{position:"absolute",bottom:"10%",left:"50%",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,.45)",letterSpacing:"1px"}}>
                      <div style={{fontSize:7,color:"rgba(255,255,255,.28)",marginBottom:2}}>VALID THRU</div>
                      12/29
                    </div>

                    {/* VISA */}
                    <div style={{position:"absolute",bottom:"10%",right:"6%",fontFamily:"'Times New Roman',Georgia,serif",fontStyle:"italic",fontWeight:700,fontSize:28,color:"rgba(255,255,255,.82)",letterSpacing:"-1px",textShadow:"0 2px 8px rgba(0,0,100,.4)"}}>
                      VISA
                    </div>

                    <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent)"}}/>
                    <div style={{position:"absolute",inset:0,border:"1px solid rgba(255,255,255,.1)",borderRadius:18,pointerEvents:"none"}}/>
                  </div>
                  <div style={{fontSize:9,color:"rgba(100,160,220,.45)",letterSpacing:".18em",textAlign:"center",textTransform:"uppercase",marginTop:10}}>Deep Ocean Blue · Debit · Visa</div>
                </div>

              </div>

              {/* Bottom info row */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,paddingTop:4}}>
                <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
                  {["Blockchain · Web3","SoulBound Token","Mastercard"].map((tag,i)=>(
                    <span key={i} style={{fontSize:10,color:"rgba(212,168,67,.5)",letterSpacing:".06em"}}>✦ {tag}</span>
                  ))}
                </div>
                <a href="https://twitter.com/rojamecredit" target="_blank" style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:11,color:"rgba(212,168,67,.55)",textDecoration:"none",fontFamily:"'Lora',serif",transition:"color .18s"}}
                  onMouseEnter={e=>e.currentTarget.style.color=C.gold} onMouseLeave={e=>e.currentTarget.style.color="rgba(212,168,67,.55)"}>
                  <XI size={12} color="currentColor"/> @rojamecredit
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Separate website button */}
        <Reveal delay={.2}>
          <a href="https://rojame.com" target="_blank" style={{
            display:"flex",alignItems:"center",justifyContent:"center",gap:10,
            width:"100%",padding:"16px",
            background:`linear-gradient(135deg,${C.goldD},${C.gold})`,
            borderRadius:8,
            fontFamily:"'Playfair Display',serif",
            fontSize:15,fontWeight:700,
            color:"#fff",textDecoration:"none",
            boxShadow:`0 6px 24px rgba(192,120,10,.28)`,
            transition:"all .2s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 10px 32px rgba(192,120,10,.38)`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=`0 6px 24px rgba(192,120,10,.28)`;}}>
            {tx.site} ↗
          </a>
        </Reveal>

      </div>
    );
  };

  // ── ARTICLES / GOTAR ───────────────────────────────────
  const ARTICLES = {
    ku: [
      {
        id:"rtk",
        title:"Roj Tev Kurdî — Projeya Nasnameya Kurdî ya Dîjîtal",
        author:"Welat Rodî",
        date:"2017",
        intro:"Projeya Roj Tev Kurdî, ji bo her kesên kurdî li seranserê dinyayê, nasnameyeke dîjîtal a bi bingeha çandî û bi taybetmendiya neteweyî girêdayîye ava dike. Ev proje, gaveke aştîyane yê, li ser sîyasetê yê û li ser nikaşên polîtîkayê ye.",
        body:`Projeya Roj Tev Kurdî, ji bo her kesên kurdî li seranserê dinyayê, nasnameyeke dîjîtal a bi bingeha çandî û bi taybetmendiya neteweyî girêdayîye ava dike. Ev proje, gaveke aştîyane yê, li ser sîyasetê yê û li ser nikaşên polîtîkayê ye.

Proje, ji bo kesên kurd di qada dîjîtalê de, destpêkê de nasnameyeke sembolîk, di qonaxên paşê de jî nasnameyeke dîjîtal a fonksiyonel dixwaze ava bike. Yek ji sedemên girîngiya vê projeyê ew e ku gelê Kurd, li gorî nêrîna raya giştî ya dinyayê, mezintirîn gelê bê dewletek azad e û ne xwedî dewletek bi serxwe ye û di asta navneteweyî de jî ne xwedî nasnameyeke fermî ye.

Armanceke din a demdirêj a projeya Roj Tev Kurdî, tespîtkirina nifûsa Kurdên ku li seranserê dinyayê dikare bê erêkirin e. Îro nifûsa gelê Kurd di çavkaniyên cuda de bi rêjeyên pir fireh û nezelal tê diyarkirin (30 mîlyon, 50 mîlyon, 70 mîlyon hwd.). Ev proje, bi karanîna derfet û teknîkên dîjîtal ên modern, wê mîsoger bike ku li ser erdê, dinyayê bigihîje serjimareke nifûsê ya rast.

Sê Qonaxên Pêşveçûnê:

1. Twitter (X): Destpêka civakî ya ku civaka kurd li dora nirxên hevpar hişyar dike, xuya bûnê û xwebûneke dijîtal a civakî û nasnameyeke sembolîk û dîjîtal ava dike.

2. Web + Sepana Mobîl: Sîstematîzekirin, ewlekariya daneyan, rêxistinkirin û gihîştina teknîkî.

3. Blockchain — Web3 — Soulbound Token: Domdarî, meşrûtiyet, naskirina navneteweyî û binesaziya neteweya dîjîtal.

Ev avahiya yekgirtî, bi karanîna amûrên herî bihêz ên dinyaya modern û dîjîtal, ji bo gelê kurd nasnameyeke dîjîtal peyda dike; mekanîzmaya parastina çandî û di qada navneteweyî de xuyabûnê zêde dike û nexşerêyeke dîrokî ya bi girîngiya pêşveçûnê pêşkêş dike.

— Welat Rodî · 17/05/2017`
      },
      {
        id:"activism",
        title:"Riya Aktîvîzma Kurdî ya Dîjîtal û Bangek ji bo Avabûneke Alternatîf",
        author:"Welat Rodî",
        date:"2024",
        intro:"Di dema ku piraniya welatê neteweyî yê Kurdistanê di bin dagirkeriyê de maye, derbirîna eşkere ya nasnameya kurdî û nirxên çandî berdewam rû bi qedexe û tepeserkirinê dide.",
        body:`Di dema ku piraniya welatê neteweyî yê Kurdistanê di bin dagirkeriyê de maye, derbirîna eşkere ya nasnameya kurdî û nirxên çandî berdewam rû bi qedexe û tepeserkirinê dide. Her çendî astengiyên laşî xuyabûna nasnameya kurdî zêde sînordar bike jî, qada dîjîtal weke cihekî alternatîf xwe daye xuya kirin ku ji van sînoran derbas dibe.

Înternet û platformên medyaya civakî ji gelê kurd re derfet didin ku ziman, nav û semboyên neteweyî bi azadî derbibirin, û hem avabûna nasnameya dîjîtal a kesane hem jî ya kolektîf mümkün dike. Bi vî awayî, qada dîjîtal dibe qadeke stratejîk ji bo misogerkirina domdariya hebûna kurdî û ji bo avabûna bingehên formên rêxistinkirina pêşerojê.

Lê îro, gelek aktîvîstên kurdî yên ku di qada dîjîtal de tevdigerin, enerjiya xwe li ser nîqaşên şexsî, hevrikiyên partî-navendî û polemîkên ego-yî xerc dikin. Ev ne tenê kalîteya hilberîna naverokê dadixîne, di heman demê de pêşveçûna hişmendiya kolektîf jî digire, û di encamê de potansiyela dîjîtal bêpê dibe berî ku were veguherandin strukturên betonî.

Ji bo vê sedemê, divê her kesê hişmend encamên siyasî û çandî yên hilbijartina zimên bipirse û nasnameya kurdî di qada dîjîtal de xuya bike. Lê pirsgirêka zimanê tenê ne bes e; temsîliya bihêz ya nasnameya neteweyî di cîhana dîjîtal de, hişmendiyek yekgirtî û iradeyeke biryardar hewce dike.

Ev bang ji her kesê hişmend dixwaze ku, ji bilî hesabê xwe yê serekî yê Twitterê, hesabeke duyemîn a nasnameya dîjîtal saz bike — hesabek ku bi tevahî ji nasnameya kurdî re hatiye veqetandin, ji navên kurdî bigire heya semboyên kurdî û zimanê kurdî.

[Ne ji %99.9, ji %100 Kurdî]

— Welat Rodî`
      },
      {
        id:"names",
        title:"Nav Weke Hilgirên Nasnameya Kolektîf: Rola Navan û Paşnavan di Avabûna Hişmendiya Neteweyî ya Kurdî de",
        author:"Welat Rodî",
        date:"2024",
        intro:"Tevlêbûna kesekî di cîhan û civakê de bi navekî dest pê dike; ev nasnameya yekem a sembolîk ku ew bi dest dixe, hem xwe hem jî têkiliyên xwe yên bi yên din re li seranserê jiyana wan diyar dike.",
        body:`Tevlêbûna kesekî di cîhan û civakê de bi navekî dest pê dike; ev nasnameya yekem a sembolîk ku ew bi dest dixe, hem xwe hem jî têkiliyên xwe yên bi yên din re li seranserê jiyana wan diyar dike, sembolek xuya ku ew di her qadê de neçar e derbibire.

Nav ne tenê kesan diyar dikin; ew jî bîr, berxwedan û têkoşîna nasnameya gelekî ji nifşan re hildigirin. Li seranserê dîrokê, gelê Kurd, di hewldana wan de ku nasnameya xwe li hember siyasetên asîmîlasyonê biparêzin, bi navên ku nîşaneyên bingehîn ên aidiyet in, cihekî berxwedanê afirandiye.

Navên kurdî weke "Dijwar", "Bahoz", "Arî", "Zinar", "Kendal", "Berîvan", "Zozan", "Arîn", "Zana" û "Botan" ne tenê behsa xwezayê dikin; ew di bîra me ya kolektîf de weke hilgirên xemgînî, berxwedan û aidiyeta neteweyî hatine qelandin jî semboyên hene.

Siyasetên navdanê di cîhana dîjîtal de jî deng didin. Medyaya civakî, bi taybetî, bûye qada giştî ya nû ku nasname tê de xuya dibe.

Ji ber vê yekê, derbasbûna ji xuyakirina nasnameya herêmî ber bi paşnavên kapsayî yên ku netewe yekgirtî dikin girîng e di xurtkirina aidiyeta kolektîf û hişmendiya kolektîf de.

Paşnavên weke "Azadî", "Roj", "Payîz", "Şêr", "Havîn" û "Kurdî" dikarin hesteke hevpar a "em" biafirînin, li ser sînorên erdnîgarî û siyasî.

Hilbijartinên nav û paşnavê yên ku ciwanên kurd dikin ne tenê amûrek xuyanîbûneke kesane ne; ew têkoşîna gelekî temsîl dikin ji bo bidomandina berxwedana xwe ya dîrokî, domdariya çandî û hebûna neteweyî.

[Ne ji %99.9, ji %100 Kurdî]

— Welat Rodî`
      }
    ],
    en: [
      {
        id:"rtk",
        title:"Roj Tev Kurdî — The Digital Kurdish Identity Project",
        author:"Welat Rodî",
        date:"2017",
        intro:"The Roj Tev Kurdî Digital Kurdish Identity Project aims to provide every Kurdish individual worldwide with a culturally focused, nationally recognized digital identity. This project is a peaceful, non-political initiative.",
        body:`The "Roj Tev Kurdî" Digital Kurdish Identity Project is a peaceful, non-political initiative that aims to provide every Kurdish individual worldwide with a culturally focused, nationally recognized digital identity. The project aims to provide Kurdish individuals with a digital identity, initially symbolic and then functional. The fact that Kurds, recognized by the world as the largest stateless nation, lack an official national identity makes this project significant.

Another long-term goal of the Roj Tev Kurdî project is to determine a verifiable Kurdish population worldwide. Currently, the Kurdish population is estimated at very wide and uncertain intervals across various sources (30 million, 50 million, 70 million, etc.). This project will enable a reliable census on a global scale using modern digital resources and techniques.

The Three-Stage Evolution:

1. Twitter (X): A social initiative that awakens the community and provides visibility and symbolic identity to the Kurdish society, which unites around common values.

2. Web + Mobile Application: Systematization, data security, organization, and technical maturity.

3. Blockchain – Web3 – SoulBound: Permanence, legitimacy, international recognition, and the foundation of a digital nation.

This integrated framework provides the Kurdish people with a roadmap of historical significance, enabling them to acquire a digital identity through the most powerful tools of the modern and digital world, while simultaneously creating mechanisms for cultural preservation and international visibility.

— Welat Rodî · 17/05/2017`
      },
      {
        id:"activism",
        title:"The Direction of Kurdish Activism in the Digital World and a Call for an Alternative Formation",
        author:"Welat Rodî",
        date:"2024",
        intro:"While much of the Kurdish national homeland remains under occupation, the public expression of Kurdish identity and cultural values continues to face severe restrictions and repression.",
        body:`While much of the Kurdish national homeland remains under occupation, the public expression of Kurdish identity and cultural values continues to face severe restrictions and repression. Although physical barriers significantly limit the visibility of Kurdish identity, the digital realm has emerged as an alternative space that transcends such constraints.

The internet and social media platforms provide the Kurdish people with the opportunity to freely express their language, names, and national symbols, enabling both individual and collective construction of a digital identity. In this way, the digital sphere becomes a strategic arena for ensuring the continuity of Kurdish existence and for building the foundations of future forms of organization.

In physical reality, where identity is often suppressed and fragmented, the digital world allows for its reconstruction in a different form. A network built around language and symbols can serve as the foundation for a digital organizational structure woven around conscious individuals.

Yet today, many Kurdish activists operating in the digital realm expend their energy on personal disputes, party-centered rivalries, and ego-driven polemics. This not only lowers the quality of content production but also obstructs the development of collective consciousness.

One of the most pressing issues in today's digital activism is the insufficient use of the Kurdish language. Activists often justify this by claiming that their target audience "speaks Turkish," that assimilation has made Turkish the primary language of communication, or that Turkish-language content generates more engagement.

However, this is not merely a technical issue but a matter of identity and political stance. The dominance of Turkish in digital spaces weakens our emotional and intellectual bonds with compatriots in the Diaspora, Rojhilat, Rojava, and Başur, leading to a linguistic and cultural rupture.

What is needed today is not the wasting of time with fragmented and sporadic reactions but the building of a conscious, determined, and organized digital presence. As a first concrete step, accounts producing exclusively Kurdish-language content should be established on widely accessible platforms such as Twitter.

This call proposes the creation of secondary digital identities — Twitter accounts that produce exclusively Kurdish content, reflecting Kurdish identity in every aspect: from names and surnames to symbols and language.

["Not 99.9%, 100% Kurdish"]

— Welat Rodî`
      },
      {
        id:"names",
        title:"Names as Carriers of Collective Identity: The Role of Names and Surnames in the Construction of Kurdish National Consciousness",
        author:"Welat Rodî",
        date:"2024",
        intro:"An individual's inclusion in the world and society begins with a name; this first symbolic identity they acquire defines both themselves and their relationships with others throughout their lives.",
        body:`An individual's inclusion in the world and society begins with a name; this first symbolic identity they acquire defines both themselves and their relationships with others throughout their lives, a visible symbol they are constantly forced to express in every sphere.

Names not only define individuals; they also carry the memory, resistance, and identity struggle of a people down to generations. Throughout history, the Kurdish people have created a space of resistance through names, the most fundamental indicators of belonging, in their efforts to preserve their identity against the assimilation policies they have faced.

Kurdish names such as "Dijwar," "Bahoz," "Arî," "Zinar," "Kendal," "Berîvan," "Zozan," "Arîn," "Zana," and "Botan" not only refer to nature; they are also symbols etched in our collective memory as carriers of longing, resistance, and national belonging.

However, with assimilation policies from the Ottoman period to the present, names of Kurdish individuals have also been transformed. Names incompatible with the people's historical, mythological, and cultural context have become internalized products of assimilation.

Today, there is a noticeable increase among Kurdish youth in their preference for names that reference the Kurdish language and cultural nature. Names such as "Baran", "Evîn", "Berçem", "Berfîn", "Sîdar", "Kendal", "Zana", "Zinar", "Brûsk" are expressions of the effort to reconnect with the history and cultural memory of the people.

Nationally inclusive surnames such as "Azadî," "Roj," "Payîz," "Şêr," "Havîn," and "Kurdî" can foster a shared sense of "we," regardless of geographical or political boundaries.

The name and surname choices of Kurdish youth are not merely tools of individual visibility; they symbolize a people's struggle to maintain their historical resistance, cultural continuity, and national existence.

["Not 99.9%, 100% Kurdish"]

— Welat Rodî`
      }
    ],
    so: [
      {
        id:"rtk",
        title:"Roj Tev Kurdî — پڕۆژەی ناسنامەی دیجیتاڵی کوردی",
        author:"Welat Rodî",
        date:"2017",
        intro:"پڕۆژەی ناسنامەی دیجیتاڵی کوردی یا Roj Tev Kurdî، ئامانجی ئەوەیەتی کە بۆ هەموو کوردەکانی جیهان ناسنامەیەکی دیجیتاڵی کولتووری و نیشتمانی دابین بکات.",
        body:`پڕۆژەی ناسنامەی دیجیتاڵی کوردی یا Roj Tev Kurdî، هەنگاوێکی ئاشتیخوازانە و لە سەرەوەی پۆلیتیکایە کە ئامانجی ئەوەیەتی کە بۆ هەموو کوردەکانی جیهان ناسنامەیەکی دیجیتاڵی بنەمای کولتووری و نیشتمانی دابین بکات.

پڕۆژەکە ئامانجی ئەوەیەتی کە بۆ تاکەکانی کورد ناسنامەیەکی دیجیتاڵ دابین بکات، لە سەرەتادا سیمبۆڵی، دواتر فونکشینی. ئەوەی کە کورد، کە لەلایەن جیهانەوە وەک گەلی مەزنترینی بێ دەوڵەت دەناسرێن، ناسنامەیەکی فەرمیی نیشتمانی نییانە ئەم پڕۆژەیە پێویست دەکات.

سێ قۆناغی پێشکەوتن:

١. Twitter (X): دەستپێکی کۆمەڵایەتی کە کۆمەڵگای کوردی لەدەوری بەهاکانی هاوبەش ئاگادار دەکاتەوە.

٢. ماڵپەڕ + ئەپی مۆبایل: سیستەماتیزەکردن، پاراستنی داتا، ڕێکخستن.

٣. Blockchain — Web3 — Soulbound Token: جێگیری، مەشرووعیەت، ناسینی نێودەوڵەتی.

— Welat Rodî · 17/05/2017`
      },
      {
        id:"activism",
        title:"ئەرکی ئەکتیڤیزمی کوردی لە دنیای دیجیتاڵدا و بانگەشەیەک بۆ پێکهێنانێکی جێگزین",
        author:"Welat Rodî",
        date:"2024",
        intro:"لەکاتێکدا کە زۆری وەڵامی نیشتمانی نیشتمانی کوردستان لەژێر داگیرکاریدایە، دەربڕینی ئاشکرای ناسنامەی کوردی و بەهاکانی کولتووری بەردەوام رووبەڕووی قەدەغە و سەرکوتکردن دەبێت.",
        body:`لەکاتێکدا کە زۆری وەڵامی نیشتمانی کوردستان لەژێر داگیرکاریدایە، دەربڕینی ئاشکرای ناسنامەی کوردی و بەهاکانی کولتووری بەردەوام رووبەڕووی قەدەغە و سەرکوتکردن دەبێت. ئەگەرچی بەندکاریەکانی جەستەیی خویاییی ناسنامەی کوردی بە بەرچاو سنووردار دەکات، بەلام قەوارەی دیجیتاڵ وەک شوێنێکی جێگزین دەرکەوتووە کە لەم سنوورانە تێ دەپەڕێت.

ئینتەرنێت و پلاتفۆرمەکانی میدیای کۆمەڵایەتی بۆ گەلی کورد دەرفەت دەدەن کە زمان، ناو و هیمایەکانی نیشتمانی بە ئازادی دەربدەن، هم ئەو پرۆسەیی دروستکردنی ناسنامەی دیجیتاڵی تاکەکانە و هم کۆمەڵایەتییەکەی ئەمکانپەزیر دەکات.

بەلام ئەمڕۆ، زۆرێک لە ئەکتیڤیستەکانی کوردی کە لە قەوارەی دیجیتاڵدا کار دەکەن، ئەنەرژیاکەیان لەسەر نێودان و مەترسیەکانی کەسایەتی، هاورقیبانی تایبەت بە پارتەکان و پۆلێمیکەکانی ئیگۆ تەرخان دەکەن.

ئەم بانگەشەیە هەر تاکێکی ئاگادار داوا دەکات کە لەگەڵ ئەکاونتی سەرەکی تویتەرەکەیدا، ئەکاونتێکی دووەمیش دروست بکات کە تەواو بۆ ناسنامەی کوردی تەرخان کراوە.

[نەک لە %٩٩.٩، لە %١٠٠ کوردی]

— Welat Rodî`
      },
      {
        id:"names",
        title:"ناو وەک هەڵگرەکانی ناسنامەی کۆمەڵایەتی: ڕۆڵی ناو و ناوبانگ لە دروستکردنی هۆشیاریی نیشتمانی کوردیدا",
        author:"Welat Rodî",
        date:"2024",
        intro:"بەشداربوونی کەسێک لە جیهان و کۆمەڵگادا بە ناوێک دەستپێ دەکات؛ ئەم ناسنامەی سیمبۆڵیی یەکەمەی کە دەست دەکەویت، هەم خۆی هەم پەیوەندییەکانی بە یەکترەوەی لەسەرتاسەری ژیانیان دیاری دەکات.",
        body:`بەشداربوونی کەسێک لە جیهان و کۆمەڵگادا بە ناوێک دەستپێ دەکات؛ ئەم ناسنامەی سیمبۆڵیی یەکەمەی کە دەست دەکەویت، هەم خۆی هەم پەیوەندییەکانی بە یەکترەوەی لەسەرتاسەری ژیانیان دیاری دەکات.

ناو تەنها تاکەکان دیاری ناکەن؛ بیرەوەری، بەرگری و تێکۆشانی ناسنامەی گەلێکیشی بۆ نەوەکان دەگەیەنن. لەسەرتاسەری مێژوودا، گەلی کورد، لە هەوڵیاندا ناسنامەکەیان لەبەرامبەر سیاسەتەکانی هاوتاکاریدا بپارێزن، لەڕێگەی ناوەکاندا، کە بنچینەییترین نیشانەکانی خاوەندانن، شوێنێکی بەرگریاندا دروست کردووە.

ناوی کوردی وەک "دیژوار"، "باهۆز"، "ئاری"، "زینار"، "کەندال"، "بەریڤان"، "زۆزان"، "ئارین"، "زانا" و "بۆتان" تەنها باس لە سروشت ناکەن؛ هەروەها هیمایەکانیشن کە لە بیرەوەری کۆمەڵایەتیمانداکەتووە وەک هەڵگرانی خەیاڵ، بەرگری و خاوەندانی نیشتمانی.

ناوبانگەکانی کۆمەڵایەتی لەگەڵ "ئازادی"، "ڕۆژ"، "پاییز"، "شێر"، "هاوین" و "کوردی" دەتوانن هەستێکی هاوبەشی "ئێمە" بدرووستکەن، بێئەوەی سنووری جوگرافی یان سیاسی پێویست بێت.

[نەک لە %٩٩.٩، لە %١٠٠ کوردی]

— Welat Rodî`
      }
    ],
    za: [
      {
        id:"rtk",
        title:"Roj Tev Kurdî — Proyaya Nasnameyê Kurdî yê Dîjîtalî",
        author:"Welat Rodî",
        date:"2017",
        intro:"Proyaya Nasnameyê Kurdî yê Dîjîtalî ya Roj Tev Kurdî, seba heme kurdanê dınyay nasnameyêka dîjîtalî ya bingehê ferhengî û taybetmendiya neteweyî vırazena.",
        body:`Proyaya Nasnameyê Kurdî yê Dîjîtalî ya Roj Tev Kurdî, gavêka aştîyane û serê polîtîkayî ya kı seba heme kurdanê dınyay nasnameyêka dîjîtalî ya bingehê ferhengî û taybetmendiya neteweyî vırazenaye.

Proya, seba kesanê kurdî di qada dîjîtalî de, destpêkî nasnameyêka sembolîkî, di qonaxê pey de nasnameyêka dîjîtalî ya fonksiyonî wazena bivarazê. Yewê lê zêde ê kı vê proyayî grênaydê ew ê kı gelê Kurd, li gorê nêrişê raya umûmî ya dınyay, mezinerî gelê bê dewletêko azad ê û ne xawenê dewletêka serbest ê û di astê nêwdewletî de jî ne xawenê nasnameyêka rêsmî ya.

Sê Qonaxê Pêşveçûnî:

1. Twitter (X): Destpêkê komelayetî kı komela kurdî vırê nirxanê hewlan hişyar kena, xuyabiyayış û xwebiyayışêko dîjîtalî yê komelayetî û nasnameyêka sembolîkî û dîjîtalî vırazena.

2. Web + Sepana Mobîl: Sîstematîzekerdış, ewlekerdışê daneyan, rêxistinkerdış û gihîştına teknîkî.

3. Blockchain — Web3 — Soulbound Token: Domdarî, meşrûiyet, naskerişê nêwdewletî û bingeha neteweya dîjîtalî.

— Welat Rodî · 17/05/2017`
      },
      {
        id:"activism",
        title:"Rêça Aktîvîzma Kurdî ya Dîjîtalî û Bangê Pê Avabiyayışêko Alternatîf",
        author:"Welat Rodî",
        date:"2024",
        intro:"Pê zêde ê welatê neteweyî yê Kurdistanî di bin dagirkerişî de mantê, derbirışê eşkera yê nasnameyê kurdî û nirxanê ferhengî berdewam rû bi qedexe û tepeserkerişî dano.",
        body:`Pê zêde ê welatê neteweyî yê Kurdistanî di bin dagirkerişî de mantê, derbirışê eşkera yê nasnameyê kurdî û nirxanê ferhengî berdewam rû bi qedexe û tepeserkerişî dano. Heto kı astengiyê laşî xuyabiyayışê nasnameyê kurdî zêde sınırdar bikeriyen jî, qada dîjîtalî wek cayêko alternatîf xo dayê xuyakerdenê kı vê sınuranê derbas bena.

Înternetî û platformanê medyayê komelayetî gelê kurdî ra derfet danê kı zıwan, nav û sembolê neteweyî bi azadî derbirnê, hem avabiyayışê nasnameyê dîjîtalî ya şexsî û hem ya koletîv mımkın kena.

Labelê iroye, zêde lê aktîvîstê kurdî yê kı di qada dîjîtalî de kar kenê, enerjiyayê xo ser nêodanê şexsî, hevrikiyê partî-navendî û polemîkê ego terkerdişî kerê.

Ew bang heme kesê hişmend xazena kı, gınî hesabê xo yê sereyan yê Twitterî ra, hesabêko dıyemên jî vake — hesabêko kı tamamî seba nasnameyê kurdî viyarteyo, zi navê kurdî bigêre heya sembolê kurdî û zıwanê kurdî.

[Ne lê %99.9, lê %100 Kurdkî]

— Welat Rodî`
      },
      {
        id:"names",
        title:"Nav Wek Hilgirê Nasnameyê Koletîv: Rola Navan û Soyadanê di Avabiyayışê Hişmendiya Neteweyî ya Kurdkî de",
        author:"Welat Rodî",
        date:"2024",
        intro:"Tevlêbiyayışê kesêko di cîhan û komelî de bi nameyêk dest pê keno; ew nasnameyê yewin yê sembolîkî kı dest keweno, hem xo hem têkiliyê xo yê bi bınanê keno li serê heme omrê xo diyar keno.",
        body:`Tevlêbiyayışê kesêko di cîhan û komelî de bi nameyêk dest pê keno; ew nasnameyê yewin yê sembolîkî kı dest keweno, hem xo hem têkiliyê xo yê bi bınanê keno li serê heme omrê xo diyar keno, sembolêko xuyayî kı her cayê de neçar ê derbirnê.

Nav ne tenê kesan diyar kenê; bîr, bêrgirî û têkoşanê nasnameyê gelêkî jî ji nifşan ra hilgenê. Li serê heme dîrokî, gelê Kurd, di hewldanê xo de kı nasnameyê xo li hember siyasetanê asîmîlasyonî bıparêzê, bi navan kı nîşaneyê bingehênî yê aîdiyetî yê, cayêko bêrgirî vıraşto.

Soyadanê kı bi "Azadî", "Roj", "Payîz", "Şêr", "Havîn" û "Kurdî" dıgerenê dêsatê hestêko hewlbêş yê "ême" biafêrê, bê kı sınurê erdnîgarî ya siyasî pêwiste bê.

Hilbijarnayışê navan û soyadanê kı cıwanê kurd kenê ne tenê amûrê xuyaniyê şexsî yo; têkoşanê gelêkî temsîl keno seba bıdomnayışê bêrgiriyê xo yê dîrokî, domdariya ferhengî û hebûna neteweyî.

[Ne lê %99.9, lê %100 Kurdkî]

— Welat Rodî`
      }
    ]
  };

  const GotarPage=()=>{
    const [activeLang,setActiveLang]=useState(lang);
    const [activeArticle,setActiveArticle]=useState(null);
    const articles = ARTICLES[activeLang] || ARTICLES.ku;
    const langTabs=[["ku","Kurmancî"],["so","Soranî"],["za","Zazakî"],["en","English"]];

    return(
      <div style={{padding:"52px 40px 64px",maxWidth:820,margin:"0 auto"}}>
        <BackBtn/>
        {/* Header */}
        <Reveal>
          <span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>
            "Articles / Gotar"
          </span>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>
            "Project Articles"
          </h2>
          <div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:28}}/>
        </Reveal>

        {/* Language tabs */}
        <Reveal delay={.06}>
          <div style={{display:"flex",gap:2,marginBottom:28,background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:8,padding:4,width:"fit-content"}}>
            {langTabs.map(([l,label])=>(
              <button key={l} onClick={()=>{setActiveLang(l);setActiveArticle(null);}} style={{
                padding:"7px 16px",borderRadius:6,fontSize:12,fontWeight:activeLang===l?700:400,
                cursor:"pointer",border:"none",fontFamily:"'Lora',serif",
                background:activeLang===l?C.green:"rgba(28,28,40,.8)",
                color:activeLang===l?"#fff":C.muted,
                transition:"all .15s",
              }}>
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Article list or open article */}
        {!activeArticle ? (
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {articles.map((a,i)=>(
              <Reveal key={a.id} delay={i*.07}>
                <div onClick={()=>setActiveArticle(a)} style={{
                  background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:10,
                  padding:"22px 24px",cursor:"pointer",transition:"all .18s",
                }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=C.green;e.currentTarget.style.boxShadow=`0 4px 16px ${C.green}18`;e.currentTarget.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none";}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,gap:12}}>
                    <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2vw,17px)",fontWeight:700,lineHeight:1.4,color:C.ink,flex:1}}>{a.title}</h3>
                    <span style={{fontSize:10,color:C.muted,flexShrink:0,marginTop:3}}>{a.date}</span>
                  </div>
                  <p style={{fontSize:13.5,lineHeight:1.7,color:C.muted,marginBottom:12}}>{a.intro}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:11,color:C.green,fontWeight:600}}>— {a.author}</span>
                    <span style={{fontSize:11,color:C.green,letterSpacing:".06em"}}>
                      {activeLang==="ku"?"Bixwîne →":activeLang==="so"?"بخوێنەوە →":activeLang==="za"?"Bixwine →":"Read →"}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Open article view */
          <div>
            <button onClick={()=>setActiveArticle(null)} style={{display:"flex",alignItems:"center",gap:6,background:"transparent",border:"none",cursor:"pointer",color:C.green,fontFamily:"'Lora',serif",fontSize:13,fontWeight:600,marginBottom:24,padding:0}}>
              ← {activeLang==="ku"?"Paş":activeLang==="so"?"گەڕانەوە":activeLang==="za"?"Vêgere":"Back"}
            </button>
            <Reveal>
              <div style={{background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:10,padding:"32px 28px"}}>
                <div style={{marginBottom:20}}>
                  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,3vw,26px)",fontWeight:700,lineHeight:1.35,marginBottom:8}}>{activeArticle.title}</h2>
                  <div style={{display:"flex",gap:16,fontSize:12,color:C.muted}}>
                    <span>— {activeArticle.author}</span>
                    <span>· {activeArticle.date}</span>
                  </div>
                </div>
                <div style={{height:1,background:`linear-gradient(90deg,${C.green},${C.gold},transparent)`,marginBottom:24}}/>
                <div style={{fontSize:15,lineHeight:1.9,color:C.ink2,whiteSpace:"pre-line"}}>{activeArticle.body}</div>
                <div style={{marginTop:28,paddingTop:16,borderTop:`1px solid ${C.border}`,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:12,color:C.muted}}>Welat Rodî · Roj Tev Kurdî · rojtevkurdi.com</span>
                  <button onClick={()=>setActiveArticle(null)} style={{background:"transparent",border:`1px solid ${C.border}`,borderRadius:4,padding:"6px 14px",cursor:"pointer",fontSize:12,color:C.green,fontFamily:"'Lora',serif",transition:"all .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=C.green}
                    onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
                    ← {activeLang==="ku"?"Paş":activeLang==="so"?"گەڕانەوە":activeLang==="za"?"Vêgere":"Back"}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    );
  };

  const ProjectsPage=()=>{
    const categories=[
      {
        icon:"🆔", color:C.green,
        ku:"Pergala Nasnameya Dîjîtal",
        so:"سیستەمی ناسنامەی دیجیتاڵ",
        za:"Pergala Nasnameyê Dîjîtalî",
        en:"Digital Identity System",
        items:{
          ku:["Pergala Nasnameya Dîjîtal","Pergala Kertên Bankê ya Dîjîtal","Sepana Rêberî ya Kurdî","Projeya Emojîya Alaya Kurdistanê"],
          en:["Digital Identity System","Digital Banking Card System","Kurdish Navigation App","Kurdistan Flag Emoji Project"],
          so:["سیستەمی ناسنامەی دیجیتاڵ","سیستەمی کارتی بانکی دیجیتاڵ","ئەپی ڕێنمایی کوردی","پڕۆژەی ئیمۆجی ئالای کوردستان"],
          za:["Pergala Nasnameyê Dîjîtalî","Pergala Kartê Bankê yê Dîjîtalî","Sepana Rêberî ya Kurdkî","Proyaya Emojîya Alaya Kurdistanî"],
        }
      },
      {
        icon:"💻", color:C.goldD,
        ku:"Teknolojî û Binesazî",
        so:"تەکنەلۆژیا و بنەماسازی",
        za:"Teknolojî û Binesazî",
        en:"Technology & Infrastructure",
        items:{
          ku:["Pergala Operasyonê ya Kurdî (KurOS)","Alîkarê Dengî yê Kurdî","Modela Zimanî ya Hişê Çêkirî ya Kurdî","Klavyeya Kurdî û Pergala Rastnivîsê"],
          en:["Kurdish Operating System (KurOS)","Kurdish Voice Assistant","Kurdish Artificial Intelligence Language Model","Kurdish Keyboard & Spell Checker"],
          so:["سیستەمی کارەبایی کوردی (KurOS)","یاریدەدەری دەنگی کوردی","مۆدێلی زمانی زیرەکی دەستکرد کوردی","کیبۆردی کوردی و سیستەمی ڕاستنووسی"],
          za:["Pergala Operasyonê ya Kurdkî (KurOS)","Alîkarê Dengî yê Kurdkî","Modela Zıwanî ya Hişê Çêkirî ya Kurdkî","Klavyeya Kurdkî û Pergala Rastnivîsê"],
        }
      },
      {
        icon:"📚", color:C.red,
        ku:"Ziman Dîrok û Çand",
        so:"زمان مێژوو و کولتوور",
        za:"Zıwan Dîrok û Çand",
        en:"Language, History & Culture",
        items:{
          ku:["Platforma Zanistî ya Kurdî (wekî Wikipedia)","Pirtûkxaneya Dîjîtal a Kurdî","Platforma Belavkirina Medyayê ya Kurdî (wekî Netflix)","Tora Podkast û Radyoya Kurdî"],
          en:["Kurdish Knowledge Platform (like Wikipedia)","Kurdish Digital Library","Kurdish Media Streaming Platform (like Netflix)","Kurdish Podcast & Radio Network"],
          so:["پلاتفۆرمی زانستی کوردی (وەک Wikipedia)","کتێبخانەی دیجیتاڵی کوردی","پلاتفۆرمی پەخشی میدیای کوردی (وەک Netflix)","تۆڕی پۆدکاست و ڕادیۆی کوردی"],
          za:["Platforma Zanistî ya Kurdkî (wekî Wikipedia)","Pirtûkxaneyê Dîjîtalî ya Kurdkî","Platforma Belavkerdışê Medyayê ya Kurdkî (wekî Netflix)","Tora Podkast û Radyoya Kurdkî"],
        }
      },
      {
        icon:"🎓", color:C.green,
        ku:"Perwerde",
        so:"پەروەردە",
        za:"Perwerde",
        en:"Education",
        items:{
          ku:["Platforma Dibistana Dîjîtal a Kurdî","Zanîngeha Dîjîtal a Kurdî","Zanîngeha Kurdî ya Serhêl (bi Sertîfikaya Fermî)","Dibistana Kodkirinê ya Kurdî","Sepanên Fêrbûnê yên Kurdî ji bo Zarokan"],
          en:["Kurdish Digital School Platform","Kurdish Digital University","Online Kurdish University (with Official Certificate)","Kurdish Coding School","Kurdish Learning Apps for Children"],
          so:["پلاتفۆرمی قوتابخانەی دیجیتاڵی کوردی","زانکۆی دیجیتاڵی کوردی","زانکۆی کوردی ئۆنلاین (بە بڕوانامەی فەرمی)","قوتابخانەی کۆدنووسینی کوردی","ئەپەکانی فێربوونی کوردی بۆ منداڵان"],
          za:["Platforma Dibistana Dîjîtalî ya Kurdkî","Zanîngeha Dîjîtalî ya Kurdkî","Zanîngeha Kurdkî ya Serhêlî (bi Sertîfikaya Fermî)","Dibistana Kodkerdışê ya Kurdkî","Sepanê Fêrbiyayışî yê Kurdkî seba Qeçan"],
        }
      },
      {
        icon:"💰", color:C.goldD,
        ku:"Aborî û Fînans",
        so:"ئابووری و دارایی",
        za:"Aborî û Fînans",
        en:"Economy & Finance",
        items:{
          ku:["Bankkarîya Dîjîtal — RojaMe","Pereyên Dîjîtal a Kurdî (Krîptopere)","Platforma Karê Azad a Kurdî (wekî Fiverr)","Platforma Destpêk û pêşxistina ya Kurdî"],
          en:["Digital Banking — RojaMe","Kurdish Digital Currency (Cryptocurrency)","Kurdish Freelance Platform (like Fiverr)","Kurdish Startup & Development Platform"],
          so:["بانككارتی دیجیتاڵ — RojaMe","دراوی دیجیتاڵی کوردی (کریپتۆ)","پلاتفۆرمی کاری ئازادی کوردی (وەک Fiverr)","پلاتفۆرمی دەستپێکردن و پەرەپێدانی کوردی"],
          za:["Bankkarîya Dîjîtalî — RojaMe","Pereyê Dîjîtalî ya Kurdkî (Krîptopere)","Platforma Karê Azadî ya Kurdkî (wekî Fiverr)","Platforma Destpêkî û Pêşkerdışê ya Kurdkî"],
        }
      },
      {
        icon:"🌍", color:C.green,
        ku:"Platformên Civakî",
        so:"پلاتفۆرمە کۆمەڵایەتییەکان",
        za:"Platformê Komelayetî",
        en:"Social Platforms",
        items:{
          ku:["Platforma Medyaya Civakî ya Kurdî","Tora Diasporaya Kurdî ya Navneteweyî","Sepana Bûyer û Festîvalên Kurdî"],
          en:["Kurdish Social Media Platform","International Kurdish Diaspora Network","Kurdish Events & Festivals App"],
          so:["پلاتفۆرمی میدیای کۆمەڵایەتی کوردی","تۆڕی دیاسپۆرای کوردی نێودەوڵەتی","ئەپی ئیڤەنت و فێستیڤاڵەکانی کوردی"],
          za:["Platforma Medyaya Komelayetî ya Kurdkî","Tora Diyasporaya Kurdkî ya Navneteweyî","Sepana Bûyerî û Festîvalê Kurdkî"],
        }
      },
      {
        icon:"🗺", color:C.goldD,
        ku:"Nexşe û Erdgiranî",
        so:"نەخشە و جوگرافیا",
        za:"Nexşe û Erdgiranî",
        en:"Maps & Geography",
        items:{
          ku:["Pergala Nexşeya Kurdî (wekî Google Maps)","Nexşeya Dîrokî ya Kurdistanê ya Interaktîf","Nasname û Ewlekariya Dîjîtal","Pergala Welatiya Dîjîtal","Pergala Nasnameya Dîjîtal a bi Teknolojîya Blockchain"],
          en:["Kurdish Map System (like Google Maps)","Interactive Historical Map of Kurdistan","Digital Identity & Security","Digital Homeland System","Blockchain-Based Digital Identity System"],
          so:["سیستەمی نەخشەی کوردی (وەک Google Maps)","نەخشەی مێژوویی ئینتەراکتیفی کوردستان","ناسنامەی دیجیتاڵ و ئەمنییەت","سیستەمی نیشتمانی دیجیتاڵ","سیستەمی ناسنامەی دیجیتاڵی بەرپایەی Blockchain"],
          za:["Pergala Nexşeya Kurdkî (wekî Google Maps)","Nexşeya Dîrokî ya Kurdistanê ya Interaktîf","Nasname û Ewlekî ya Dîjîtalî","Pergala Welatiya Dîjîtalî","Pergala Nasnameyê Dîjîtalî bi Teknolojîya Blockchain"],
        }
      },
      {
        icon:"🎮", color:C.red,
        ku:"Lîstik",
        so:"یاری",
        za:"Lîstik",
        en:"Gaming",
        items:{
          ku:["Lîstikên Vîdyoyê yên Kurdî","Cîhana Metaverse ya Kurdî"],
          en:["Kurdish Video Games","Kurdish Metaverse World"],
          so:["یارییە ڤیدیۆییەکانی کوردی","جیهانی Metaverse یی کوردی"],
          za:["Lîstikê Vîdyoyî yê Kurdkî","Cîhana Metaverse ya Kurdkî"],
        }
      },
    ];

    return(
      <div style={{padding:"52px 40px 80px",maxWidth:900,margin:"0 auto"}}>
        <BackBtn/>
        <Reveal>
          <span style={{fontSize:10,letterSpacing:".26em",textTransform:"uppercase",color:C.goldD,display:"block",marginBottom:8}}>
            {lang==="en"?"RTK Projects":lang==="so"?"پڕۆژەکانی RTK":lang==="za"?"Proyayê RTK":"Projeyên Roj Tev Kurdî"}
          </span>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,34px)",fontWeight:700,marginBottom:10}}>
            {lang==="en"?"Roj Tev Kurdî Projects":lang==="so"?"پڕۆژەکانی Roj Tev Kurdî":lang==="za"?"Proyayê Roj Tev Kurdî":"Projeyên Roj Tev Kurdî"}
          </h2>
          <div style={{width:40,height:2,background:`linear-gradient(90deg,${C.green},${C.gold})`,marginBottom:8}}/>
          <p style={{fontSize:13,color:C.muted,marginBottom:36}}>
            {lang==="en"?"All projects within the Roj Tev Kurdî digital ecosystem":lang==="so"?"هەموو پڕۆژەکانی ئیکۆسیستەمی دیجیتاڵی Roj Tev Kurdî":lang==="za"?"Heme proyayê ekosîstema dîjîtalî ya Roj Tev Kurdî":"Hemû projeyên ekosîstema dîjîtal a Roj Tev Kurdî"}
          </p>
        </Reveal>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
          {categories.map((cat,ci)=>(
            <Reveal key={ci} delay={ci*.06}>
              <div style={{background:"#1c1c28",border:`1px solid ${C.border}`,borderRadius:12,overflow:"hidden",transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=cat.color;e.currentTarget.style.boxShadow=`0 6px 24px ${cat.color}18`;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow="none";}}>
                {/* Category header */}
                <div style={{padding:"14px 16px 12px",borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:10,background:`${cat.color}0a`}}>
                  <span style={{fontSize:20}}>{cat.icon}</span>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:cat.color}}>
                    {lang==="en"?cat.en:lang==="so"?cat.so||cat.ku:lang==="za"?cat.za||cat.ku:cat.ku}
                  </div>
                </div>
                {/* Items */}
                <div style={{padding:"12px 16px",display:"flex",flexDirection:"column",gap:8}}>
                  {(cat.items[lang]||cat.items.ku).map((item,ii)=>(
                    <div key={ii} style={{display:"flex",alignItems:"flex-start",gap:8}}>
                      <span style={{width:5,height:5,borderRadius:"50%",background:cat.color,flexShrink:0,marginTop:6}}/>
                      <span style={{fontSize:12.5,color:"rgba(240,236,228,.8)",lineHeight:1.55}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footer note */}
        <Reveal delay={.3}>
          <div style={{marginTop:32,padding:"16px 20px",border:`1px solid ${C.border}`,borderRadius:8,fontSize:12,color:C.muted,lineHeight:1.7,textAlign:"center"}}>
            ✦ {lang==="en"?"These projects represent the long-term vision of the Roj Tev Kurdî digital ecosystem. · © 2017–2025 WR":lang==="so"?"ئەم پڕۆژانە دیدی درێژخایەنی ئیکۆسیستەمی دیجیتاڵی Roj Tev Kurdî نیشان دەدەن. · © 2017–2025 WR":"Ev proje dîtina demdirêj a ekosîstema dîjîtal a Roj Tev Kurdî temsîl dikin. · © 2017–2025 WR"}
          </div>
        </Reveal>
      </div>
    );
  };

  const PAGES={home:<HomePage/>,project:<ProjectPage/>,join:<JoinPage/>,card:<CardPage/>,phases:<PhasesPage/>,principles:<PrincPage/>,contact:<ContactPage/>,rojame:<RojamePage/>,gotar:<GotarPage/>,projects:<ProjectsPage/>};

  return(
    <div dir={isRTL?"rtl":"ltr"} style={{fontFamily:"'Lora',Georgia,serif",background:C.bg,color:C.ink,minHeight:"100vh",display:"flex",flexDirection:"column",paddingTop:70}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Lora:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes sp{to{transform:rotate(360deg)}}
        @keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}
        html{scroll-behavior:smooth}
        a{text-decoration:none}
        input,select{font-family:'Lora',Georgia,serif}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:rgba(90,60,30,.18);border-radius:4px}
      `}</style>

      {/* ── FLAG ── */}
      <FlagStrip/>

      {/* ── TOPBAR ── */}
      <header style={{
        background:"rgba(17,17,24,.95)",
        borderBottom:`1px solid ${C.border}`,
        height:52,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        padding:"0 16px",
        position:"sticky",
        top:18,
        zIndex:150,
        boxShadow:"0 2px 10px rgba(0,0,0,.18)",
        gap:8,
        overflow:"hidden",
        minWidth:0,
      }}>

        {/* ── LEFT: Logo — compact ── */}
        <button onClick={()=>go("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:7,padding:0,flexShrink:0,minWidth:0}}>
          <Sun size={20} spin/>
          <Logo fs={13}/>
        </button>

        {/* ── CENTER: Active page ── */}
        <span style={{
          flex:1,
          textAlign:"center",
          fontSize:10,
          color:C.muted,
          letterSpacing:".1em",
          textTransform:"uppercase",
          fontFamily:"'Lora',serif",
          overflow:"hidden",
          whiteSpace:"nowrap",
          textOverflow:"ellipsis",
          display:"block",
        }}>
          {page!=="home" && t.nav[KEYS.indexOf(page)]}
        </span>

        {/* ── RIGHT: Lang + Hamburger ── */}
        <div style={{display:"flex",alignItems:"center",gap:5,flexShrink:0}}>

          {/* Language group */}
          <div style={{display:"flex",alignItems:"stretch",border:`1px solid ${C.border}`,borderRadius:6,height:30,flexShrink:0,position:"relative"}}>

            {/* Kurdî dropdown */}
            <div ref={langRef} style={{position:"relative"}}>
              <button onClick={()=>setLangOpen(o=>!o)} style={{
                display:"flex",alignItems:"center",gap:3,height:"100%",padding:"0 9px",
                background:isKurd?C.green:"transparent",color:isKurd?"#fff":C.muted,
                border:"none",borderRight:`1px solid ${C.border}`,cursor:"pointer",
                fontFamily:"'Lora',serif",fontSize:11,fontWeight:600,transition:"all .18s",whiteSpace:"nowrap",
              }}>
                🌐 <span>{lang==="ku"?"Kurmancî":lang==="so"?"Soranî":lang==="za"?"Zazakî":"Kurdî"}</span>
                <span style={{fontSize:7,opacity:.7,marginLeft:2}}>{langOpen?"▲":"▼"}</span>
              </button>

              {langOpen&&(
                <div style={{
                  position:"fixed",
                  top:"70px",
                  right:"auto",
                  background:"#1a1a28",
                  border:`1px solid rgba(212,168,67,.3)`,
                  borderRadius:8,
                  boxShadow:"0 12px 40px rgba(0,0,0,.7)",
                  minWidth:160,
                  zIndex:9999,
                  animation:"slideIn .15s ease",
                }}>
                  <div style={{padding:"8px 14px 6px",borderBottom:`1px solid rgba(255,255,255,.08)`,fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(240,236,228,.4)"}}>
                    🌐 Kurdî
                  </div>
                  {[["ku","Kurmancî"],["so","Soranî"],["za","Zazakî"]].map(([l,label])=>(
                    <button key={l} onClick={()=>{setLang(l);setLangOpen(false);}}
                      style={{
                        display:"flex",alignItems:"center",gap:10,
                        width:"100%",padding:"11px 14px",
                        background:lang===l?`${C.green}25`:"transparent",
                        color:lang===l?C.green:"rgba(240,236,228,.88)",
                        border:"none",cursor:"pointer",
                        fontFamily:"'Lora',serif",
                        fontSize:13,fontWeight:lang===l?700:400,
                        textAlign:"left",transition:"background .1s",
                      }}
                      onMouseEnter={e=>{if(lang!==l)e.currentTarget.style.background="rgba(255,255,255,.06)";}}
                      onMouseLeave={e=>{if(lang!==l)e.currentTarget.style.background="transparent";}}>
                      <span style={{
                        width:18,height:18,borderRadius:"50%",
                        background:lang===l?C.green:"rgba(255,255,255,.08)",
                        display:"flex",alignItems:"center",justifyContent:"center",
                        fontSize:9,color:"#fff",flexShrink:0,
                      }}>{lang===l?"✓":""}</span>
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* English */}
            <button onClick={()=>{setLang("en");setLangOpen(false);}} style={{
              display:"flex",alignItems:"center",gap:3,height:"100%",padding:"0 9px",
              background:lang==="en"?C.green:"transparent",color:lang==="en"?"#fff":C.muted,
              border:"none",cursor:"pointer",fontFamily:"'Lora',serif",
              fontSize:11,fontWeight:600,transition:"all .18s",whiteSpace:"nowrap",
            }}>
              🌐 EN
            </button>
          </div>

          {/* ☰ Hamburger button */}
          <div ref={menuRef} style={{position:"relative"}}>
            <button onClick={()=>setMenuOpen(o=>!o)} style={{
              display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:4,
              width:34,height:30,
              background:menuOpen?C.green:"transparent",
              border:`1px solid ${menuOpen?C.green:C.border}`,
              borderRadius:6,cursor:"pointer",transition:"all .18s",padding:0,flexShrink:0,
            }}
              onMouseEnter={e=>{if(!menuOpen){e.currentTarget.style.borderColor=C.green;e.currentTarget.style.background=`${C.green}10`;}}}
              onMouseLeave={e=>{if(!menuOpen){e.currentTarget.style.borderColor=C.border;e.currentTarget.style.background="transparent";}}}>
              {menuOpen
                ? <span style={{fontSize:13,color:"#fff",lineHeight:1}}>✕</span>
                : [0,1,2].map(i=><span key={i} style={{display:"block",width:15,height:1.6,background:"rgba(240,236,228,.75)",borderRadius:1}}/>)
              }
            </button>

            {/* ── DROPDOWN MENU ── */}
            {menuOpen&&(
              <div style={{
                position:"absolute",top:"calc(100% + 8px)",right:0,
                background:"#1a1a28",border:"1px solid rgba(255,255,255,.12)",
                borderRadius:10,boxShadow:"0 20px 60px rgba(0,0,0,.7)",
                minWidth:260,maxWidth:320,zIndex:500,
                maxHeight:"calc(100vh - 100px)",overflowY:"auto",
                animation:"slideIn .16s ease",
              }}>
                {/* Menu header */}
                <div style={{padding:"14px 18px 12px",borderBottom:"1px solid rgba(255,255,255,.08)",display:"flex",alignItems:"center",gap:8,background:"rgba(0,102,51,.1)"}}>
                  <Sun size={16} spin/>
                  <Logo fs={12}/>
                </div>

                {/* Menu items */}
                <div style={{padding:"6px 0"}}>
                  {KEYS.map((key,i)=>{
                    const active=page===key;
                    return(
                      <button key={key} onClick={()=>go(key)} style={{
                        display:"flex",alignItems:"center",gap:12,
                        width:"100%",padding:"11px 18px",
                        background:active?"rgba(0,102,51,.15)":"transparent",
                        color:active?C.green:"rgba(240,236,228,.85)",
                        border:"none",
                        borderLeft:active?`3px solid ${C.green}`:"3px solid transparent",
                        cursor:"pointer",fontFamily:"'Lora',serif",
                        fontSize:13,fontWeight:active?700:400,
                        textAlign:"left",transition:"all .12s",
                      }}
                        onMouseEnter={e=>{if(!active){e.currentTarget.style.background="rgba(0,102,51,.08)";e.currentTarget.style.color=C.green;e.currentTarget.style.paddingLeft="22px";}}}
                        onMouseLeave={e=>{if(!active){e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(240,236,228,.85)";e.currentTarget.style.paddingLeft="18px";}}}>
                        <span style={{
                          width:30,height:30,borderRadius:7,flexShrink:0,
                          background:active?`${C.green}25`:"rgba(255,255,255,.06)",
                          display:"flex",alignItems:"center",justifyContent:"center",
                          fontSize:14,
                        }}>{t.icons[i]}</span>
                        <span style={{fontWeight:active?700:400}}>{t.nav[i]}</span>
                        {active&&<span style={{marginLeft:"auto",width:6,height:6,borderRadius:"50%",background:C.green,flexShrink:0}}/>}
                      </button>
                    );
                  })}
                </div>

                {/* Seksiyonên Bilez */}
                <div style={{borderTop:"1px solid rgba(255,255,255,.08)",padding:"12px 14px 14px"}}>
                  <div style={{fontSize:9,letterSpacing:".2em",textTransform:"uppercase",color:"rgba(240,236,228,.35)",marginBottom:10}}>
                    {t.quickT}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    {[
                      ["projects",t.nav[1],"🌐",C.gold,"Projeyên Roj Tev Kurdî"],
                      ["project",t.nav[2],"◈",C.green,"Projeya Nasnameya Kurdî"],
                      ["join",t.nav[3],"✦",C.goldD,"10 min · Free"],
                      ["card",t.nav[4],"⊞",C.red,"Karta Kurdî · Digital ID"],
                      ["phases",t.nav[5],"◉",C.green,"X → Web → Blockchain"],
                      ["principles",t.nav[6],"◎",C.goldD,"Rêgezên Bingehîn"],
                      ["contact",t.nav[7],"✉",C.red,"Pêwendî · Contact"],
                      ["rojame",t.nav[8],"💳",C.goldD,"RojaMe Credit"],
                      ["gotar",t.nav[9],"✍",C.green,"Articles · Gotar"],
                    ].map(([key,label,icon,col,sub])=>(
                      <button key={key} onClick={()=>go(key)} style={{
                        display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,
                        padding:"10px 10px",borderRadius:8,
                        background:page===key?`${col}18`:"rgba(255,255,255,.04)",
                        border:`1px solid ${page===key?col:"rgba(255,255,255,.08)"}`,
                        cursor:"pointer",textAlign:"left",transition:"all .18s",
                      }}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=col;e.currentTarget.style.background=`${col}14`;}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor=page===key?col:"rgba(255,255,255,.08)";e.currentTarget.style.background=page===key?`${col}18`:"rgba(255,255,255,.04)";}}>
                        <div style={{width:28,height:28,borderRadius:6,background:`${col}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,color:col}}>
                          {icon}
                        </div>
                        <div>
                          <div style={{fontSize:11,fontWeight:700,color:page===key?col:"rgba(240,236,228,.9)",fontFamily:"'Playfair Display',serif",lineHeight:1.2,marginBottom:2}}>{label}</div>
                          <div style={{fontSize:9.5,color:"rgba(240,236,228,.4)",lineHeight:1.3}}>{sub}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Menu footer */}
                <div style={{padding:"10px 18px",borderTop:"1px solid rgba(255,255,255,.08)",fontSize:10,color:"rgba(240,236,228,.3)"}}>
                  © 2017–2025 WR
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main style={{flex:1}}>
        {PAGES[page]||<HomePage/>}

        <footer style={{borderTop:`1px solid ${C.border}`,background:"#0e0e16",padding:"36px 40px 24px"}}>
          <div style={{maxWidth:860,margin:"0 auto"}}>

            {/* ── Project hierarchy ── */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:24,marginBottom:28,paddingBottom:24,borderBottom:`1px solid ${C.border}`}}>

              {/* Main umbrella */}
              <div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <Sun size={20} spin/>
                  <div>
                    <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:900,whiteSpace:"nowrap"}}>
                      <span style={{color:C.red}}>Roj</span>{" "}
                      <span style={{color:C.gold}}>Tev</span>{" "}
                      <span style={{color:C.green}}>Kurdî</span>
                    </div>
                    <div style={{fontSize:9,letterSpacing:".18em",textTransform:"uppercase",color:C.muted,marginTop:1}}>rojtevkurdi.com</div>
                  </div>
                </div>
                <div style={{fontSize:10,color:C.muted,lineHeight:1.7,paddingLeft:28}}>
                  {lang==="en"?"First Project · Kurdish Digital Identity":lang==="so"?"پڕۆژەی یەکەم · ناسنامەی دیجیتاڵی کوردی":lang==="za"?"Proyaya Yekemî · Nasnameyê Kurdkî yê Dîjîtalî":"Projeya Yekemîn · Nasnameya Kurdî Ya Dîjîtal"}
                </div>
              </div>

              {/* Sub-umbrella: KurDîjîtal Welat */}
              <div>
                <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:C.muted,marginBottom:8}}>
                  Sub-umbrella
                </div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,fontWeight:700,color:C.gold,marginBottom:4}}>
                  KurDîjîtal · KurDigital</div>
              </div>

              {/* Sub-projects */}
              <div>
                <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:C.muted,marginBottom:10}}>
                  {lang==="ku"?"KurDîjîtal Sub-Projects":lang==="en"?"KurDîjîtal Sub-Projects":lang==="so"?"بەشەکانی KurDîjîtal":"Bınproyayê KurDîjîtal"}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {[
                    ["Tora Kurda-Kurdî","@torakurdakurdi","torakurdakurdi",C.green],
                    ["Nasnameya Dîjîtal · nasKURD","@_nasKURD","_nasKURD",C.gold],
                    ["RojaMe Credit","@rojamecredit","rojamecredit",C.gold],
                  ].map(([name,handle,h,col])=>(
                    <div key={h} style={{display:"flex",alignItems:"center",gap:6}}>
                      <span style={{width:4,height:4,borderRadius:"50%",background:col,flexShrink:0}}/>
                      <span style={{fontSize:11,color:C.muted}}>{name}</span>
                      <a href={`https://twitter.com/${h}`} target="_blank"
                        style={{fontSize:10,color:col,marginLeft:"auto",transition:"opacity .15s"}}
                        onMouseEnter={e=>e.currentTarget.style.opacity=".7"}
                        onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                        {handle}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ana hesaplar */}
              <div>
                <div style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:C.muted,marginBottom:10}}>
                  {lang==="ku"?"Hesabên Fermî":lang==="en"?"Official Accounts":lang==="so"?"ئەکاونتە فەرمییەکان":"Hesabê Rêsmî"}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {[["@rojtevkurdi · X","rojtevkurdi",C.green,false],["@rojtevkurdi · Mastodon","https://mastodon.social/@rojtevkurdi",C.green,true],["@torakurdakurdi","torakurdakurdi",C.green,false],["@_nasKURD","_nasKURD",C.gold,false],["@rojamecredit","rojamecredit",C.gold,false]].map(([l,h,col,isMastodon])=>(
                    <a key={h} href={isMastodon?h:`https://twitter.com/${h}`} target="_blank"
                      style={{fontSize:11,color:col,transition:"opacity .15s"}}
                      onMouseEnter={e=>e.currentTarget.style.opacity=".7"}
                      onMouseLeave={e=>e.currentTarget.style.opacity="1"}>{l}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Social Media Row ── */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:24,paddingBottom:24,borderBottom:`1px solid ${C.border}`}}>
              <span style={{fontSize:10,letterSpacing:".14em",textTransform:"uppercase",color:C.muted,marginRight:4}}>
                {lang==="ku"?"Bişopîne":lang==="so"?"دوابکەوە":lang==="za"?"Sıpêr Kê":"Follow"}
              </span>
              {[
                ["X / Twitter","https://twitter.com/rojtevkurdi",C.green,
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>],
                ["Instagram","https://instagram.com/rojtevkurdi","#E1306C",
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>],
                ["Facebook","https://facebook.com/rojtevkurdi","#1877F2",
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>],
                ["TikTok","https://tiktok.com/@rojtevkurdi","rgba(240,236,228,.75)",
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.25 8.25 0 004.83 1.55V6.78a4.85 4.85 0 01-1.06-.09z"/></svg>],
                ["YouTube","https://youtube.com/@rojtevkurdi","#FF0000",
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>],
              ].map(([label,url,col,icon])=>(
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" title={label}
                  style={{width:34,height:34,borderRadius:"50%",border:`1px solid rgba(255,255,255,.1)`,display:"flex",alignItems:"center",justifyContent:"center",color:col,textDecoration:"none",transition:"all .18s",flexShrink:0}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=col==="rgba(240,236,228,.75)"?"rgba(255,255,255,.4)":col;e.currentTarget.style.background=`${col==="rgba(240,236,228,.75)"?"rgba(255,255,255,.06)":col}18`;e.currentTarget.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.1)";e.currentTarget.style.background="transparent";e.currentTarget.style.transform="none";}}>
                  {icon}
                </a>
              ))}
            </div>

            {/* ── Copyright ── */}
            <div style={{textAlign:"center"}}>
              <p style={{fontSize:10,color:C.muted,lineHeight:1.8}}>
                {t.copy}<br/>
                <span style={{color:"rgba(255,255,255,.18)"}}>rojtevkurdi.com · KurDîjîtal · Tora Kurda-Kurdî · nasKURD · RojaMe Credit</span><br/>
                {t.copyNote}
              </p>
            </div>

          </div>
        </footer>
      </main>
    </div>
  );
}
