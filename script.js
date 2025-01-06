function renderBooks() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
      content.innerHTML += tempContent(i);
      loadBookData(i);
      renderComments(i);
  }
}

function loadBookData(i) {
  books[i].likes = getFromStorage(`books[${i}].likes`, books[i].likes);
  books[i].liked = getFromStorage(`books[${i}].liked`, books[i].liked === true);
  updateLike(i, books[i].liked);
}

function loadStorageComments(i) {
  let storageJSONComments = localStorage.getItem(`books[${i}].comments`)
  let objComments = JSON.parse(storageJSONComments)
  if (storageJSONComments != null) {
      books[i].comments = objComments;  
  } 
}

function renderComments(i) {
  loadCommentsFromStorage(i);
  let commentsHTML = "<table>";
  for (let j = 0; j < books[i].comments.length; j++) {
      commentsHTML += tempComments(i, j);
  }
  commentsHTML += "</table>";
  document.getElementById(`commentText-${i}`).innerHTML = commentsHTML;
}

function likeBookToggle(i) {
  const book = books[i];
  if (book.liked) {
      book.likes--;
  } else {
      book.likes++;
  }
  book.liked = !book.liked;
  saveToStorage(`books[${i}].likes`, book.likes);
  saveToStorage(`books[${i}].liked`, book.liked);
  renderBooks();
}

function safeCommentToStorage(i) {
  const commentsJSON = JSON.stringify(books[i].comments)
  localStorage.setItem(`books[${i}].comments`, commentsJSON)
}

function addComment(i) {
  const input = document.getElementById(`inputText-${i}`);
  if (input.value.trim() !== "") {
      const newComment = { name: "Benjamin", comment: input.value.trim() };
      books[i].comments.unshift(newComment);
      saveCommentsToStorage(i);
      renderBooks();
  }
}

function updateLike(i, liked) {
  const likedRef = document.getElementById(`liked-${i}`);
  if (liked) {
      likedRef.classList.add("fa-heart");
      likedRef.classList.remove("fa-heart-o");
  } else {
      likedRef.classList.add("fa-heart-o");
      likedRef.classList.remove("fa-heart");
  }
}

function getFromStorage(key, defaultValue) {
  const value = localStorage.getItem(key);
  if (value) {
      return JSON.parse(value);
  }
  return defaultValue;
}


function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadCommentsFromStorage(i) {
  books[i].comments = getFromStorage(`books[${i}].comments`, books[i].comments);
}

function saveCommentsToStorage(i) {
  saveToStorage(`books[${i}].comments`, books[i].comments);
}



