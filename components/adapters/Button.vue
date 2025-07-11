<script setup lang="ts">
import { computed } from "vue";

import Button from "~/components/ui/button/Button.vue";

import type { AdapterButtonProps } from "~/types/button";

const props = defineProps<AdapterButtonProps>();

// Mapeia props do Buefy para props do shadcn
const variant = computed(() => {
  if (typeof props.type === "string") {
    const map: Record<string, string> = {
      primary: "primary",
      secondary: "secondary",
      outline: "outline",
      ghost: "ghost",
      link: "link",
      disabled: "disabled",
      default: "default",
    };
    return map[props.type] || "default";
  }
  return "default";
});
const size = computed(() => {
  if (props.size === "is-small") return "sm";
  if (props.size === "is-medium") return "default";
  if (props.size === "is-large") return "lg";
  return "default";
});
</script>

<template>
  <component
    :is="Button"
    :variant="variant"
    :size="size"
    :class="$attrs.class"
    v-bind="$attrs"
  >
    <template #icon-left>
      <slot name="icon-left" />
    </template>
    <slot />
    <template #icon-right>
      <slot name="icon-right" />
    </template>
  </component>
</template>
