export function autosizeTextarea () {
  let textArea = document.getElementById ('userMessage');

  resizeTextArea ();

  textArea.addEventListener ('keyup', () => {
    resizeTextArea ();
  });

  function resizeTextArea () {
    textArea.style.height = '1px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
