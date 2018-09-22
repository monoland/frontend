<template>
    <v-card class="v-card__progress" width="330" v-show="visibility">
        <v-card-text>
            <div class="v-uploader">
                <div class="v-uploader__title">
                    {{ filename }}
                </div>
                <div class="v-uploader__progress">
                    <v-progress-circular
                        :size="36"
                        :width="6"
                        :value="uplvalue"
                        color="teal"
                        :indeterminate="uploaded"
                    ></v-progress-circular>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import qq from 'fine-uploader/lib/core';

export default {
    name: 'm-uploader',

    props: {
        acceptFiles: {
            type: String,
            default: 'image/png, image/jpeg'
        },

        allowedExtensions: {
            type: Array,
            default: () => (['png', 'jpg', 'jpeg'])
        },

        button: {
            type: String,
            default: 'button_target'
        },

        completed: {
            type: Function,
            default: function(){}
        },

        endPoint: {
            type: String,
            default: function() {
                return this.$auth.baseURL + 'api/media';
            } 
        },

        token: {
            type: String,
            default: function() {
                return this.$auth.token();
            }
        },

        value: Boolean
    },

    data:() => ({
        uploaded: false,
        uplvalue: 0,
        filename: 'Untitled filename',
        visibility: false
    }),

    created() {
        this.visibility = this.value;
    },

    mounted() {
        let _this = this;

        new qq.FineUploaderBasic({
            button: document.getElementById(_this.button),

            request: {
                customHeaders: {
                    'Authorization': _this.token
                },
                endpoint: _this.endPoint,
                filenameParam: 'fileName',
                inputName: 'fileUpload',
                uuidName: 'uuid',
                totalFileSizeName: 'totalFileSize'
            },

            chunking: {
                enabled: true,
                mandatory: true,
                paramNames: {
                    chunkSize: 'chunkSize',
                    partByteOffset: 'partByteOffset',
                    partIndex: 'partIndex',
                    totalParts: 'totalParts'
                },
                success: {
                    endpoint: _this.endPoint + '?completed=true'
                }
            },

            validation: {
                acceptFiles: _this.acceptFiles,
                allowedExtensions: _this.allowedExtensions
            },

            callbacks: {
                onSubmit: function() {
                    _this.$emit('input', true);
                },

                onUploadChunk: function(id, name, data) {
                    _this.uploaded = false;
                    _this.uplvalue = (parseInt(data.partIndex) + 1) / parseInt(data.totalParts) * 100;
                    _this.filename = name;

                    if (_this.uplvalue >= 100) {
                        _this.uploaded = true;
                        _this.filename = 'Combine all uploaded chunks ...';
                    }
                },

                onComplete: function(id, name, response) {
                    if (!response.success) {
                        _this.$error = response.error;
                    } else {
                        _this.filename = 'Process ' + response.fileinfo.path + ' ...';
                        _this.completed(response);
                    }
                }
            }
        });
    },

    watch: {
        value: function(newval) {
            this.visibility = newval;
        }
    }
};
</script>
