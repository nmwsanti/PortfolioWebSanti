<script>
// Profil
import BaseProfil from '../components/Base/ProfilComp.vue';
// Pendidikan
import BaseEdu from '../components/Base/SchoolComp.vue';
// Skill
import BaseSkill from '../components/Base/SkillComp.vue';
// Project
import BaseProject from '../components/Base/ProjectComp.vue';
// ImageStore
import ImageStore from '../stores/image';

import { mapState } from 'pinia';

export default {
  name: 'HomePage',
  components: {
    BaseProfil,
    BaseEdu,
    BaseSkill,
    BaseProject,
  },
  computed: {
    ...mapState(ImageStore, ['g$list']),
  }
}

</script>

<template>
  <main>
    <!-- Content 1 : Identitas diri -->
      <!-- Jumbotron (Profil) -->
      <BaseProfil />
      <!-- End Jumbotron -->

      <!-- Container 1 : School -->
      <BaseEdu />
      <!-- End Container 1 -->

      <!-- Container 2 : Skill -->
      <BaseSkill />
      <!-- End Container 2 -->

      <!-- Container 3 : Project-->
      <div class="container py-5">
          <h3 class="text-center mb-5">Project</h3>
          <div class="row row-cols-1 row-cols-md-3 g-4">
          <template v-for="(img, index) in g$list" :key="index">
            <RouterLink :to="{ name: 'detail', params: { id:img.slug }}">
              <BaseProject :data="img" />
            </RouterLink>   
          </template>
        </div>
        </div>
      <!-- End Container 3 -->
  </main>
</template>
