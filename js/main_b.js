'use strict';
const upload = (evt) => {
  // - estää lomakkeen lähetyksen
  evt.preventDefault();
  // - kirjoittaa 'message' elementtiin 'Upload in progress...'
  document.querySelector("#message").innerHTML = "Upload in progress...";
  // - hakee lomakkeesta file kentän
  const input = document.querySelector('input[type="file"]');
// - tekee FormData -olion ja lisää käyttäjän valitseman tiedoston siihen
  const data = new FormData();
  data.append('fileToUpload', input.files[0]);
  const settings = {
    method: 'POST',
    body: data
  };
  // - lähettää tiedoston fetch -metodilla osoitteeseen 'upload.php'
  fetch('upload.php', settings).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
    document.querySelector("#message").innerHTML = text;
  });

};
document.querySelector("input[type=submit]").addEventListener("click", upload);

