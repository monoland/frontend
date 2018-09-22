<template>
    <v-container class="py-2 px-0">
        <v-layout  wrap>
            <v-flex md8 offset-md2>
                <v-subheader class="pl-0">Profile</v-subheader>

                <v-card>
                    <v-list class="pb-0" two-line subheader>
                        <v-list-tile avatar :to="{ name: 'Account' }">
                            <v-list-tile-content>
                                <v-list-tile-title>Account Information</v-list-tile-title>
                                <v-list-tile-sub-title>Change your profile</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>

                        <v-divider></v-divider>

                        <v-list-tile avatar :to="{ name: 'Password' }">
                            <v-list-tile-content>
                                <v-list-tile-title>Change Password</v-list-tile-title>
                                <v-list-tile-sub-title>Change your password</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-card>

                <v-subheader class="pl-0 mt-2">Miscellaneous</v-subheader>

                <v-card>
                    <v-list class="pb-0" two-line subheader>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>Your Other Setting</v-list-tile-title>
                                <v-list-tile-sub-title>Describe your other setting here</v-list-tile-sub-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'setting',

    data:() => ({
        // 
    })
};
</script>