


function toggleTheme() {
    var body = document.getElementById('body');
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      header.classList.add('dark-mode')
    }
  }

