import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

import { CardForm } from "./components/CardForm";
import { CardSample } from "./components/CardSample";
import { CardResult } from "./components/CardResult";

const App = tsx.component({
    name: 'App',

    data: () => ({
        hasHeader: false,
        hasFooter: false,
        hasTitle: true,
        hasSubTitle: false,
        hasText: true,
        hasLinks: true,
        code: ''
    }),

    methods: {
        async setProp(prop: { name: any, value: any }) {
            this.$data[prop.name] = prop.value
            await this.$nextTick()
            //@ts-ignore
            this.code = this.$refs.CardSample.$el.outerHTML
        }
    },

    async mounted() {
        await this.$nextTick()
        //@ts-ignore
        this.code = this.$refs.CardSample.$el.outerHTML
    },

    render(): VNode {
        return (
            <div id="app">
                <nav class="navbar navbar-dark bg-primary mb-3">
                    <a class="navbar-brand" href="#">Интерактивный пример card</a>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col col-6">
                            <CardForm
                                hasHeader={this.hasHeader}
                                hasFooter={this.hasFooter}
                                hasText={this.hasText}
                                hasTitle={this.hasTitle}
                                hasSubTitle={this.hasSubTitle}
                                hasLinks={this.hasLinks}
                                onChange={this.setProp}
                            />
                        </div>
                        <div class="col col-6">
                            <CardSample
                                ref="CardSample"
                                hasHeader={this.hasHeader}
                                hasFooter={this.hasFooter}
                                hasText={this.hasText}
                                hasLinks={this.hasLinks}
                                hasTitle={this.hasTitle}
                                hasSubTitle={this.hasSubTitle}
                            />
                        </div>
                        <div class="col col-12">
                            <pre>
                                <CardResult code={this.code} />
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export { App }
