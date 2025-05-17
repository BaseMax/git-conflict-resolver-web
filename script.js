function resolveConflicts() {
  const text = document.getElementById('input').value;
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const lines = text.split('\n');
  const output = [];
  let inConflict = false;
  let local = [], remote = [], readingRemote = false;

  for (let line of lines) {
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      local = [];
      remote = [];
      readingRemote = false;
    } else if (line.startsWith('=======')) {
      readingRemote = true;
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      output.push(...(mode === 'local' ? local : remote));
    } else {
      if (inConflict) {
        (readingRemote ? remote : local).push(line);
      } else {
        output.push(line);
      }
    }
  }

  document.getElementById('output').textContent = output.join('\n');
}

function copyOutput() {
  const output = document.getElementById('output');
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(output);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  alert('Resolved content copied to clipboard!');
}

let outputClickedOnce = false;
function selectOutput(event) {
  if (!outputClickedOnce) {
    const output = document.getElementById('output');
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(output);
    selection.removeAllRanges();
    selection.addRange(range);
    outputClickedOnce = true;
  }
}
