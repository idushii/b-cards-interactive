import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

const CardSample = tsx.component({
  name: 'CardSample',

  props: {
    hasHeader: { default: true, },
    hasFooter: { default: true, },
    hasTitle: { default: true, },
    hasText: { default: true, },
    hasLinks: { type: Boolean },
    hasSubTitle: { type: Boolean },
  },

  render(): VNode {
    const { hasHeader, hasFooter } = this

    let header, footer, title, text, links: any[] = [], subtitle
    if (hasHeader) {
      header =
        <div class="card-header">
          header
        </div>
    }
    if (hasFooter) {
      footer =
        <div class="card-footer">
          footer
        </div>
    }
    if (this.hasTitle) {
      title = <h5 class="card-title">Title</h5>
    }
    if (this.hasText) {
      text = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur molestiae obcaecati nemo sapiente assumenda eveniet dolorem ea quod, nesciunt optio amet illum quidem quis voluptatem doloremque ab ullam ratione?</p>
    }
    if (this.hasLinks) {
      links = [<a href="#" class="card-link">Card link</a>, <a href="#" class="card-link">Another link</a>]
    }

    if (this.hasSubTitle) subtitle = <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>


    return (
      <div class="card">
        {header}
        <div class="card-body">
          {title}
          {subtitle}
          {text}
          {links}
        </div>
        {footer}
      </div>
    )
  }
})

export { CardSample }
