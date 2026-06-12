<script lang="ts">
  import { onMount } from 'svelte';
  import LabCard from './components/LabCard.svelte';
  import ThemePicker from './components/ThemePicker.svelte';
  import { applyRisuTheme, type RisuTheme } from './lib/risuTheme';
  import { themes } from './lib/themes';
  import BasicInputs from './cases/BasicInputs.svelte';
  import Buttons from './cases/Buttons.svelte';
  import ManualCssUtilities from './cases/ManualCssUtilities.svelte';
  import PaletteScale from './cases/PaletteScale.svelte';
  import StageColors from './cases/StageColors.svelte';
  import ThemeSwatches from './cases/ThemeSwatches.svelte';

  let selectedTheme = $state<RisuTheme>(themes[0]);
  let compact = $state(false);

  function selectTheme(theme: RisuTheme) {
    selectedTheme = theme;
    applyRisuTheme(theme);
  }

  onMount(() => {
    applyRisuTheme(selectedTheme);
  });
</script>

<svelte:head>
  <title>Risu Component Lab</title>
</svelte:head>

<main class="min-h-screen bg-bgcolor text-textcolor transition-colors duration-200">
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
    <header class="rounded-2xl border border-darkborderc bg-surface p-5 shadow-sm">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-sm font-medium text-info">Risu Component Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-textcolor">Risu UI component smoke test</h1>
          <p class="mt-2 max-w-3xl text-sm leading-6 text-textcolor2">
            별도 레포에서 Risu 소스의 실제 Svelte 컴포넌트를 import해서 색상 팔레트, hover, focus, border, text contrast를 확인하는 작은 랩입니다.
          </p>
        </div>

        <div class="flex flex-col gap-2 text-xs text-textcolor2 lg:text-right">
          <span>Risu root</span>
          <code class="max-w-xl overflow-hidden text-ellipsis rounded bg-darkbg px-2 py-1 text-left lg:text-right">{__RISU_ROOT__}</code>
          <label class="mt-2 inline-flex items-center gap-2 text-sm text-textcolor">
            <input bind:checked={compact} type="checkbox" />
            compact width test
          </label>
        </div>
      </div>
    </header>

    <ThemePicker {selectedTheme} onSelect={selectTheme} />

    <div class={compact ? 'mx-auto w-[360px] max-w-full space-y-5' : 'space-y-5'}>
      <LabCard title="Real Risu components" description="TextInput과 CheckInput을 실제 Risu 소스에서 직접 가져옵니다.">
        <BasicInputs />
      </LabCard>

      <LabCard title="NewGUI Button" description="primary/danger scale 변수가 제대로 연결됐는지 빠르게 확인합니다.">
        <Buttons />
      </LabCard>

      <LabCard title="Theme variables" description="새로 추가한 --risu-theme-* 직접 변수들을 한 번에 확인합니다.">
        <ThemeSwatches />
      </LabCard>

      <LabCard title="Generated color scales" description="primary, secondary, danger, success, neutral 스케일의 생성 결과를 확인합니다.">
        <PaletteScale />
      </LabCard>

      <LabCard title="Manual utility smoke test" description="bg-accent, text-accenttext, border-inputborder 같은 Tailwind utility 연결 확인용입니다.">
        <ManualCssUtilities />
      </LabCard>

      <LabCard title="Stage color replacement candidates" description="DefaultChatScreen / AlertComp의 하드코딩 stage 색상을 변수로 바꿨을 때의 후보입니다.">
        <StageColors />
      </LabCard>
    </div>
  </div>
</main>
