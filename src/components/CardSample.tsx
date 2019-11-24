import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

const CardSample = tsx.component({
  name: 'CardSample',

  render(): VNode {
    return (
      <div class="card">
        <div class="card-header">
          header
        </div>
      </div>
    )
  }
})

export { CardSample }
