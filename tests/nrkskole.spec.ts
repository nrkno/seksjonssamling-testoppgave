import {APIRequestContext, expect, request, test} from '@playwright/test'

test.describe('NRK Skole', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.preprod.nrk.no/skole')
    await page.locator('.menu h2').waitFor()
  })

  test('#1: se at alle dropdowns er enablet og disablet', async ({ page }) => {
    // await expect([finn metode for å hente element]).toBeEnabled()
    // await expect([finn metode for å hente element]).toBeDisabled()
    // await expect([finn metode for å hente element]).toBeDisabled()
  })

  test('#2: finn og se at klippet "Peppernøtter" spilles av', async ({page}) => {
    // velg "Mat og helse" i Velg fag-dropdown

    await page.waitForTimeout(500)
    // velg "8.-10.trinn" i Velg trinn-dropdown

    await page.waitForTimeout(500)
    // velg "Helsefremjande kosthald" i Velg hovedområde-dropdown

    await page.waitForTimeout(1000)
    // åpne første kategori

    // sjekk at antall klipp som vises stemmer overens med antall klipp i teksten
 
    // klikk på klippet med tittel "Peppernøtter" og verifiser at spilleren åpnes

    // ekstraoppgave: verifiser at klippet har startet

  })

  test.only('#3: kommunikasjon med backend', async ({ page }) => {
    const requestUrl = 'https://nrkno-skole-prod.kube.nrk.no/skole/api/media/'
    let context: APIRequestContext = await request.newContext()

    // kopier alt frem til spilleren åpnes i oppgave 2, 
    // men hent antall klipp fra backend istedenfor i teksten 
  


    // Hvis tid: finn klippet med Peppernøtter i _embedded-listen i kallet

    // åpne klippet

    // verifiser så mye som mulig av informasjonen i Detaljer-taben med informasjonen hentet ut
  })
})