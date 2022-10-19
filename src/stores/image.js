import { defineStore } from "pinia";

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug:'1',
                title: 'Minecraft Education Edition',
                img: 'project-1.png',
                about: 'Project ini merupakan aplikasi sistem informasi berbasis website. Informasi yang dibuat pada aplikasi ini, yaitu mengenai aplikasi Minecraft. Project ini dibuat pada saat pelaksanaan magang selama 6 bulan. Project ini hanya menampilkan bagian Frontend saja.' 
            },
            {
                slug:'2',
                title: 'Sistem Informasi Cuti Karyawan',
                img: 'project-2.png',
                about: 'Project ini merupakan aplikasi sistem informasi berbasis website tentang aplikasi cuti karyawan. Project ini dibuat pada saat pelaksanaan magang selama 6 bulan. Project ini menampilkan bagian Frontend dan Backend.',
            },
            {
                slug:'3',
                title: 'Aplikasi Ujian Online Siswa',
                img: 'project-3.png',
                about: 'Project ini merupakan aplikasi sistem informasi berbasis website. Project ini dibuat pada saat pelaksanaan magang selama 6 bulan. Project ini hanya menampilkan bagian Frontend saja.',
            },
            {
                slug:'4',
                title: 'ASA Advertising',
                img: 'project-4.png',
                about: 'Project ini merupakan aplikasi sistem informasi berbasis website. Project ini membahas tentang informasi periklanan. ',
            },
        ]
    }),
    actions : {},
    getters: {
        g$list: ({ list })=> list,
        g$detail: ({ list }) => {
            return(slug) => list.find((image) => image.slug == slug);
        }
    },
});

export default imageStore;