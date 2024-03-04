import {APIRequestContext, expect, request, test} from '@playwright/test'

test.use({browserName: 'firefox'})

test.describe('NRK Skole', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://www.preprod.nrk.no/skole')
    await page.locator('.menu h2').waitFor()
  })

  test('#1: se at alle dropdowns er enablet og disablet', async ({page}) => {
    await expect(page.locator('#objectives-subjectName')).toBeEnabled()
    await expect(page.locator('#objectives-levels')).toBeDisabled()
    await expect(page.locator('#objectives-mainAreaCode')).toBeDisabled()
  })

  test('#2: finn og se at klippet "Peppernøtter" spilles av', async ({page}) => {
    // velg "Mat og helse" i Velg fag-dropdown
    await page.locator('#objectives-subjectName').selectOption('matoghelse')
    await page.waitForTimeout(500)
    // velg "8.-10.trinn" i Velg trinn-dropdown
    await page.locator('#objectives-levels').selectOption('8-10')
    await page.waitForTimeout(500)
    // velg "Helsefremjande kosthald" i Velg hovedområde-dropdown
    await page.locator('#objectives-mainAreaCode').selectOption('KE145')
    await page.waitForTimeout(1000)
    // åpne første kategori
    await page.locator('.media-result-main-area--objectives .media-result-expand-button').first().click()
    // sjekk at antall klipp som vises stemmer overens med antall klipp i teksten
    await page.locator('.media-result-objective--results').waitFor()
    let countString = await page.locator('.media-result-objective--media-count').first().textContent()
    let countInt = 0
    if(countString) {countInt = parseInt(countString)}
    let countButtons = await page.locator('.media-result-objective .media-result-card').count()
    expect(countInt).toEqual(countButtons)
    // klikk på klippet med tittel "Peppernøtter" og verifiser at spilleren åpnes
    await page.locator('.media-result-objective .media-result-card').nth(1).click()
    await expect(page.locator('.media-viewer')).toBeVisible()
    await expect(page.locator('.media-viewer--title')).toHaveText('Peppernøtter')
    // ekstraoppgave: verifiser at klippet har startet
    await page.waitForTimeout(1000)
    expect(page.locator('.nrkno-player-playpause-button')).toHaveAttribute('aria-label', 'Pause')
  })

  test('#3: kommunikasjon med backend', async ({page}) => {
    const requestUrl = 'https://nrkno-skole-prod.kube.nrk.no/skole/api/media/'
    let context: APIRequestContext = await request.newContext()

    // kopier alt frem til spilleren åpnes i oppgave 2, 
    // men hent antall klipp fra backend istedenfor i teksten
    // velg "Mat og helse" i Velg fag-dropdown
    await page.locator('#objectives-subjectName').selectOption('matoghelse')
    await page.waitForTimeout(500)
    // velg "8.-10.trinn" i Velg trinn-dropdown
    await page.locator('#objectives-levels').selectOption('8-10')
    await page.waitForTimeout(500)
    // velg "Helsefremjande kosthald" i Velg hovedområde-dropdown
    await page.locator('#objectives-mainAreaCode').selectOption('KE145')
    await page.waitForTimeout(1000)
    // åpne første kategori
    await page.locator('.media-result-main-area--objectives .media-result-expand-button').first().click()
    // sjekk at antall klipp som vises stemmer overens med antall klipp i teksten
    await page.locator('.media-result-objective--results').waitFor()
    let req = await context.get(`${requestUrl}?objectives=KM1766&levels=8%2C10`)
    let reqJson = await req.json()
    let countButtons = await page.locator('.media-result-objective .media-result-card').count()
    expect(await reqJson.total).toEqual(countButtons)

    // Hvis tid: finn klippet med Peppernøtter i _embedded-listen i kallet

    // åpne klippet

    // verifiser så mye som mulig av informasjonen i Detaljer-taben med informasjonen hentet ut
  })
})