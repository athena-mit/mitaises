window.onload = () => {
    sorted_years = Object.keys(alumni_data).sort().reverse();

    console.log(sorted_years)
    sorted_years.forEach(year => {
        add_year(year, alumni_data);
    });
}


function add_year(year, alumni_data) {
    var timeline = document.getElementById('timeline');

    var listitem = document.createElement("li");

    var header = document.createElement("h4");
    header.setAttribute('class', 'text-primary');
    header.innerText = "Class of " + year;
    listitem.appendChild(header);

    var para = document.createElement("p");
    var alumni_of_year = alumni_data[year].map(alum => {
        return alum.name + " - " + alum.bio.join(" - ");
    })
    console.log(alumni_of_year)
    para.innerHTML = alumni_of_year.join('<br>')
    listitem.appendChild(para);

    timeline.appendChild(listitem)
}

                    //     <li>
                    //     <h4 class="text-primary">Class of 2016</h4>
                    //     <p>
                    //         Jim Colombe - Chemistry, Ph.D. Student, 2015 - South Dakota - Rosebud Sioux/Nez Perce
                    //     </p>
                    // </li>