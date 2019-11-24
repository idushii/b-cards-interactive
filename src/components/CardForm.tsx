import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

interface IEvents {
  onChange: (props: any) => void
}

const CardForm = tsx.componentFactoryOf<IEvents>().create({
  name: 'CardForm',
  props: {
    cardProps: { type: Array, default: () => ([]) },
    hasHeader: { type: Boolean },
    hasTitle: { type: Boolean },
    hasText: { type: Boolean },
    hasFooter: { type: Boolean },
    hasLinks: { type: Boolean },
    hasSubTitle: { type: Boolean },
  },

  methods: {
    newCheckBox(name: string, title: string, value: any): VNode {
      return <div class="form-check">
        <input class="form-check-input" type="checkbox" id={name} ref={name} checked={value} onChange={(e) => this.emitChange(name, e.target.value)} />
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

  mounted() {
    for (let prop of this.cardProps)
      //@ts-ignore
      this.$refs[prop.name].checked = prop.state
  },

  render(): VNode {
    let items = []
    for (let key in this.cardProps) {
      //@ts-ignore
      let { name, title, value } = this.cardProps[key]
      items.push(this.newCheckBox(name, title, 'off'))
    }

    return (
      <div class="card">
        <div class="card-header">
          Конструктор
        </div>
        <div class="card-body">
          {items}
        </div>
      </div>
    )
  }

})

export { CardForm }
