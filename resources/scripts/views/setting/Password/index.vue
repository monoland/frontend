<template>
    <v-container class="py-2 px-0">
        <v-layout wrap>
            <v-flex md8 offset-md2>
                <div class="title mb-2">
                    <v-btn class="ml-0" icon :to="{ name: 'Setting' }" exact>
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                    Change Password
                </div>

                <v-card>
                    <v-layout>
                        <v-flex class="flex__center" md3>
                            <v-avatar color="teal lighten-5" size="128">
                                <v-img :src="$auth.baseURL + 'image/medium/' + user.avatar">
                                    <v-layout slot="placeholder"
                                        fill-height align-center justify-center ma-0
                                    >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-layout>
                                </v-img>
                            </v-avatar>
                        </v-flex>

                        <v-flex md9>
                            <v-form>
                                <v-text-field v-model="password_current"
                                    label="Old password"
                                ></v-text-field>

                                <v-text-field v-model="password"
                                    label="New Password"
                                ></v-text-field>

                                <v-text-field v-model="password_confirmation"
                                    label="Confirmation"
                                ></v-text-field>
                            </v-form>
                        </v-flex>
                    </v-layout>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="submitForm">Update</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'password',

    data:() => ({
        user: {
            avatar: null,
            name: null,
            email: null
        },
        password: null,
        password_current: null,
        password_confirmation: null
    }),

    created() {
        this.user = this.$auth.user;
    },

    methods: {
        submitForm: async function() {
            try {
                await this.$http.post(this.$auth.baseURL + 'api/user/password', {
                    password: this.password,
                    password_current: this.password_current,
                    password_confirmation: this.password_confirmation,
                });

                this.$success = 'Update account information is success.';
                this.$router.push({ name: 'Setting' });
            } catch (error) {
                if (error.hasOwnProperty('message')) {
                    // Unauthorize
                    if (error.message === 'Request failed with status code 401') {
                        this.$auth.signout();
                        this.$router.push({ name: 'Login' });
                    } else {
                        // something else
                        this.$error = error.message;
                    }
                }

                if (error.hasOwnProperty('response')) {
                    let { message, errors } = error.response.data;
                    // Unprocessable Entity
                    if (errors) {
                        this.$error = message;
                    }
                }   
            }   
        }
    }
};
</script>