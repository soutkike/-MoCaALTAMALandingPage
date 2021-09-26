const navItemsHTML = document.getElementsByClassName("navitem");
const sectionsHTML = document.querySelectorAll("section");

const sections = [...sectionsHTML];
const navitems = [...navItemsHTML];

const handleColors = (navItems, index) => {
  for (let i = 0; i < navItems.length; i++) {
    if (i == index) {
      navitems[i].classList.add("text-green-500");
      navitems[i].classList.add("border-b-4");
      navitems[i].classList.add("border-green-500");
    } else {
      navitems[i].classList.remove("text-green-500");
      navitems[i].classList.remove("border-b-4");
      navitems[i].classList.remove("border-green-500");
    }
  }
};

const callback = (entries, observer) => {
  entries.forEach((entrie, index) => {
    if (entrie.isIntersecting) {
      const i = sections.indexOf(entrie.target);
      handleColors(navitems, i);
    }
  });
};

const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver(callback, options);

document
  .querySelectorAll("section")
  .forEach((section) => observer.observe(section));
