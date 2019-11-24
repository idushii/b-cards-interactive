import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

import { CardForm } from "./components/CardForm";
import { CardSample } from "./components/CardSample";
import { CardResult } from "./components/CardResult";

const App = tsx.component({
    name: 'App',

    data: () => ({
        cardProps: [
            {
                state: false,
                name: 'header',
                title: 'Шапка',
                html: '<div class="card-header">Header</div>',
                group: 'card-header'
            },
            {
                state: false,
                name: 'header-nav',
                title: 'Вкладки',
                html: `<div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>`,
                group: 'card-header'
            },
            {
                state: false,
                name: 'header-nav-pill',
                title: 'Переключатели',
                html: `  <div class="card-header">
                <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>`,
                group: 'card-header'
            },
            {
                name: 'split'
            },
            {
                state: true,
                name: 'title',
                title: 'Заголовок',
                html: '<h5 class="card-title">Title</h5>',
                group: 'card-body'
            },
            {
                state: true,
                name: 'subtitle',
                title: 'Подзаголовок',
                html: '<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>',
                group: 'card-body'
            },
            {
                name: 'split'
            },
            {
                state: true,
                name: 'text',
                title: 'Текст',
                html: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur molestiae obcaecati nemo sapiente assumenda eveniet dolorem ea quod, nesciunt optio amet illum quidem quis voluptatem doloremque ab ullam ratione?</p>',
                group: 'card-body'
            },
            {
                name: 'split'
            },
            {
                state: true,
                name: 'links',
                title: 'Ссылки',
                html: '<a href="#" class="card-link">Card link</a> <a href="#" class="card-link">Another link</a>',
                group: 'card-body'
            },
            {
                state: false,
                name: 'btn',
                title: 'Кнопка',
                html: '<a href="#" class="btn btn-primary">Lorem ipsum</a>',
                group: 'card-body'
            },
            {
                name: 'split'
            },
            {
                state: false,
                name: 'Footer',
                title: 'Футер',
                html: '<div class="card-footer">Footer</div>',
                group: 'card-footer'
            },
        ],
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
            let index = this.cardProps.findIndex(item => item.name == prop.name)
            this.$set(this.cardProps[index], 'state', prop.value)
            this.cardProps.push({})
            this.cardProps.pop()
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
                                cardProps={this.cardProps}
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
                                cardProps={this.cardProps}
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
