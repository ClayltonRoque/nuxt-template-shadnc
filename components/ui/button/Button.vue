<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { cn } from "../../../lib/utils";
import { type ButtonVariants, buttonVariants } from ".";

import type { AdapterButtonProps } from "~/types/button";

interface Props extends PrimitiveProps, AdapterButtonProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        buttonVariants({
          variant,
          size,
          outlined,
          expanded,
          disabled,
          rounded,
        }),
        props.class
      )
    "
    :disabled="disabled"
    :type="nativeType || 'button'"
    :aria-label="label"
    v-bind="{ ...$props }"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </Primitive>
</template>
