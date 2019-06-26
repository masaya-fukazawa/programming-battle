import $ from 'jquery';

class Drawer {

  private $trigger = $('#jsi-drawer-trigger');
  private $drawer = $('#jsi-drawer');
  private $filter = $('#jsi-filter');

  constructor() {
    this.bindEvents();
  }

  private bindEvents(): void {
    this.$trigger.on('click', () => this.open());
    this.$filter.on('click', () => this.close());
  }

  private open(): void {
    this.$drawer.addClass('is-show');
  }

  private close(): void {
    this.$drawer.removeClass('is-show');
  }
}

$(() => new Drawer());