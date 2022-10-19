<script>
import ImageStore from '../stores/image';
import BaseImage from '../components/Base/ImageComp.vue';

import { mapState } from 'pinia';

export default {
    name: 'DetailView',
    components: {
        BaseImage,
    },
    computed: {
        ...mapState(ImageStore, ['g$detail']),
        detail(){
            return this.g$detail(this.$route.params.id);
        }
    }
}
</script>

<template>
    <main>
        <div class="container p-5 mt-3">
            <h3 class="text-center fw-bold pb-5">Detail Project</h3>
            <!-- Konten -->
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="card">
                        <div class="card-body mb-5">
                            <h3 class="text-center fw-semibold"> {{ detail.title }}</h3>
                            <BaseImage :src="detail.img" />
                            <h5 class="mt-3">Tentang Project</h5>
                            <p>{{ detail.about }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>