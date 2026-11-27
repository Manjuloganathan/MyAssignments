//assignment week2
import{chromium, webkit,test}from "@playwright/test"
test("Launch browser",async({page})=>{
 {
 let browser= await chromium.launch()
 let context= await browser.newPage()
page = context
 // can alos mention as let page

 await page.goto ('https://www.flipkart.com/')
 // await page. locator('input[class=class="nw1UBF v1zwn26"]').fill("mobile")

 console.log("print the page tile:", await page.title(),page.url())

 }
 let browser2 = await webkit.launch()
 let context2 = await browser2.newPage()
page = context2
 await page.goto ('https://www.redbus.in/')

console.log("print the page tile:", await page.title(), page.url())

}

)