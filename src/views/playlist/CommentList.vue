<template>
    <div>精彩评论</div>
        <div class="text-sm">
      <template v-for="comment in comments.slice(0,pageSize*page)" :key="comment.id">
        <comment-list-item :comment="comment" />
      </template>
      <div class="flex justify-center py-5" v-if="comments.length>pageSize && !noMore">
        <el-button type="text" class="text-center  w-full" @click="loadMore">加载更多</el-button>
      </div>
    </div>
</template>

<script setup lang="ts">
import type {Comment} from "@/models/comment";
import CommentListItem from "@/components/common/CommentListItem.vue";
import {computed, ref} from "vue";

const props = defineProps<{
  comments:Comment[],
}>()

const pageSize = ref(10)
const page = ref(1)

const noMore = computed(() => {
  return page.value - (props.comments.length / pageSize.value) >= 0
})

const loadMore = () => {
  page.value = page.value + 1
}

</script>

<style lang="sass">
</style>