<template>
    <v-container fluid fill-height>
        <v-layout column>
            <router-view :key="$route.fullPath"></router-view>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'setting'
};
</script>