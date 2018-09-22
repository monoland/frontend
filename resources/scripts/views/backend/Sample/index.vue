<template>
    <v-container fluid fill-height>
        <v-layout column>
            <m-header icon="account_balance" title="Sample" subtitle="All available sample">
                <v-btn @click="postForm" color="cyan" :disabled="disabled.addnew" flat>
                    addnew
                </v-btn>

                <v-tooltip bottom>
                    <v-btn slot="activator" @click="openLink" color="cyan" flat icon :disabled="disabled.link">
                        <v-icon>folder</v-icon>
                    </v-btn>
                    <span>Open Link</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <v-btn slot="activator" @click="updateForm" color="cyan" flat icon :disabled="disabled.edit">
                        <v-icon>edit</v-icon>
                    </v-btn>
                    <span>Edit</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <v-btn slot="activator" @click="destroyForm" color="cyan" flat icon :disabled="disabled.delete">
                        <v-icon>delete</v-icon>
                    </v-btn>
                    <span>Delete</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <v-btn slot="activator" @click="refreshData" color="cyan" flat icon>
                        <v-icon>cached</v-icon>
                    </v-btn>
                    <span>Reload</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <v-btn slot="activator" @click="findForm" color="cyan" :disabled="disabled.find" flat icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <span>Search</span>
                </v-tooltip>
            </m-header>

            <m-search v-model="search" @close="closeFinder" v-show="findState" ref="elmInput"></m-search>

            <v-flex class="page__data" md12>
                <v-data-table v-model="selected"
                    :headers="headers"
                    :items="records"
                    :pagination.sync="pagination"
                    :total-items="totalRecords"
                    :rows-per-page-items="[10, 25, 50]"
                    select-all
                >
                    <template slot="items" slot-scope="props">
                        <tr :active="props.selected" @click="props.selected = !props.selected">
                            <td>
                                <v-checkbox
                                    :input-value="props.selected"
                                    primary hide-details
                                ></v-checkbox>
                            </td>

                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.updated_at }}</td>
                        </tr>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>

        <m-form 
            title="Sample"
            v-model="formState" 
            @close="formState = false" 
            @submit="submitData"
        >
            <v-form>
                <v-container glid-list-md>
                    <v-layout wrap>
                        <v-flex md12>
                            <v-text-field
                                v-model="record.name"
                                label="Name"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </m-form>

        <m-dialog v-model="dialog" :records="selected" @cancel="dialog = false" @confirm="destroyData"></m-dialog>
        <m-loader v-model="loading"></m-loader>
    </v-container>
</template>

<script>
import mxCrud from './../../../mixins/Crud';

export default {
    name: 'sample',

    mixins: [mxCrud],

    created() {
        this.headers = [
            { class: 'column__describe', text: 'Name', value: 'name' },
            { class: 'column__date', text: 'Update', value: 'updated_at', align: 'right' }
        ];

        this.dataurl = '/api/instancy';
    },

    methods: {
        newRecord: function() {
            this.record = {
                id: null,
                name: null,
            };
        },

        openLink: function() {
            // this.$router.push({ name: 'OtherPage', params: { param: this.record.id }});
        }
    }
};
</script>