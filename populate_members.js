window.onload = () => {
    var board = document.getElementById("board");  
    console.log(members_data.board.length)
    for(r = 0; r < Math.ceil(members_data.board.length/4); r++){
        var card_deck = document.createElement("div"); 
        card_deck.setAttribute('class', 'card-deck');
        for(c = 0; c < 4 && 4*r + c < members_data.board.length; c++){
            var card = make_card(members_data.board[4*r+c])
            card_deck.appendChild(card);
        }
        board.appendChild(card_deck);
    }
}

function make_card(member_entry){
    // Makes a card like this:
    //
    // <div class="card">
    //     <img src="jamesmcgaa.jpeg" class="card-img-top member-card" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">James McGaa</h5>
    //         <p class="card-text text-muted"> Tech Chair</p>
    //         <p class="card-text">
    //             Course: 6-3 <br>
    //             Year: 2020 <br>
    //             Hometown: Minneapolis, MA 
    //         </p>
    //     </div>
    // </div>


    var card = document.createElement("div"); 
    card.setAttribute("class", "card");

    var img = document.createElement("img"); 
    img.setAttribute("src", member_entry.img_link);
    img.setAttribute("class", "card-img-top member-card");
    card.appendChild(img);

    var body = document.createElement("div"); 
    body.setAttribute("class", "card-body");
    card.appendChild(body);

    var title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerText = member_entry.name;
    body.appendChild(title);

    if("position" in member_entry){
        var position = document.createElement("p");
        position.setAttribute("class", "card-text text-muted");
        position.innerText = member_entry.position;
        body.appendChild(title);
    }

    var bio = document.createElement("p");
    bio.setAttribute("class", "card-text");
    bio.innerHTML= member_entry.bio.join("<br>");
    body.appendChild(bio);
    
    return card;
}
