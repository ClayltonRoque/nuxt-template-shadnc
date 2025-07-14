<script setup lang="ts">
import { defineProps } from "vue";
import type { TabsAdapterProps } from "@/types/tabs";

const props = defineProps<TabsAdapterProps>();
</script>

<template>
  <div :class="['tabs-container', { vertical: props.vertical }]">
    <div class="tabs-list">
      <button
        :class="['tab-btn', { active: props.activeTab === 'home' }]"
        @click="$emit('update:activeTab', 'home')"
      >
        Home
      </button>
      <button
        :class="['tab-btn', { active: props.activeTab === 'pedidos' }]"
        @click="$emit('update:activeTab', 'pedidos')"
      >
        Pedidos
      </button>
    </div>
    <div class="tabs-content">
      <slot :activeTab="props.activeTab" />
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
}
.tabs-container.vertical {
  flex-direction: row;
}
.tabs-list {
  display: flex;
  gap: 8px;
}
.tabs-container.vertical .tabs-list {
  flex-direction: column;
}
.tab-btn {
  padding: 8px 16px;
  border: none;
  background: #f3f3f3;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
}
.tab-btn.active {
  background: #6366f1;
  color: #fff;
}
.tabs-content {
  margin-top: 16px;
}
.tabs-container.vertical .tabs-content {
  margin-top: 0;
  margin-left: 16px;
}
</style>
