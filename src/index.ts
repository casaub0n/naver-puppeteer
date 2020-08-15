import puppeteer from 'puppeteer'

// ぜんぜんわからん
puppeteer.launch().then(async (browser) => {
  await console.log('--- start ---')
  const page = await browser.newPage()
  await page.goto('https://matome.naver.jp/odai/2141562590923283501')
  await page.waitFor('.MdVideoThumb01')
  const item = await page.$$('.MdVideoThumb01')
  console.log(item)
  await browser.close()
  await console.log('--- end ----')
})
