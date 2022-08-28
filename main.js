function toggleDarkMode() {
  var element = document.body;

  element.classList.toggle("dark-mode");
}

// vvv  Returns Participants vvv //

async function returnParticipants() {
  console.log(window.location.href);
  let promise = await fetch("participants.json");

  const data = await promise.json();

  let participantsList = document.getElementById("participantsList");

  for (i = 0; i < data.participants.length; i++) {
    let participant = `
                      <div class="participant">
                          <a target="_blank" href="${data.participants[i].participantLinkedIn}">
                            <img class="participant-avatar" src="${data.participants[i].participantPhoto}" alt="Avatar">
                            <p class="participant-name">${data.participants[i].participantName}</p>
                          </a>
                      </div>
    `;
    participantsList.innerHTML += participant;
  }
}

returnParticipants();

let galleryPhotos = [
  "./assets/gallery/wta-poa-pizza-01.jpeg",
  "./assets/gallery/wta-poa-selfie-01.jpeg",
  "./assets/gallery/wta-poa-class-04.jpeg",
  "./assets/gallery/wta-poa-class-05.jpeg",
  "./assets/gallery/wta-poa-class-07.jpeg",
  "./assets/gallery/wta-poa-class-08.jpeg",
  "./assets/gallery/wta-poa-class-09.jpeg",
  "./assets/gallery/wta-poa-class-10.jpeg",
  "./assets/gallery/wta-poa-class-11.jpeg",
  "./assets/gallery/wta-poa-class-12.jpeg",
  "./assets/gallery/wta-poa-pizza-02.jpeg",
  "./assets/gallery/wta-poa-pizza-03.jpeg",
  "./assets/gallery/wta-poa-class-13.jpeg",
  "./assets/gallery/wta-poa-pizza-04.jpeg",
  "./assets/gallery/wta-poa-pizza-05.jpeg",
  "./assets/gallery/wta-poa-class-06.jpeg",
  "./assets/gallery/wta-poa-class-03.jpeg",
  "./assets/gallery/wta-poa-vader-01.jpeg",
];

function returnGallery() {
  let galleryArea = document.getElementById("photo-gallery");

  for (i = 0; i < galleryPhotos.length; i++) {
    let galleryItem = `
    <div class="gallery-item-bg">
      <img class="gallery-item" src="${galleryPhotos[i]}" alt="teste">
    </div>
    `;

    galleryArea.innerHTML += galleryItem;
  }
}

returnGallery();
