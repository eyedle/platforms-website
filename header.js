function initHeader() {
  const path = window.location.pathname.split("/").pop();
  // let path = window.location.pathname.split("/").pop();
  // if (!path) path = "index.html";

  const map = {
    "index.html": "nav-home",
    "": "nav-home",
    "cases.html": "nav-cases",
    "reddit.html": "nav-reddit",
    "team.html": "nav-team",
    "contactus.html": "nav-contact"
  };

  const activeId = map[path];
  console.log("PATH:", path);
  console.log("ACTIVE:", activeId);
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) {
      el.classList.remove("text-gray-600");
      el.classList.add("font-semibold", "text-black");
    }
  }

  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!document.getElementById('authArea').contains(e.target)) {
      userMenu.classList.add('hidden');
    }
  });

  btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

  // Login section
  // const loginBtn = document.getElementById('loginBtn');
  // const userBtn = document.getElementById('userBtn');
  // const userMenu = document.getElementById('userMenu');
  // const logoutBtn = document.getElementById('logoutBtn');

  // // Mock login
  // loginBtn.addEventListener('click', () => {
  //   loginBtn.classList.add('hidden');
  //   userBtn.classList.remove('hidden');
  // });

  // // Toggle user menu
  // userBtn.addEventListener('click', () => {
  //   userMenu.classList.toggle('hidden');
  // });

  // // Logout
  // logoutBtn.addEventListener('click', () => {
  //   userMenu.classList.add('hidden');
  //   userBtn.classList.add('hidden');
  //   loginBtn.classList.remove('hidden');
  // });

}

