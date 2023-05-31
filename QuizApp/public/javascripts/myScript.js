module.export = {
  checkCheckboxes() {
    if (document.getElementById('p1').checked === true) {
      document.getElementById('p2').checked === false
      document.getElementById('p3').checked === false
    }
    if (document.getElementById('p2').checked === true) {
      document.getElementById('p1').disabled === false
      document.getElementById('p3').disabled === false
    }
    if (document.getElementById('p3').checked === true) {
      document.getElementById('p1').disabled === false
      document.getElementById('p2').disabled === false
    }
  }
}
