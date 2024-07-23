<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
		  token:'12345'
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
	<button @click="reqsss()">请求参数</button>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores'
import "@/utils/http.ts"
import {http} from "@/utils/http"
const memberStore = useMemberStore()
const reqsss=async ()=>{
	console.log(1111)
	 let res=await http<number[]>({
		method:"GET",
		url:'/home/banner'
	})
	console.log(res.result)
}

</script>

<style lang="scss">
//
</style>
