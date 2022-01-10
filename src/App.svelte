<script lang="ts">
  import { onMount } from 'svelte'
  import Main from '@/pages/Main.svelte'
  import { isSale } from '@/contract'
import { saleInfo } from './stores';

  onMount(() => {
    isSale().then((data) => {
      $saleInfo = data
    })
  })
</script>

<div class="wrap">
  <Main />
</div>

<style lang="scss">
  .wrap {
    max-width: 1280px;
    margin: 0px auto;
  }

  @media screen and (max-width: 768px) {
    .wrap {
      margin: 0px 0px;
    }
  }
</style>
