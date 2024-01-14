document.addEventListener('DOMContentLoaded', function () {
  const scrollRightButton = document.getElementById('scrollRightButton');
  const hotMenuRow = document.querySelector('.hot-menu-row');

  scrollRightButton.addEventListener('click', function () {
    // Прокрутить до конца ряда
    hotMenuRow.scrollLeft = hotMenuRow.scrollWidth
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const scrollLeftButton = document.getElementById('scrollLeftButton');
  const hotMenuRow = document.querySelector('.hot-menu-row');

  scrollLeftButton.addEventListener('click', function () {
    // Прокрутить в начало ряда карт
    hotMenuRow.scrollLeft = 0;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollRightButton = document.getElementById('scrollRightButtonBar');
  const hotMenuRow = document.querySelector('.hot-menu-bar-row');

  scrollRightButton.addEventListener('click', function () {
    // Прокрутить до конца ряда
    hotMenuRow.scrollLeft = hotMenuRow.scrollWidth
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const scrollLeftButton = document.getElementById('scrollLeftButtonBar');
  const hotMenuRow = document.querySelector('.hot-menu-bar-row');

  scrollLeftButton.addEventListener('click', function () {
    // Прокрутить в начало ряда карт
    hotMenuRow.scrollLeft = 0;
  });
});


document.addEventListener('DOMContentLoaded', function () {
	var mobileMenu = document.querySelector('.mobile-menu');
	var burgerIcon = document.querySelector('.burger-icon');

	function toggleMenu() {
			mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'flex' : 'none';
	}

	function closeMenu() {
			mobileMenu.style.display = 'none';
	}

	burgerIcon.addEventListener('click', toggleMenu);

	var closeBtn = document.querySelector('.close-btn');
	closeBtn.addEventListener('click', closeMenu);

	var menuLinks = document.querySelectorAll('.mobile-menu a');
	menuLinks.forEach(function (link) {
			link.addEventListener('click', closeMenu);
	});
});