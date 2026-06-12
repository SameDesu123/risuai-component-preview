<script lang="ts">
  import { themes } from '../lib/themes';
  import type { RisuTheme } from '../lib/risuTheme';

  let {
    selectedTheme,
    onSelect,
  }: {
    selectedTheme: RisuTheme;
    onSelect: (theme: RisuTheme) => void;
  } = $props();
</script>

<div class="rounded-xl border border-darkborderc bg-surface p-4">
  <div class="mb-3 flex flex-col gap-1">
    <h2 class="font-semibold text-textcolor">Theme switcher</h2>
    <p class="text-sm text-textcolor2">
      테마를 바꾸면 Risu의 <code class="rounded bg-darkbg px-1">--risu-theme-*</code> 변수가 즉시 바뀝니다.
    </p>
  </div>

  <div class="flex flex-wrap gap-2">
    {#each themes as theme}
      <button
        type="button"
        class="rounded-lg border px-3 py-2 text-sm transition"
        class:border-accent={theme.name === selectedTheme.name}
        class:border-darkborderc={theme.name !== selectedTheme.name}
        class:bg-accent={theme.name === selectedTheme.name}
        class:text-accenttext={theme.name === selectedTheme.name}
        class:bg-darkbutton={theme.name !== selectedTheme.name}
        class:text-textcolor={theme.name !== selectedTheme.name}
        onclick={() => onSelect(theme)}
      >
        {theme.name}
      </button>
    {/each}
  </div>

  <p class="mt-3 text-sm text-textcolor2">현재: {selectedTheme.description}</p>
</div>
