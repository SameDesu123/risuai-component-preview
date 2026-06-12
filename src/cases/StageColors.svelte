<script lang="ts">
  const stageItems = [
    ['Stage 1 / info-primary', 'border-t-primary-400 border-l-primary-400 text-info'],
    ['Stage 2 / danger', 'border-t-danger border-l-danger text-danger'],
    ['Stage 3 / success', 'border-t-success border-l-success text-success'],
    ['Stage 4 / secondary', 'border-t-secondary-500 border-l-secondary-500 text-secondary-500'],
    ['Autoload / success', 'border-t-success-500 border-l-success-500 text-success-500'],
  ];
</script>

<div class="space-y-4">
  <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
    {#each stageItems as [label, classes]}
      <div class={`rounded-xl border-4 border-darkborderc bg-darkbg p-4 ${classes}`}>
        <div class="text-sm font-semibold">{label}</div>
        <div class="mt-2 text-xs text-textcolor2">
          DefaultChatScreen / AlertComp stage 색상 대체 후보입니다.
        </div>
      </div>
    {/each}
  </div>

  <div class="rounded-lg border border-darkborderc bg-surface2 p-3 text-sm text-textcolor">
    고대비 테마로 바꿨을 때 이 박스 색이 같이 움직이면 변수 연결이 된 것이고, 기존 <code>#60a5fa</code> 같은 색이 그대로 보이면 하드코딩이 남은 것입니다.
  </div>
</div>
