<template>
    <div class="benefit">
        <h1 class="benefit-title">В чём польза</h1>
        <div :class="{'benefit-row': true, 'benefit-row-show': showFirstRow}">
            <div class="benefit-block">
                <img :src="require('../../assets/benefit/connection.svg')" alt="connection">
                <h1>Социальные связи создаются без вашего участия</h1>
                <p>
                    Сотрудники будут знакомиться с коллегами и находить друзей с помощью платформы ICNetworking. Не нужно тратить время HR-отдела
                </p>
            </div>
            <div class="benefit-block">
                <img :src="require('../../assets/benefit/work.svg')" alt="work">
                <h1>Новые сотрудники быстрее адаптируются</h1>
                <p>
                    Система рекомендаций поможет новичкам найти коллег со схожими интересами. 
                    С новыми знакомыми сотрудник быстрее адаптируется
                </p>
            </div>
        </div>
        <div :class="{'benefit-row': true, 'benefit-row-show': showSecondRow}">
            <div class="benefit-block">
                <img :src="require('../../assets/benefit/statistics.svg')" alt="statistics">
                <h1>Снижается текучка кадров</h1>
                <p>
                    Специалисты, завязавшие дружбу с коллегами, реже думают о смене работы. Если решат поменять команду, совершат горизонтальный переход 
                </p>
            </div>
            <div class="benefit-block">
                <img :src="require('../../assets/benefit/dance.svg')" alt="dance">
                <h1>Улучшается микроклимат  в компании</h1>
                <p>
                    Благодаря неформальным связям растёт эффективность подразделений и снижается количество конфликтов между сотрудниками и командами
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Benefit",
    
    data() {
        return {
            showFirstRow: false,
            showSecondRow: false
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.showFirstRow = window.scrollY >= 3350;
            this.showSecondRow = window.scrollY >= 4050;
        })
    }
}
</script>
<style lang="scss" scoped>
    .benefit {
        padding: 140px 100px;
        max-width: 1600px;
        margin: auto;

        &-title {
            font-weight: bold;
            font-size: 64px;
            line-height: 74px;
            color: #5295F1;
            margin-bottom: 80px;
        }

        &-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 64px;
        }

        &-row-show {
            .benefit-block {
                img {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }

        &-block {
            background: #F8F8F8;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            max-width: 47%;
            padding-top: 60px;
            padding-left: 64px;
            padding-right: 64px;
            box-sizing: border-box;
            height: 840px;
            hyphens: manual;

            img {
                opacity: 0;
                transform: scale(.9);
                transition: all .5s;
            }

            h1 {
                hyphens: auto;
                font-weight: 500;
                font-size: 48px;
                line-height: 64px;
                color: #222222;
                margin-bottom: 40px;
            }

            p {
                font-size: 24px;
                line-height: 36px;
                color: #222222;
                margin: 0;
            }
        }
    }
</style>