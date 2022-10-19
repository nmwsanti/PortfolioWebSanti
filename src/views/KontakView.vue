<script>
export default {
    name: 'KontakView',
    data: () => ({
        title: 'kontak',
        data: [],
        // input
        input: {
            name: '',
            email: '',
            pesan: ''
        },
    }),
    methods: {
        async submit() {
        const data = new FormData();
        Object.keys(this.input).forEach(key => data.append(key, this.input[key]));
        // Formspree
        await fetch('https://formspree.io/f/xjvzebyg', {
            method: 'POST',
            body: data,
        });
        this.reset();
        },
        logEmits(event){
            console.log("formEmits", event);
        },
    },
    watch: {
        "input.name"(val){
            console.log("Input nama telah berubah menjadi", val);
        }
    }
};
</script>

<template>
    <main>
        <div class="kontak">
            <div class="container py-5 my-5">
                <div class="row justify-content-center">
                    <div class="col-6">
                        <div class="card">
                            <div class="card-header">
                                <h3>Kontak</h3>
                            </div>
                            <div class="card-body">
                                <form @submit.prevent="submit" @reset="reset" class="form">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Nama Lengkap* :</label>
                                        <input v-model="input.name" type="text" class="form-control" name="name" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email* :</label>
                                        <input v-model="input.email" type="email" class="form-control" name="email" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="pesan" class="form-label">Pesan* :</label>
                                        <input v-model="input.pesan" type="pesan" class="form-control" name="pesan" required>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </main>
</template>