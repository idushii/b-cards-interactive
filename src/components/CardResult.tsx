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

    methods: {
    },

    mounted() {
    },

    render(): VNode {
        return (
            <div class="card">
                <div class="card-body">
                    {formatter.render(this.code)}
                </div>
            </div>
        )
    }

})

export { CardResult }
