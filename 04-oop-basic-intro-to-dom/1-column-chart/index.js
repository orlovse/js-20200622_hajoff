export default class ColumnChart {
  chartHeight = 50;
  element = null;
  constructor ({ data = [], label = '', value = 0, link = ''} = {}) {
    this.data = data;
    this.label = label;
    this.value = value;
    this.link = link;
    this.render();
  }
  
  render() {
    const element = document.createElement('div');
    if (!this.data.length) {
      element.className = 'column-chart_loading';
    }
      
    const link = this.link ? `<a href="${this.link}" class="column-chart__link">View all</a>` : '';
  
    element.innerHTML = `
        <div class="column-chart">
          <div class="column-chart__title">
            Total ${this.label}
            ${link}
          </div>
          <div class="column-chart__container">
            <div class="column-chart__header">${this.value}</div>
            <div class="column-chart__chart">
              ${this.renderData()}
            </div>
          </div>
        </div>
    `;

    this.element = element;
  }
  
  renderData() {
    return this.getColumnProps().reduce((acc, item) => {
      return acc + `<div style="--value:${item.value}" data-tooltip="${item.percent}"></div>`;
    }, '');
  }

  getColumnProps() {
    const maxValue = Math.max(...this.data);
    const scale = this.chartHeight / maxValue;
    
    return this.data.map(item => {
      return {
        percent: (item / maxValue * 100).toFixed(0) + '%',
        value: Math.floor(item * scale)
      };
    });
  }
  
  update() {
    this.render();
  }
  
  remove() {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
  }
}