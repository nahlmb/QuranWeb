function main() {
    const baseUrl = "https://api.alquran.cloud/v1";

    const getSurahList = async () => {
        try {
            const response = await fetch(`${baseUrl}/surah`)
            const responseJson = await response.json()
            if(responseJson.code == 200){
                renderSurahItem(responseJson.data)
            }

        } catch (e) {
            console.log(e);
        }
    }

    //cores
    const renderSurahItem = (surahItems) => {
        const listSurahElement = document.querySelector("#qw-surah-list");
        listSurahElement.innerHTML = ""
        surahItems.forEach(element => {
            listSurahElement.innerHTML += `
            <div class="column is-one-third-fullhd  is-one-third-tablet is-half-mobile">
            <div class="qw-surah-item has-text-centered">
                <a href="detail.html?number=${element.number}"> ${element.number}. ${element.englishName} </a>
            </div>
            </div>`
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        getSurahList()
    })
}

export default main;
