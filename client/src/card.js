const template = document.createElement("template");

template.innerHTML = `
<style>
#image-main{
    padding: 10px;
    float: left;
}
#title::first-letter {
  text-transform:capitalize;
}
#title{
    font-size:24px;
}
.card{
  height:300px;
  width:600px;
  overflow: auto;
  background-color:rgb(119,76,96);
}
.card-content{
    font-size: 24px;
height: 150px; 
margin:12px;

    display: inline-block;
}

.card-conten span{
    padding-bottom:12px;
}

  </style>

  
    <div class="card">
      <div>
        <span id="title">???</span>
      </div>

      
      <div class="card-image">
      <figure class="image">
          <img id="image-main" src="https://bulma.io/images/placeholders/1280x960.png" alt="placeHolder">
      </figure>
  </div>
  <div class="card-content">
      <div>
          <span id="type">type</span><br>
          <span id="progress">progress</span><br>
          <span id="rating">rate</span><br>
          <span id="genres">genres</span><br>
          <span id="notes">notes</span>
      </div>
  </div>
  </div>




`;


class ResultsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ "mode": "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.querySelector("#title").innerHTML = this.dataset.title;
        this.shadowRoot.querySelector("#type").innerHTML = `Type: ${this.dataset.type}`;
        this.shadowRoot.querySelector("#progress").innerHTML = `Progress: ${this.dataset.progress}`||"";
        this.shadowRoot.querySelector("#genres").innerHTML = `Genres: ${this.dataset.genres}`||"";
        this.shadowRoot.querySelector("#rating").innerHTML = `${this.dataset.rating}`||"";
        this.shadowRoot.querySelector("#notes").innerHTML = `${this.dataset.notes}`;
        this.shadowRoot.querySelector("#image-main").src = this.dataset.src;

    }


}
customElements.define("result-card", ResultsCard);