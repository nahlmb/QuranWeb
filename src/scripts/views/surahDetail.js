function surahDetail() {
    const baseUrl = "https://api.alquran.cloud/v1";

    const getData = async () => {
        const surahNumber = getQueryVariable('number')
        const url = `${baseUrl}/surah/${surahNumber}/editions/quran-uthmani,en.sahih`
        try {
            const response = await fetch(url)
            const responseJson = await response.json()
            if(responseJson.code == 200){
                render(responseJson.data)
            }
        } catch (e) {
            alert(e)
        }
    }

    //cores
    const render = (data) => {
        const ayahItems = data[0]
        const ayahs = ayahItems.ayahs

        const translateItems = data[1]
        const translates = translateItems.ayahs

        const listAyah = document.querySelector('#qw-ayah-list')
        listAyah.innerHTML = ""
        var position
        for (position = 0; position < ayahs.length; position++) {
            let ayah = ayahs[position].text
            const translate_type = translateItems.edition.name
            const translate = translates[position].text
            if(getQueryVariable('number') !== "1" && position === 0) {
                ayah = trimFirstAyah(ayah)
            }
            listAyah.innerHTML += `
            <ayah-item arabic='${ayah}' translate-type='${translate_type}' ayah-translate='${translate}'></ayah-item>`
        }

        const notification = document.querySelector("#detail-notification")
        notification.innerHTML = `
        <p style="font-weight: bolder;">${ayahItems.englishName}</p>
        <p>${ayahItems.revelationType} - Number Of Ayahs ${ayahItems.numberOfAyahs} Ayat</p>`
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }

    const trimFirstAyah = (ayah) => {
        return ayah.substr(39);
    }

    document.addEventListener("DOMContentLoaded", () => {
        getData()
    })
}

export default surahDetail;
