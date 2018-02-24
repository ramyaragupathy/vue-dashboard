<template>
    <div>
    <div class='card'>
        <header class='card-header'>
            <p class='card-header-title'>
                {{reportData.date }} {{reportData.time}}
            </p>

        </header>
    </div class='card-content'>
    <div class='content'>
        <div class='control has-icons-left has-icons-right'>
            {{reportData.content}}
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        props: ['reportData']
    }
</script>