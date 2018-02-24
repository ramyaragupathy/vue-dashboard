<template>
    <div>
        <section class='hero is-info welcome is-small'>
            <div class='hero-body'>
                <div class='container'>
                    <h1 class='title'>
                        Demo
                    </h1>
                    <h2 class='subtitle'>
                        Awesome stuff you worked on
                    </h2>
                </div>
            </div>
        </section>
        <section class='section'>
            <div class='field is-horizontal'>
                <div class='field-label is-normal'>
                    <label class='label'>Title</label>
                </div>
                <div class='field-body'>
                    <div class='field'>
                        <div class='control'>
                            <input class='input is-danger' type='text' placeholder='eg: My Portfolio Website' v-model='title' v-on:keypress='added = false'/>
                        </div>
                        <p class='help is-danger'>
                            This field is required
                        </p>
                    </div>
                </div>
            </div>
            <div class='field is-horizontal'>
                <div class='field-label is-normal'>
                    <label class='label'>Goals</label>
                </div>
                <div class='field-body'>
                    <div class='field'>
                        <div class='control'>
                            <textarea class='textarea' placeholder='Explain about your project' v-model='content' v-on:keypress='added = false'/>
                        </div>
                    </div>
                </div>
            </div>
            <div class='control is-pulled-right'>
                <button class='button is-link' v-on:click='editUpcoming()'>Update</button>
            </div>
        </section>

        <section>
            <div class='card'>
                <header class='card-header'>
                    <p class='card-header-title'>
                        Upcoming Demo &nbsp
                        <span class='subtitle is-7'>
                        <small></small>
                        </span>
                    </p>
                    <a href='#' class='card-header-icon' aria-label='more options'>
                        <span class='icon'>
                            <i class='fa fa-pencil-square-o' aria-hidden='true' />
                        </span>
                    </a>
                </header>
                <div v-if='added' class='card-content'>
                    <div class='content'>
                        <article class='media'>
                            <div class='media-content'>
                                <div class='content'>
                                    <p>
                                        <big><strong>{{this.title}}</strong></big>
                                        <br v-text='content'>{{this.content}}</br>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import appState from '../appData.js'
    export default {
        name: 'addDemo',
        data() {
                return {
                title: appState.demo.curr.title,
                content: appState.demo.curr.contents,
                added: true
            }
        },
        methods: {
            editUpcoming() {
                this.added = true
                console.log(this.added)
                console.log(this.title)
                console.log(this.content)
            }
        }
    }
</script>