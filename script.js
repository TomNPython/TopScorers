const listOfScorers = document.getElementById('scorers')

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