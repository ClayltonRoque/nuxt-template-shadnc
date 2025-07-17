<script setup lang="ts">
import { defineProps } from "vue";
import Tabs from "@/components/ui/tabs/Tabs.vue";
import type { TabsAdapterProps } from "@/types/tabs";

const props = defineProps<TabsAdapterProps>();
</script>

<template>
  <Tabs v-bind="props"></Tabs>
</template>
//
