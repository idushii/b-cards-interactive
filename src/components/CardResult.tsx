import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

interface IEvents {
    onChange: (props: any) => void
}

var formatter = require('html-formatter');

const CardResult = tsx.componentFactoryOf<IEvents>().create({
    name: 'CardResult',
    props: {
        code: { type: String },
    },

    data: () => ({
        select: true
    }),

    methods: {
        selectAll() {
            if (!this.select) return
            let target = document.getElementById('ex5');
            if (document.createRange) {
                let rng = document.createRange();
                rng.selectNode(target)
                let sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(rng);
            } else {
                var rng = document.body.createTextRange();
                rng.moveToElementText(target);
                rng.select();
            }
        }
    },

    mounted() {
    },

    render(): VNode {
        return <div class="card">
            <div class="card-header">
                <label>
                    <input type="checkbox" checked v-model={this.select} />
                    &nbsp; Выбиратьпо клику
                </label>
            </div>
            <div class="card-body" id="ex5" onClick={this.selectAll}>
                {formatter.render(this.code)}
            </div>
        </div>

    }

})

export { CardResult }
