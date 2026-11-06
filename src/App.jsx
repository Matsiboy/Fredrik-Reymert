// Fredrik Reymert – rediger innhold og design her ved senere oppdateringer.
// Illustrasjonsbilder og eksempelopplysninger må erstattes med reelle opplysninger før publisering.
import React, { useState } from "react";
import { Waves, Trees, Sprout, ArrowUpRight, Menu, X, Check, Mail, Phone, MapPin, ChevronDown, Compass, Leaf, ShieldCheck } from "lucide-react";
const photos = {
  forest: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85",
  sea: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1100&q=85",
  tree: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1100&q=85",
  garden: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=85",
  about: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1100&q=85"
};
const services = [{
  n: "01",
  name: "Dykking",
  tag: "UNDER VANN",
  image: photos.sea,
  description: "Praktisk bistand, inspeksjon og arbeid på og under vann – tilpasset oppdragets behov.",
  items: ["Inspeksjon og dokumentasjon", "Vedlikehold og praktisk bistand", "Oppdrag etter avtale"]
}, {
  n: "02",
  name: "Arborist & trepleie",
  tag: "I HØYDEN",
  image: photos.tree,
  description: "Hjelp med trær som trenger pleie, beskjæring eller felling – med hensyn til sikkerhet.",
  items: ["Beskjæring og trepleie", "Trefelling og seksjonsfelling", "Rydding og håndtering av kvist"]
}, {
  n: "03",
  name: "Gartner & anlegg",
  tag: "PÅ BAKKEN",
  image: photos.garden,
  description: "Gode uteområder krever både godt grunnarbeid og løpende stell. Vi hjelper til ute.",
  items: ["Hagearbeid og vedlikehold", "Planting og grøntarbeid", "Enklere anleggsoppdrag"]
}];
const questions = [{
  question: "Hvilke typer oppdrag kan jeg ta kontakt om?",
  answer: "Du kan ta kontakt om dykking, trepleie, gartnerarbeid og enklere anleggsoppdrag. Vi avklarer sammen om oppdraget passer."
}, {
  question: "Hvordan får jeg et pristilbud?",
  answer: "Send en kort beskrivelse av jobben. Legg gjerne ved ønsket tidspunkt og bilder dersom du har det."
}, {
  question: "Hvor utføres oppdragene?",
  answer: "Geografisk arbeidsområde avtales for hvert oppdrag. Konkret dekningsområde legges inn før publisering."
}];
function Brand() {
  return <a href="#top" className="flex items-center gap-3 shrink-0"><span className="w-12 h-12 rounded-full border border-current flex items-center justify-center"><Waves size={27} /></span><span className="leading-tight"><strong className="text-[21px] tracking-[-.07em] font-extrabold block">FREDRIK REYMERT</strong><small className="block tracking-[.36em] text-[9px] font-bold">TJENESTER</small></span></a>;
}
function Kicker({
  num,
  children,
  light = false
}) {
  return <div className={"flex items-center gap-3 mb-6 tracking-[.18em] text-[10px] font-bold " + (light ? "text-[#cfe58a]" : "text-[#728b70]")}><span>{num}</span><span className="w-8 h-px bg-current" />{children}</div>;
}
function Action({
  children,
  href = "#kontakt",
  accent = false
}) {
  return <a href={href} className={"inline-flex items-center justify-between gap-7 px-6 py-4 text-[13px] font-bold hover:opacity-85 " + (accent ? "bg-[#cfe58a] text-[#1b3427]" : "bg-[#223b2c] text-white")}>{children}<ArrowUpRight size={18} /></a>;
}
export const NordUteUnderVannNettside = () => {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Dykking",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Forespørsel: " + form.service + " fra " + form.name);
    const body = encodeURIComponent("Navn: " + form.name + "\nE-post: " + form.email + "\n\n" + form.message);
    window.location.href = "mailto:post@dittfirma.no?subject=" + subject + "&body=" + body;
  };
  return <div id="top" className="bg-[#f7f7f2] min-h-screen text-[#23382b] overflow-hidden" style={{
    fontFamily: "'DM Sans',Arial,sans-serif"
  }}>
<style>{"@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');html{scroll-behavior:smooth;scroll-padding-top:100px}.headline{font-family:Manrope,Arial,sans-serif;letter-spacing:-.075em}"}</style>
<header className="sticky top-0 z-50 bg-[#f7f7f2]/95 backdrop-blur border-b border-[#dce3d9]"><div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[90px] flex items-center justify-between gap-8"><Brand /><nav className="hidden lg:flex gap-9 text-[13px] text-[#4d6352] font-bold ml-auto"><a href="#tjenester">Tjenester</a><a href="#om">Om foretaket</a><a href="#referanser">Referanser</a><a href="#kontakt">Kontakt</a></nav><span className="hidden lg:block"><Action>Be om tilbud</Action></span><button onClick={() => setMenu(!menu)} className="lg:hidden" aria-label="Åpne meny">{menu ? <X /> : <Menu />}</button></div>{menu && <nav className="lg:hidden px-8 py-5 flex flex-col gap-5 text-sm font-bold">{[["Tjenester", "#tjenester"], ["Om foretaket", "#om"], ["Referanser", "#referanser"], ["Kontakt", "#kontakt"]].map(link => <a href={link[1]} key={link[0]} onClick={() => setMenu(false)}>{link[0]}</a>)}</nav>}</header>
<main>
<section className="max-w-[1280px] mx-auto px-6 md:px-10 py-7"><div className="grid lg:grid-cols-[53%_47%]"><div className="flex flex-col items-start py-16 lg:py-24 lg:pr-8 relative z-10"><span className="text-[#547955] text-[10px] font-bold tracking-[.2em]">●　DYKKING / TREPLEIE / UTEMILJØ</span><h1 className="headline text-[52px] md:text-[75px] leading-[1.13] font-bold mt-7 mb-8 lg:-mr-20">Fra dypet<br /><span className="text-[#779368]">til tretoppene.</span></h1><p className="text-[#6a7b6d] max-w-[450px] text-[16px] leading-[1.85]">Praktiske tjenester innen dykking, trearbeid og gartner- og anleggsarbeid. Ett kontaktpunkt, flere fagområder og fokus på en ryddig jobb fra start til slutt.</p><div className="flex flex-wrap items-center gap-8 mt-8"><Action href="#tjenester">Se hva vi tilbyr</Action><a href="#kontakt" className="text-[13px] font-bold border-b border-[#547955] pb-2">Ta kontakt　↗</a></div><div className="flex items-center gap-4 pt-16 lg:mt-auto text-[10px] tracking-widest font-bold text-[#7e947b]"><span className="w-10 h-10 rounded-full border border-[#afc3a8] grid place-items-center"><Compass size={18} /></span>GODT HÅNDVERK<br />UTE I ELEMENTENE</div></div><div className="relative min-h-[460px] lg:min-h-[650px] bg-[#2e4634]"><img src={photos.forest} alt="Skog i sollys" className="absolute inset-0 w-full h-full object-cover" /><span className="absolute top-7 left-7 text-white text-[10px] font-bold tracking-[.2em]">◯ VANN　│　TRE　│　LAND</span><div className="absolute bottom-0 right-0 bg-[#cfe58a] w-[200px] h-[150px] p-6 flex flex-col justify-between"><strong className="headline text-[58px] leading-none">03 —</strong><span className="text-[10px] font-extrabold tracking-widest">FAGOMRÅDER.<br />ÉN KONTAKT.</span></div></div></div></section>
<div className="bg-[#f0f2e9] border-y border-[#dce5d8]"><div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-3">{[{
            title: "Ryddig planlegging",
            Icon: ShieldCheck
          }, {
            title: "Praktisk tilnærming",
            Icon: Compass
          }, {
            title: "Respekt for omgivelsene",
            Icon: Leaf
          }].map(x => <div key={x.title} className="min-h-[100px] flex flex-col md:flex-row justify-center items-center gap-3 border-r last:border-0 border-[#dce5d8] text-[#547056] font-bold text-[10px] md:text-[13px] text-center px-2"><x.Icon size={23} />{x.title}</div>)}</div></div>
<section id="tjenester" className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32"><div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 w-full"><div><Kicker num="01">DETTE KAN VI HJELPE MED</Kicker><h2 className="headline text-[39px] md:text-[54px] leading-tight font-bold">Tre fagområder.<br /><span className="text-[#8a9d88]">Én pålitelig kontakt.</span></h2></div><p className="max-w-[300px] text-[14px] leading-[1.9] text-[#7c877b]">Ulike oppgaver krever ulik kompetanse. Her finner du en oversikt over tjenestene foretaket tilbyr.</p></div><div className="grid md:grid-cols-3 gap-5">{services.map((s, i) => <article key={s.n} className="bg-white border border-[#e0e7dc]"><div className="relative h-[235px]"><img className="w-full h-full object-cover" src={s.image} alt={s.name} /><span className="absolute top-5 left-6 font-bold text-white text-[10px] tracking-widest">{s.n} / 03</span><span className="absolute bottom-0 right-0 w-16 h-16 bg-[#cfe58a] grid place-items-center">{i === 0 ? <Waves size={27} /> : i === 1 ? <Trees size={27} /> : <Sprout size={27} />}</span></div><div className="p-7"><span className="text-[#9aaa91] font-bold text-[10px] tracking-widest">{s.tag}</span><h3 className="headline text-[25px] font-bold mt-2 mb-4">{s.name}</h3><p className="text-[13px] leading-[1.85] min-h-[80px] text-[#738173]">{s.description}</p><ul className="border-y border-[#e5ece3] py-5 mt-6 space-y-3">{s.items.map(item => <li key={item} className="text-[12px] flex items-center gap-2 text-[#536956]"><Check size={15} className="text-[#85a36d]" />{item}</li>)}</ul><a className="pt-6 flex items-center justify-between font-bold text-[12px]" href="#kontakt">Spør om tjenesten <ArrowUpRight size={18} /></a></div></article>)}</div></section>
<div className="bg-[#dce8cb]"><div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 flex gap-8 items-center"><span className="text-[#698967] text-5xl">✳</span><p className="headline font-semibold text-[22px] md:text-[29px] leading-relaxed">Ingen oppdrag er helt like. <span className="text-[#74936f]">God dialog, riktige avklaringer og solid utførelse</span> er et godt utgangspunkt for alle.</p></div></div>
<section id="om" className="max-w-[1280px] mx-auto px-6 md:px-10 py-28 grid md:grid-cols-[46%_1fr] gap-12 lg:gap-28 items-center"><div className="relative h-[450px] md:h-[650px]"><img src={photos.about} className="w-full h-full object-cover" alt="Skog og dagslys" /><span className="absolute bottom-0 left-0 bg-[#cfe58a] px-6 py-5 text-[10px] font-bold tracking-widest">NÆRT NATUREN. TETT PÅ JOBBEN.</span></div><div><Kicker num="02">OM FORETAKET</Kicker><h2 className="headline text-[37px] md:text-[52px] font-bold leading-tight">Bredt fagfelt.<br /><span className="text-[#8a9d88]">Personlig oppfølging.</span></h2><p className="text-[#637662] text-[15px] leading-[1.9] mt-7">Vi arbeider i skjæringspunktet mellom vann, trær og uteområder. Med et bredt tjenestetilbud er målet å gjøre det enkelt å få gjennomført både små og større oppdrag.</p><p className="text-[#8c998b] text-[13px] leading-relaxed mt-4 mb-7">Her presenteres faglig bakgrunn og dokumentert kompetanse. Feltene nedenfor må oppdateres før publisering.</p><div className="border-t border-[#d8e1d6]">{[{
              a: "Erfaring",
              b: "Legg inn relevant erfaring og antall år."
            }, {
              a: "Kurs og sertifikater",
              b: "Oppgi dokumenterte kurs og godkjenninger."
            }, {
              a: "Geografisk område",
              b: "Beskriv hvor du tar oppdrag."
            }].map((x, i) => <div className="border-b border-[#d8e1d6] flex gap-5 py-5" key={x.a}><span className="text-[#98ad95] text-xs">0{i + 1}</span><div><h3 className="font-bold text-sm mb-1">{x.a}</h3><p className="text-[#8c998b] text-xs">{x.b}</p></div></div>)}</div><a href="#kontakt" className="inline-flex gap-5 items-center mt-9 border-b border-[#4e7456] pb-1 font-bold text-sm">Bli kjent med oss <ArrowUpRight size={18} /></a></div></section>
<section id="referanser" className="bg-[#eaece4] py-24 md:py-28"><div className="max-w-[1280px] mx-auto px-6 md:px-10"><div className="flex flex-col md:flex-row justify-between md:items-end gap-7 mb-12"><div><Kicker num="03">ERFARING & REFERANSER</Kicker><h2 className="headline font-bold text-[38px] md:text-[52px] leading-tight">Arbeidet forteller<br /><span className="text-[#829b82]">sin egen historie.</span></h2></div><div className="max-w-[315px]"><p className="text-[14px] leading-relaxed text-[#788678]">Her vises et utvalg gjennomførte oppdrag med bilder og korte beskrivelser. Disse er foreløpig eksempler.</p><span className="inline-block bg-[#d8e5cc] text-[#6c8665] px-3 py-2 mt-3 text-[9px] tracking-widest font-bold">EKSEMPELINNHOLD – MÅ OPPDATERES</span></div></div><div className="grid md:grid-cols-3 gap-6">{services.map((s, i) => <article key={s.n}><div className="relative h-[260px]"><img src={s.image} alt={"Illustrasjon " + s.name} className="w-full h-full object-cover" /><span className="absolute top-5 left-5 text-white bg-[#2b4637]/85 px-3 py-2 text-[10px] tracking-widest font-bold">{s.tag}</span></div><p className="mt-5 text-[#8d9a88] text-[10px] font-bold tracking-widest flex justify-between">EKSEMPEL 0{i + 1}<ArrowUpRight size={19} /></p><h3 className="headline text-[21px] font-bold mt-2">{["Et oppdrag under vann", "Et prosjekt med trær", "Et uteområde i utvikling"][i]}</h3><p className="mt-2 text-[#7c8b7b] text-[13px]">Legg inn sted, år og kort prosjektbeskrivelse.</p></article>)}</div></div></section>
<section className="bg-[#22382d] text-white py-24"><div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14"><div><Kicker num="04" light>SAMARBEIDET</Kicker><h2 className="headline text-[44px] md:text-[57px] leading-tight font-bold">En enkel vei<br />fra idé til <span className="text-[#cfe58a]">utført.</span></h2></div><div>{[{
              a: "Ta kontakt",
              b: "Fortell hva du ønsker hjelp til, og hvor oppdraget skal utføres."
            }, {
              a: "Vi avklarer oppdraget",
              b: "Omfang, praktiske forhold, fremdrift og pris avklares før oppstart."
            }, {
              a: "Jobben gjennomføres",
              b: "Arbeidet utføres etter avtale, med dialog og ryddig avslutning."
            }].map((x, i) => <div key={x.a} className="grid grid-cols-[45px_1fr] gap-4 py-5 border-b border-[#4b6253]"><span className="text-[#cfe58a] text-xs font-bold">0{i + 1}</span><div><h3 className="font-bold text-lg">{x.a}</h3><p className="text-[#b6c8b5] text-[13px] leading-relaxed mt-2">{x.b}</p></div></div>)}</div></div></section>
<section className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 grid md:grid-cols-[40%_1fr] gap-14"><div><Kicker num="05">SPØRSMÅL & SVAR</Kicker><h2 className="headline text-4xl md:text-[50px] font-bold">Lurer du på <span className="text-[#829b82]">noe?</span></h2><p className="text-[#869386] text-sm mt-5">Her er noen vanlige spørsmål før et nytt oppdrag.</p></div><div className="border-t border-[#d8e2d6]">{questions.map((q, i) => <div className="border-b border-[#d8e2d6]" key={q.question}><button type="button" aria-expanded={faq === i} className="w-full py-6 text-left flex justify-between gap-4 font-bold text-[14px]" onClick={() => setFaq(faq === i ? -1 : i)}>{q.question}<ChevronDown className={faq === i ? "rotate-180" : ""} size={20} /></button>{faq === i && <p className="text-[#798a79] text-[13px] leading-relaxed pb-6">{q.answer}</p>}</div>)}</div></section>
<section id="kontakt" className="bg-[#192c23] text-[#f0f5ee] py-24"><div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24"><div><Kicker num="06" light>LA OSS SNAKKE</Kicker><h2 className="headline text-[43px] md:text-[57px] leading-tight font-bold">Har du en jobb<br />som må <span className="text-[#cfe58a]">gjøres?</span></h2><p className="max-w-[410px] mt-7 text-[#b8c9b7] leading-[1.85] text-[15px]">Fortell litt om hva du trenger hjelp til. Vi avtaler gjerne en prat om oppdraget, omfang og videre fremdrift.</p><div className="mt-10 max-w-[400px]"><a href="mailto:post@dittfirma.no" className="flex items-center gap-5 py-5 border-b border-[#4c6352]"><Mail className="text-[#cfe58a]" /><span><small className="block text-[10px] text-[#a6bda1] tracking-widest">E-POST</small><strong>post@dittfirma.no</strong></span></a><a href="tel:+4700000000" className="flex items-center gap-5 py-5 border-b border-[#4c6352]"><Phone className="text-[#cfe58a]" /><span><small className="block text-[10px] text-[#a6bda1] tracking-widest">TELEFON</small><strong>+47 000 00 000</strong></span></a><div className="flex items-center gap-5 py-5"><MapPin className="text-[#cfe58a]" /><span><small className="block text-[10px] text-[#a6bda1] tracking-widest">ARBEIDSOMRÅDE</small><strong>Oppdrag etter avtale</strong></span></div></div></div><div className="bg-[#f7f8f2] text-[#273f2d] p-8 md:p-10"><span className="text-[10px] text-[#8fa687] font-bold tracking-widest">SEND EN HENVENDELSE</span><h3 className="headline text-[24px] font-bold mt-2 mb-7">Fortell oss om oppdraget.</h3><form onSubmit={submit} className="space-y-5"><div className="grid sm:grid-cols-2 gap-4"><label className="block font-bold text-xs">Navn<input required placeholder="Ditt navn" className="w-full mt-2 px-3 py-4 border border-[#d9e2d6] text-sm bg-white" value={form.name} onChange={e => setForm({
                    ...form,
                    name: e.target.value
                  })} /></label><label className="block font-bold text-xs">E-post<input required type="email" placeholder="din@epost.no" className="w-full mt-2 px-3 py-4 border border-[#d9e2d6] text-sm bg-white" value={form.email} onChange={e => setForm({
                    ...form,
                    email: e.target.value
                  })} /></label></div><label className="block font-bold text-xs">Hva gjelder det?<select value={form.service} onChange={e => setForm({
                  ...form,
                  service: e.target.value
                })} className="w-full mt-2 px-3 py-4 border border-[#d9e2d6] bg-white text-sm">{["Dykking", "Trepleie", "Gartner og anlegg", "Annet / usikker"].map(s => <option key={s}>{s}</option>)}</select></label><label className="block font-bold text-xs">Beskriv oppdraget<textarea required rows={4} className="w-full mt-2 p-3 border border-[#d9e2d6] text-sm bg-white" placeholder="Hva trenger du hjelp til?" value={form.message} onChange={e => setForm({
                  ...form,
                  message: e.target.value
                })} /></label><button className="w-full bg-[#cfe58a] text-[#1b3427] font-bold text-[13px] px-5 py-4 flex justify-between items-center" type="submit">Åpne e-postutkast <ArrowUpRight size={18} /></button><p className="text-[#839582] text-[10px]">Skjemaet åpner e-postprogrammet ditt. Ingen informasjon lagres på nettsiden.</p></form></div></div></section>
</main>
<footer className="bg-[#14271e] text-[#f2f6ee]"><div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row gap-12 justify-between"><div><Brand /><p className="mt-5 text-[#9daf9e] text-sm">Dykking, trepleie og uteområder.<br />Praktisk arbeid, godt gjennomført.</p></div><div className="grid grid-cols-2 gap-5 self-start text-[13px] font-bold"><a href="#tjenester">Tjenester</a><a href="#om">Om foretaket</a><a href="#referanser">Referanser</a><a href="#kontakt">Kontakt</a></div></div><div className="max-w-[1280px] mx-auto px-6 md:px-10 border-t border-[#314a38] py-7 text-[#a0b5a0] text-[10px]">© 2026 Fredrik Reymert · Organisasjonsnummer legges inn før publisering</div></footer>
</div>;
};
export default NordUteUnderVannNettside;
