<template>
  <Card
    :variant="variant"
    :shadow="shadow"
    :padding="padding"
    :class="adapterClasses"
  >
    <slot />
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "~/components/ui/card/Card.vue";

// Props inspiradas no Card do Buefy/Bulma
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  shadow: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: String,
    default: "md", // md, lg, sm
  },
});

const adapterClasses = computed(() => [
  "rounded-lg",
  props.shadow ? "shadow-md" : "",
  props.padding === "lg" ? "p-8" : props.padding === "sm" ? "p-2" : "p-4",
  props.variant === "primary"
    ? "bg-brand-primary text-white"
    : "bg-white text-black",
]);
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
