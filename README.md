# Lihtne vestlusrobot Next.jsga

Siin projektis on tehtud lihtne kasutajaliides vestlursroboti jaoks kasutades Next.jsi ja Vercel AI SDKd.
Kirjeldan siin READMEs rakenduse arenduses tehtud otsuseid.

### 1. Koodi struktuur

Koodi struktuur vastab standardsele Next.js projekti struktuurile
 /app kaustas asuvad põhifailid:
- layout.tsx 
- page.tsx 
- globals.css

 Lisaks veel on kasustad /api, kus on /chat, mille sisse on paigutatud route.ts, et võimaldada AI kasutust läbi API ja useChat() funktsiooni ja /components kaust, kus asuvad projekti komponendid:

- actions.tsx, kus on kirjeldatud serveri poolsed funktsioonid
- chatInput.tsx, kus on olemas kasutaja sisendi jaoks visuaal ja funktsionaalsus
- chatMessages.tsx, kus on olemas sõnumite lehele näitamise jaoks vajalikud funktsionaalsused ja visuaalid
- chatViaAPI.tsx, kus on olemas kõik funktsionaalsused, et kasutada AI’d läbi API
- pageHeading.tsx, kus asub lihtne HTML struktuur lehe pealdise jaoks.

Väljaspool /app kausta on /utils kaust, kus on olemas testimise jaoks fail aiTest.tsx

Järgisin Next.jsi jaoks standardset struktuuri, et oleks lihtne aru saada, et struktuur järgiks häid tavasi ja sellepärast, et see on valdavalt mugav.

Kutsun page.tsxi main elemendi sees PageHeading, ChatMessages ja ChatInput komponente. Komponendid on eraldatud, et oleks lihtne jälgida, mis element teeb mida ja vähendada koormust ühes failis.

 ### 2. Kasutajasõbralikkuse tagamine

Kasutaja sõbralikkuse tagamiseks on minu chat-kasutajaliides lihtne. Pealdis ja sisendi riba on eraldatud värvidega chatist endast, et oleks lihtne aru saada, mis osa on chat ja mis osad on veebirakenduse omad.

Chatis on kasutaja ja AI nimed suuremad, kui tekst, et oleks arusaada, mis osa on sõnum ja mis osa ei ole. Uute sõnumite saatmisega “scrollib” veebileht automaatselt kaasa, et oleks kerge jälgida sõnumeid. Chati sõnumite tekst asub lehe keskel, et ei pea silmadega jooksma lehe servast lehe serva.

Sõnumi sisendi riba laieneb, kui kasutaja sinna kirjutab, et kasutajale oleks nähtav kogu sõnum. Sisendit on võimalik saata kas “enter” vajutusega või “send” nupule klikk tehes. Sõnumi sisendi riba liigub kaasa kasutajaga, et kasutaja saab lugeda varasemat sõnumit oma sõnumit kirjutades.

### 3. Värvid ja tüpograafia

Värvide jaoks võtsin kasutusele “low-contrast” värvid, et ei hakkas silmade peale lehel olemine. Chati osa on roheline ja veebirakenduse osad on tumedad hallid, et neid eraldada. Rohelise värvi valisin endale meeldiva.

Teksti fondiks on standard Next.js font, ei näinud selle vahetuse jaoks vajadust. Tekst on helehall, et oleks tumedatel taustadel näha.

### 4. Disaini lähenemine (TailwindCSS)

Otsustasin rakenduse jaoks kasutada TailwindCSSi, peamiselt tegin selle valiku, sest soovisin tutvuda paremini selle kasutusega ja sellise väikese rakenduse jaoks tundus olema efektiivne pigem kasutada Tailwindi klassi süsteemi, kui luua CSS failid.

### 5. Automaat Testimine

Testida saaks rakendust komponendi haaval. Saaks luua testid, mis kontrollivad, kas ChatInput paneb lehele sisendi välja, kas sisendi välja saab kasutada ja kas server saab selle sisendi kätte. ChatMessages komponendis saab automaatselt testida, kas server tagastab vastuse, kas vastuses on uued sõnumid, kas sõnumi roll on AI või kasutaja ja kas sõnumil on sisu ning kas see sisu jõuab veebilehele.

AI ühenduse testimise jaoks on aiTest.tsx, millega saaks automaatselt testida, kas API võtmega saab AIle ligi või mitte.

### 6. Ohud ja Riskid

Kuna rakendus on kohutavalt lihtne, ei ole sellel väga palju võimalike riskipunkte. 

Peamiseks riskipunktiks on see et kasutajal on võimalik saata terve hunniku sõnumeid serverisse, selle maandamiseks peaks täiendama funktsionaalsust, mis piirab kasutaja võimalust saata sõnumeid.

Puudub ka regex, et vältida injection rünnakuid.

## Märge Vercel deploymenti kohta

Vercelisse ülespandud versioon (https://vestlus-robot.vercel.app/) jookseb kliendi poolsesse errorisse, ilmselt AI vastuse suuruse tõttu, ma pole kindel kuidas seda parandada, sest lokaalselt ei teki seda errorit ja Vercel ei logi põhjalikult, miks see error tekib.

