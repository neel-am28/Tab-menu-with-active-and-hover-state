const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    const contentID = tab.id;
    const activeContent = document.getElementById(`${contentID}-content`);
    activeContent.classList.add("active");
    // --------------OR------------------------
    // tabContent[index].classList.add("active");
  });
});
