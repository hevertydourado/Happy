//create map
const map = L.map("mapid").setView([-16.6799, -49.255], 12);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove iconAnchor from map
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo
function addPhotoField() {
  // cat photo container #images
  const container = document.querySelector("#images");
  // cat container for duplicate .new-upload
  const fieldContainer = document.querySelectorAll(".new-upload");
  // clone of last add image
  const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(
    true
  );
  // verify camp
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // clean the camp
  input.value = "";
  // add clone to container of images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldContainer = document.querySelectorAll(".new-upload");
  if (fieldContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  // delete field
  span.parentNode.remove();
}

// change select
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))


    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

// function validate(event) {
//   // validar se lat e lng estão preenchidos
//     event.preventDefault()
//     alert('Selecione um ponto no mapa')
// }