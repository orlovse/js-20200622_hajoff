export default class SortableTable {
  element = null;
  subElements = {};
  constructor(header = [], {data = []} = {}) {
    this.header = header;
    this.data = data;

    this.render();
  }

  render () {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element;
    this.subElements = this.getSubElements(this.element);
  }

  get template () {
    return `
    <div data-element="productsContainer" class="products-list__container">
      <div class="sortable-table">
  
        <div data-element="header" class="sortable-table__header sortable-table__row">  
          ${this.getHeader()}
        </div>
        
        <div data-element="body" class="sortable-table__body">
          ${this.getBodyFromData()}
        </div>
      </div>
    </div>
    `;
  } 

  getHeader () {
    return this.header.reduce((acc, el) => {
      return acc + `
      <div class="sortable-table__cell" data-name="${el.id}" data-sortable="${el.sortable}">
        <span>${el.title}</span>
        ${el.sortable ? '<span class="sortable-table__sort-arrow"><span class="sort-arrow"></span></span>' : ""}
      </div>
      `;
    }, "");
  }

  getBodyFromData () {
    return this.data.reduce((acc, el) => {
      return acc + `
        <a href="/products/3d-ochki-epson-elpgs03" class="sortable-table__row">
          <div class="sortable-table__cell">
            <img class="sortable-table-image" alt="Image" src="http://magazilla.ru/jpg_zoom1/246743.jpg">
          </div>
          <div class="sortable-table__cell">${el['title']}</div>
          <div class="sortable-table__cell">
            <span data-tooltip="<div class=&quot;sortable-table-tooltip&quot;>
              <span class=&quot;sortable-table-tooltip__category&quot;>ТВ и видеотехника</span> /
              <b class=&quot;sortable-table-tooltip__subcategory&quot;>3D очки</b>
            </div>">${el["quantity"]}</span>
          </div>
          <div class="sortable-table__cell">${el["price"]}$</div>
          <div class="sortable-table__cell">${el["sales"]}</div>
        </a>      
      `;
    }, "");
  }

  getSubElements(element) {
    const elements = element.querySelectorAll('[data-element]');

    return [...elements].reduce((acc, subElement) => {
      acc[subElement.dataset.element] = subElement;
      return acc;
    }, {});
  }


  sort(fieldValue, orderValue) {
    this.data.sort((el1, el2) => {
      const value1 = el1[fieldValue];
      const value2 = el2[fieldValue];

      let compareResult;
      if (typeof value1 === 'number') {
        compareResult = value1 > value2 ? 1 : -1;
      } else { 
        compareResult = value1.localeCompare(value2, 'ru-RU', {caseFirst: 'upper'});
      }

      const direction = orderValue === 'desc' ? -1 : 1;
      return compareResult * direction;
    });
    this.element.innerHTML = this.template;
    this.subElements = this.getSubElements(this.element);
  }

  remove() {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
  }
}

