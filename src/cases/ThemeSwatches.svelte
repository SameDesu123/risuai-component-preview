<script lang="ts">
  import Swatch from '../components/Swatch.svelte';

  const directVars = [
    ['bgcolor', '--risu-theme-bgcolor'],
    ['surface', '--risu-theme-surface'],
    ['surface2', '--risu-theme-surface2'],
    ['textcolor', '--risu-theme-textcolor'],
    ['textcolor2', '--risu-theme-textcolor2'],
    ['accent', '--risu-theme-accent'],
    ['accenthover', '--risu-theme-accenthover'],
    ['accenttext', '--risu-theme-accenttext'],
    ['inputbg', '--risu-theme-inputbg'],
    ['inputborder', '--risu-theme-inputborder'],
    ['inputfocus', '--risu-theme-inputfocus'],
    ['placeholder', '--risu-theme-placeholder'],
    ['danger', '--risu-theme-danger'],
    ['dangerhover', '--risu-theme-dangerhover'],
    ['success', '--risu-theme-success'],
    ['warning', '--risu-theme-warning'],
    ['info', '--risu-theme-info'],
  ];
</script>

<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
  {#each directVars as [label, variable]}
    <Swatch {label} {variable} />
  {/each}
</div>
