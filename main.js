function toggleDarkMode() {
  var element = document.body;

  element.classList.toggle("dark-mode");
}

// vvv  Returns Participants vvv //

async function returnParticipants() {
  let promise = await fetch("participants.json")

  const data = await promise.json()

  let participantsList = document.getElementById('participantsList')
  
  for (i = 0; i < data.participants.length; i++) {
    let participant = `
                      <a class="participant" href="./Participants/index.html">
                          <img class="participant-avatar" src="${data.participants[i].participantPhoto}" alt="Avatar">
                          <p class="participant-name">${data.participants[i].participantName}</p>
                      </a>
    `
    participantsList.innerHTML += participant
    ;
  }
}

returnParticipants()



