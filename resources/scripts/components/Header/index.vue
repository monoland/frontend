<template>
    <v-flex class="page__header" md12>
        <div class="page__title">
            <v-avatar size="56" color="red">
                <v-icon dark>{{ icon }}</v-icon>
            </v-avatar>
            <div class="page__title--text">
                {{ title }}
                <div class="subtitle">{{ subtitle }}</div>
            </div>
        </div>

        <div class="page__actions">
            <div class="page__actions--wrapper">
                <slot></slot>
            </div>
        </div>
    </v-flex>
</template>

<script>
export default {
    name: 'm-header',

    props: {
        icon: {
            type: String,
            default: 'home'
        },

        title: {
            type: String,
            default: 'Untitled'
        },

        subtitle: {
            type: String,
            default: 'Some describtion goes here.'
        },

        to: {
            type: Object,
            default: null
        }
    }
};
</script>
