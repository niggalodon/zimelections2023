let map = {}
let accordionElementIds = [
    "collapseOne", "collapseTwo", "collapseThree",
    "collapseFour", "collapseFive", "collapseSix",
    "collapseSeven", "collapseEight", "collapseNine", "collapseTen"
]

map['Mashonaland Central'] = false
map['Matabeleland North'] = false
map['Matabeleland South'] = false
map['Midlands'] = false
map['Mashonaland East'] = false
map['Manicaland'] = false
map['Bulawayo'] = false
map['Masvingo'] = false
map['Mashonaland West'] = false
map['Harare'] = false

function selectProvince(province){
    let svgElement = document.getElementById(province)

    if(map[province]){
        map[province] = false
        svgElement.className.baseVal = 'noelection'
    }else{
        map[province] = true
        svgElement.className.baseVal = 'election'
    }
    
}

function expandAccordion(province){

    accordionElementIds.forEach(accordion => {
        document.getElementById(accordion).classList.remove('show')
    })

    let accordionElement = document.getElementById(province)

    if(map[province]){
        map[province] = false
        accordionElement.classList.add('show')
    }else{
        map[province] = true
        accordionElement.classList.remove('show')
    }
    
}


let senateData = []
let table1Element

function renderSenateData(){
    let table1 = document.getElementById("senatorial-table-1")
    table1.innerHTML = ""
    senateData.forEach(element => {
        if(element.Ser === 1 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += 
            `<tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>`
        }

        if(element.Ser === 2 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += `
            <tbody>
                <tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>
            `
        }

        if(element.Ser === 3 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += `
            <tbody>
                <tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>
            `
        }

        if(element.Ser === 4 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += `
            <tbody>
                <tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>
            `
        }

        if(element.Ser === 5 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += `
            <tbody>
                <tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>
            `
        }

        if(element.Ser === 6 && element.Province === "Bulawayo Metropolitan Province"){
            table1.innerHTML += `
            <tbody>
                <tr>
                    <th scope="row">
                    ${element.Ser}
                    </th>
                    <td  scope="row" class="table-warning">
                    ${element.Party}
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Name}
                        </div>
                    </td>
                    <td  scope="row"> 
                        <div  id="VotesCCC20220">
                            ${element.Sex}
                        </div>
                    </td>
                    <td  scope="row">
                    Results Pending
                    </td>
                    
                </tr>
            `
        }
    })
}

function loadData(){
    $.getJSON("senate.json", (data, error) => {
        if(error == "success"){
            setTimeout(renderSenateData, 2000);
            senateData = data
        }
    })
}

loadData()