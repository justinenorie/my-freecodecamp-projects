// Main Section
const mainSection = document.getElementById("main-section");
const categorySelection = document.getElementById("category-dropdown");
const viewCategory = document.getElementById("view-category-button");
const bookmarkForm = document.getElementById("add-bookmark-button");

// Form Section
const formSection = document.getElementById("form-section");
const nameValue = document.getElementById("name");
const categoryURL = document.getElementById("url");
const closeForm = document.getElementById("close-form-button");
const addBookmark = document.getElementById("add-bookmark-button-form");
const categoryName = document.querySelectorAll(".category-name");

// Bookmark List
const bookmarkList = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const closeBookmark = document.getElementById("close-list-button");
const deleteBookmark = document.getElementById("delete-bookmark-button");

// Bookmarks Data
const bookmarksData = JSON.parse(localStorage.getItem("bookmarks")) || [];

// Get books from the localStorage
const getBookmarks = () => {
  try {
    const parsedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (!Array.isArray(parsedBookmarks)) return [];

    const isValid = parsedBookmarks.every(
      (bookmark) =>
        bookmark &&
        typeof bookmark.name === "string" &&
        typeof bookmark.category === "string" &&
        typeof bookmark.url === "string"
    );

    return isValid ? parsedBookmarks : [];
  } catch (error) {
    return [];
  }
};

// Add Booksmarks here
const addBookmarks = () => {
  const markObj = {
    name: nameValue.value,
    category: categorySelection.value,
    url: categoryURL.value
  }

  const bookmarksData = getBookmarks();
  bookmarksData.push(markObj);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksData));

  nameValue.value = "";
  categoryURL.value = "";
};

// toggle for Form
const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
  categoryName.forEach((element) => {
    element.innerText = categorySelection.selectedOptions[0].innerText;
  });
};

// toggle for bookmark List
const displayOrHideCategory = () => {
  bookmarkList.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
};

const listOfBookmarks = () => {
  const selectedCategory = categorySelection.selectedOptions[0].value;
  const bookmarks = getBookmarks();
  const filteredBookmarks = bookmarks.filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    categoryList.innerHTML = filteredBookmarks.map(bookmark => `
      <div>
        <input id="${bookmark.name}" value="${bookmark.name}" name="bookmarks" type="radio" />
        <label for="${bookmark.name}">
          <a href="${bookmark.url}">${bookmark.name}</a>
        </label>
      </div>
  `).join('');
  }
};

// Main Section Listener
bookmarkForm.addEventListener("click", () => {
  getBookmarks();
  displayOrCloseForm();
});

viewCategory.addEventListener("click", () => {
  listOfBookmarks();
  displayOrHideCategory();
});

// Form Section Listener
addBookmark.addEventListener("click", () => {
  addBookmarks();
  displayOrCloseForm();
});

closeForm.addEventListener("click", () => {
  displayOrCloseForm();
});

// Bookmark Section Listener
closeBookmark.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmark.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="bookmarks"]:checked');
  if (selectedRadio) {
    const bookmarkName = selectedRadio.value;
    const selectedCategory = categorySelection.selectedOptions[0].value;
    const bookmarks = getBookmarks();
    const updatedBookmarks = bookmarks.filter(
      bookmark => !(bookmark.name === bookmarkName && bookmark.category === selectedCategory)
    );

    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    listOfBookmarks();
  }
});
