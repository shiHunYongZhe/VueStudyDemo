export const dataMixin = {
    data() {
        return {
            title: ""
        };
    },
    components: {
        Nopage: () => import("../components/NoPage")
    },
    computed: {},
    methods: {
        onBack() {
            this.$router.back();
        }
    }
};
