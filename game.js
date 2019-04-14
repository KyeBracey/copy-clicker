class Game {
  init() {
    this.bigCookie = document.getElementById('bigCookie');
    this.cookiesDisplay = document.getElementById('cookiesDisplay'); // Shows the current number of cookies
    this.currentCookies = 0;
    this.cookiesPerClick = 1;

    this.cookiesDisplay.innerHTML = `${this.currentCookies} cookies`;
    this.bigCookie.addEventListener('click', this.clickCookie.bind(this));
  }

  clickCookie() {
    this.addCookies(this.cookiesPerClick);
  }

  addCookies(amount) {
    this.currentCookies += amount;
    this.cookiesDisplay.innerHTML = `${this.currentCookies} cookies`;
  }
}
