//-------------------Creates app-footer component---------------------//
//-------------------accepts Name,Year and contact---------------------//
const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `<style>
:host{
    display: block;
    background-color: 'black;
    
  }
  footer{
    text-align:center;
    background-color:rgb(119,76,96);
    color:rgb(234,205,194);
    
  }
  </style>
  <footer>???</footer>
  `;
    ;
class CustFooter extends HTMLElement {//custom footer element
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const year = this.getAttribute('data-year') || "0000";
        const name = this.getAttribute('data-name') || "Nobody";
        const contact = this.getAttribute('data-contact') || "Email";

        this.shadowRoot.querySelector("footer").innerHTML = `&copy; Copyright ${year} ||  ${name} || Contact: ${contact} `;
    }

}

customElements.define('app-footer', CustFooter);