<script lang="ts">
  import Button from 'src/lib/UI/NewGUI/Button.svelte';
</script>

<div class="space-y-5">
  <div class="space-y-2">
    <h3 class="text-sm font-medium text-textcolor2">NewGUI Button / primary</h3>
    <div class="flex flex-wrap items-center gap-2">
      <Button color="primary" size="xs">Primary xs</Button>
      <Button color="primary" size="sm">Primary sm</Button>
      <Button color="primary" size="md">Primary md</Button>
      <Button color="primary" size="lg">Primary lg</Button>
      <Button color="primary" size="xl">Primary xl</Button>
    </div>
  </div>

  <div class="space-y-2">
    <h3 class="text-sm font-medium text-textcolor2">NewGUI Button / danger</h3>
    <div class="flex flex-wrap items-center gap-2">
      <Button color="danger" size="xs">Danger xs</Button>
      <Button color="danger" size="sm">Danger sm</Button>
      <Button color="danger" size="md">Danger md</Button>
      <Button color="danger" size="lg">Danger lg</Button>
      <Button color="danger" size="xl">Danger xl</Button>
    </div>
  </div>

  <div class="rounded-lg border border-darkborderc bg-darkbg p-3 text-sm text-textcolor2">
    이 버튼은 <code>primary-*</code>, <code>danger-*</code>, <code>neutral-*</code> 스케일이 제대로 연결됐는지 보기 좋습니다.
  </div>
</div>
