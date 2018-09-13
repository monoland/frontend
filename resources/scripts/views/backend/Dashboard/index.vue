<template>
    <v-container fluid fill-height>
        <v-layout column>
            <v-flex class="page__header" md12>
                <div class="page__title">
                    <v-avatar size="56" color="red">
                        <v-icon dark>home</v-icon>
                    </v-avatar>
                    <div class="page__title--text">
                        Untitled
                        <div class="subtitle">Some description goes here</div>
                    </div>
                </div>
                <div class="page__actions">
                    <div class="page__actions--wrapper">
                        <v-btn color="red" dark>Addnew</v-btn>
                    </div>
                </div>
            </v-flex>

            <v-flex class="page__data" md12>
                <!--  -->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'dashboard'
};
</script>