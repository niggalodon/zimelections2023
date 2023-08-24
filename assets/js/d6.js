let provincialDataIds = null
let provincialNameTags = null
let activateMainHandler = false
let shortIntervalHandlerId = null
let provincialAccordionElement = document.getElementById('province-accordion')

const API_URL = 'https://cvdsheetapi.onrender.com'

function getProvinceDataIds(){
    $.getJSON(`${window.location.origin}/provinces.json`, (data) => {
        provincialDataIds = data
        provincialNameTags = Object.keys(data)
        renderProvincialAccordions();
    })
}

function processProvincalData(){
    provincialNameTags.forEach(id => {
        let sheetId = provincialDataIds[id]
        $.get(`${API_URL}/process2?id=${sheetId}`)
    })
}

function getProvincalData(){

    function setupHandler(){
        setInterval(getProvincalData, 5000)
        console.warn("[+] Long Interval Handler : Loaded")
    }

    provincialNameTags.forEach( tag => {
        let sheetId = provincialDataIds[tag]
        $.getJSON(`${API_URL}/data2?id=${sheetId}`, (data, error) => {
            if(error === "success" && data.data){
                if(!activateMainHandler){
                    activateMainHandler = true
                    
                    console.warn("[+] Initial Data Received")
                    clearInterval(shortIntervalHandlerId)
                    console.warn("[+] Removed Short Interval Handler")
                    
                    setTimeout(setupHandler, 10000);
                }

                if(activateMainHandler){
                    renderProvincialData(data.data, tag)
                }
            }
        })
    })
}

let p = 0

function renderProvincialData(data, provinceTag){
    p = data

    function renderConstituencyEntries(targetConstituency){
        let tableEntries = ""
        
        targetConstituency.forEach(dataEntry => {
            tableEntries += 
            `</tr>
                <td scope="row">${dataEntry[4]}</td>
                <td scope="row">${dataEntry[2]}</td>
                <td scope="row">${dataEntry[3]}</td>
                <td scope="row">${dataEntry[5]}</td>
            </tr>`
        })

        return tableEntries
    }

    let targetProvincialTables = document.getElementById(`${provinceTag.toLowerCase().replaceAll(" ","_")}-tables`)
    let constituencies = Object.keys(data)
    targetProvincialTables.innerHTML = ""

    constituencies.forEach(constituency => {
        targetProvincialTables.innerHTML += 
        `<div class="table-responsive">
                <h4>${constituency} : August 23 2023 Elections</h4>
        
                <table class="table table-hover table-bordered border-dark">
                    <thead>
                        <tr>
                        
                            <th scope="col">
                                Party
                            </th>                                                                        
                            <th scope="col">
                                Name
                            </th>
                            <th scope="col">
                                Sex
                            </th>
                            <th scope="col">
                                Results
                        </th>                                                                        
                        </tr>
                    </thead>
                    <tbody>
                        ${renderConstituencyEntries(data[constituency])}
                    </tbody>
                    <caption>
                        Source : ZEC webiste
                    </caption>
                </table>
                
            </div>`
    })
}

function renderProvincialAccordions(){
    provincialAccordionElement.innerHTML = ""
    provincialNameTags.forEach(name => {
        provincialAccordionElement.innerHTML += `
        <div class="accordion-item">
        
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${name.toLowerCase().replaceAll(" ","_")}" aria-expanded="true" aria-controls="${name.toLowerCase().replaceAll(" ","_")}">
                    ${name}
                </button>
            </h2>

            <div id="${name.toLowerCase().replaceAll(" ","_")}" class="accordion-collapse collapse" data-bs-parent="#accordion_provincial">
            
                <div class="accordion-body">
                    <h3>${name}</h3>

                    <div>
                        <div class="row mt-5 mb-4">                                               
                            <div class="col-md-12 ">
                                <div class="row mt-5 mb-4">
                                    <div class="box shadow" id="${name.toLowerCase().replaceAll(" ","_")}-tables">

                                        <div class="table-responsive">
                                            <h4>Bulawayo Central : August 23 2023 Elections</h4>
                                    
                                            <table class="table table-hover table-bordered border-dark">
                                                <thead>
                                                    <tr>
                                                    
                                                        <th scope="col">
                                                            Party
                                                        </th>                                                                        
                                                        <th scope="col">
                                                            Name
                                                        </th>
                                                        <th scope="col">
                                                            Sex
                                                        </th>
                                                        <th scope="col">
                                                            Results
                                                    </th>                                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"> CCC</td>
                                                        <td scope="row"> Kapoikilu Surrender</td>
                                                        <td scope="row"> M</td>
                                                        <td scope="row">--</td>
                                                        </tr>
                                                        <td scope="row">ZANU PF</td>
                                                        <td scope="row"> Charuka Tendayi </td>
                                                        <td scope="row">M</td>
                                                        <td scope="row">--</td>
                                                        </tr>
                                                    
                                                </tbody>
                                                <caption>
                                                    Source : ZEC webiste
                                                </caption>
                                            </table>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    })
}

getProvinceDataIds();
setInterval(processProvincalData, 5000);
shortIntervalHandlerId = setInterval(getProvincalData, 2000)
renderProvincialAccordions()
