<template>
  <div class="playlist">
    <div class="p-5" v-if="playlist">
      <Info :playlist="playlist" :play-all="()=>playAll()"/>
      <el-tabs class="mt-3" v-model="tab">
        <el-tab-pane lazy :label="`歌曲 ${songs.length}`" name="tracks">
          <SongList :songs="songs"/>
        </el-tab-pane>
        <el-tab-pane lazy label="评论" name="comments">
          <CommentList :comments="comments" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {usePlayListDetail, usePlayListTrackAll, usePlayListReviewAll} from "@/utils/api";
import Info from "@/views/playlist/Info.vue";
import SongList from "@/views/playlist/SongList.vue";
import type {PlayListDetail} from "@/models/playlist";
import type {Song} from "@/models/song";
import type {Comment} from "@/models/comment";
import {usePlayerStore} from "@/stores/player";
import CommentList from "@/views/playlist/CommentList.vue";

const tab = ref('tracks')

const route = useRoute();
const playlist = ref<PlayListDetail>();
const songs = ref<Song[]>([]);
const comments = ref<Comment[]>([]);

const {pushPlayList, play} = usePlayerStore()

const playAll = () => {
  pushPlayList(true, ...songs.value)

  play(songs.value.first().id)
}

const getData = () => {

  const id: number = Number(route.query.id);

  usePlayListDetail(id).then(res => {
    playlist.value = res
  })
  usePlayListTrackAll(id).then(res => {
    songs.value = res
  })
  usePlayListReviewAll(id).then(res => {
    comments.value = res 
    console.log(comments.value)
  })
}
onMounted(getData)

</script>

<style lang="scss">
.playlist {
  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__header {
    @apply m-0;
  }
}
</style>
