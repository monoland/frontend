<template>
    <v-app id="monoland" v-cloak>
        <v-navigation-drawer class="grey lighten-4" width="240" fixed clipped app>
            <v-list>
                <v-list-tile :to="{name: 'Dashboard' }">
                    <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>
                <v-subheader>Master</v-subheader>

                <v-list-tile>
                    <v-list-tile-action><v-icon>history</v-icon></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Your Page</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>
                <v-subheader>Transaction</v-subheader>

                <v-list-tile>
                    <v-list-tile-action><v-icon>flag</v-icon></v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Your Page</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="white" height="56" flat fixed clipped-left app>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>Product Name</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="grey--text" icon>
                <v-icon>notifications</v-icon>
            </v-btn>

            <v-menu v-model="menu"
                :nudge-width="240"
                bottom left
            >
                <v-avatar size="32" slot="activator">
                    <img :src="user.avatar" alt="pict" v-if="user.avatar">
                    <v-icon large v-else>account_circle</v-icon>
                </v-avatar>

                <v-card class="v-card__account">
                    <v-list class="pt-0">
                        <v-list-tile avatar>
                            <v-list-tile-avatar>
                                <img :src="user.avatar" alt="pict" v-if="user.avatar">
                                <v-icon large v-else>account_circle</v-icon>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-divider></v-divider>

                        <v-list-tile :to="{ name: 'Setting' }">
                            <v-list-tile-action><v-icon>settings</v-icon></v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Settings</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-list-tile @click="signOut">
                            <v-list-tile-action><v-icon>exit_to_app</v-icon></v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Sign out</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-menu>
        </v-toolbar>
        
        <v-content>
            <router-view :key="$route.fullPath"></router-view>
        </v-content>

        <v-snackbar 
            v-model="$root.message.show"
            :color="$root.message.type"
            :timeout="$root.message.time"
        >
            {{ $root.message.text }}

            <v-btn dark flat @click="$root.message.show = false">close</v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
export default {
    name: 'page',

    data:() => ({
        user: {
            avatar: null,
            name: null,
            email: null
        },
        menu: false,
        search: null
    }),

    mounted() {
        this.user = this.$auth.user;
    },

    methods: {
        signOut: function() {
            this.$auth.signout();
            this.$router.push({ name: 'Login' });
        }
    },

    watch: {
        // 
    }
};
</script>