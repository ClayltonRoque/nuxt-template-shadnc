import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  // Ordem: text, flex, layout, border, bg, shadow, hover, disabled
  "text-sm font-bold inline-flex items-center justify-center gap-2 px-7 py-2 whitespace-nowrap rounded-3xl cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-black border border-neutral-grey-500/50 shadow-xs hover:border-neutral-grey-800",
        primary:
          "text-white bg-brand-primary shadow-xs hover:bg-brand-primary-darkest",
        secondary:
          "text-white bg-brand-secondary shadow-xs hover:bg-brand-secondary-darkest",
        outline:
          "text-brand-primary border border-brand-primary-500/50 shadow-xs bg-transparent hover:bg-brand-primary hover:text-white",
        ghost: "text-brand-primary hover:bg-neutral-grey-200 px-2",
        link: "text-brand-primary underline-offset-4 hover:underline",
        disabled:
          "text-neutral-grey-400 bg-neutral-grey-200 cursor-not-allowed",
      },
      size: {
        default: "h-10 py-2",
        sm: "h-8 py-2 text-xs",
        lg: "h-12 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
