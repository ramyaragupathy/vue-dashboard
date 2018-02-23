<template>
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
                <li><a>Demo</a></li>
            </ul>
        </aside>
</template>
<script>
    export default {
        name: 'leftNav'
    }
</script>