<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title,
    description = '',
    children,
  }: {
    title: string;
    description?: string;
    children?: Snippet;
  } = $props();
</script>

<section class="rounded-xl border border-darkborderc bg-surface p-4 shadow-sm">
  <div class="mb-4">
    <h2 class="text-base font-semibold text-textcolor">{title}</h2>
    {#if description}
      <p class="mt-1 text-sm text-textcolor2">{description}</p>
    {/if}
  </div>
  <div class="space-y-4">
    {@render children?.()}
  </div>
</section>
