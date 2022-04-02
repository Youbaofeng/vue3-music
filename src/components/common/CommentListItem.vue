<template>
    <div class="flex flex-row">
        <div class="w-1/12">
            <img :src="comment.user.avatarUrl" class="" />
        </div>
        <div>
            <div>
                <span>{{ comment.user.nickname }}</span>
                :{{ comment.content }}
            </div>
            <div>{{ comment.timeStr }}</div>
        </div>
    </div>
    <div class="flex flex-row">
        <IconPark :icon="DownTwo" size="18" class />
        <IconPark :icon="DownTwo" size="18" class />
        <IconPark :icon="DownTwo" size="18" class />
    </div>
</template>

<script setup lang="ts">
import type { Comment } from "@/models/comment";
import { computed, ref } from "vue";
import IconPark from "./IconPark.vue";
import { DownTwo } from '@icon-park/vue-next'

const props = defineProps<{
    comment: Comment,
}>()

</script>

<style lang="sass">

</style>