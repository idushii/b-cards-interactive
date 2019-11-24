import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

interface IEvents {
  onChange: (props: any) => void
}

const CardForm = tsx.componentFactoryOf<IEvents>().create({
  name: 'CardForm',
  props: {
    hasHeader: { type: Boolean },
    hasTitle: { type: Boolean },
    hasText: { type: Boolean },
    hasFooter: { type: Boolean },
  },

  methods: {
    newCheckBox(name: string, title: string, value: any): VNode {
      return <div class="form-check">
        <input class="form-check-input" type="checkbox" id={name} ref={name} onChange={(e) => this.emitChange(name, e.target.value)} />
        <label class="form-check-label" for={name}>
          {title}
        </label>
      </div>
    },
    emitChange(name: any, value: any) {
      //@ts-ignore
      value = (this.$refs[name] || { value: '' }).checked
      this.$emit('change', { name, value: value })
    }
  },

  mounted()  {
    //@ts-ignore
    this.$refs.hasHeader.checked = this.hasHeader
    //@ts-ignore
    this.$refs.hasTitle.checked = this.hasTitle
    //@ts-ignore
    this.$refs.hasText.checked = this.hasText
    //@ts-ignore
    this.$refs.hasFooter.checked = this.hasFooter
  },

  render(): VNode {
    let hasHeader = this.newCheckBox('hasHeader', 'Шапка', this.hasHeader ? 'on' : 'off')
    let hasTitle = this.newCheckBox('hasTitle', 'Заголовок', this.hasTitle ? 'on' : 'off')
    let hasText = this.newCheckBox('hasText', 'Текст', this.hasText ? 'on' : 'off')
    let hasFooter = this.newCheckBox('hasFooter', 'Футер', this.hasFooter ? 'on' : 'off')

    return (
      <div class="card">
        <div class="card-header">
          Конструктор
        </div>
        <div class="card-body">
          {hasHeader}
          {hasTitle}
          {hasText}
          {hasFooter}
        </div>
      </div>
    )
  }

})

export { CardForm }
