function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.getElementById("Investment").classList.add("active");
document.getElementsByClassName("tablinks")[0].classList.add("active");


document.addEventListener('DOMContentLoaded', function() {
  const flipBox = document.getElementById('flipBox'); 
  const modulesTab = document.getElementById('modulesTab'); 

  modulesTab.addEventListener('click', function() {
    flipBox.classList.toggle('flipped');
  });
});


let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.transparent-header').style.top = '0';

  } else {
    document.querySelector('.transparent-header').style.top = '-60px';
  }

  prevScrollPos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function() {
  const flipBoxes = document.querySelectorAll('.flip-box');

  flipBoxes.forEach(function(flipBox) {
    flipBox.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-target');
      openTab(targetTab);
    });
  });

  function openTab(tabId) {
    // Implement your logic to show the desired tab
    console.log(`Opening tab: ${tabId}`);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const ntitle = document.querySelector('.ntitle');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ntitle.classList.add('animate-fade-in-down');
      }
    });
  });

  observer.observe(ntitle);
});


document.addEventListener("DOMContentLoaded", function() {
  const flipBoxes = document.querySelectorAll(".flip-box");

  flipBoxes.forEach(flipBoxes => {
    flipBox.addEventListener("click", () => {
      const targetTab = flipBox.getAttribute("data-target");
      const tab = document.querySelector(`[href = "#${targetTab}]`);
      if (tab) {
        tab.click();
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.getElementById("content");

  tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
      event.preventDefault(); 
      const targetPage = tab.getAttribute("href");


      fetch(targetPage)
        .then(response => response.text())
        .then(content => {
          contentDiv.innerHTML = content;
        });
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const flipBoxes = document.querySelectorAll(".flip-box");

  flipBoxes.forEach(flipBox => {
    flipBox.addEventListener("click", () => {
      window.location.href = flipBox.querySelector("a").getAttribute("href");
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");

  window.addEventListener("scroll", function() {
    if (window.scrollY >= card1.offsetTop) {
      card1.classList.add(".sticky");
    } else {
      card1.classList.remove(".sticky");
    }

    if (window.scrollY >= card2.offsetTop) {
      card2.classList.add(".sticky");
    } else {
      card2.classList.remove(".sticky");
    }
  });
});





