<template>
    <div class="contacts">
        <div class="contacts-content">
            <div class="contacts-form">
                <form @submit.prevent="handleSubmit()">
                    <h3>Попробуйте 90 дней бесплатно</h3>
                    <div class="control">
                        <input v-model="form.name" type="text" placeholder="Имя">
                    </div>
                    <div class="control">
                        <input v-model="form.organizationName" type="text" placeholder="Название компании">
                    </div>
                    <div class="control">
                        <input v-model="form.phone" type="text" placeholder="+7 (___) ___ - __ - __">
                    </div>
                    <div class="control">
                        <input v-model="form.email" type="text" placeholder="Эл.почта">
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
    </div>
</template>
<script>
export default {
    name: "Contacts",

    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                organizationName: ''
            }
        }
    },

    methods: {
        handleSubmit() {
            console.log(this.form);
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
            justify-content: space-between;
            align-items: center;
            padding: 0 200px;
            padding-top: 30px;
        }

        &-form {
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
            }
        }
    }
</style>