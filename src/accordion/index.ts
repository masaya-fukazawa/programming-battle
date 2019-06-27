import $ from 'jquery';

export class Accordion {

  private $wrapper = $('#jsi-accordion-wrapper');
  private $accordion = $('#jsi-accordion');
  private $trigger = $('#jsi-toggle-trigger');

  private isToggle = false;

  constructor() {
    this.bindEvents();
  }

  private bindEvents(): void {
    this.$trigger.on('click', () => this.toggle());
  }

  private toggle(): void {
    if (this.isToggle) {
      this.$wrapper.css({height: this.$accordion[0].scrollHeight});
    } else {
      this.$wrapper.css({height: 0});
    }

    this.isToggle = !this.isToggle;
  }


}

$(() => new Accordion());