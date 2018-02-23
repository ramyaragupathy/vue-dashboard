<template>
    <div class="column is-3">
        <aside class="menu">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li><a class="is-active">Dashboard</a></li>
                <li><router-link v-bind:to="'/profile'">Edit Personal Info</router-link></li>
            </ul>
            <p class="menu-label">
                Progress
            </p>
            <ul class="menu-list">
                <li><a>Projects</a></li>
                <li><router-link v-bind:to="'/report'">Daily Report</router-link></li>
                <li><router-link v-bind:to="'/demo'">Demo</router-link></li>
            </ul>
        </aside>
    </div>
</template>
<script>
    export default {
        name: 'leftNav'
    }
</script>