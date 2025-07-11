import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "button inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100",
        primary:
          "bg-brand-primary text-white border border-brand-primary hover:bg-brand-primary-darkest",
        secondary:
          "bg-brand-secondary text-white border border-brand-secondary hover:bg-brand-secondary-darkest",
        success:
          "bg-success text-white border border-success hover:bg-success-dark",
        danger:
          "bg-danger text-white border border-danger hover:bg-danger-dark",
        warning:
          "bg-warning text-white border border-warning hover:bg-warning-dark",
        info: "bg-alternative-cyan text-white border border-alternative-cyan hover:bg-alternative-cyan-dark",
        light:
          "bg-neutral-grey-200 text-gray-700 border border-neutral-grey-300 hover:bg-neutral-grey-300",
        text: "bg-transparent text-gray-700 hover:bg-gray-100",
        ghost:
          "text-brand-primary bg-transparent border-none hover:bg-brand-primary-lightest",
        link: "text-brand-primary underline hover:text-brand-primary-darkest",
      },
      size: {
        default: "text-base px-4 py-2",
        sm: "text-sm px-3 py-1",
        lg: "text-lg px-5 py-3",
      },
      outlined: {
        true: "bg-transparent border-2",
        false: "",
      },
      expanded: {
        true: "w-full",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
      light: {
        true: "bg-opacity-10",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      outlined: false,
      expanded: false,
      disabled: false,
      rounded: false,
      light: false,
    },
    compoundVariants: [
      {
        outlined: true,
        variant: "primary",
        class:
          "text-brand-primary border-brand-primary hover:bg-brand-primary-lightest",
      },
      {
        outlined: true,
        variant: "secondary",
        class:
          "text-brand-secondary border-brand-secondary hover:bg-brand-secondary-lightest",
      },
      {
        outlined: true,
        variant: "success",
        class: "text-success border-success hover:bg-success-light",
      },
      {
        outlined: true,
        variant: "danger",
        class: "text-danger border-danger hover:bg-danger-light",
      },
      {
        outlined: true,
        variant: "warning",
        class: "text-warning border-warning hover:bg-warning-light",
      },
      {
        outlined: true,
        variant: "info",
        class:
          "text-alternative-cyan border-alternative-cyan hover:bg-alternative-cyan-light",
      },
      {
        outlined: true,
        variant: "light",
        class:
          "text-gray-700 border-neutral-grey-300 hover:bg-neutral-grey-200",
      },
      {
        outlined: true,
        variant: "text",
        class: "text-gray-700 border-transparent hover:bg-gray-100",
      },
      {
        light: true,
        variant: "primary",
        class:
          "bg-brand-primary-light text-brand-primary hover:bg-brand-primary-lightest",
      },
      {
        light: true,
        variant: "secondary",
        class:
          "bg-brand-secondary-light text-brand-secondary hover:bg-brand-secondary-lightest",
      },
      {
        light: true,
        variant: "success",
        class: "bg-success-light text-success hover:bg-success-lighter",
      },
      {
        light: true,
        variant: "danger",
        class: "bg-danger-light text-danger hover:bg-danger-lighter",
      },
      {
        light: true,
        variant: "warning",
        class: "bg-warning-light text-warning hover:bg-warning-lighter",
      },
      {
        light: true,
        variant: "info",
        class:
          "bg-alternative-cyan-light text-alternative-cyan hover:bg-alternative-cyan-lighter",
      },
      {
        disabled: true,
        class: "opacity-50 cursor-not-allowed",
      },
    ],
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
