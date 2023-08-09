<template>
    <div class="albo">
        <div class="container">
            <img :src="currentComic.img">
            <div>
                <span>Title: {{ currentComic.titolo }}</span>
                <span>Date: {{ currentComic.day }}/{{ currentComic.month }}/{{ currentComic.anno }}</span>
                <span>Number: {{ currentComic.numero }}</span>
            </div>
            <div>
                <button @click="page--">&#8592;</button>
                <button @click="page++">&#8594;</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AlboView",
        data() {
            return {
                currentComic: {
                    day: String,
                    month: String,
                    anno: String,
                    numero: Number,
                    titolo: String,
                    img: String,

                },
                page: 100,
            }
        },
        methods: {
            getComic(page){
                try {
                    axios.get(`https://xkcd.com/${page.toString()}/info.0.json`)
                    .then(result => {
                        this.currentComic.day = result.data.day;
                        this.currentComic.month = result.data.month;
                        this.currentComic.anno = result.data.year;
                        this.currentComic.numero = result.data.num;
                        this.currentComic.titolo = result.data.title;
                        this.currentComic.img = result.data.img;
                        
                    });
                } catch(e) {
                    console.log(e);
                }
            }
        },
        created() {
            this.getComic(this.page);
        },
        watch: {
            page() {
                this.getComic(this.page);
            }
        }
    }
</script>

<style scoped>
    .albo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container {
        width: 50%;
        margin-top: 70px;
        background-color: rgb(235, 234, 234);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 20px;
    }

    .container div span {
        margin: 20px;
    }

    button {
        margin: 10px;
        font-size: larger;
    }

    img {
        width: 50%;
        height: 40%;
    }
</style>