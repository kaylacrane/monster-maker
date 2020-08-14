const buttonDownloadMonster = sel('.buttonDownload');

function downloadMonster() {
  const monster = document.body.appendChild(document.createElement('monster'));
  monster.download = 'monster.html';
  monster.href = 'data:text';
}

function handler() {
  window.open(
    '',
    document.querySelector('.app__preview--profileCard').toDataURL()
  );
}
