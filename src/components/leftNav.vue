<template>
        <aside class="menu">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><router-link v-bind:to="'/profile'">Profile</router-link></li>
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
</template>
<script>
    export default {
        name: 'leftNav'
    }
</script>