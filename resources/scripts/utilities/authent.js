import Axios from 'axios';
import {clientId, clientSecret, baseUrl} from './.env.js';

class Authentication
{
    constructor() {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.message = {
            type: null,
            text: null
        };
        this.baseURL = baseUrl;
    }

    clientId() {
        return this.clientId;
    }

    clientSecret() {
        return this.clientSecret;
    }

    check() {
        return !!localStorage.getItem('access_token') && !this.expired();
    }

    expired() {
        let minute = parseInt((Date.now() - parseInt(localStorage.getItem('token_create'))) / 1000);
        let expire = parseInt(localStorage.getItem('expires_in'));

        return minute >= expire;
    }

    token() {
        return localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token');
    }

    fetchToken(token) {
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('expires_in', token.expires_in);
        localStorage.setItem('refresh_token', token.refresh_token);
        localStorage.setItem('token_type', token.token_type);
        localStorage.setItem('token_create', Date.now());
    }

    removeToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('token_create');
    }

    user() {
        return {
            name: localStorage.getItem('user_name'),
            email: localStorage.getItem('user_email'),
            roles: localStorage.getItem('user_roles'),
            pages: JSON.parse(localStorage.getItem('user_pages'))
        };
    }

    fetchUser(user) {
        localStorage.setItem('user_name', user.name);
        localStorage.setItem('user_email', user.email);
        localStorage.setItem('user_roles', user.roles);
        localStorage.setItem('user_pages', JSON.stringify(user.pages));
    }

    removeUser() {
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_roles');
        localStorage.removeItem('user_pages');
    }

    signout() {
        this.removeToken();
        this.removeUser();
    }
}

export const Authent = {
    install (Vue) {
        if (this.installed) return;

        this.installed = true;

        const $auth = new Authentication();

        Object.defineProperty(Vue.prototype, '$auth', {
            get() {
                return $auth;
            }
        });

        Object.defineProperty(Vue.prototype, '$upload', {
            get() {
                return {
                    button: document.getElementById('uploader'),

                    request: {
                        customHeaders: {
                            'Authorization': $auth.token()
                        },
                        endpoint: baseUrl + 'api/upload',
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
                            endpoint: baseUrl + 'api/upload?completed=true'
                        }
                    },

                    callbacks: {
                        onUploadChunk: function(id, name, data) {
                            window.apps.$set(window.apps.uploads, this.getUuid(id), Object.assign({ name: name }, data));
                        }
                    }
                };
            }
        });

        Object.defineProperty(Vue.prototype, '$http', {
            get() {
                return Axios.create({
                    baseURL: baseUrl,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': $auth.token()
                    }
                });
            }
        });

        Object.defineProperty(Vue.prototype, '$error', {
            set(text) {
                this.$root.message.type = 'error';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$complete', {
            set(text) {
                this.$root.message.type = 'success';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$info', {
            set(text) {
                this.$root.message.type = 'info';
                this.$root.message.text = text;
                this.$root.message.show = true;
            }
        });

        Object.defineProperty(Vue.prototype, '$form', {
            get() {
                return this.$root.form;
            }
        });
    }
};

export const Authorize = new Authentication();