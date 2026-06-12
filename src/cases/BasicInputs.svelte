<script lang="ts">
  import TextInput from 'src/lib/UI/GUI/TextInput.svelte';
  import CheckInput from 'src/lib/UI/GUI/CheckInput.svelte';

  let text = $state('테마 변수 테스트');
  let disabledText = $state('disabled');
  let password = $state('secret');
  let checked = $state(true);
  let unchecked = $state(false);
</script>

<div class="space-y-5">
  <div class="space-y-2">
    <label class="block text-sm font-medium text-textcolor2">TextInput / normal</label>
    <TextInput bind:value={text} placeholder="placeholder 색상 확인" fullwidth />
  </div>

  <div class="grid gap-3 md:grid-cols-2">
    <div class="space-y-2">
      <label class="block text-sm font-medium text-textcolor2">TextInput / sm</label>
      <TextInput bind:value={text} size="sm" placeholder="small" fullwidth />
    </div>
    <div class="space-y-2">
      <label class="block text-sm font-medium text-textcolor2">TextInput / lg</label>
      <TextInput bind:value={text} size="lg" placeholder="large" fullwidth />
    </div>
  </div>

  <div class="grid gap-3 md:grid-cols-2">
    <div class="space-y-2">
      <label class="block text-sm font-medium text-textcolor2">TextInput / hideText</label>
      <TextInput bind:value={password} hideText placeholder="password" fullwidth />
    </div>
    <div class="space-y-2">
      <label class="block text-sm font-medium text-textcolor2">TextInput / disabled</label>
      <TextInput bind:value={disabledText} disabled placeholder="disabled" fullwidth />
    </div>
  </div>

  <div class="space-y-3 rounded-lg border border-darkborderc bg-darkbg p-3">
    <CheckInput bind:check={checked} name="checked 상태" />
    <CheckInput bind:check={unchecked} name="unchecked 상태" />
    <CheckInput bind:check={checked} name="reverse label" reverse />
    <CheckInput bind:check={unchecked} name="gray text" grayText />
  </div>
</div>
