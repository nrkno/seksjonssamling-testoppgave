# Oppgaver til seksjonssamling 5.mars 2024

Velkommen som midlertidig testutvikler! Nedenfor finner dere noen oppgaver som er ment for å vise frem litt hva rollen som testutvikler kan by på av oppgaver og utfordringer. Husk: Inspect, Elements og Network er gode venner å ha med på ferden. Lykke til!

Kommandoer for å kjøre tester:
```
Kjøre alle: npx playwright test
Kjøre en testfil: npx playwright test navn-på-testfil.spec.ts
```


## Oppgave 1
Vi begynner lett. Lag en test som sjekker at de en av de tre dropdown-menyene er enablet og de to andre disablet. Dere trenger kun å fylle inn metode for å lokalisere elementene. Les mer om hvilke metoder som er tilgjengelige [her](https://playwright.dev/docs/locators), og om assertions [her](https://playwright.dev/docs/api/class-playwrightassertions#playwright-assertions-expect-locator). Husk at man alltid bør velge mest mulig unike kjennetegn, som det er lavest sannsynlighet for at vil endres uten forvarsel.

## Oppgave 2
Vi øker vanskelighetsgraden litt - kanskje? Følg instruksene i test nummer 2. Også i denne oppgaven bør det finnes en del gode tips på siden det refereres til over. Og selv om Playwright er mye bedre enn mange testrammeverk på auto-venting kan det være at man må hjelpe litt på vei av og til, mer om det blant annet [her](https://playwright.dev/docs/api/class-locator#locator-wait-for).

## Oppgave 3
Dette blir en slags hybridoppgave der vi bruker kallene vi kan finne i Network for å verifisere at informasjon om et klipp vises riktig ut på siden. Så dette vil ikke være rene backendtester, men litt av begge. Det er allerede satt opp en base for å sende requester i filen "nrkskole-backend.spec.ts", mer informasjon om metoder [her](https://playwright.dev/docs/api/class-apirequestcontext), og hvordan håndtere responser [her](https://playwright.dev/docs/api/class-apiresponse)