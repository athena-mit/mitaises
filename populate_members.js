window.onload = () => {
    populate_section('board');
    populate_section('members');
    populate_section('advisors');
}

function populate_section(section_id){
    var section = document.getElementById(section_id);  
    for(r = 0; r < Math.ceil(members_data[section_id].length/4); r++){
        var card_deck = document.createElement("div"); 
        card_deck.setAttribute('class', 'card-deck');
        for(c = 0; c < 4; c++){
            if(4*r + c < members_data[section_id].length){
                var card = make_card(members_data[section_id][4*r+c])
            }
            else{ //to get good spacing, just make invisible cards to pad the row
                var card = make_card(members_data[section_id][members_data[section_id].length - 1])
                card.setAttribute('style', 'opacity:0')
            }
            card_deck.appendChild(card);
        }
        section.appendChild(card_deck);
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
    console.log(member_entry);

    var card = document.createElement("div"); 
    card.setAttribute("class", "card");

    if(!('img_link' in member_entry)){
        member_entry.img_link = "assets/mitaises_members_logo.png"
    }
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
        position.setAttribute("class", "card-text  text-primary");
        position.innerText = member_entry.position;
        body.appendChild(position);
    }

    var bio = document.createElement("p");
    bio.setAttribute("class", "card-text");
    bio.innerHTML= member_entry.bio.join("<br>");
    body.appendChild(bio);
    
    return card;
}
