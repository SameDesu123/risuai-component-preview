<script lang="ts">
  let {
    label,
    variable,
  }: {
    label: string;
    variable: string;
  } = $props();
</script>

<div class="overflow-hidden rounded-lg border border-darkborderc bg-darkbg">
  <div class="h-12" style={`background: var(${variable})`}></div>
  <div class="p-2 text-xs leading-relaxed">
    <div class="font-semibold text-textcolor">{label}</div>
    <code class="text-textcolor2">{variable}</code>
  </div>
</div>
