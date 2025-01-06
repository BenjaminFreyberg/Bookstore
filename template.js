function tempContent(i,j) {
    
    const content = `<div id="book" class="book">
                <div id="bookname">${books[i].name}</div>
                <img id="bookimage" src="./img/book_card.png" alt="Book 0">
                <div id="specifications">
                    <div id="specificationHeadline">
                        <div id="price">${books[i].price} €</div>
                        <div class="likes" >
                            <span id="likes-${i}">${books[i].likes}</span>
                            <i id="liked-${i}" class="fa " aria-hidden="true" onclick = "likeBookToggle(${i})"></i>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>Author</td>
                            <td id="author">: ${books[i].author}</td>
                        </tr>
                        <tr>
                            <td>Erscheinungsjahr</td>
                            <td id="publishedYear">: ${books[i].publishedYear}</td>
                        </tr>
                        <tr>
                            <td>Genre</td>
                            <td id="genre">: ${books[i].genre}</td>
                        </tr>
                    </table>
                </div>
                <div id="comments">
                    <p>Kommentare:</p>
                    <div class="commentText" id="commentText-${i}">
                    

                    </div>
                    <div>
                        <input id="inputText-${i}" type="text" placeholder="Schreibe einen Kommentar ...">
                        <i class="fa fa-paper-plane" onclick="addComment(${i})"></i>
                    </div>
                </div>




            </div>
`
return content
}