import {APIRequestContext, test, request} from '@playwright/test'

const requestUrl =  'https://psapi.nrk.no/playback/manifest/clip'

test.describe('NRK Skole - backend', () => {
  let context: APIRequestContext
  test.beforeEach(async ({page}) => {
    await page.goto('http://www.preprod.nrk.no/skole')
    context = await request.newContext()
  })

  test('hent ut totalt antall og sjekk at det stemmer overens med antall klipp', async ({page}) => {
    await page.goto('https://preprod.nrk.no/skole/?page=objectives&subject=matoghelse&objective=KM1766&levels=8-10&mainArea=KE145&learningProgramme=LK20')
  
    // hent ut total mengde klipp i kategorien i network og sjekk det opp mot antallet i forrige oppgave
  })

  test('finn informasjon om klippet', async () => {
    // gå til søk-taben

    // søk etter samenes historie - velg rett alternativ

    // 
  })
})