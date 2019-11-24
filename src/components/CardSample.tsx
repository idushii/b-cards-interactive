import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

const CardSample = tsx.component({
  name: 'CardSample',

  props: {
    cardProps: { type: Array, default: () => ([]) },
    hasFooter: { default: true, },
    hasTitle: { default: true, },
    hasText: { default: true, },
    hasLinks: { type: Boolean },
    hasSubTitle: { type: Boolean },
  },

  render(): VNode {
    let html, htmlHead = '', htmlBody = '', htmlFooter = ''

    interface IItem {
      name: string,
      state: boolean,
      html: string,
      group: string
    }

    for (let key in this.cardProps) {
      //@ts-ignore
      let item: IItem = this.cardProps[key]
      if (!item.state) continue;
      if (item.group == 'card-header') {
        htmlHead += item.html
      }
      if (item.group == 'card-body') {
        htmlBody += item.html
      }
      if (item.group == 'card-footer') {
        htmlFooter += item.html
      }

    }

    html = `${htmlHead}<div class="card-body">${htmlBody}</div>${htmlFooter}`

    return (
      <div class="card" domPropsInnerHTML={html}>
        <div class="card-header">Header</div>
        <div class="card-footer">Footer</div>
      </div>
    )
  }
})

export { CardSample }
