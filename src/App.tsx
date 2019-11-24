import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

import { CardForm } from "./components/CardForm";
import { CardSample } from "./components/CardSample";

const App = tsx.component({
    name: 'App',

    render(): VNode {
        return (
            <div id="app">
                <nav class="navbar navbar-dark bg-primary mb-3">
                    <a class="navbar-brand" href="#">Интерактивный пример card</a>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col col-12">
                            <CardForm />
                        </div>
                        <div class="col col-6">
                            <CardSample />
                        </div>
                        <div class="col col-6"></div>
                    </div>
                </div>
            </div>
        )
    }
})

export { App }
