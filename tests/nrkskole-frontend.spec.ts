import {expect, test} from '@playwright/test'

test.describe('NRK Skole', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.preprod.nrk.no/skole')
  })

  test('#1: se at alle dropdowns er enablet', async ({page}) => {
    // expect(await page.[metode for å finne locator]).toBeEnabled()
    // expect(await page.[metode for å finne locator]).not.toBeEnabled()
    // expect(await page.[metode for å finne locator]).not.toBeEnabled()
  })

  test('#2: finn og se at klippet "Peppernøtter" spilles av', async ({page}) => {
    // velg "Mat og helse" i Velg fag-dropdown
    await page.pause()
    // velg "8.-10.trinn" i Velg trinn-dropdown

    // velg "Helsefremjande kosthald" i Velg hovedområde-dropdown

    // åpne første kategori

    // tell at antall klipp som vises stemmer overens med antall klipp i teksten

    // klikk på klippet med tittel "Peppernøtter" og verifiser at spilleren åpnes

    // ekstraoppgave: verifiser at klippet har startet
  })
})