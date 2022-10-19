<script>
import BaseImage from './ImageComp.vue';

export default {
    name: 'ProjectComp',
    props: {
        data: Object,
    },
    components: {
      BaseImage,
    }
}
</script>

<template>
    <section>      
        <!-- Project 1 -->
        <div class="col">
              <div class="card h-100">
                <BaseImage :src="data.img" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title text-dark text-reset text-center text-decoration-none">{{ data.title}}</h5>
                </div>
              </div>
            </div>
    </section>
</template>