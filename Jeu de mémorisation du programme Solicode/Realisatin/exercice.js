let autoformations = [
  { nom: "HTML & CSS", code: "C1" },
  { nom: "Javascript", code: "C2" },
  { nom: "PHP", code: "C3" },
  { nom: "Python", code: "C4" },
  { nom: "Sass", code: "C5" },
  { nom: "SQL", code: "C6" },
  { nom: "C++", code: "C7" },
  { nom: "C#", code: "C8" },
  { nom: "Git & Github", code: "C9" },
  { nom: "Typescript", code: "C10" },
  { nom: "React", code: "C11" },
  { nom: "Node.js", code: "C12" },
  { nom: "Angular", code: "C13" },
  { nom: "Vue.js", code: "C14" },
  { nom: "Django", code: "C15" },
  { nom: "Laravel", code: "C16" },
  { nom: "MongoDB", code: "C17" },
  { nom: "Firebase", code: "C18" },
  { nom: "Docker", code: "C19" },
  { nom: "Linux", code: "C20" }
];




                        //functions

// Methode number one :

function responses() {
    let score = 0;
    let times = 5;

    window.alert("You have " + times + " quations")

    let validCodes = autoformations.map(function(item){
        return item.code
    });

    for (let index = 0; index < times; index++) {  
        let i = Math.floor(Math.random() * autoformations.length);       
        let question = autoformations[i];
        autoformations.splice(i,i+1)
        response =""

            while (!validCodes.includes(response)) {
                    response = prompt("Give me the code of " + question.nom + " :");
            }
        
        if (response === question.code){
            score++
            window.alert("Your answer is correct " + score + "/" + times)
        }else {
            alert("Your answer is incorect " + score + "/" + times)
        }
    }

    
    if (score === 5 ) {
        alert("You have a great score " + score + "/" + times)
    }else if(score === 0 || score === 1){
        alert("You can repeat this game beacause your score is not good " + score + "/" + times)
    }else{
        window.alert("Your score is good "+score + "/" + times);
    }
    
}


responses()



// responses()
// https://miro.com/ar/?gclsrc=aw.ds&utm_source=google&utm_medium=cpc&utm_campaign=S%7CGOO%7CBRN%7CWW%7CEN-EN%7CBrand%7CExact&utm_adgroup=&adgroupid=142344724793&utm_custom=18261731950&utm_content=667973353903&utm_term=miro&matchtype=e&device=c&location=9196747&gad_source=1&gad_campaignid=18261731950&gbraid=0AAAAACtKBmlrbxl_RTU15RX6PhdgEcxjA&gclid=CjwKCAjw89jGBhB0EiwA2o1OnxfyiznsmrRKWsF1aEtYxTN3I5fRHlSuZq-du_7Hx2Ee4f7yjyinqRoCNu4QAvD_BwE



