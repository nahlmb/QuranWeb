class AyahItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.arabic = this.getAttribute("arabic") || undefined;
        this.translate_type = this.getAttribute("translate-type") || undefined;
        this.ayah_translate = this.getAttribute("ayah-translate") || undefined;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .qw-arabic {
            text-align: right;
            direction: rtl;
            font-size: 26px;
            color: black;
        }
        
        .qw-ayah-item {
            padding: 24px 0px;
        }
        
        .qw-ayah-item p{
            margin-left: 24px;
            margin-right: 24px;
        }
        
        .qw-translate-type {
            font-weight: bolder;
            margin-top: 8px;
            color: #08543D;
        }
        
        .qw-translate {
            margin-top: 2px;
            color: rgba(0, 0, 0, 0.5);
        }
        .line {
            width: 100%;
            height: 0.5px;
            background-color:rgba(0, 0, 0, 0.1);
            margin-top: 24px;
            margin-bottom: 24px;
        }
        </style>
        <li class="qw-ayah-item">
            <p class="qw-arabic">${this.arabic}</p>
            <p class="qw-translate-type">${this.translate_type}</p>
            <p class="qw-translate">${this.ayah_translate}</p>
            <div class="line"></div>
        </li>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes() {
        return ["caption"];
    }
}

customElements.define('ayah-item', AyahItem)