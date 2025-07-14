<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  variant?: "primary" | "default";
  shadow?: boolean;
  padding?: "sm" | "md" | "lg";
}>();

const variantClass =
  props.variant === "primary"
    ? "bg-brand-primary text-white"
    : "bg-white text-black";

const shadowClass = props.shadow !== false ? "shadow-md" : "";
const paddingClass =
  props.padding === "lg" ? "p-8" : props.padding === "sm" ? "p-2" : "p-4";
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'flex flex-col gap-6 rounded-lg border',
        variantClass,
        shadowClass,
        paddingClass,
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
