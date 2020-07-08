export default class NotificationMessage {
  element = null;
  static instanse;
  constructor(message = "", {duration = 1000, type = "success"} = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    if (NotificationMessage.instanse) {
      NotificationMessage.instanse.remove();
    }
    NotificationMessage.instanse = this;
    this.render();
  }

  render () {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  get template () {
    return `
      <div class="notification ${this.type}" style="--value:${this.duration}ms">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>      
    `;
  }

  show(targetElement = null) {
    this.render();
    if (targetElement) {
      targetElement.append(this.element);
    } else {
      document.body.append(this.element);
    }
    setTimeout(() => this.remove(), this.duration);
  }

  remove() {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
  }
}
