<template>
    <div class="contacts">
        <div class="contacts-content">
            <div class="contacts-form">
                <form @submit.prevent="handleSubmit()">
                    <h3>Попробуйте 90 дней бесплатно</h3>
                    <div :class="{'control': true, 'control-error': !form.name.valid}">
                        <input v-model="form.name.value" type="text" placeholder="Имя">
                        <small v-if="!!form.name.errorMessage">{{form.name.errorMessage}}</small>
                    </div>
                    <div :class="{'control': true, 'control-error': !form.organizationName.valid}">
                        <input v-model="form.organizationName.value" type="text" placeholder="Название компании">
                        <small v-if="!!form.organizationName.errorMessage">{{form.organizationName.errorMessage}}</small>
                    </div>
                    <div :class="{'control': true, 'control-error': !form.phone.valid}">
                        <input v-model="form.phone.value" type="text" placeholder="+7 (___) ___ - __ - __">
                        <small v-if="!!form.phone.errorMessage">{{form.phone.errorMessage}}</small>
                    </div>
                    <div :class="{'control': true, 'control-error': !form.email.valid}">
                        <input v-model="form.email.value" type="text" placeholder="Эл.почта">
                        <small v-if="!!form.email.errorMessage">{{form.email.errorMessage}}</small>
                    </div>
                    <div class="control">
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
            <div class="contacts-phone">
                <img :src="require('../../assets/phones/contacts-phone.svg')" alt="icnetworking">
            </div>
        </div>

        <ResultModal v-if="!!sendingStatus" :status="sendingStatus" @on-close="handleCloseModal()" />
    </div>
</template>
<script>
import axios from "axios";
import { ResultModal } from "./components";
import { EMAIL_TEMPLATE, MOBILE_TEMPLATE } from "../../shared/constants";

export default {
    name: "Contacts",
    
    components: { ResultModal },

    data() {
        return {
            form: {
                name: { value: '', valid: true, errorMessage: null },
                phone: { value: '', valid: true, errorMessage: null },
                email: { value: '', valid: true, errorMessage: null },
                organizationName: { value: '', valid: true, errorMessage: null },
            },

            sendingStatus: null,
        }
    },

    methods: {
        checkEmptyField(field, cb) {
            if (field.value.length === 0) {
                field.valid = false;
                field.errorMessage = 'Поле не должно быть пустым';

                cb();
            } else {
                field.valid = true;
                field.errorMessage = null;
            }
        },

        checkValidEmail(cb) {
            const isValid = EMAIL_TEMPLATE.test(this.form.email.value);
            
            if (!isValid) { 
                this.form.email.valid = false;
                this.form.email.errorMessage = 'Неверный формат почты';
                cb();
            } else {
                this.form.email.valid = true;
                this.form.email.errorMessage = null;
            }
        },

        checkValidMobile(cb) {
            const isValid = MOBILE_TEMPLATE.test(this.form.phone.value);
            
            if (!isValid) { 
                this.form.phone.valid = false;
                this.form.phone.errorMessage = 'Неверный формат телефона';
                cb();
            } else {
                this.form.phone.valid = true;
                this.form.phone.errorMessage = null;
            }
        },

        checkValidForm() {
            let isValid = true;

            this.checkEmptyField(this.form.name, () => isValid = false);
            this.checkEmptyField(this.form.organizationName, () => isValid = false);
            this.checkEmptyField(this.form.phone, () => isValid = false);
            this.checkEmptyField(this.form.email, () => isValid = false);
            this.checkValidEmail(() => isValid = false);
            this.checkValidMobile(() => isValid = false);

            return isValid;
        },

        handleSubmit() {
            const isValidForm = this.checkValidForm();
            
            const sendForm = async () => {
                try {
                    await axios.post('https://dev.icnetworking.ru/api/landing/contact_forms/', {
                        "company_name": this.form.organizationName.value,
                        "email": this.form.email.value,
                        "phone_number": this.form.phone.value,
                        "full_name": this.form.name.value,
                    })
                    this.sendingStatus = 'success';
                } catch(error) {
                    this.sendingStatus = 'error';
                }
            }

            if (isValidForm) {
                this.sendingStatus = 'send';

                sendForm();
            }
        },

        handleCloseModal() {
            this.sendingStatus = null;
        } 
    }
}
</script>
<style lang="scss" scoped>
    .contacts {
        height: 100vh;
        background-color: #EDF3FB;

        &-content {
            max-width: 1600px;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 200px;
            padding-top: 30px;
        }

        &-form {
            margin-right: 230px;

            form {
                background-color: #FFFFFF;
                border: 1px solid #BABABA;
                box-sizing: border-box;
                border-radius: 15px;
                padding: 48px 72px;
                width: 670px;

                h3 {
                    font-weight: 500;
                    font-size: 36px;
                    line-height: 50px;
                    text-align: center;
                    color: #222222;
                    margin: 0;
                    margin-bottom: 36px;
                }    

                .control {
                    margin-bottom: 28px;

                    input {
                        // width: calc(100% - 72px);
                        width: 100%;
                        padding: 18px 56px 18px 18px;
                        background-color: #F8F8F8;
                        border-radius: 10px;
                        border: none;
                        outline: none;
                        font-size: 24px;
                        color:#222222;
                        box-sizing: border-box;

                        &::placeholder {
                            color: #949494;
                        }
                        
                        &:focus {
                            box-shadow: 0 0 0 2px #5295F1;
                        }
                    }

                    small {
                        font-size: 18px;
                        line-height: 36px;
                        color: #FF5F61;
                    }

                    button {
                        cursor: pointer;
                        background-color: #5295F1;
                        border-radius: 10px;
                        color: white;
                        font-weight: 500;
                        font-size: 24px;
                        border: none;
                        width: 100%;
                        padding: 18px 46px;
                        outline: none;
                    }
                }

                .control-error {
                    margin-bottom: 8px;

                    input {
                        box-shadow: 0 0 0 2px#FF5F61;
                    }
                }
            }
        }
    }
</style>