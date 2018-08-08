const puppeteer = require('puppeteer');

// analysis


let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://forum.gamer.com.tw/C.php?page=65&bsn=29560&snA=5547');
    // await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');
    // await page.waitFor(1000);

    // const result = await page.evaluate(() => {
    //     let title = document.querySelector('h1').innerText;
    //     let price = document.querySelector('.price_color').innerText;

    //     return {
    //         title,
    //         price
    //     }

    // });

    // browser.close();
    // return result;
    const articles = await page.evaluate(() => {
        let articleArr = Array.from(document.querySelectorAll('.c-article.FM-P2'))
        articleArr = articleArr.map((element) => {
            return element.textContent
        })

        return articleArr;
    })
    console.log(articles)
    getCodeNum(articles)

    function getCodeNum(articles) {
        articles.forEach((content) => {
            const re = new RegExp('[a-zA-Z0-9]{11}');
            if(re.test(content)) {
                console.log(content)
                let code = content.match(re)[0]
                console.log(code)
            }
        })
    }
    

    browser.close();
    return 'test';
};

scrape().then((value) => {
    console.log(value); // Success!
});




