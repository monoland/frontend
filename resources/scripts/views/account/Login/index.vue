<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card width="450" class="v-card__authent">
                <v-card-title>
                    <h3 class="headline">Sign in</h3>
                    <div class="describe">Enter your credential</div>
                </v-card-title>

                <v-card-text>
                    <v-text-field v-model="email"
                        label="Email address"
                    ></v-text-field>

                    <v-text-field v-model="password"
                        label="Your password"
                    ></v-text-field>
                </v-card-text>

                <v-card-actions>
                    <a class="v-card__link" href="#">Forgot password?</a>
                    <div class="divider">|</div>
                    <a class="v-card__link" href="#">Create account</a>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="Signin">Sign in</v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Login',

    data:() => ({
        email: 'dev@monoland.loc',
        password: 'rahasia'
    }),

    methods: {
        Signin: async function() {
            try {
                let token = await this.$http.post('/oauth/token', {
                    grant_type: 'password',
                    client_id: this.$auth.clientId,
                    client_secret: this.$auth.clientSecret,
                    username: this.email,
                    password: this.password,
                    scope: '*'
                });

                this.$auth.fetchToken(token.data);

                let user = await this.$http.get('/api/user');
                
                this.$auth.fetchUser(user.data);

                this.$router.push({ name: 'Dashboard' });
            } catch (error) {
                this.$message('error', error.message);
            }
        }
    }
};
</script>