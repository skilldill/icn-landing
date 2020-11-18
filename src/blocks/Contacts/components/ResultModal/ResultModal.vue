<template>
    <div class="backdrop">
        <div class="modal">
            <div :class="{'modal-content': true, 'modal-content-error': status === 'error', 'modal-content-success': status === 'success'}">
                <div class="modal-block modal-block-success">
                    <img :src="require('../../../../assets/success.svg')" alt="успешно отправлено">
                    <h1>Спасибо за заявку!</h1>
                    <p>
                        Мы перезвоним в рабочее время с 10:00 до 18:00
                    </p>
                    <a @click.prevent="goToMain()" class="button" href="">Готово</a>
                </div>
                <div class="modal-block modal-block-loading">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <div class="modal-block modal-block-error">
                    <h1>Поизошла ошибка при отправке</h1>
                    <button @click="$emit('on-close', $event)" class="button">Закрыть</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ResultModal",
    props: {
        status: String
    },

    methods: {
        goToMain() {
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss" scoped>
    .backdrop {
        position: fixed;
        z-index: 6000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);

        display: flex;
        justify-content: center;
        align-items: center;

        .modal {
            width: 584px;
            height: 533px;
            background-color: white;
            border-radius: 20px;
            overflow: hidden;

            &-content {
                display: flex;
                transition: all .4s;
                
                transform: translateX(-584px)
            }

            &-content-success {
                transform: translateX(0px)
            }

            &-content-error {
                transform: translateX(-1168px)
            }

            &-block {
                min-width: 584px;
                box-sizing: border-box;
                height: 533px;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 56px;

                h1 {
                    font-weight: 500;
                    font-size: 48px;
                    line-height: 64px;
                    text-align: center;
                    color: #222222;
                    margin-bottom: 16px;
                }

                p {
                    font-size: 24px;
                    line-height: 36px;
                    text-align: center;
                    color: #222222;
                    padding: 0 10px;
                    margin: 0;
                }

                .button {
                    margin-top: 29px;
                    background: #5295F1;
                    border-radius: 10px;
                    color: white;
                    text-decoration: none;
                    display: inline-block;
                    width: 100%;
                    text-align: center;
                    padding: 18px 0;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 36px;
                    border: none;
                    outline: none;
                }
            }

            &-block-success {
                
            }

            &-block-loading {
                padding-top: 170px;
            }

            &-block-error {
                
            }
        }
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 144px;
        height: 144px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 128px;
        height: 128px;
        margin: 8px;
        border: 10px solid #5295F1;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #5295F1 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>