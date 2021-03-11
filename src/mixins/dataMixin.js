export const dataMixin = {
    components: {
        Nopage: () => import('../components/NoPage')
    },
    methods: {
        onBack() {
            this.$router.back();
        }
    }
};
