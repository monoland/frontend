<template>
    <v-container class="py-2 px-0">
        <v-layout wrap>
            <v-flex md8 offset-md2>
                <div class="title mb-2">
                    <v-btn class="ml-0" icon :to="{ name: 'Setting' }" exact>
                        <v-icon>arrow_back</v-icon>
                    </v-btn>
                    Account Information
                </div>
                
                <v-card>
                    <v-layout>
                        <v-flex class="flex__center" md3>
                            <v-avatar id="button_target" color="teal lighten-5" size="128">
                                <v-icon v-if="!user.avatar">photo_camera</v-icon>
                                <v-img :src="$auth.baseURL + 'image/medium/' + user.avatar" v-else>
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
                                <v-text-field v-model="user.name"
                                    label="User name"
                                ></v-text-field>

                                <v-text-field v-model="user.email"
                                    label="Email address"
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

        <m-uploader v-model="uploader"
            :completed="updatePicture"
        ></m-uploader>
    </v-container>
</template>

<script>
export default {
    name: 'profile',

    data:() => ({
        avatar: null,
        user: {
            avatar: null,
            name: null,
            email: null
        },
        uploader: false
    }),

    created() {
        this.user = this.$auth.user;
    },

    methods: {
        updatePicture: function(response) {
            this.user.avatar = response.fileinfo.path;
            this.uploader = false;
        },

        submitForm: async function() {
            try {
                let { data } = await this.$http.post(this.$auth.baseURL + 'api/user/info', {
                    name: this.user.name,
                    email: this.user.email,
                    avatar: this.user.avatar
                });

                localStorage.setItem('user_avatar', data.avatar);
                localStorage.setItem('user_name', data.name);
                localStorage.setItem('user_email', data.email);
                localStorage.setItem('user_roles', data.roles);
                localStorage.setItem('user_pages', JSON.stringify(data.pages));

                this.$auth.user = Object.assign({}, {
                    avatar: data.avatar,
                    name: data.name,
                    email: data.email,
                    roles: data.roles,
                    pages: JSON.stringify(data.pages)
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