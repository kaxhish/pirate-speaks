window.onload=() =>{
  const textArea = document.querySelector("#fill");
  const actionButton = document.querySelector("#btn");
  const output = document.querySelector("#minionResult");
  const form=document.querySelector("form")
  
  const URL = "https://api.funtranslations.com/translate/pirate.json";
  
  form.onsubmit=function(e) {
    e.preventDefault();
    console.log(textArea.value);
    try {
      const api = fetch(`${URL}?text=${textArea.value}`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          output.innerHTML= json.contents.translated;
        });
    } catch (e) {
      console.log(e);
    }
  }
  }