function resolveConflicts() {
  const text = document.getElementById('input').value;
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const lines = text.split('\n');
  const output = [];
  let inConflict = false;
  let local = [], remote = [];

  for (let line of lines) {
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      local = [];
      remote = [];
    } else if (line.startsWith('=======')) {
      continue; // ignore separator
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      if (mode === 'local') {
        output.push(...local);
      } else {
        output.push(...remote);
      }
    } else {
      if (inConflict) {
        if (remote.length > 0 || line === '=======') {
          remote.push(line);
        } else {
          local.push(line);
        }
      } else {
        output.push(line);
      }
    }
  }

  document.getElementById('output').textContent = output.join('\n');
}
