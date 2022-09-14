const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true})

nightmare
  .goto('https://www.baidu.com/')
  .type('#kw', 'github nightmare ')
  // .click('#search_button_homepage')
  // .wait('#zero_click_wrapper .c-info__title a')
  // .evaluate(function () {
  //   return document.querySelector('#zero_click_wrapper .c-info__title a').href;
  // })
  .end(() => 'xxxxx')
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });