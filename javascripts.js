

function showTab(tabName, btn) {
  // hide everything
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(t){ t.classList.remove('active'); });

  // reset buttons
  var buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(function(b){ b.classList.remove('active'); });

  var el = document.getElementById(tabName);
  if (el) el.classList.add('active');


  if (btn) btn.classList.add('active');

  // small extra: show a simple movie count text. used a youtube video but im not gonna lie i forgot the name im not cheating tho i swear
  if (tabName === 'movies') {
    var count = document.querySelectorAll('#movies li').length;
    var out = document.getElementById('movieCount');
    if (out) out.textContent = 'I have ' + count + ' favorite movies';
  }
}

function showHistory(btn) {
  var text = document.getElementById('historyText');
  if (!text) return;

  var isHidden = (text.style.display === 'none' || text.style.display === '');
  
  if (isHidden) {
    text.style.display = 'block';
    if (btn) btn.textContent = 'Hide My History';
  } else {
    text.style.display = 'none';
    if (btn) btn.textContent = 'Show My History';
  }
}

function toggleHobbyDetails(btn) {
  var table = document.querySelector('#hobbies table');
  if (!table) return;
  if (table.style.display === 'none') {
    table.style.display = '';
    if (btn) btn.textContent = 'Hide Hobbies';
  } else {
    table.style.display = 'none';
    if (btn) btn.textContent = 'Show Hobbies';
  }
}

function countItems() {
  var movies = document.querySelectorAll('#movies li').length;
  var songs = document.querySelectorAll('#songs li').length;
  alert('Movies: ' + movies + '\nSongs: ' + songs + '\nTotal: ' + (movies + songs));
}

//: make sure the initial visible tab shows counts cleanly. searched this up on google cause i have no idea how to do this
document.addEventListener('DOMContentLoaded', function(){
  // show initial movie count only if the movies tab is visible
  if (document.getElementById('movies') && document.getElementById('movies').classList.contains('active')) {
    var out = document.getElementById('movieCount');
    if (out) out.textContent = 'I have ' + document.querySelectorAll('#movies li').length + ' favorite movies';
  }
});
