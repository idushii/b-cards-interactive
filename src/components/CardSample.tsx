import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

const CardSample = tsx.component({
  name: 'CardSample',

  props: {
    hasHeader: { default: true, },
    hasFooter: { default: true, },
    hasTitle: { default: true, },
    hasText: { default: true, },
  },

  render(): VNode {
    const { hasHeader, hasFooter } = this

    let header, footer, title, text
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

    return (
      <div class="card">
        {header}
        <div class="card-body">
          {title}
          {text}
        </div>
        {footer}
      </div>
    )
  }
})

export { CardSample }
