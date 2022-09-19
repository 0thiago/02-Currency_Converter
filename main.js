//API KEY pYIInYAN2xoyzmL5q3CAvoSnFG9Xi9QC

const Main = {

  init: function () {

    this.cacheSelectors()
    this.bindEvents()

  },

  convertCurrency: function () {

    const self = Main

    function convertFromJSON(response){
      return response.json()
    }

    function showResult(response){
      self.$result.innerText = ``
      self.$result.innerText = ` ${response.result}`
      console.log(response)
    }

    function showError(){
      console.log('ERROR!')
    }

    var myHeaders = new Headers();
    myHeaders.append("apikey", "pYIInYAN2xoyzmL5q3CAvoSnFG9Xi9QC");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=BRL&from=USD&amount=${self.$inputAmount}`, requestOptions)
      .then(convertFromJSON)
      .then(showResult)
      .catch(showError)

  },

  cacheSelectors: function () {

    this.$inputAmount = document.querySelector('#inputAmount')
    this.$convertButton = document.querySelector('#convertButton')
    this.$result = document.querySelector('#result')
    this.$amountInvalid = document.querySelector('#amountInvalid')

  },

  bindEvents: function () {

    const self = this

    this.$convertButton.onclick = self.Events.onConvertButton_Click.bind(self)

  },

  Events: {

    onConvertButton_Click: function () {

      this.$inputAmount = this.$inputAmount.value

      if (isNaN(this.$inputAmount) == true || this.$inputAmount == '') {
        console.log('this is not a number')
        this.$amountInvalid.innerText = ` Invalid Amount`
        this.cacheSelectors()
        this.bindEvents()
      } else {
        this.$amountInvalid.innerText = ``
        this.convertCurrency()
        this.cacheSelectors()
        this.bindEvents()
      }
    },
  }
}

Main.init()