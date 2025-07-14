<script setup lang="ts">
import { defineProps } from "vue";
import TabsUi from "@/components/ui/tabs/Tabs.vue";
import type { TabsAdapterProps } from "@/types/tabs";

const props = defineProps<TabsAdapterProps>();
</script>

<template>
  <TabsUi v-bind="props" />
</template>
