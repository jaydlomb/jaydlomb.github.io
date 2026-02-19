(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".vg-hamburger");
    const sidebar = document.querySelector(".vg-sidebar");
    const body = document.querySelector("body");
    if (hamburger && sidebar) {
      hamburger.addEventListener("click", () => {
        body.classList.toggle("vg-sidebar-open");
        hamburger.classList.toggle("is-active");
        sidebar.classList.toggle("is-active");
      });
    }
    const tabs = document.querySelectorAll(".vg-about-extended-info-tabs__tab");
    const tabsContent = document.querySelectorAll(".vg-about-extended-info-tabs__content");
    if (tabs) {
      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((tab2) => tab2.classList.remove("vg-about-extended-info-tabs__tab_active"));
          tab.classList.add("vg-about-extended-info-tabs__tab_active");
          tabsContent.forEach((content) => {
            content.classList.remove("vg-about-extended-info-tabs__content_active");
            if (content.dataset.tab === tab.dataset.tab) {
              content.classList.add("vg-about-extended-info-tabs__content_active");
            }
          });
        });
      });
    }
    const categoriesList = document.querySelectorAll(".vg-categories-list");
    const categoriesRows = document.querySelectorAll(".vg-categories-row");
    if (categoriesList) {
      categoriesRows.forEach((row) => {
        row.addEventListener("click", () => {
          categoriesRows.forEach((rowAll) => {
            if (rowAll !== row) {
              rowAll.nextElementSibling.style.height = 0;
              rowAll.classList.remove("vg-categories-row_open");
            }
          });
          if (row.classList.contains("vg-categories-row_open")) {
            row.classList.remove("vg-categories-row_open");
            row.nextElementSibling.style.height = 0;
          } else {
            row.nextElementSibling.style.height = row.nextElementSibling.scrollHeight + "px";
            row.classList.add("vg-categories-row_open");
          }
        });
      });
    }
    const selectedTags = /* @__PURE__ */ new Set();
    const tagsList = document.querySelectorAll(".vg-tags-list-item");
    const postsList = document.querySelectorAll(".vg-post");
    if (tagsList) {
      const url = new URL(window.location.href);
      const urlParams = new URLSearchParams(url.search);
      let urlTags = urlParams.get("tags") ? urlParams.get("tags").split(",") : [];
      if (urlTags.length > 0) {
        tagsList.forEach((tag) => {
          const currentTag = tag.getAttribute("data-tag");
          if (urlTags.includes(currentTag)) {
            tag.classList.add("vg-tags-list-item_active");
            selectedTags.add(currentTag);
          }
        });
        postsList.forEach((post) => {
          const tags = post.getAttribute("data-tags").split(" ");
          const visible = urlTags.every((tag) => tags.includes(tag));
          post.classList.toggle("vg-post_visible", visible);
        });
      }
      tagsList.forEach((tag) => {
        tag.addEventListener("click", () => {
          tag.classList.toggle("vg-tags-list-item_active");
          const currentTag = tag.getAttribute("data-tag");
          if (selectedTags.has(currentTag)) {
            selectedTags.delete(currentTag);
            urlTags = urlTags.filter((t) => t !== currentTag);
          } else {
            selectedTags.add(currentTag);
            urlTags.push(currentTag);
          }
          if (urlTags.length > 0) {
            urlParams.set("tags", urlTags.join(","));
          } else {
            urlParams.delete("tags");
          }
          window.history.replaceState({}, "", `${url.pathname}?${urlParams.toString()}`);
          if (selectedTags.size === 0) {
            postsList.forEach((post) => post.classList.remove("vg-post_visible"));
            return;
          }
          postsList.forEach((post) => {
            const tags = post.getAttribute("data-tags").split(" ");
            const visible = Array.from(selectedTags).every((tag2) => tags.includes(tag2));
            post.classList.toggle("vg-post_visible", visible);
          });
        });
      });
    }
  });
})();
