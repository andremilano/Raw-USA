const API = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

// fetch data from API
axios.get(API)
    .then(({ data }) => {
        const dataTableBody = document.getElementById("dataTableBody")
        const Population = data.data;
        const source = data.source;
        console.log(source)
        Population.forEach((element) => {
            const tr = document.createElement("tr")
            tr.innerHTML = `
                
                <td class="bg-slate-100 text-black">${element['ID Nation']}</td>
                <td class="bg-slate-100 text-black">${element.Nation}</td>
                <td class="bg-slate-100 text-black">${element['ID Year']}</td>
                <td class="bg-slate-100 text-black">${element.Year}</td>
                <td class="bg-slate-100 text-black">${element.Population}</td>
                <td class="bg-slate-100 text-black">${element['Slug Nation']}</td>
                
            `
            dataTableBody.appendChild(tr)
        })
    })
    .catch(error => console.error(error))


