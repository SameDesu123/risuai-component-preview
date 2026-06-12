<script lang="ts">
  import { getThemeScaleNames } from '../lib/risuTheme';

  const scales = ['primary', 'secondary', 'danger', 'success', 'neutral'];
  const steps = getThemeScaleNames();
</script>

<div class="space-y-4">
  {#each scales as scale}
    <div>
      <h3 class="mb-2 text-sm font-semibold text-textcolor2">{scale}</h3>
      <div class="grid grid-cols-5 gap-2 md:grid-cols-10">
        {#each steps as step}
          <div class="overflow-hidden rounded-lg border border-darkborderc bg-darkbg">
            <div class="h-10" style={`background: var(--risu-theme-${scale}-${step})`}></div>
            <div class="px-2 py-1 text-xs text-textcolor2">{step}</div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
