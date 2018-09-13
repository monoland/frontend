<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card width="450" class="v-card__authent">
                <v-card-title>
                    <h3 class="headline">Reset your password</h3>
                    <div class="describe">Enter your email address</div>
                </v-card-title>

                <v-card-text>
                    <v-text-field
                        label="Email address"
                    ></v-text-field>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Reset</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Reset'
};
</script>