<template>
    <section class="account">
        <back-user-arrow />
        <h1 class="text-center">Account data</h1>
        <account-form />
    </section>
</template>

<script>
import { mapState } from 'vuex';
import accountForm from '@/components/user/forms/account-form'
import backUserArrow from '@/components/user/back-user-arrow'
export default {
    components: {
        accountForm,
        backUserArrow
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState('user', {
            user: 'user'
        }),
        username() {
            return `${this.user.firstName} ${this.user.lastName}`
        }
    }

}
</script>

<style lang="scss" scoped>
.account {


    &::v-deep(.box) {
        margin: 0 auto;
        width: 100%;
    }
}
</style>