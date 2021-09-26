const navItemsHTML = document.getElementsByClassName("navitem");
const sectionsHTML = document.querySelectorAll("section");

const sections = [...sectionsHTML];
const navitems = [...navItemsHTML];

const callback = (entries, observer) => {
  entries.forEach((entrie, index) => {
    if (entrie.isIntersecting) {
      const i = sections.indexOf(entrie.target);
      console.log(navitems[i]);
      navitems[i].classList.add("text-green-500");
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
