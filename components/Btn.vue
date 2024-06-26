<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { RouteLocationRaw } from '#vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw | string
    href?: string
    outlined?: boolean
    size?: Size
    color?: Style
    rounded?: boolean
    loading?: boolean
  }>(),
  {
    color: 'primary',
    size: 'md',
    outlined: false,
    loading: false,
    rounded: false,
  },
)

const NuxtLink = resolveComponent('NuxtLink')

const styles = {
  primary: {
    inside: 'text-black',
    insideOutlined: 'text-amber',
    outside: 'bg-amber hover:bg-amber/80',
    outsideOutlined: 'bg-none border border-amber',
  },
}

const sizes = {
  md: {
    inside: 'text-md',
    outside: 'px-3 py-2 rounded-lg',
  },
  sm: {
    inside: 'text-sm',
    outside: 'px-2 py-1 rounded-md',
  },
  lg: {
    inside: 'text-sm md:text-lg',
    outside: 'px-8 py-4 rounded-md',
  },
}

type Style = keyof typeof styles
type Size = keyof typeof sizes

const outside = computed(() =>
  twMerge(
    'cursor-inherit',
    sizes[props.size].outside,
    styles[props.color][props.outlined ? 'outsideOutlined' : 'outside'],
  ),
)

const inside = computed(() =>
  twMerge(
    'text-center inline-block',
    sizes[props.size].inside,
    styles[props.color][props.outlined ? 'insideOutlined' : 'inside'],
  ),
)
</script>

<template>
  <component
    :is="to || href ? NuxtLink : 'button'"
    class="inline-block select-none"
    :class="outside"
    :to
    :href
  >
    <div class="select-none" :class="inside">
      <Icon
        v-if="loading"
        class="mr-3"
        size="20"
        name="line-md:loading-twotone-loop"
      />
      <slot v-else />
    </div>
  </component>
</template>
