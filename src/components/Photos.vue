<template>
    <div class="container">
        <h1>Photo List</h1>
        <div v-if="photos.length" class="card-container d-flex flex-wrap">
            <div v-for="photo in limitedPhotos" :key="photo.id" class="card m-3" style="width: 18rem;">
                <img class="card-img-top" :src="photo.thumbnailUrl" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ photo.title }}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'PhotosPage',

    data() {
        return {
            photos: [],
            limit: 10
        }
    },

    created() {
        //Gọi ham fetchPotos khi component được tạo 
        this.fetchPhotos();
    },

    computed: {
        limitedPhotos() {
            return this.photos.slice(0, this.limit);
        }
    },



    methods: {
        async fetchPhotos() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                this.photos = response.data;
            }
            catch (e) {
                console.error('Error fetching data:', e)
            }
        }
    }
}
</script>

<style scoped>
</style>