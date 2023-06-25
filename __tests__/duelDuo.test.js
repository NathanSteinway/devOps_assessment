const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('Clicking Draw button displays div w/ id of choices', async () => {

    await driver.get("http://localhost:8000/")
    
    let drawBtn = await driver.findElement(By.id("draw"))

    await drawBtn.click()

    await driver.sleep(3000)

    let showDraw = await driver.findElement(By.id("choices"))

    expect(showDraw).not.toHaveProperty("hide")

  })

  test('Clicking Add to Duo button displays the div / id = "player-duo', async () => {

    await driver.get("http://localhost:8000/")

    // How to reference a dynamically generated class?
    // Keeps saying im using css selector method for some reason
    let duoAddBtn = await driver.findElement(By.className("bot-btn"));

    await driver.sleep(3000)

    await duoAddBtn.click()

    await driver.sleep(3000)

    let playerDuoDiv = await driver.findElement(By.id("player-duo"))

    expect(playerDuoDiv).not.toHaveProperty("hide")

  }) 
});