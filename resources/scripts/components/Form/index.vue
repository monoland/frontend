<template>
    <v-dialog :value="dialog" fullscreen transition="dialog-bottom-transition">
        <v-card color="grey lighten-5">
            <v-toolbar color="grey lighten-3" height="56" flat extended>
                <v-btn icon @click.native="$emit('close')">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-layout row pb-2>
                <v-flex md8 offset-md2>
                    <v-card class="card__flex--toolbar">
                        <v-toolbar color="white" card prominent>
                            <v-toolbar-title class="title grey--text">{{ title }}</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn color="cyan" @click.native="$emit('submit')" flat>submit</v-btn>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-card-text class="pa-0">
                            <slot></slot>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'm-form',

    props: {
        title: {
            type: String,
            default: 'Untitled'
        },

        value: Boolean
    },

    data:() => ({
        dialog: false
    }),

    created() {
        this.dialog = this.value;
    },

    watch: {
        value: function(newval) {
            this.dialog = newval;
        }
    }
};
</script>
