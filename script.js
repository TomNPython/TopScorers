const listOfScorers = document.getElementById('scorers')

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

//opener.prepend(`As of ${dd}-${mm}-${yyyy}, the top scorers in the ${res.data.competition.name}:`)

function listScorers(res) {
      let containerDiv = document.createElement('div')
      let opener = document.createElement('p');
      listOfScorers.append(containerDiv)
      containerDiv.append(opener)
      opener.append(`As of ${dd}-${mm}-${yyyy}, 
      the top scorers in the ${res.data.competition.name} are:`)
      
      const scorers = Array.from(res.data.scorers)
      let entries = document.createElement('ol')
      
      scorers.forEach(scorer => {
        let entry = document.createElement('li')
        entry.append(`${scorer.player.name} (${scorer.team.name}) - ${scorer.numberOfGoals}`)
        entries.append(entry)
        
      })
      containerDiv.append(entries)
}

axios.get('https://api.football-data.org/v2/competitions/PL/scorers', {
      headers: {
        'X-Auth-Token': '45c7f8afedda475190873423e4ae4045'
      }
    })
    .then(res => 
      listScorers(res)
    )
    .catch(err => console.log(err))

    axios.get('https://api.football-data.org/v2/competitions/ELC/scorers', {
    headers: {
      'X-Auth-Token': '45c7f8afedda475190873423e4ae4045'
    }}
    )
    .then(res => 
      listScorers(res)
      )
    .catch(err => console.log(err))


/* CONVERTED AJAX CALL TO AXIOS FOR CONVENIENCE
$.ajax({
    headers: { 'X-Auth-Token': '45c7f8afedda475190873423e4ae4045' },
    url: "http://api.football-data.org/v2/competitions/PL/scorers",
    dataType: 'json',
    type: 'GET',
  }).done(function(response) {
    // do something with the response, e.g. isolate the id of a linked resource   
    console.log(response.scorers);
    const scorers = Array.from(response.scorers)

    scorers.forEach(scorer => {
        console.log(scorer.player.name)
        let entry = document.createElement('li')
        entry.append(`${scorer.player.name} - ${scorer.numberOfGoals}`)
        listOfScorers.append(entry)
        
    })
  });
  */
