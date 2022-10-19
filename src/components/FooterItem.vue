<script setup>

</script>

<template>
    <!-- Footer -->
    <main>
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <RouterLink to="/">Beranda</RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <RouterLink to="/kontak">Kontak</RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <RouterLink to="/detail">Detail</RouterLink>
                        </a>
                    </li>
                </ul>
                <p class="text-center text-muted">&copy; {{ new Date().getFullYear() }} by Nimade Santi</p>
            </footer>
    </div>
    </main>
</template>