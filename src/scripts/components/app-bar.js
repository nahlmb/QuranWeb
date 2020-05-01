class AppBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .navbar {
            display:flex;
            justify-content:center;
            box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.15);
        }
        </style>
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="index.html">
                    <img src="./src/image/logo.png" width="112" height="28">
                </a>
             </div>
        </nav>`;
    }
}

customElements.define('app-bar', AppBar)