<template>
    <v-container class="py-2 px-0">
        <v-layout wrap>
            <v-flex md8 offset-md2>
                <v-subheader>Profile</v-subheader>

                <v-card>
                    <v-layout>
                        <v-flex md4>
                            PICTURE
                        </v-flex>

                        <v-flex md8>
                            <v-form>
                                <v-text-field
                                    label="Old password"
                                ></v-text-field>

                                <v-text-field
                                    label="New Password"
                                ></v-text-field>

                                <v-text-field
                                    label="Confirmation"
                                ></v-text-field>
                            </v-form>
                        </v-flex>
                    </v-layout>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat>Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'password',

    data:() => ({})
};
</script>